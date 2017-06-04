# About

一直考虑写一个功能齐全的完整Nodejs项目，但苦于没有找到合适的类型，而且后台系统无法直观的感受到，需要有一个前台项目配合，因此迟迟没有动笔。恰好前一段时间开源了一个[vue前端项目](https://github.com/bailicangdu/vue2-elm)，便以此为契机构筑了后台系统。

因为前端项目是根据饿了么官网接口写的，所以后台系统也保持了和官网一致的API接口。

整个项目分为两部分：前台项目接口、后台管理接口，共60多个。涉及登陆、注册、添加商品、商品展示、筛选排序、购物车、下单、用户中心等，构成一个完整的流程，基本完成一个外卖平台所需的基础功能。

__注：此项目纯属个人瞎搞，不用于任何商业用途。__


# 说明

>  node-elm 接口文档: [接口文档地址](https://github.com/bailicangdu/node-elm/blob/master/API.md) 

>  如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.12.4  nodejs 6.10.0  Mongodb 3.4.2

>  部署环境 阿里云 CentOS 7.2 64位

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  相关项目地址：[前端项目地址](https://github.com/bailicangdu/vue2-elm)  、 [后台管理系统地址](https://github.com/bailicangdu/back-manage)

>  接下来的开源项目[react-native 构建的原生APP](https://github.com/bailicangdu/RN-elm)也是以此后台系统作为基础，因为APP拥有更多功能以及细粒度的操作，因此后台系统会不断扩展更多接口和功能。

## 技术栈

nodejs + express + mongodb + mongoose + es6/7 + vue + element-ui


## 项目运行


```
git clone https://github.com/bailicangdu/node-elm  

cd node-elm

npm install

npm run dev (需先开启mongodb)

访问: http://localhost:8001

```


# 效果演示

#### (可在后台管理系统添加商铺，食品等数据，并在前端地址查看效果)

### 前端网址
[前端网址戳这里](http://cangdu.org:8001/)（请用chrome手机模式预览）

###### 移动端扫描下方二维码

![](https://github.com/bailicangdu/node-elm/blob/master/screenshots/ewm.png)


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



# API接口文档

## [接口文档地址](https://github.com/bailicangdu/node-elm/blob/master/API.md)





## 部分截图

#### 部分前台页面

<img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/elm_msite.png" width="365" height="619"/> <img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/elm_shop.png" width="365" height="619"/>

#### 部分后台管理系统页面

<img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/manage_home.png"/>

<img src="https://github.com/bailicangdu/node-elm/blob/master/screenshots/manage_shop.png"/>


# License

[GPL](https://github.com/bailicangdu/node-elm/blob/master/COPYING)


