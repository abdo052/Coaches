import { createApp } from 'vue';

import router from './router.js';
import store from './Store/index.js';
import App from './App.vue';
import BaseCard from './Componets/ui/BaseCard.vue';
import BaseButton from './Componets/ui/BaseButton.vue';
import BaseBage from './Componets/ui/BaseBage.vue';
import BaseSpinner from './Componets/ui/BaseSpinner.vue';
import BaseDialog from './Componets/ui/BaseDialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBage);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.mount('#app');
