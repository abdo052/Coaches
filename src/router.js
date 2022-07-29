import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from './Pages/coaches/CoachDetail.vue';
import CoachList from './Pages/coaches/CoachList.vue';
import CoachRegstration from './Pages/coaches/CoachRegstration.vue';
import ContactCoach from './Pages/requests/ContactCoach.vue';
import RequestsReceive from './Pages/requests/RequestsReceive.vue';
import NotFound from './Pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegstration },
    { path: '/request', component: RequestsReceive },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});


export default router; 