import { createRouter, createWebHistory } from 'vue-router';

// Import your pages
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Services from './pages/Services.vue';
import Contact from './pages/Contact.vue';
import Appointments from './pages/Appointments.vue';
import Impressium from './pages/Impressium.vue';
import { ROUTES } from './constants';

const routes = [
  { path: ROUTES.HOME, component: Home },
  { path: ROUTES.ABOUT, component: About },
  { path: ROUTES.SERVICES, component: Services },
  { path: ROUTES.CONTACT, component: Contact },
  { path: ROUTES.APPOINTMENTS, component: Appointments },
  { path: ROUTES.IMPRESSUM, component: Impressium }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;