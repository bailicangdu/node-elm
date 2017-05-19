# node-elm 接口文档
```

域名: http://cangdu.org

端口：8001
```

## 目录：

[1、获取城市列表](#1获取城市列表)<br/>
[2、获取所选城市信息](#2获取所选城市信息)<br/>
[3、搜索地址](#3搜索地址)<br/>
[4、根据经纬度详细定位](#4根据经纬度详细定位)<br/>
[5、食品分类列表](#5食品分类列表)<br/>
[6、获取商铺列表](#6获取商铺列表)<br/>
[7、搜索餐馆](#7搜索餐馆)<br/>
[8、获取所有商铺分类列表](#8获取所有商铺分类列表)<br/>
[9、获取配送方式](#9获取配送方式)<br/>
[10、商家属性活动列表](#10商家属性活动列表)<br/>
[11、餐馆详情](#11餐馆详情)<br/>
[12、上传图片](#12上传图片)<br/>
[13、添加餐馆](#13添加餐馆)<br/>
[14、添加食品种类](#14添加食品种类)<br/>
[15、添加食品](#15添加食品)<br/>
[16、获取食品列表](#16获取食品列表)<br/>
[17、获取评价信息](#17获取评价信息)<br/>
[18、获取评价分数](#18获取评价分数)<br/>
[19、获取评价分类](#19获取评价分类)<br/>
[20、加入购物车](#20加入购物车)<br/>
[21、获取备注信息](#21获取备注信息)<br/>
[22、获取收获地址列表](#22获取收获地址列表)<br/>
[23、获取验证码](#23获取验证码)<br/>
[24、获取用户信息](#24获取用户信息)<br/>
[25、登录](#25登录)<br/>
[26、退出](#26退出)<br/>
[27、修改密码](#27修改密码)<br/>




## 接口列表：

### 1、获取城市列表

#### 请求URL:  
```
http://cangdu.org:8001/v1/cities
```

#### 示例：
 [http://cangdu.org:8001/v1/cities?type=guess](http://cangdu.org:8001/v1/cities?type=guess)

#### 请求方式: 
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type      |Y       |string  |guess：定位城市，  hot：热门城市， group：所有城市 |

#### 返回示例：

```javascript
{
  id: 1,
  name: "上海",
  abbr: "SH",
  area_code: "021",
  sort: 1,
  latitude: 31.23037,
  longitude: 121.473701,
  is_map: true,
  pinyin: "shanghai"
}
```

### 2、获取所选城市信息

#### 请求URL：
```
http://cangdu.org:8001/v1/cities/:id
```

#### 示例：
[http://cangdu.org:8001/v1/cities/1](http://cangdu.org:8001/v1/cities/1)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |Y       |int   |城市id |

#### 返回示例：
```javascript
{
  id: 1,
  name: "上海",
  abbr: "SH",
  area_code: "021",
  sort: 1,
  latitude: 31.23037,
  longitude: 121.473701,
  is_map: true,
  pinyin: "shanghai"
}
```

### 3、搜索地址

#### 请求URL：
```
http://cangdu.org:8001/v1/pois
```

#### 示例：
[http://cangdu.org:8001/v1/pois?city_id=1&keyword=迪士尼&type=search](http://cangdu.org:8001/v1/pois?city_id=1&keyword=%E8%BF%AA%E5%A3%AB%E5%B0%BC&type=search)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|city_id      |Y       |int   |城市id |
|keyword      |Y       |string   |搜索关键词 |
|type      |N       |string   |搜索类型，默认为search |

#### 返回示例：

```javascript
[
    {
        name: "上海迪士尼乐园",
        address: "上海市浦东新区申迪西路753号",
        latitude: 31.14419,
        longitude: 121.66034,
        geohash: "31.14419,121.66034"
    },
    {
        name: "迪士尼",
        address: "上海市浦东新区妙境路1118号家乐福川沙店1层",
        latitude: 31.18183,
        longitude: 121.69279,
        geohash: "31.18183,121.69279"
    },
    ...  //共10条数据
]
```

### 4、根据经纬度详细定位

#### 请求URL：
```
http://cangdu.org:8001/v2/pois/:geohash
```

#### 示例：
[http://cangdu.org:8001/v2/pois/31.22967,121.4762](http://cangdu.org:8001/v2/pois/31.22967,121.4762)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|geohash      |Y       |string   |经纬度 |

#### 返回示例：

```javascript
{
  address: "上海市黄浦区西藏中路",
  city: "上海市",
  geohash: "31.22967,121.4762",
  latitude: "31.22967",
  longitude: "121.4762",
  name: "黄浦区上海人民广场"
}
```

### 5、食品分类列表

#### 请求URL：
```
http://cangdu.org:8001/v2/index_entry
```

#### 示例：
[http://cangdu.org:8001/v2/index_entry](http://cangdu.org:8001/v2/index_entry)

#### 请求方式：
```
GET
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|

#### 返回示例：

```javascript
[
  {
    id: 1,
    is_in_serving: true,
    description: "0元早餐0起送，每天都有新花样。",
    title: "预订早餐",
    link: "",
    image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
    icon_url: "",
    title_color: "",
    __v: 0
  },
  {
    id: 65,
    is_in_serving: true,
    description: "",
    title: "土豪推荐",
    image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
    link: "",
    icon_url: "",
    title_color: "",
    __v: 0
  },
  ... 共n条数据
]
```

### 6、获取商铺列表

#### 请求URL：
```
http://cangdu.org:8001/shopping/restaurants
```

#### 示例：
[http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762](http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|latitude      |Y       |string  |纬度|
|longitude      |Y       |string  |经度|
|offset      |N       |int |跳过多少条数据，默认0|
|limit      |N      |int |请求数据的数量，默认20|
|restaurant_category_id      |N      |int |餐馆分类id|
|order_by      |N       |int |排序方式id： 1：起送价、2：配送速度、3:评分、4: 智能排序(默认)、5:距离最近、6:销量最高|
|delivery_mode      |N      |array |配送方式id|
|support_ids      |N      |array |餐馆支持特权的id|
|restaurant_category_ids      |N      |array |餐馆分类id|


#### 返回示例：

```javascript
[
  {
    name: "肯德基",
    address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
    id: 1,
    latitude: 31.38098,
    longitude: 121.50146,
    location: [
      121.50146,
      31.38098
    ],
    phone: "1232313124324",
    category: "快餐便当/简餐",
    supports: [
      {
        description: "已加入“外卖保”计划，食品安全有保障",
        icon_color: "999999",
        icon_name: "保",
        id: 7,
        name: "外卖保",
        _id: "591bec73c2bbc84a6328a1e5"
      },
      {
        description: "准时必达，超时秒赔",
        icon_color: "57A9FF",
        icon_name: "准",
        id: 9,
        name: "准时达",
        _id: "591bec73c2bbc84a6328a1e4"
      },
      {
        description: "该商家支持开发票，请在下单时填写好发票抬头",
        icon_color: "999999",
        icon_name: "票",
        id: 4,
        name: "开发票",
        _id: "591bec73c2bbc84a6328a1e3"
      }
    ],
    status: 0,
    recent_order_num: 615,
    rating_count: 389,
    rating: 1.6,
    promotion_info: "他依然有人有人有人有人有人",
    piecewise_agent_fee: {
      tips: "配送费约¥5"
    },
    opening_hours: [
      "8:30/20:30"
    ],
    license: {
      catering_service_license_image: "",
      business_license_image: ""
    },
    is_new: true,
    is_premium: true,
    image_path: "/img/shop/15c1513a00615.jpg",
    identification: {
      registered_number: "",
      registered_address: "",
      operation_period: "",
      licenses_scope: "",
      licenses_number: "",
      licenses_date: "",
      legal_person: "",
      identificate_date: null,
      identificate_agency: "",
      company_name: ""
    },
    float_minimum_order_amount: 20,
    float_delivery_fee: 5,
    distance: "19.5公里",
    order_lead_time: "40分钟",
    description: "好吃的",
    delivery_mode: {
      color: "57A9FF",
      id: 1,
      is_solid: true,
      text: "蜂鸟专送"
    },
    activities: [
      {
        icon_name: "减",
        name: "满减优惠",
        description: "满30减5，满60减8",
        icon_color: "f07373",
        id: 1,
        _id: "591bec73c2bbc84a6328a1e7"
      },
      {
        icon_name: "特",
        name: "优惠大酬宾",
        description: "是对冯绍峰的上市房地产",
        icon_color: "EDC123",
        id: 2,
        _id: "591bec73c2bbc84a6328a1e6"
      }
    ],
  }
  ... 共20条数据
]
```


### 7、搜索餐馆

#### 请求URL：
```
http://cangdu.org:8001/v4/restaurants
```

#### 示例：
[http://cangdu.org:8001/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基](http://cangdu.org:8001/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|geohash      |Y       |string  |经纬度|
|keyword      |Y       |string  |关键词|

#### 返回示例：

```javascript
[
  {
    name: "肯德基",
    address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
    id: 1,
    latitude: 31.38098,
    longitude: 121.50146,
    location: [
      121.50146,
      31.38098
    ],
    phone: "1232313124324",
    category: "快餐便当/简餐",
    supports: [
      {
        description: "已加入“外卖保”计划，食品安全有保障",
        icon_color: "999999",
        icon_name: "保",
        id: 7,
        name: "外卖保",
        _id: "591bec73c2bbc84a6328a1e5"
      },
      {
        description: "准时必达，超时秒赔",
        icon_color: "57A9FF",
        icon_name: "准",
        id: 9,
        name: "准时达",
        _id: "591bec73c2bbc84a6328a1e4"
      },
      {
        description: "该商家支持开发票，请在下单时填写好发票抬头",
        icon_color: "999999",
        icon_name: "票",
        id: 4,
        name: "开发票",
        _id: "591bec73c2bbc84a6328a1e3"
      }
    ],
    status: 0,
    recent_order_num: 615,
    rating_count: 389,
    rating: 1.6,
    promotion_info: "他依然有人有人有人有人有人",
    piecewise_agent_fee: {
      tips: "配送费约¥5"
    },
    opening_hours: [
      "8:30/20:30"
    ],
    license: {
      catering_service_license_image: "",
      business_license_image: ""
    },
    is_new: true,
    is_premium: true,
    image_path: "/img/shop/15c1513a00615.jpg",
    identification: {
      registered_number: "",
      registered_address: "",
      operation_period: "",
      licenses_scope: "",
      licenses_number: "",
      licenses_date: "",
      legal_person: "",
      identificate_date: null,
      identificate_agency: "",
      company_name: ""
    },
    float_minimum_order_amount: 20,
    float_delivery_fee: 5,
    distance: "19.5公里",
    order_lead_time: "40分钟",
    description: "好吃的",
    delivery_mode: {
      color: "57A9FF",
      id: 1,
      is_solid: true,
      text: "蜂鸟专送"
    },
    activities: [
      {
        icon_name: "减",
        name: "满减优惠",
        description: "满30减5，满60减8",
        icon_color: "f07373",
        id: 1,
        _id: "591bec73c2bbc84a6328a1e7"
      },
      {
        icon_name: "特",
        name: "优惠大酬宾",
        description: "是对冯绍峰的上市房地产",
        icon_color: "EDC123",
        id: 2,
        _id: "591bec73c2bbc84a6328a1e6"
      }
    ],
  }
  ... 共n条数据
]
```


### 8、获取所有商铺分类列表

#### 请求URL：
```
http://cangdu.org:8001/shopping/v2/restaurant/category
```

#### 示例：
[http://cangdu.org:8001/shopping/v2/restaurant/category](http://cangdu.org:8001/shopping/v2/restaurant/category)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|latitude      |N       |string   |纬度 |
|longitude      |N       |string   |经度 |

#### 返回示例：

```javascript
[
  {
    count: 0,
    id: 248,
    image_url: "0e07558e305abfb2618ae760142222f9png",
    level: 1,
    name: "鲜花蛋糕",
    sub_categories: [
      {
        count: 0,
        id: 248,
        image_url: "3edf3f4ef8ed1d300896c5b9178685ebpng",
        level: 1,
        name: "全部鲜花蛋糕",
        _id: "591af9a4c434cf6a823d63d8"
      },
      {
        count: 0,
        id: 251,
        image_url: "cf598de7338b4bf9dd2924736c4ec9d2png",
        level: 2,
        name: "鲜花",
        _id: "591af9a4c434cf6a823d63d7"
      },
      {
        count: 0,
        id: 249,
        image_url: "ac94b005c97ef158282326cb49389893png",
        level: 2,
        name: "蛋糕",
        _id: "591af9a4c434cf6a823d63d6"
      },
      {
        count: 0,
        id: 250,
        image_url: "512232422a83e25a2c0a5588b7b6e730png",
        level: 2,
        name: "面包",
        _id: "591af9a4c434cf6a823d63d5"
      }
    ],
  }
  ...共n条数据
]
```


### 9、获取配送方式

#### 请求URL：
```
http://cangdu.org:8001/shopping/v1/restaurants/delivery_modes
```

#### 示例：
[http://cangdu.org:8001/shopping/v1/restaurants/delivery_modes](http://cangdu.org:8001/shopping/v1/restaurants/delivery_modes)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|latitude      |N       |string   |纬度 |
|longitude      |N       |string   |经度 |

#### 返回示例：

```javascript
[
  {
    color: "57A9FF",
    id: 1,
    is_solid: true,
    text: "蜂鸟专送",
    __v: 0
  }
]
```

### 10、商家属性活动列表

#### 请求URL：
```
http://cangdu.org:8001/shopping/v1/restaurants/activity_attributes
```

#### 示例：
[http://cangdu.org:8001/shopping/v1/restaurants/activity_attributes](http://cangdu.org:8001/shopping/v1/restaurants/activity_attributes)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|latitude      |N       |string   |纬度 |
|longitude      |N       |string   |经度 |

#### 返回示例：

```javascript
[
  {
    description: "可使用支付宝、微信、手机QQ进行在线支付",
    icon_color: "FF4E00",
    icon_name: "付",
    id: 3,
    name: "在线支付",
    ranking_weight: 2,
    __v: 0
  },
  ...共n条数据
]
```


### 11、餐馆详情

#### 请求URL：
```
http://cangdu.org:8001/shopping/restaurant/:shopid
```

#### 示例：
[http://cangdu.org:8001/shopping/restaurant/1](http://cangdu.org:8001/shopping/restaurant/1)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|shopid      |Y       |int   |餐馆id |


#### 返回示例：

```javascript
{
  name: "肯德基",
  address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
  id: 1,
  latitude: 31.38098,
  longitude: 121.50146,
  location: [
    121.50146,
    31.38098
  ],
  phone: "1232313124324",
  category: "快餐便当/简餐",
  supports: [
    {
      description: "已加入“外卖保”计划，食品安全有保障",
      icon_color: "999999",
      icon_name: "保",
      id: 7,
      name: "外卖保",
      _id: "591bec73c2bbc84a6328a1e5"
    },
    {
      description: "准时必达，超时秒赔",
      icon_color: "57A9FF",
      icon_name: "准",
      id: 9,
      name: "准时达",
      _id: "591bec73c2bbc84a6328a1e4"
    },
    {
      description: "该商家支持开发票，请在下单时填写好发票抬头",
      icon_color: "999999",
      icon_name: "票",
      id: 4,
      name: "开发票",
      _id: "591bec73c2bbc84a6328a1e3"
    }
  ],
  status: 0,
  recent_order_num: 615,
  rating_count: 389,
  rating: 1.6,
  promotion_info: "他依然有人有人有人有人有人",
  piecewise_agent_fee: {
    tips: "配送费约¥5"
  },
  opening_hours: [
    "8:30/20:30"
  ],
  license: {
    catering_service_license_image: "",
    business_license_image: ""
  },
  is_new: true,
  is_premium: true,
  image_path: "/img/shop/15c1513a00615.jpg",
  identification: {
    registered_number: "",
    registered_address: "",
    operation_period: "",
    licenses_scope: "",
    licenses_number: "",
    licenses_date: "",
    legal_person: "",
    identificate_date: null,
    identificate_agency: "",
    company_name: ""
  },
  float_minimum_order_amount: 20,
  float_delivery_fee: 5,
  distance: "19.5公里",
  order_lead_time: "40分钟",
  description: "好吃的",
  delivery_mode: {
    color: "57A9FF",
    id: 1,
    is_solid: true,
    text: "蜂鸟专送"
  },
  activities: [
    {
      icon_name: "减",
      name: "满减优惠",
      description: "满30减5，满60减8",
      icon_color: "f07373",
      id: 1,
      _id: "591bec73c2bbc84a6328a1e7"
    },
    {
      icon_name: "特",
      name: "优惠大酬宾",
      description: "是对冯绍峰的上市房地产",
      icon_color: "EDC123",
      id: 2,
      _id: "591bec73c2bbc84a6328a1e6"
    }
  ],
}
```


### 12、上传图片

#### 请求URL:  
```
http://cangdu.org:8001/v1/addimg/:type
```

#### 示例：

#### 请求方式: 
```
POST
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type      |Y       |string  |shop：商铺图片，  food：食品图片， avatar：头像 |

#### 返回示例：

```javascript
{
  status: 1,
  image_path: '/img/shop/15bfafa418322.jpeg'  
  // 对应的全部地址为： http://cangdu.org:8001/img/shop/15bfafa418322.jpeg
}
```


### 13、添加餐馆

#### 请求URL：
```
http://cangdu.org:8001/shopping/addshop
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|name      |Y       |string   | 餐馆名称 |
|address      |Y       |string   | 餐馆地址 |
|phone      |Y       |int   |联系电话 |
|latitude      |Y       |string   | 纬度 |
|longitude      |Y       |string   | 经度 |
|category      |Y      |string   |食品分类 |
|image_path      |Y       |string   |店铺图片地址 |
|float_delivery_fee      |Y       |int   | 运费|
|float_minimum_order_amount      |Y       | init   | 起送价 |
|description      |N      |string   | 餐馆介绍 |
|promotion_info      |N       |string   | 店铺标语 |
|is_premium      |N       |boolean   | 品牌商铺,默认false |
|delivery_mode      |N       |boolean   | 支持蜂鸟专送，默认false |
|new      |N      |boolean   |新开店铺，默认false|
|bao      |N       |boolean   |支持保险，默认false|
|zhun      |N       |boolean   |准时达，默认false|
|piao      |N       |boolean   |开发票，默认false|
|startTime      |N       |string   |开始营业时间 |
|endTime      |N       |string   |停止营业时间 |
|business_license_image      |N       |string   |营业执照图片地址 |
|catering_service_license_image      |N       |string   |餐饮服务许可证图片地址 |
|catering_service_license_image      |N       |string   |餐饮服务许可证图片地址 |
|activities      |N      |array   | 商铺活动：示例：[{icon_name:'新', name:'新用户立减', description: ''}]|

#### 返回示例：

```javascript
{
  status: 1,
  sussess: '添加餐馆成功',
}
```

### 14、添加食品种类

#### 请求URL：
```
http://cangdu.org:8001/shopping/addcategory
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|name      |Y       |string   | 种类 |
|description      |Y       |string   | 描述 |
|restaurant_id      |Y       |int   | 餐馆id |

#### 返回示例：

```javascript
{
  status: 1,
  sussess: '添加食品种类成功',
}
```

### 15、添加食品

#### 请求URL：
```
http://cangdu.org:8001/shopping/addfood
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int   | 餐馆ID |
|category_id      |Y       |int   | 分类ID |
|name      |Y       |string   | 食品名称 |
|image_path      |Y       |string   | 图片地址 |
|specs      |Y       |array   | 规格： [{specs: '默认',packing_fee: 0,price: 20,}]|
|description      |N       |string   |描述 |
|activity      |N      |string   |活动 |
|attributes      |N       |array   |特点：[{value: '新',label: '新品'}] |

#### 返回示例：

```javascript
{
  status: 1,
  sussess: '添加食品成功',
}
```

### 16、获取食品列表

#### 请求URL：
```
http://cangdu.org:8001/shopping/v2/menu
```

#### 示例：

[http://cangdu.org:8001/shopping/v2/menu?restaurant_id=3](http://cangdu.org:8001/shopping/v2/menu?restaurant_id=3)


#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int   | 餐馆ID |


#### 返回示例：

```javascript

[
  {
    name: "热销榜",
    description: "大家喜欢吃，才叫真好吃。",
    id: 1,
    restaurant_id: 3,
    foods: [
      {
        name: "好似懂非",
        image_path: "/img/food/15c1ab95e7620.jpg",
        activity: {
          image_text_color: "f1884f",
          icon_color: "f07373",
          image_text: "实行政策支持支持支持"
        },
        restaurant_id: 3,
        category_id: 1,
        item_id: 1,
        tips: "626评价 月售713份",
        _id: "591d5ea243f73a7dbdc97c6b",
        specfoods: [
          {
            name: "好似懂非",
            item_id: 1,
            sku_id: 1,
            food_id: 1,
            restaurant_id: 3,
            _id: "591d5ea243f73a7dbdc97c6c",
            specs: [ ],
            stock: 1000,
            checkout_mode: 1,
            is_essential: false,
            recent_popularity: 941,
            sold_out: false,
            price: 21,
            promotion_stock: -1,
            recent_rating: 0.6,
            packing_fee: 1,
            pinyin_name: "",
            original_price: 0
          }
        ],
        satisfy_rate: 79,
        satisfy_count: 461,
        attributes: [
          {
            icon_color: "5ec452",
            icon_name: "新"
          },
          {
            icon_color: "f07373",
            icon_name: "招牌"
          }
        ],
        is_essential: false,
        server_utc: "2017-05-18T08:37:10.963Z",
        specifications: [ ],
        rating_count: 626,
        month_sales: 713,
        description: "中小城镇创新政策中",
        attrs: [ ],
        display_times: [ ],
        pinyin_name: "",
        is_featured: 0,
        rating: 3.2
      }
    ],
    type: 1,
    icon_url: "5da3872d782f707b4c82ce4607c73d1ajpeg",
    is_selected: true,
    __v: 1
  },
]
```


### 17、获取评价信息

#### 请求URL：
```
http://cangdu.org:8001/ugc/v2/restaurants/:restaurant_id/ratings
```

#### 示例：

[http://cangdu.org:8001/ugc/v2/restaurants/3/ratings?offset=0&limit=10](http://cangdu.org:8001/ugc/v2/restaurants/3/ratings?offset=0&limit=10)


#### 请求方式：
```
GET
```

#### 参数类型：query, param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int   | 餐馆ID |
|tag_name      |N       |string   | 评价类型，默认全部 |
|offset      |N       |int   | 跳过数据条数 |
|limit      |N      |int   | 单次获取数据条数 |


#### 返回示例：

```javascript

[
  {
  rated_at: "2017-02-10",
  rating_star: 5,
  rating_text: "",
  time_spent_desc: "按时送达",
  _id: "591d5e5643f73a7dbdc97c66",
  username: "4*******b",
  tags: [ ],
  item_ratings: [
    {
      food_id: 508807792,
      food_name: "超级至尊比萨-铁盘",
      _id: "591d5e5643f73a7dbdc97c68",
      is_valid: 1,
      image_hash: "dc864033625905f0a15a2d181d53a425jpeg"
    },
    {
      food_id: 508808743,
      food_name: "韩式浓情风味鸡（标准份）",
      _id: "591d5e5643f73a7dbdc97c67",
      is_valid: 1,
      image_hash: "074e0e203f613deff4e456c31e4177d1jpeg"
    }
  ],
  highlights: [ ],
  avatar: ""
  },
]
```

### 18、获取评价分数

#### 请求URL：
```
http://cangdu.org:8001/ugc/v2/restaurants/:restaurant_id/ratings/scores
```

#### 示例：

[http://cangdu.org:8001/ugc/v2/restaurants/3/ratings/scores](http://cangdu.org:8001/ugc/v2/restaurants/3/ratings/scores)


#### 请求方式：
```
GET
```

#### 参数类型： param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int   | 餐馆ID |


#### 返回示例：

```javascript

{
compare_rating: 0.76869,
deliver_time: 40,
food_score: 4.76378,
order_rating_amount: 473,
overall_score: 4.72836,
service_score: 4.69295
}

```

### 19、获取评价分类

#### 请求URL：
```
http://cangdu.org:8001/ugc/v2/restaurants/:restaurant_id/ratings/tags
```

#### 示例：

[http://cangdu.org:8001/ugc/v2/restaurants/3/ratings/tags](http://cangdu.org:8001/ugc/v2/restaurants/3/ratings/tags)


#### 请求方式：
```
GET
```

#### 参数类型： param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int   | 餐馆ID |


#### 返回示例：

```javascript

[
  {
    name: "全部",
    _id: "591d5e5643f73a7dbdc97c52",
    unsatisfied: false,
    count: 473
  },
]

```

### 20、加入购物车

#### 请求URL：
```
http://cangdu.org:8001/v1/carts/checkout
```

#### 示例：

#### 请求方式：
```
POST
```

#### 参数类型： param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int   | 餐馆ID |
|geohash      |Y       |string   | 经纬度 |
|entities      |Y       |array   | 购物车数据[{attrs:[],extra:{},id:食品id,name:食品名称,packing_fee:打包费,price:价格,quantity:数量,sku_id:规格id,specs:规格,stock:存量,}] |


#### 返回示例：

```javascript

{
  cart: {
    id: 1,
    groups: [],
    extra: this.extra,
    deliver_amount,
    deliver_time: '',
    discount_amount: '',
    dist_info: '',
    is_address_too_far: false,
    is_deliver_by_fengniao: !!restaurant.delivery_mode,
    is_online_paid: 1,
    is_ontime_available: 0,
    must_new_user: 0,
    must_pay_online: 0,
    ontime_status: 0,
    ontime_unavailable_reason: '',
    original_total: total,
    phone: restaurant.phone,
    promise_delivery_time: 0,
    restaurant_id,
    restaurant_info: restaurant,
    restaurant_minimum_order_amount: restaurant.float_minimum_order_amount,
    restaurant_name_for_url: '',
    restaurant_status: 1,
    service_fee_explanation: 0,
    total,
    user_id: 1,
  },
  delivery_reach_time,
  invoice,
  sig: "8d65fd81cb962c1f64cd162c6ac5728f",
  current_address: {},
  payments,
  deliver_times: [],
  deliver_times_v2: [],
  merchant_coupon_info: {},
  number_of_meals: {},
  discount_rule: {},
  hongbao_info: {},
  is_support_coupon: false,
  is_support_ninja: 1,
}

```


### 21、获取备注信息

#### 请求URL：
```
http://cangdu.org:8001/v1/carts/:cart_id/remarks
```

#### 示例：

[http://cangdu.org:8001/v1/carts/3/remarks](http://cangdu.org:8001/v1/carts/3/remarks)


#### 请求方式：
```
GET
```

#### 参数类型： param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|cart_id      |Y       |int   | 购物车id |


#### 返回示例：

```javascript

{
  remarks: [
    [
    "不要辣",
    "少点辣",
    "多点辣"
    ],
  ],
}

```


### 22、获取收获地址列表

#### 请求URL：
```
http://cangdu.org:8001/v1/carts/:user_id/addresses
```

#### 示例：

[http://cangdu.org:8001/v1/carts/1/addresses](http://cangdu.org:8001/v1/carts/1/addresses)


#### 请求方式：
```
GET
```

#### 参数类型： param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |


#### 返回示例：

```javascript

[
  {
    id: 297740202,
    address: "桂平路680号33幢",
    phone: "13683220505",
    is_valid: 1,
    created_at: "2017-03-31T15:10:25+0800",
    phone_bk: "",
    name: "1231",
    st_geohash: "wtw2dfyxb62",
    address_detail: "123123",
    poi_type: 0,
    sex: 1,
    city_id: 1,
    tag: "家",
    agent_fee: 3,
    deliver_amount: 20,
    is_deliverable: true,
    phone_had_bound: true,
    is_brand_member: false
  }
]
```

### 23、获取验证码

#### 请求URL：
```
http://cangdu.org:8001/v1/captchas
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|


#### 返回示例：

```javascript

{
  status: 1,
  code: base64
}
```


### 24、获取用户信息

#### 请求URL：
```
http://cangdu.org:8001/v1/user
```

#### 示例：


#### 请求方式：
```
GET
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|


#### 返回示例：

```javascript

{
  username: "1",
  user_id: 2,
  id: 2,
  point: 0,
  mobile: "",
  is_mobile_valid: true,
  is_email_valid: false,
  is_active: 1,
  gift_amount: 3,
  email: "",
  delivery_card_expire_days: 0,
  current_invoice_id: 0,
  current_address_id: 0,
  brand_member_new: 0,
  balance: 0,
  avatar: "/img/default/default.jpg",
  __v: 0
}
```

### 25、登录

#### 请求URL：
```
http://cangdu.org:8001/v2/login
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |
|captcha_code      |Y       |string   | 验证码 |



#### 返回示例：

```javascript

{
  username: "1",
  user_id: 2,
  id: 2,
  point: 0,
  mobile: "",
  is_mobile_valid: true,
  is_email_valid: false,
  is_active: 1,
  gift_amount: 3,
  email: "",
  delivery_card_expire_days: 0,
  current_invoice_id: 0,
  current_address_id: 0,
  brand_member_new: 0,
  balance: 0,
  avatar: "/img/default/default.jpg",
  __v: 0
}
```

### 26、退出

#### 请求URL：
```
http://cangdu.org:8001/v2/signout
```

#### 示例：


#### 请求方式：
```
GET
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|


#### 返回示例：

```javascript

{
  status: 1,
  message: '退出成功'
}
```


### 27、修改密码

#### 请求URL：
```
http://cangdu.org:8001/v2/changepassword
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string   | 用户名 |
|oldpassWord      |Y       |string  | 旧密码 |
|newpassword      |Y       |string   | 新密码 |
|confirmpassword      |Y       |string   | 确认密码 |
|captcha_code      |Y       |string   | 验证码 |


#### 返回示例：

```javascript

{
  status: 1,
  success: '密码修改成功',
}
```
