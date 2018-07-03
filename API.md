# node-elm 接口文档
```

baseUrl: https://elm.cangdu.org

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
[22、获取收货地址列表](#22获取收货地址列表)<br/>
[23、获取验证码](#23获取验证码)<br/>
[24、获取用户信息](#24获取用户信息)<br/>
[25、登录](#25登录)<br/>
[26、退出](#26退出)<br/>
[27、修改密码](#27修改密码)<br/>
[28、增加收货地址](#28增加收货地址)<br/>
[29、删除收货地址](#29删除收货地址)<br/>
[30、下单](#30下单)<br/>
[31、订单列表](#31订单列表)<br/>
[32、订单详情](#32订单详情)<br/>
[33、服务中心](#33服务中心)<br/>
[34、可用红包](#34可用红包)<br/>
[35、过期红包](#35过期红包)<br/>
[36、兑换红包](#36兑换红包)<br/>
[37、管理员登录](#37管理员登录)<br/>
[38、管理员退出登录](#38管理员退出登录)<br/>
[39、管理员信息](#39管理员信息)<br/>
[40、获取某日API请求量](#40获取某日API请求量)<br/>
[41、获取所有API请求量](#41获取所有API请求量)<br/>
[42、获取某天用户注册量](#42获取某天用户注册量)<br/>
[43、获取所有用户注册量](#43获取所有用户注册量)<br/>
[44、获取某天订单数量](#44获取某天订单数量)<br/>
[45、获取所有订单数量](#45获取所有订单数量)<br/>
[46、管理员列表](#46管理员列表)<br/>
[47、获取管理员数量](#47获取管理员数量)<br/>
[48、获取店铺食品种类](#48获取店铺食品种类)<br/>
[49、获取餐馆数量](#49获取餐馆数量)<br/>
[50、更新餐馆](#50更新餐馆)<br/>
[51、删除餐馆](#51删除餐馆)<br/>
[52、获取食品列表](#52获取食品列表)<br/>
[53、获取食品数量](#53获取食品数量)<br/>
[54、获取食品种类详情](#54获取食品种类详情)<br/>
[55、更新食品](#55更新食品)<br/>
[56、删除食品](#56删除食品)<br/>
[57、获取用户列表](#57获取用户列表)<br/>
[58、获取订单列表](#58获取订单列表)<br/>
[59、获取地址信息](#59获取地址信息)<br/>
[60、获取用户分布信息](#60获取用户分布信息)<br/>
[61、获取某天管理员注册量](#61获取某天管理员注册量)<br/>





## 接口列表：

### 1、获取城市列表

#### 请求URL:  
```
https://elm.cangdu.org/v1/cities
```

#### 示例：
 [https://elm.cangdu.org/v1/cities?type=guess](https://elm.cangdu.org/v1/cities?type=guess)

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
https://elm.cangdu.org/v1/cities/:id
```

