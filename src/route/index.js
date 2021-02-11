import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({ mode: 'history'});

router.addRoutes([{path: '/', component: () => import('@/components/home/home.vue'), props: true, meta: { bcDynamic: true }}]);
router.addRoutes([{path: '/carta', component: () => import('@/components/carta/carta.vue'), props: true, meta: { bcDynamic: true }}]);
router.addRoutes([{path: '/asdasds', component: () => import('@/components/carta/carta.vue'), props: true, meta: { bcDynamic: true }}]);

export default router;