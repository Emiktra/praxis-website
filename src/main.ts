import { createApp } from 'vue';
import Root from './Root.vue';
import router from './router';

const root = createApp(Root);

root.use(router);
root.mount('#root');
