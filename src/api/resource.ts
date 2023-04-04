export default function getMenuList() {
  return {
    data: [
      {
        name: 'Index',
        meta: {
          locale: 'menu.index',
          requiresAuth: true,
          order: 0,
        },
        children: [],
      },
      {
        name: 'Index',
        meta: {
          locale: 'menu.index',
          requiresAuth: true,
          order: 1,
        },
        children: [],
      },
    ],
  };
  // return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
