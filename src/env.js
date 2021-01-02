/**
 * @author  wuyiccc
 * @date  2021/1/1 9:38
 * 岂曰无衣，与子同袍~
 */

/**
 * 为jsonp或者cors的后端服务接口提供地址
 */

let baseURL;
// process.env.NODE_ENV 可以取出package.json中命令行参数的值, --mode
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://mall-pre.springboot.cn';
        break;
    case 'test':
        baseURL = 'http://mall-pre.springboot.cn';
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn';
        break;
}

export default {
    baseURL
}