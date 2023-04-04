import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import _ from 'lodash';
import { appRoutes } from './routes';
import { DEFAULT_LAYOUT, NOT_FOUND_ROUTE, REDIRECT_MAIN } from './routes/base';
import createRouteGuard from './guard';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/index/index.vue'),
      meta: {
        locale: 'menu.index',
        requiresAuth: false,
        order: 0,
      },
    },
    ...appRoutes,
    REDIRECT_MAIN,
    NOT_FOUND_ROUTE,
    {
      path: '',
      component: DEFAULT_LAYOUT,
      children: appRoutes,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-restricted-globals
  if (_.isEmpty(history.state.current)) {
    // eslint-disable-next-line no-restricted-globals
    _.assign(history.state, { current: from.fullPath });
  }
  next();
});
createRouteGuard(router);

export default router;
