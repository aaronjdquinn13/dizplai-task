import { createRouter, createWebHistory } from 'vue-router';
import VotingPage from '../components/VotingPage.vue';
import ConfirmationPage from '../components/ConfirmationPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: VotingPage,  // This will show the main voting page
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: ConfirmationPage,  // This will show the confirmation page
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;