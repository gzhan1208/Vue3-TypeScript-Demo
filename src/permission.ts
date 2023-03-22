import router from '@/router'
import stores from '@/stores'

router.beforeEach((to, from, next) => {
    // ...
    // 返回 false 以取消导航
    // console.log('==================>> router before', to, from);
    if (to.path === '/') {
        next('Login')
    } else if (to.path === '/Layout') {
        const breadCrumb = stores.breadCrumb()
        breadCrumb.$reset()
        next()
    }
    else next()
  })
