import { createApp } from 'vue';
import App from './App.vue';
import Mitt from 'mitt';

/* Import main.scss file on bootup */
import '@/assets/scss/_index.scss';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faDownload,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faDownload, faArrowUpRightFromSquare);

const emitter = Mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
