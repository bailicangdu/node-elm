
# __注：此项目纯属个人瞎搞，不要用于任何商业用途。__

# About

因为前端项目是根据饿了么官网接口写的，所以后台系统也保持了和官网一致的API接口。

整个项目分为两部分：前台项目接口、后台管理接口，共60多个。涉及登陆、注册、添加商品、商品展示、筛选排序、购物车、下单、用户中心等，构成一个完整的流程。


# 说明

>  node-elm 接口文档: [接口文档地址](https://github.com/bailicangdu/node-elm/blob/master/API.md) 

>  如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.12.4  nodejs 6.10.0  Mongodb 3.4.2

>  部署环境 阿里云 CentOS 7.2 64位

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  相关项目地址：[前端项目地址](https://github.com/bailicangdu/vue2-elm)  、 [后台管理系统地址](https://github.com/bailicangdu/back-manage)

## 技术栈

nodejs + express + mongodb + mongoose + es6/7 + vue + element-ui


## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node (6.0 及以上版本)
2、mongodb (开启状态)
3、GraphicsMagick (裁切图片)
```

```
git clone https://github.com/bailicangdu/node-elm  

cd node-elm

npm install 或 yarn(推荐)

npm run dev

访问: http://localhost:8001（如果已启动前台程序，则不需打开此地址）

```


## 效果演示

#### (可在后台管理系统添加商铺，食品等数据，并在前端地址查看效果)

### 前端网址
[前端网址戳这里](http://cangdu.org/elm/)（请用chrome手机模式预览）

###### 移动端扫描下方二维码

<img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/ewm.png" width="250" height="250"/>

### 后台管理系统网址
[后台管理网址戳这里](http://cangdu.org/manage/)




## 目标功能

- [x] IP定位 -- 完成
- [x] 城市列表 -- 完成
- [x] 搜索地址 -- 完成
- [x] 上传图片 -- 完成
- [x] 添加商铺 -- 完成
- [x] 添加食品 -- 完成
- [x] 测量距离 -- 完成
- [x] 搜索美食，餐馆 -- 完成
- [x] 根据距离、销量、评分、特色菜、配送方式等进行排序和筛选 -- 完成
- [x] 评价列表 -- 完成
- [x] 食品详情 -- 完成
- [x] 商家详情 -- 完成
- [x] 购物车功能 -- 完成
- [x] 登录、注册 -- 完成
- [x] 修改密码 -- 完成
- [x] 用户信息 -- 完成
- [x] 添加、删除、修改收货地址 -- 完成
- [x] 下单  -- 完成 ✨✨
- [x] 订单信息 -- 完成
- [x] 红包 -- 完成
- [x] 商铺管理 -- 完成
- [x] 食品管理 -- 完成
- [x] 管理员权限验证 -- 完成
- [x] 超级管理员 -- 完成
- [x] 订单管理 -- 完成
- [x] 流量统计 -- 完成
- [x] 前后台路由同构 -- 完成
- [x] 部署上线 -- 完成


## API接口文档

## [接口文档地址](https://github.com/bailicangdu/node-elm/blob/master/API.md)





## 部分截图

#### 部分前台页面

<img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/elm_msite.png" width="365" height="619"/> <img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/elm_shop.png" width="365" height="619"/>

#### 部分后台管理系统页面

<img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/manage_home.png"/>

<img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/manage_shop.png"/>




## 项目布局

```
.
├── InitData                        初始化数据
│   ├── activity.js                 餐馆活动
│   ├── category.js                 餐馆分类
│   ├── cities.js                   城市列表
│   ├── delivery.js                 配送方式
│   ├── entry.js                    食品分类
│   ├── explain.js                  解释说明
│   ├── hongbao.js                  红包
│   ├── payments.js                 支付方式
│   ├── rate.js                     评论
│   └── remark.js                   备注列表
├── config                          运行配置
│   ├── default.js                  默认配置
│   └── development.js              开发环境
├── controller                      处理中心，负责路由及数据库的具体操作
│   ├── admin
│   │   └── admin.js                管理员
│   ├── bos
│   ├── eus
│   ├── member
│   │   └── vipcart.js              会员卡
│   ├── payapi
│   ├── promotion
│   │   └── hongbao.js              红包
│   ├── shopping
│   │   ├── category.js             餐馆分类
│   │   ├── food.js                 食品
│   │   └── shop.js                 餐馆
│   ├── statis
│   │   └── statis.js               数据统计
│   ├── ugc
│   │   └── rating.js               评论
│   ├── v1
│   │   ├── address.js              收获地址
│   │   ├── captchas.js             验证码
│   │   ├── carts.js                购物车
│   │   ├── cities.js               城市列表
│   │   ├── order.js                订单
│   │   ├── remark.js               备注
│   │   └── search.js               搜索
│   ├── v2
│   │   ├── entry.js                食品分类
│   │   └── user.js                 用户信息
│   ├── v3
│   │   └── explain.js              解析说明
│   └── v4
├── logs                            日志文件
├── middlewares                     中间件
│   ├── check.js                    权限验证    
│   └── statistic.js                API数据统计
├── models                          模型(数据库)
│   ├── admin
│   │   └── admin.js                管理员模型
│   ├── bos
│   │   └── order.js                订单模型
│   ├── eus
│   ├── ids.js
│   ├── member
│   ├── payapi
│   ├── promotion
│   │   └── hongbao.js              红包模型
│   ├── shopping
│   │   ├── activity.js             餐馆活动模型
│   │   ├── category.js             餐馆分类模型
│   │   ├── delivery.js             配送方式模型
│   │   ├── food.js                 食品模型
│   │   └── shop.js                 餐馆模型
│   ├── statis
│   │   └── statis.js               数据统计模型
│   ├── ugc
│   │   └── rating.js               评论模型
│   ├── v1
│   │   ├── address.js              收获地址模型
│   │   ├── cart.js                 购物车模型
│   │   ├── cities.js               城市列表模型
│   │   ├── payments.js             付款方式模型
│   │   └── remark.js               备注模型
│   ├── v2
│   │   ├── entry.js                食品分类模型
│   │   ├── user.js                 用户模型
│   │   └── userInfo.js             用户信息模型
│   ├── v3
│   │   └── explain.js              解释说明模型
│   └── v4
├── mongodb                         连接数据库
│   └── db.js
├── prototype                       基础功能Class
│   ├── addressComponent.js         与腾讯、百度地图API相关的Class
│   └── baseComponent.js            底层类
├── public                          静态资源目录
├── routes                          路由配置
│   ├── admin.js                    管理员
│   ├── bos.js                      订单
│   ├── eus.js                      用户
│   ├── index.js                    路由配置主文件
│   ├── member.js                   会员卡
│   ├── payapi.js                   付款
│   ├── promotion.js                红包
│   ├── shopping.js                 餐馆、食品、Menu
│   ├── statis.js                   数据统计
│   ├── ugc.js                      评论
│   ├── v1.js                       城市、用户、收获地址
│   ├── v2.js                       登陆、退出
│   ├── v3.js                       解释说明
│   └── v4.js                       餐馆
├── screenshots                     项目截图
├── views   
├── .babelrc 
├── .gitignore
├── API.md                          接口文档
├── app.js                          基础配置
├── COPYING                         GPL协议
├── index.js                        入口文件
├── package.json
├── README.md                  
.

47 directories, 197 files

```

## License

[GPL](https://github.com/bailicangdu/node-elm/blob/master/COPYING)
