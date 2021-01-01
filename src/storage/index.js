/**
 * @author  wuyiccc
 * @date  2020/10/17 16:02
 * 岂曰无衣，与子同袍~
 */
const STORAGE_KEY = 'mall';

export default {
    // 存储值
    setItem(key, value, module_name) {

        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            this.setStorage(val);
        }

    },

    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }

        return this.getStorage()[key];
    },
    /**
     * 根据key获取sessionStorage，这里key默认为STORAGE_KEY
     * @returns value: JSON对象
     */
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    /**
     * 根据默认的key设置值
     * @param value: JSON对象
     */
    setStorage(value) {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    },
    /**
     * 删除key对应的value, 或者 module_name:key对应的value
     * @param key
     * @param module_name
     */

    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        this.setStorage(val);
    }
};