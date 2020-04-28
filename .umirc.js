
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' },
  //       { exact: true, path: '/user', component: '../pages/user' },
  //       { exact: true, path: '/echartsBar', component: '../pages/echartsBar' },
  //       { exact: true, path: '/echartsBar1', component: '../pages/echartsBar1' },
  //       { exact: true, path: '/echartsDemo', component: '../pages/echartsDemo' },
  //       { exact: true, path: '/xdb', component: '../pages/xdb' },
  //       { path: '/users/:id', component: '../pages/user/[id]' },
  //       { component: '../pages/404' },
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umiLearn',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
