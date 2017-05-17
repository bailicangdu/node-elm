# node-elm 接口文档
```

域名: http://cangdu.org

端口：8001
```

## 目录：

[1、获取城市列表](#1获取城市列表)

[2、获取所选城市信息](#2获取所选城市信息)

[3、搜索地址](#3搜索地址)

[4、根据经纬度详细定位](#4根据经纬度详细定位)

[5、食品分类列表](#5食品分类列表)

[6、获取商铺列表](#6获取商铺列表)

[7、搜索餐馆](#7搜索餐馆)

[8、获取所有商铺分类列表](#8获取所有商铺分类列表)

[9、获取配送方式](#9获取配送方式)

[10、商家属性活动列表](#10商家属性活动列表)

[11、餐馆详情](#11餐馆详情)

[12、上传图片](#12上传图片)

[13、添加餐馆](#13添加餐馆)




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
