import FeatureWrapper from './'

const HomePage = ()=> import('./_pages/Home')
const GoodsPage = ()=> import('./_pages/Goods')
const ProductPage = ()=> import('./_pages/Product')

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
    ]
  }
];

export default showcaseRoutes;