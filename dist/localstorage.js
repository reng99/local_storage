(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.r = {}));
}(this, function (exports) { 'use strict';

    /**
     * @method clearInvalidStore 清空无效localstorage，包括过期的和自定删除的
     */
    (function clearInvalidStore(){
        let storage = window.localStorage;
        for(let key in storage){
            let data;
            try{
                data = JSON.parse(storage[key]);
            }catch(e){
                data = storage[key];
            }
            if(typeof data === "object" && (Date.now() > data.expiry || data.Isclean)){
                window.localStorage.removeItem(key);
            }
        }
    })();

    /**
     * @method createExpiry 生成过期时间
     * @param { String } val 时间，如1s为一秒
     */
    let createExpiry = (val) => {
        if(!val) return;
        let integer = parseInt(val);
        let unit = val.replace(integer, "");
        switch(unit){
            case "d": integer = integer * 24 * 60 * 60 * 1000;
                break;
            case "h": integer = integer * 60 * 60 * 1000;
                break;
            case "m": integer = integer * 60 * 1000;
                break;
            case "s": integer = integer * 1000;
                break;
            default: console.log("您传入的参数不符合规则，请重新输入。");
                break;
        }
        return Date.now() + integer;
    };

    /**
     * @method setAppointStore 存储指定的localstorage
     * @param { String } key 键
     * @param { * } value 值
     * @param { Object } options 对象 这里包含了过期时间expiry和是否在下次进入时候自动刷新isRefresh移除此localstorage记录
     */
    const setAppointStore = ({key, value, options}) => {
        if(!key) return;
        let content = {
            value: value,
            expiry: options ? createExpiry(options.expiry) : null,
            Isclean: options ? options.isRefresh : false
        };
        window.localStorage.setItem(key, JSON.stringify(content));
    };

    /**
     * @method getAppointStore 获取指定的键值对
     * @param { String }  键
     */
    const getAppointStore = ({key}) => {
        if(!key) return;
        let obj = null;
        try {
            obj = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : null;
        }catch(e){
            window.localStorage.removeItem(key);
        }
        if(obj && obj.expiry && Date.now() > obj.expiry){
            window.localStorage.removeItem(key);
        }

        return obj;
    };

    /**
     * @method removeAppointStore 移除指定的键值
     * @param { String } key 键
     */
    const removeAppointStore = ({ key }) => {
        if(!key) return;
        window.localStorage.removeItem(key);
    };

    /**
     * @method removeAllStore 移除所有的localstorage存储
     */
    const removeAllStore = () => {
        window.localStorage.clear();
    };

    exports.setAppointStore = setAppointStore;
    exports.getAppointStore = getAppointStore;
    exports.removeAppointStore = removeAppointStore;
    exports.removeAllStore = removeAllStore;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
