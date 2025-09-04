import { createRouter, createWebHistory } from 'vue-router';

// Import your pages
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Services from './pages/Services.vue';
import Contact from './pages/Contact.vue';
import Appointments from './pages/Appointments.vue';
import Impressium from './pages/Impressium.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/appointments', component: Appointments },
  { path: '/impressium', component: Impressium }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;