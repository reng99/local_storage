[![](https://img.shields.io/github/issues/reng99/local_storage.svg)](https://github.com/reng99/local_storage/issues)
[![](https://img.shields.io/github/license/reng99/local_storage.svg)](https://github.com/reng99/local_storage/blob/master/LICENSE)
[![Build Status](https://www.travis-ci.org/reng99/local_storage.svg?branch=master)](https://www.travis-ci.org/reng99/local_storage)

## local storage

一个处理localstorage的实用包。 链接: http://reng99.cc/local_storage/

### 使用方式一

1. 安装 `npm i @pangjiaming/local_storage --save`

2. 在vue的工程项目中使用：`import { setAppointStore, getAppointStore, removeAppointStore, removeAllStore } from '@pangjiaming/local_storage'`

3. 调用方法

```javascript
// setAppointStore 存储指定的localstorage
setAppointStore({
    key: 'name',
    value: 'pangjiaming',
    options: {
        expiry: '1d', // 过期时间这里是一天，允许的值有天(d),小时(h),分钟(m),秒(s)
        isRefresh: false, // 刷新的时候是否移除此条localstorage
    }
})
```

```javascript
// @method getAppointStore 获取指定的键值对
getAppointStore({
    key: 'name'
})
```

```javascript
// removeAppointStore 移除指定的键值
removeAppointStore({
    key: 'name'
})
```

```javascript
// removeAllStore 移除所有的localstorage存储
removeAllStore()
```

### 使用方式二

1. script标签引入`/dist/localstorage.js`文件

2. 使用全局变量**r**调用暴露出来的接口：
```javascript
// setAppointStore 存储指定的localstorage
r.setAppointStore({
    key: 'name',
    value: 'pangjiaming',
    options: {
        expiry: '1d', // 过期时间这里是一天，允许的值有天(d),小时(h),分钟(m),秒(s)
        isRefresh: false, // 刷新的时候是否移除此条localstorage
    }
})
```

```javascript
// @method getAppointStore 获取指定的键值对
r.getAppointStore({
    key: 'name'
})
```

```javascript
// removeAppointStore 移除指定的键值
r.removeAppointStore({
    key: 'name'
})
```

```javascript
// removeAllStore 移除所有的localstorage存储
r.removeAllStore()
```


### LICENSE

MIT