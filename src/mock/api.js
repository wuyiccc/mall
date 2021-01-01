/**
 * @author  wuyiccc
 * @date  2021/1/1 14:37
 * 岂曰无衣，与子同袍~
 */
import Mock from 'mockjs';

Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id": 12,
        "username": "admin",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})
