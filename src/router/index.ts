import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';
import Students from "../pages/students.vue";
import studentDetails from "../pages/student-details.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home }, { path: '/students' , name: 'students', component: Students},
      {path: '/students/:id', component: studentDetails, name: 'student-details'}
  ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    }
});
export default router;
