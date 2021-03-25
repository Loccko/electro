import FeatureWrapper from './'

const HomePage = () => import('./_pages/Home')
const GoodsPage = () => import('./_pages/Goods')
const ProductPage = () => import('./_pages/Product')
const CartPage = () => import('./_pages/Cart')
const WishlistPage = () => import('./_pages/Wishlist')
const About = () => import('./_pages/About')
const FAQs = () => import('./_pages/FAQs')
const Contact = () => import('./_pages/Contact')
const Compare = () => import('./_pages/Compare')
const Checkout = () => import('./_pages/Checkout')


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
            {
                path: '/about',
                component: About,
                name: 'about'
            },
            {
                path: '/faq',
                component: FAQs,
                name: 'faq'
            },
            {
                path: '/contact-us',
                component: Contact,
                name: 'contact-us'
            },
            {
                path: '/compare',
                component: Compare,
                name: 'compare'
            },
            {
                path: '/checkout',
                component: Checkout,
                name: 'checkout'
            },
        ]
    }
];

export default showcaseRoutes;