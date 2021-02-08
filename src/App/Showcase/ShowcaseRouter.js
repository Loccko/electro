import FeatureWrapper from '.'

const HomePage = ()=> import('./_pages/Home')
const GoodsPage = ()=> import('./_pages/Goods')

const showcaseRoutes = [
  {
    path: '/showcase/',
    component: FeatureWrapper,
    children: [
      {
        path: '/showcase/',
        component: HomePage,
        name: 'home'
      },
      {
        path: '/showcase/goods',
        component: GoodsPage,
        name: 'goods'
      }
    ]
  }
];

export default showcaseRoutes;