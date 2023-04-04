import { AppRouteRecordRaw } from '../types';

const Index: AppRouteRecordRaw = {
  path: '/index',
  name: 'Index',
  component: () => import('@/views/index/index.vue'),
  meta: {
    locale: 'menu.index',
    requiresAuth: false,
    icon: 'icon-apps',
    order: 0,
  },
};

export default Index;