#### 示例：
[https://elm.cangdu.org/v1/cities/1](https://elm.cangdu.org/v1/cities/1)

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
https://elm.cangdu.org/v1/pois
```

#### 示例：
[https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search](https://elm.cangdu.org/v1/pois?city_id=1&keyword=%E8%BF%AA%E5%A3%AB%E5%B0%BC&type=search)

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
https://elm.cangdu.org/v2/pois/:geohash
```

#### 示例：
[https://elm.cangdu.org/v2/pois/31.22967,121.4762](https://elm.cangdu.org/v2/pois/31.22967,121.4762)

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
https://elm.cangdu.org/v2/index_entry
```

#### 示例：
[https://elm.cangdu.org/v2/index_entry](https://elm.cangdu.org/v2/index_entry)

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
https://elm.cangdu.org/shopping/restaurants
```

#### 示例：
[https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762](https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762)

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
https://elm.cangdu.org/v4/restaurants
```

#### 示例：
[https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基](https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基)

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
https://elm.cangdu.org/shopping/v2/restaurant/category
```

#### 示例：
[https://elm.cangdu.org/shopping/v2/restaurant/category](https://elm.cangdu.org/shopping/v2/restaurant/category)

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
https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes
```

#### 示例：
[https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes](https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes)

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
https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes
```

#### 示例：
[https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes](https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes)

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
https://elm.cangdu.org/shopping/restaurant/:shopid
```

#### 示例：
[https://elm.cangdu.org/shopping/restaurant/1](https://elm.cangdu.org/shopping/restaurant/1)

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
https://elm.cangdu.org/v1/addimg/:type
```

#### 示例：

#### 请求方式: 
```
POST
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|type      |Y       |string  |shop：商铺图片，food：食品图片，avatar：头像 |

#### 返回示例：

```javascript
{
  status: 1,
  image_path: '15bfafa418322.jpeg'  
  // 图片保存至七牛，图片全部地址为， http://images.cangdu.org/15bfafa418322.jpeg
}
```


### 13、添加餐馆

#### 请求URL：
```
https://elm.cangdu.org/shopping/addshop
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
https://elm.cangdu.org/shopping/addcategory
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
https://elm.cangdu.org/shopping/addfood
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
https://elm.cangdu.org/shopping/v2/menu
```

#### 示例：

[https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1](https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1)


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
https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings
```

#### 示例：

[https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10](https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10)


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
https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings/scores
```

#### 示例：

[https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores](https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores)


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
https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings/tags
```

#### 示例：

[https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags](https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags)


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
https://elm.cangdu.org/v1/carts/checkout
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
https://elm.cangdu.org/v1/carts/:cart_id/remarks
```

#### 示例：

[https://elm.cangdu.org/v1/carts/1/remarks](https://elm.cangdu.org/v1/carts/1/remarks)


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


### 22、获取收货地址列表

#### 请求URL：
```
https://elm.cangdu.org/v1/users/:user_id/addresses
```

#### 示例：

[https://elm.cangdu.org/v1/users/1/addresses](https://elm.cangdu.org/v1/users/1/addresses)


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
https://elm.cangdu.org/v1/captchas
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
https://elm.cangdu.org/v1/user
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
https://elm.cangdu.org/v2/login
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
https://elm.cangdu.org/v2/signout
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
https://elm.cangdu.org/v2/changepassword
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

### 28、增加收货地址

#### 请求URL：
```
https://elm.cangdu.org/v1/users/:user_id/addresses
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：param, query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |
|address      |Y       |string   | 地址 |
|address_detail      |Y       |string  | 地址详情 |
|geohash      |Y       |string   | 经纬度 |
|name      |Y       |string   | 收货人姓名 |
|phone      |Y       |string   | 电话号码 |
|tag      |Y       |string   | 标签 |
|sex      |Y       |int   | 性别， 1:男，2:女 |
|poi_type      |N       |int   | 类型，默认：0 |
|phone_bk      |Y       |string   | 备注电话 |
|tag_type      |Y       |int   | 标签类型，2:家，3:学校，4:公司 |


#### 返回示例：

```javascript

{
  status: 1,
  success: '添加地址成功',
}
```


### 29、删除收货地址

#### 请求URL：
```
https://elm.cangdu.org/v1/users/:user_id/addresses/:address_id
```

#### 示例：


#### 请求方式：
```
DELETE
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |
|address_id      |Y       |int   | 收货地址id |

#### 返回示例：

```javascript

{
  status: 1,
  success: '删除地址成功',
}
```


### 30、下单

#### 请求URL：
```
https://elm.cangdu.org/v1/users/:user_id/carts/:cart_id/orders
```

#### 示例：

#### 请求方式：
```
POST
```

#### 参数类型： param, query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户ID |
|cart_id      |Y       |int   | 购物车ID |
|address_id      |Y       |int   | 收货地址ID |
|restaurant_id      |Y       |int   | 餐馆ID |
|geohash      |N       |string   | 经纬度 |
|description      |N       |string   | 备注 |
|entities      |Y       |array   | 购物车数据[{attrs:[],extra:{},id:食品id,name:食品名称,packing_fee:打包费,price:价格,quantity:数量,sku_id:规格id,specs:规格,stock:存量,}] |


#### 返回示例：

```javascript

{
  status: 1,
  success: '下单成功，请及时付款',
  need_validation: false,
}

```



### 31、订单列表

#### 请求URL：
```
https://elm.cangdu.org/bos/v2/users/:user_id/orders
```

#### 示例：

[https://elm.cangdu.org/bos/v2/users/1/orders?limit=10&offset=0](https://elm.cangdu.org/bos/v2/users/1/orders?limit=10&offset=0)


#### 请求方式：
```
GET
```

#### 参数类型： param, query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |
|limit      |N       |int   | 获取数据数量 |
|offset      |N       |int   | 跳过数据条数 |


#### 返回示例：

```javascript

[
  {
    restaurant_id: 6,
    restaurant_image_url: "/img/shop/15c19349ebe12.jpg",
    restaurant_name: "sdf",
    formatted_created_at: "2017-05-21 42:34",
    order_time: 1495298554692,
    time_pass: 55315,
    total_amount: 21,
    total_quantity: 1,
    unique_id: 16,
    id: 16,
    user_id: 3,
    address_id: 6,
    __v: 0,
    top_show: 0,
    timeline_node: {
      in_processing: 0,
      actions: [ ]
    },
    status_code: 0,
    status_bar: {
      color: "f60",
      image_type: "",
      sub_title: "15分钟内支付",
      title: "支付超时"
    },
    restaurant_type: 0,
    remind_reply_count: 0,
    rated_point: 0,
    pay_remain_seconds: 0,
    operation_upload_photo: 0,
    operation_rebuy: 2,
    operation_rate: 0,
    operation_pay: 0,
    operation_confirm: 0,
    is_pindan: 0,
    is_new_pay: 1,
    is_deletable: 1,
    is_brand: 0,
    basket: {
      pindan_map: [ ],
      packing_fee: {
        price: 0,
        quantity: 1,
        name: "餐盒",
        category_id: 1
      },
      group: [
        [
          {
          name: "fsefsf",
          price: 21,
          quantity: 1,
          _id: "592071f966867336d7f8bce6",
          specs: [
          ""
          ],
          new_specs: [ ],
          attrs: [ ]
          }
        ]
      ],
      extra: [ ],
      deliver_fee: {
      quantity: 1,
      price: 4,
      name: "配送费",
      category_id: 2
      },
      abandoned_extra: [ ]
    }
  },
]
```


### 32、订单详情

#### 请求URL：
```
https://elm.cangdu.org/bos/v1/users/:user_id/orders/:order_id/snapshot
```

#### 示例：

[https://elm.cangdu.org/bos/v1/users/1/orders/1/snapshot](https://elm.cangdu.org/bos/v1/users/1/orders/1/snapshot)


#### 请求方式：
```
GET
```

#### 参数类型： param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |
|order_id      |Y       |int   | 订单id |

#### 返回示例：

```javascript

{
  isNew: false,
  _doc: {
    __v: 0,
    basket: {
      abandoned_extra: [ ],
      deliver_fee: {
        category_id: 2,
        name: "配送费",
        price: 4,
        quantity: 1
      },
      extra: [ ],
      group: [
        [
        {
          name: "fsefsf",
          price: 21,
          quantity: 2,
          _id: "5920fffc12df813c6643d76b",
          specs: [
          ""
          ],
          new_specs: [ ],
          attrs: [ ]
        },
        {
          name: "35345435",
          price: 21,
          quantity: 2,
          _id: "5920fffc12df813c6643d76a",
          specs: [
          ""
          ],
          new_specs: [ ],
          attrs: [ ]
        }
        ]
      ],
      packing_fee: {
        category_id: 1,
        name: "餐盒",
        quantity: 1,
        price: 4
      },
      pindan_map: [ ]
    },
    is_brand: 0,
    is_deletable: 1,
    is_new_pay: 1,
    is_pindan: 0,
    operation_confirm: 0,
    operation_pay: 0,
    operation_rate: 0,
    operation_rebuy: 2,
    operation_upload_photo: 0,
    pay_remain_seconds: 0,
    rated_point: 0,
    remind_reply_count: 0,
    restaurant_type: 0,
    status_bar: {
      title: "支付超时",
      sub_title: "15分钟内支付",
      image_type: "",
      color: "f60"
    },
    status_code: 0,
    timeline_node: {
      actions: [ ],
      in_processing: 0
    },
    top_show: 0,
    address_id: 6,
    user_id: 3,
    id: 17,
    unique_id: 17,
    total_quantity: 2,
    total_amount: 88,
    time_pass: 18959,
    order_time: 1495334910518,
    formatted_created_at: "2017-05-21 48:30",
    restaurant_name: "sdf",
    restaurant_image_url: "/img/shop/15c19349ebe12.jpg",
    restaurant_id: 6
  },
  addressDetail: "sdfsf",
  consignee: "ccc",
  deliver_time: "尽快送达",
  pay_method: "在线支付",
  phone: "13323454321"
}
```


### 33、服务中心

#### 请求URL：
```
https://elm.cangdu.org/v3/profile/explain
```

#### 示例：

[https://elm.cangdu.org/v3/profile/explain](https://elm.cangdu.org/v3/profile/explain)


#### 请求方式：
```
GET
```

#### 参数类型： param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|

#### 返回示例：

```javascript

{
  
}
```


### 34、可用红包

#### 请求URL：
```
https://elm.cangdu.org/promotion/v2/users/:user_id/hongbaos
```

#### 示例：

[https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0](https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0)


#### 请求方式：
```
GET
```

#### 参数类型： param, query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |
|limit      |N       |int   | 获取数据数量 |
|offset      |N       |int   | 跳过数据条数 |


#### 返回示例：

```javascript

[
  {
    id: 7160761341773,
    sn: "201705211244186655961161757573",
    user_id: 186655961,
    amount: 2,
    sum_condition: 40,
    name: "分享红包",
    phone: "13681711254",
    begin_date: "2017-05-21",
    end_date: "2017-05-23",
    status: 0,
    present_status: 1,
    share_status: 0,
    description_map: {
      phone: "限收货手机号为 13681711254",
      online_paid_only: "限在线支付使用",
      validity_delta: "剩3日",
      validity_periods: "2017-05-23到期",
      sum_condition: "满 40 元可用"
    },
    __v: 0
  },
]
```


### 35、过期红包

#### 请求URL：
```
https://elm.cangdu.org/promotion/v2/users/:user_id/expired_hongbaos
```

#### 示例：

[https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0](https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0)


#### 请求方式：
```
GET
```

#### 参数类型： param, query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |
|limit      |N       |int   | 获取数据数量 |
|offset      |N       |int   | 跳过数据条数 |


#### 返回示例：

```javascript

[
  {
    id: 7160761341773,
    sn: "201705211244186655961161757573",
    user_id: 186655961,
    amount: 2,
    sum_condition: 40,
    name: "分享红包",
    phone: "13681711254",
    begin_date: "2017-05-21",
    end_date: "2017-05-23",
    status: 0,
    present_status: 4,
    share_status: 0,
    description_map: {
      phone: "限收货手机号为 13681711254",
      online_paid_only: "限在线支付使用",
      validity_delta: "剩3日",
      validity_periods: "2017-05-23到期",
      sum_condition: "满 40 元可用"
    },
    __v: 0
  },
]
```



### 36、兑换红包

#### 请求URL：
```
https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型： param, query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id      |Y       |int   | 用户id |
|exchange_code      |Y       |int   | 兑换码 |
|captcha_code      |Y       |int   | 验证码 |


#### 返回示例：

```javascript
{
  status: 0,
  type: 'NOT_ALLOWD_API',
  message: '无效的兑换码'
}
```


### 37、管理员登录

#### 请求URL：
```
https://elm.cangdu.org/admin/login
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_name      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |



#### 返回示例：

```javascript

{
  status: 1,
  success: '登录成功'
}
```

### 38、管理员退出登录

#### 请求URL：
```
https://elm.cangdu.org/admin/singout
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
  success: '退出成功'
}
```



### 39、管理员信息

#### 请求URL：
```
https://elm.cangdu.org/admin/info
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
  data: {
    user_name: "cangdu",
    id: 1,
    create_time: "2017-05-29 12:02",
    status: 1,
    city: "上海",
    avatar: "default.jpg",
    admin: "管理员"
  }
}
```

### 40、获取某日API请求量

#### 请求URL：
```
https://elm.cangdu.org/statis/api/:date/count
```

#### 示例：
[https://elm.cangdu.org/statis/api/2017-05-29/count](https://elm.cangdu.org/statis/api/2017-05-29/count)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|date      |Y       |string  | 日期：格式 2017-05-29 |



#### 返回示例：

```javascript

{
  status: 1,
  count: 1
}
```



### 41、获取所有API请求量

#### 请求URL：
```
https://elm.cangdu.org/statis/api/count
```

#### 示例：
[https://elm.cangdu.org/statis/api/count](https://elm.cangdu.org/statis/api/count)

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
  count: 1
}
```



### 42、获取某天用户注册量

#### 请求URL：
```
https://elm.cangdu.org/statis/user/:date/count
```

#### 示例：
[https://elm.cangdu.org/statis/user/2017-05-29/count](https://elm.cangdu.org/statis/user/2017-05-29/count)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|date      |Y       |string  | 日期：格式 2017-05-29 |



#### 返回示例：

```javascript

{
  status: 1,
  count: 1
}
```



### 43、获取所有用户注册量

#### 请求URL：
```
https://elm.cangdu.org/v1/users/count
```

#### 示例：
[https://elm.cangdu.org/v1/users/count](https://elm.cangdu.org/v1/users/count)

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
  count: 1
}
```




### 44、获取某天订单数量

#### 请求URL：
```
https://elm.cangdu.org/statis/order/:date/count
```

#### 示例：
[https://elm.cangdu.org/statis/order/2017-05-29/count](https://elm.cangdu.org/statis/order/2017-05-29/count)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|date      |Y       |string  | 日期：格式 2017-05-29 |



#### 返回示例：

```javascript

{
  status: 1,
  count: 1
}
```


### 45、获取所有订单数量

#### 请求URL：
```
https://elm.cangdu.org/bos/orders/count
```

#### 示例：
[https://elm.cangdu.org/bos/orders/count](https://elm.cangdu.org/bos/orders/count)


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
  count: 1
}
```



### 46、管理员列表

#### 请求URL：
```
https://elm.cangdu.org/admin/all
```

#### 示例：
[https://elm.cangdu.org/admin/all?offset=0&limit=20](https://elm.cangdu.org/admin/all?offset=0&limit=20)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|limit      |Y       |int | 获取数据数量，默认 20 |
|offset      |Y       |int | 跳过数据条数 默认 0 |



#### 返回示例：

```javascript

{
  status: 1,
  data: [
    {
      user_name: "s",
      id: 14,
      create_time: "2017-05-29 21:23",
      status: 1,
      city: "北京",
      __v: 0,
      avatar: "default.jpg",
      admin: "管理员"
    },
  ]
}
```




### 47、获取管理员数量

#### 请求URL：
```
https://elm.cangdu.org/admin/count
```

#### 示例：
[https://elm.cangdu.org/admin/count](https://elm.cangdu.org/admin/count)


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
  count: 1
}
```



### 48、获取店铺食品种类

#### 请求URL：
```
https://elm.cangdu.org/shopping/getcategory/:restaurant_id
```

#### 示例：
[https://elm.cangdu.org/shopping/getcategory/2](https://elm.cangdu.org/shopping/getcategory/2)


#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int | 餐馆id |



#### 返回示例：

```javascript

{
  status: 1,
  category_list: [
    {
      name: "热销榜",
      description: "大家喜欢吃，才叫真好吃。",
      id: 1,
      restaurant_id: 2,
      __v: 3,
      foods: []
    }
    ...
  ]
}
```



### 49、获取餐馆数量

#### 请求URL：
```
https://elm.cangdu.org/shopping/restaurants/count
```

#### 示例：
[https://elm.cangdu.org/shopping/restaurants/count](https://elm.cangdu.org/shopping/restaurants/count)


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
  count: 1
}
```






### 50、更新餐馆

#### 请求URL：
```
https://elm.cangdu.org/shopping/updateshop
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |Y       |int   | 餐馆id |
|name      |Y       |string   | 餐馆名称 |
|address      |Y       |string   | 餐馆地址 |
|description      |N      |string   | 餐馆介绍 |
|phone      |Y       |int   |联系电话 |
|image_path      |Y       |string   |店铺图片地址 |
|category      |Y       |string   |店铺分类 |


#### 返回示例：

```javascript
{
  status: 1,
  success: '修改商铺信息成功',
}
```




### 51、删除餐馆

#### 请求URL：
```
https://elm.cangdu.org/shopping/restaurant/:restaurant_id
```

#### 示例：



#### 请求方式：
```
DELETE
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|restaurant_id      |Y       |int | 餐馆id |



#### 返回示例：

```javascript

{
  status: 1,
  success: '删除餐馆成功'
}
```




### 52、获取食品列表

#### 请求URL：
```
https://elm.cangdu.org/shopping/v2/foods
```

#### 示例：
[https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=2](https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=2)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|limit      |Y       |int | 获取数据数量，默认 20 |
|offset      |Y       |int | 跳过数据条数 默认 0 |
|restaurant_id      |Y       |int | 餐馆id |



#### 返回示例：

```javascript
[
  {
  name: "fdsf",
  image_path: "15c545e4a705.png",
  activity: {
    image_text_color: "f1884f",
    icon_color: "f07373",
    image_text: "dsf"
  },
  restaurant_id: 2,
  category_id: 1,
  item_id: 2,
  tips: "880评价 月售123份",
  specfoods: [
    {
      specs_name: "默认",
      name: "fdsf",
      item_id: 2,
      sku_id: 2,
      food_id: 2,
      restaurant_id: 2,
      _id: "592c2063153b1136968e3393",
      specs: [ ],
      stock: 1000,
      checkout_mode: 1,
      is_essential: false,
      recent_popularity: 254,
      sold_out: false,
      price: 20,
      promotion_stock: -1,
      recent_rating: 2.8,
      packing_fee: 0,
      pinyin_name: "",
      original_price: 0
    }
  ],
  satisfy_rate: 87,
  satisfy_count: 803,
  attributes: [
    {
      icon_color: "5ec452",
      icon_name: "新"
    }
  ],
  is_essential: false,
  server_utc: "2017-05-29T05:53:51.103Z",
  specifications: [ ],
  rating_count: 880,
  month_sales: 123,
  description: "dfs",
  attrs: [ ],
  display_times: [ ],
  pinyin_name: "",
  is_featured: 0,
  rating: 3.4,
  __v: 0
  },
]
```




### 53、获取食品数量

#### 请求URL：
```
https://elm.cangdu.org/shopping/v2/foods/count
```

#### 示例：
[https://elm.cangdu.org/shopping/v2/foods/count](https://elm.cangdu.org/shopping/v2/foods/count)


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
  count: 1
}
```




### 54、获取食品种类详情

#### 请求URL：
```
https://elm.cangdu.org/shopping/v2/menu/:category_id
```

#### 示例：
[https://elm.cangdu.org/shopping/v2/menu/1](https://elm.cangdu.org/shopping/v2/menu/1)


#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|category_id      |Y       |int | 食品种类id |



#### 返回示例：

```javascript

{
  name: "热销榜",
  description: "大家喜欢吃，才叫真好吃。",
  id: 1,
  restaurant_id: 2,
  type: 1,
  icon_url: "5da3872d782f707b4c82ce4607c73d1ajpeg",
  is_selected: true,
  __v: 3
}
```




### 55、更新食品

#### 请求URL：
```
https://elm.cangdu.org/shopping/v2/updatefood
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|item_id      |Y       |int   | 食品id |
|name      |Y       |string   | 食品名称 |
|description      |N      |string   | 食品介绍 |
|image_path      |Y       |string   |店铺图片地址 |
|restaurant_id      |Y       |int   | 餐馆id |
|category_id      |Y       |int   | 食品分类id |
|specfoods      |Y       |array   | 规格： [{specs: '默认',packing_fee: 0,price: 20,}]|

#### 返回示例：

```javascript
{
  status: 1,
  success: '修改食品信息成功',
}
```




### 56、删除食品

#### 请求URL：
```
https://elm.cangdu.org/shopping/v2/food/:food_id
```

#### 示例：



#### 请求方式：
```
DELETE
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|food_id      |Y       |int | 食品id |



#### 返回示例：

```javascript

{
  status: 1,
  success: '删除食品成功'
}
```



### 57、获取用户列表

#### 请求URL：
```
https://elm.cangdu.org/v1/users/list
```

#### 示例：
[https://elm.cangdu.org/v1/users/list?offset=0&limit=20](https://elm.cangdu.org/v1/users/list?offset=0&limit=20)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|limit      |Y       |int | 获取数据数量，默认 20 |
|offset      |Y       |int | 跳过数据条数 默认 0 |


#### 返回示例：

```javascript
[
  {
    username: "ddfdsf",
    user_id: 2,
    id: 2,
    city: "北京",
    registe_time: "2017-05-29 21:46",
    column_desc: {
      gift_mall_desc: "0元好物在这里",
      game_link: "https://gamecenter.faas.ele.me",
      game_is_show: 1,
      game_image_hash: "05f108ca4e0c543488799f0c7c708cb1jpeg",
      game_desc: "玩游戏领红包"
    },
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
    avatar: "default.jpg",
    __v: 0
  },
  ...
]
```



### 58、获取订单列表

#### 请求URL：
```
https://elm.cangdu.org/bos/orders
```

#### 示例：
[https://elm.cangdu.org/bos/orders?offset=0&limit=20](https://elm.cangdu.org/bos/orders?offset=0&limit=20)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|limit      |Y       |int | 获取数据数量，默认 20 |
|offset      |Y       |int | 跳过数据条数 默认 0 |


#### 返回示例：

```javascript
[
  
]
```




### 59、获取地址信息

#### 请求URL：
```
https://elm.cangdu.org/v1/addresse/:address_id
```

#### 示例：
[https://elm.cangdu.org/v1/addresse/1](https://elm.cangdu.org/v1/addresse/1)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|address_id      |Y       |int | 地址id |


#### 返回示例：

```javascript
[
  
]
```



### 60、获取用户分布信息

#### 请求URL：
```
https://elm.cangdu.org/v1/user/city/count
```

#### 示例：
[https://elm.cangdu.org/v1/user/city/count](https://elm.cangdu.org/v1/user/city/count)

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
  user_city: {
    beijing: 1,
    shanghai: 0,
    shenzhen: 1,
    hangzhou: 0,
    qita: 0
  }
}
```



### 61、获取某天管理员注册量

#### 请求URL：
```
https://elm.cangdu.org/statis/admin/:date/count
```

#### 示例：
[https://elm.cangdu.org/statis/admin/2017-05-30/count](https://elm.cangdu.org/statis/admin/2017-05-30/count)

#### 请求方式：
```
GET
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|date      |Y       |string  | 日期：格式 2017-05-29 |



#### 返回示例：

```javascript

{
  status: 1,
  count: 1
}
```
