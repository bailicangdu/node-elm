
# 说明

>  nodejs + mongodb 构建的外卖平台后台系统

>  如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.12.4  nodejs 6.10.2

>  传送门：[前端项目地址](https://github.com/bailicangdu/vue2-elm)

>  传送门：[原生APP项目地址](https://github.com/bailicangdu/RN-elm)


## 技术栈

nodejs + express + mongodb + mongoose + es6/7 + mocha + bluebird + ejs + bootstrap


# 项目运行


```
git clone https://github.com/bailicangdu/node-elm  

cd node-elm

npm install

开启 mongodb

npm run dev  访问: http://localhost:3000

```


# 部署

部署服务器--百度应用引擎BAE基础版

部署方式：[百度BAE部署](https://cloud.baidu.com/doc/BAE/GUIGettingStarted.html) 






# 目标功能

- [ ] 静态数据
- [ ] 定位功能
- [ ] 城市列表
- [ ] 搜索地址
- [ ] 展示所选地址附近商家列表
- [ ] 搜索美食，餐馆
- [ ] 根据距离、销量、评分、特色菜、配送方式等进行排序和筛选
- [ ] 餐馆食品列表
- [ ] 购物车功能
- [ ] 店铺评价
- [ ] 单个食品详情
- [ ] 商家详情
- [ ] 登录、注册
- [ ] 修改密码
- [ ] 个人信息
- [ ] 下单功能 
- [ ] 订单列表
- [ ] 订单详情
- [ ] 下载App
- [ ] 添加、删除、修改收货地址
- [ ] 帐户信息
- [ ] 服务中心
- [ ] 红包
- [ ] 上传头像
- [ ] 调用支付宝支付
- [ ] 调用微信支付
- [ ] 后台管理系统
- [ ] 部署上线


# 项目布局
```
.
├── config                                  // 配置文件目录
│   ├── default.js                          // 默认配置
│   └── production.js                       // 生产环节配置文件
├── controller                              // 负责路由操作的具体执行
│   ├── bos
│   ├── eus
│   ├── food.js
│   ├── member
│   ├── payapi
│   ├── promotion
│   ├── shopping
│   ├── ugc
│   ├── v1
│   ├── v2
│   ├── v3
│   └── v4
├── logs                                    // 日志文件
│   └── success.log
├── middlewares                             // 路由中间件
│   └── userStatus.js
├── models                                  // 数据模型
│   ├── bos
│   ├── eus
│   ├── food.js
│   ├── member
│   ├── payapi
│   ├── promotion
│   ├── shopping
│   ├── ugc
│   ├── v1
│   ├── v2
│   ├── v3
│   └── v4
├── mongodb                                  // 连接 mongodb
│   └── db.js
├── public                                   // 静态资源目录
│   ├── css
│   ├── elm                                  // 前端项目地址
│   ├── img
│   └── js
├── routes                                   // 路由控制中心
│   ├── bos.js
│   ├── eus.js
│   ├── home.js
│   ├── index.js
│   ├── member.js
│   ├── payapi.js
│   ├── promotion.js
│   ├── shopping.js
│   ├── ugc.js
│   ├── v1.js
│   ├── v2.js
│   ├── v3.js
│   └── v4.js
├─── test                                    // 测试
├─── views                                   // 后台管理系统页面
├── .babelrc                                 // 配置babel
├── .gitignore                               // 设置忽略文件
├── app.conf                                 // 百度BAE部署所需配置文件
├── app.js                                   // 基础配置
├── index.js                                 // 入口
├── package.json                             // 配置文件
.

```
.
├── README.md
├── app.conf
├── app.js
├── config
│   ├── default.js
│   └── production.js
├── controller
│   ├── bos
│   ├── eus
│   ├── member
│   ├── payapi
│   ├── promotion
│   ├── shopping
│   ├── ugc
│   ├── v1
│   ├── v2
│   ├── v3
│   └── v4
├── index.js
├── logs
│   └── success.log
├── middlewares
│   └── userStatus.js
├── models
│   ├── bos
│   ├── eus
│   ├── food.js
│   ├── member
│   ├── payapi
│   ├── promotion
│   ├── shopping
│   ├── ugc
│   ├── v1
│   ├── v2
│   ├── v3
│   └── v4
├── mongodb
│   └── db.js
├── npm-debug.log
├── package.json
├── public
│   ├── css
│   ├── elm
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── static
│   ├── img
│   └── js
├── routes
│   ├── bos.js
│   ├── eus.js
│   ├── home.js
│   ├── index.js
│   ├── member.js
│   ├── payapi.js
│   ├── promotion.js
│   ├── shopping.js
│   ├── ugc.js
│   ├── v1.js
│   ├── v2.js
│   ├── v3.js
│   └── v4.js
├── test
├── tree.md
└── views
    └── home.ejs

37 directories, 29 files
