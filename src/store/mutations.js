/**
 * @author  wuyiccc
 * @date  2021/1/3 20:47
 * 岂曰无衣，与子同袍~
 */
/**
 * 商城Vuex——mutations
 */

export default {
    saveUserName(state, username) {
        state.username = username; // 将username存入state中
    },
    saveCartCount(state, cartCount) {
        state.cartCount = cartCount;
    }
}