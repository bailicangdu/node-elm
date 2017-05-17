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

[6、添加餐馆](#6添加餐馆)




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

### 6、添加餐馆

#### 请求URL：
```
http://cangdu.org:8001/shopping/addshop
```

#### 示例：


#### 请求方式：
```
POST
```

#### 类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|name      |Y       |string   | 餐馆名称 |
|address      |Y       |string   | 餐馆地址 |
|latitude      |Y       |string   | 纬度 |
|longitude      |Y       |string   | 经度 |
|description      |N      |string   | 餐馆介绍 |
|phone      |Y       |int   |联系电话 |
|promotion_info      |N       |string   | 店铺标语 |
|float_delivery_fee      |Y       |int   | 运费|
|float_minimum_order_amount      |Y       | init   | 起送价 |
|is_premium      |N       |boolean   | 品牌商铺,默认false |
|delivery_mode      |N       |boolean   | 支持蜂鸟专送，默认false |
|new      |N      |boolean   |新开店铺，默认false|
|bao      |N       |boolean   |支持保险，默认false|
|zhun      |N       |boolean   |准时达，默认false|
|piao      |N       |boolean   |开发票，默认false|
|startTime      |N       |string   |开始营业时间 |
|endTime      |N       |string   |停止营业时间 |
|image_path      |Y       |string   |店铺图片地址 |
|business_license_image      |N       |string   |营业执照图片地址 |
|catering_service_license_image      |N       |string   |餐饮服务许可证图片地址 |
|catering_service_license_image      |N       |string   |餐饮服务许可证图片地址 |
|category      |Y      |string   |食品分类 |
|activities      |N      |array   | 商铺活动：示例：[{icon_name:'新', name:'新用户立减', description: ''}]|

#### 返回示例：

```javascript
{
  status: 1,
  sussess: '添加餐馆成功',
}
```
