import router from '@/router'

router.beforeEach((to, from, next) => {
    // ...
    // 返回 false 以取消导航
    console.log('==================>> router before', to, from);
    if (to.path === '/') next('Layout')
    else next()
  })