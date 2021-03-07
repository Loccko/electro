import FeatureWrapper from './'

const HomePage = () => import('./_pages/Home')
const GoodsPage = () => import('./_pages/Goods')
const ProductPage = () => import('./_pages/Product')
const CartPage = () => import('./_pages/Cart')
const WishlistPage = () => import('./_pages/Wishlist')

const showcaseRoutes = [
    {
        path: '/',
        component: FeatureWrapper,
        children: [
            {
                path: '/',
                component: HomePage,
                name: 'home'
            },
            {
                path: '/goods/:categoryid',
                component: GoodsPage,
                name: 'goods'
            },
            {
                path: '/product/:id',
                component: ProductPage,
                name: 'product'
            },
            {
                path: '/cart',
                component: CartPage,
                name: 'cart'
            },
            {
                path: '/wishlist',
                component: WishlistPage,
                name: 'wishlist'
            },
        ]
    }
];

export default showcaseRoutes;