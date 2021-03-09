import Auth from "@/App/_shared/utils/Auth";
import User from "@/App/_shared/services/User";
import Mutations from "@/App/_shared/services/mutations";
import AuthService from "@/App/_shared/services/Auth";

const state = {
    cart: [],
    wishlist: [],
    comparisonList: [],
    user: null,
    auth: null
};

const getters = {
    cart: state => state.cart,
    wishlist: state => state.wishlist,
    comparisonList: state => state.comparisonList,
    user: state => state.user,
    auth: state => state.auth,
    token: (state) => async () => {
        return await state.auth.getToken()
    },
    cartHasProduct: (state) => (id) => {
        return state.cart.some(thing => thing.product.id === id)
    },
    wishlistHasProduct: (state) => (id) => {
        return state.wishlist.some(thing => thing.id === id)
    },
    comparisonListHasProduct: (state) => (id) => {
        for (let item of state.comparisonList) {
            for (let product of item.products) {
                if (product.id === id) {
                    return true
                }
            }
        }
        return false
    },
    total(state) {
        let total = 0.0
        state.cart.forEach(item => total += item.product.priceWithDiscount * item.amount)
        return total
    },
};

const actions = {
    async fetchCart({commit, getters}) {
        const token = await getters.token()
        const products = await User.getCart(token)
        commit("setCart", products)
    },
    async fetchWishlist({commit, getters}) {
        const token = await getters.token()
        const products = await User.getWishlist(token)
        commit("setWishlist", products)
    },
    async fetchComparisonList({commit, getters}) {
        const token = await getters.token()
        const products = await User.getComparisonList(token)
        commit("setComparisonList", products)
    },
    async fetchUser({commit}, token) {
        const user = await AuthService.getMe(token)
        commit("setUser", user)
    },
    async updateCart({dispatch, getters}, id) {
        const token = await getters.token()
        if (getters.cartHasProduct(id)) {
            await Mutations.removeItemFromCart(id, token)
        } else {
            await Mutations.addItemToCart(id, token)
        }
        await dispatch('fetchCart', token)
    },
    async updateWishList({dispatch, getters}, id) {
        const token = await getters.token()
        if (getters.wishlistHasProduct(id)) {
            await Mutations.removeItemFromWishlist(id, token)
        } else {
            await Mutations.addItemToWishlist(id, token)
        }
        await dispatch('fetchWishlist', token)
    },
    async updateComparisonList({dispatch, getters}, id) {
        const token = await getters.token()
        if (getters.comparisonListHasProduct(id)) {
            await Mutations.removeItemFromComparisonList(id, token)
        } else {
            await Mutations.addItemToComparisonList(id, token)
        }
        await dispatch('fetchComparisonList', token)
    },
    async initAuth({commit}) {
        commit('setAuth')
    }
};

const mutations = {
    setCart: (state, products) => (
        state.cart = products
    ),
    setWishlist: (state, products) => (
        state.wishlist = products
    ),
    setComparisonList: (state, products) => (
        state.comparisonList = products
    ),
    setUser: (state, user) => (
        state.user = user
    ),
    setAuth: (state) => (
        state.auth = new Auth()
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}