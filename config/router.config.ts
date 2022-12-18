const routerConfig = [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          exact: true,
          path: '/home',
          name: '首页',
          component: '@/pages/home/index',
          icon: 'SettingOutlined',
          // routes: [
          //   {
          //     path: '/Demo3',
          //     name: 'demo3',
          //     component: '@/pages/Demo3/index',
          //     icon: 'AppstoreOutlined',
          //   },
          // ],
        },
      ],
    },
  ];
  export default routerConfig;
