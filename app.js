import express from 'express';
import db from './mongodb/db.js';
import config from 'config-lite';
import router from './routes/index.js';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import flash from 'connect-flash';
import winston from 'winston';
import expressWinston from 'express-winston';
import path from 'path';


const app = express();
app.use(express.static('./public'));

app.all('*', (req, res, next) => {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  	res.header("X-Powered-By",' 3.2.1')
  	if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  	else  next();
});

app.use(flash());
const MongoStore = connectMongo(session);

app.use(session({
	name: config.session.name,
  	secret: config.session.secret,
  	resave: true,
  	saveUninitialized: false,
  	cookie: config.session.cookie,
  	store: new MongoStore({
    	url: config.url
  	})
}))

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});

app.use(expressWinston.logger({
    transports: [
        new (winston.transports.Console)({
          json: true,
          colorize: true
        }),
        new winston.transports.File({
          filename: 'logs/success.log'
        })
    ]
}));

router(app);

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        }),
        new winston.transports.File({
          filename: 'logs/error.log'
        })
    ]
}));

app.use((err, req, res, next) => {
	res.send('未找到当前路由');
});


app.listen(config.port);