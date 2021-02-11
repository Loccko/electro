import FeatureWrapper from './'

const HomePage = ()=> import('./_pages/Home')
const GoodsPage = ()=> import('./_pages/Goods')

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
        path: '/goods',
        component: GoodsPage,
        name: 'goods'
      }
    ]
  }
];

export default showcaseRoutes;