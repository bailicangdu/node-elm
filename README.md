# Project

此项目是 [vue2-elm](https://github.com/bailicangdu/vue2-elm) 的后台系统，保持和官网一致的API接口。



# 说明

>  nodejs + mongodb 构建的后台系统

>  如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.12.4  nodejs 6.10.2

>  传送门：[前端项目地址](https://github.com/bailicangdu/vue2-elm) [后台管理系统地址](https://github.com/bailicangdu/back-manage)  [原生APP项目地址](https://github.com/bailicangdu/RN-elm)


## 技术栈

nodejs + express + mongodb + mongoose + es6/7 + mocha + bluebird + bootstrap


## 项目运行


```
git clone https://github.com/bailicangdu/node-elm  

cd node-elm

npm install

开启 mongodb

npm run dev 

访问: http://localhost:8001

```




## 目标功能

- [x] 定位功能
- [x] 城市列表
- [x] 搜索地址
- [ ] 添加商铺
- [ ] 添加食品
- [ ] 搜索美食，餐馆
- [ ] 餐馆排序
- [ ] 购物车功能
- [ ] 评价
- [ ] 食品详情
- [ ] 商家详情
- [ ] 登录、注册
- [ ] 修改密码
- [ ] 用户信息
- [ ] 下单功能 
- [ ] 订单列表
- [ ] 订单详情
- [ ] 下载App
- [ ] 添加、删除、修改收货地址
- [ ] 帐户信息
- [ ] 服务中心
- [ ] 红包
- [ ] 上传头像
- [ ] 支付(支付宝，微信)
- [ ] 后台管理系统
- [ ] 前后台同构，美化路由地址
- [ ] 部署上线





## 项目布局
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
│   ├── elm                                  // 前端页面
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
├── app.js                                   // 基础配置
├── index.js                                 // 入口
├── package.json                             // 配置文件
.

```

# API接口文档

* [接口文档](https://github.com/bailicangdu/node-elm/issues/3)


## License

[MIT](https://mit-license.org/)
