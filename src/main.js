import Vue from "vue";
import App from "./App.vue";

/* Buefy */
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

/* Sentry */
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
Sentry.init({
  Vue,
  dsn:
    "https://c5803bce2e6a4384aa090fca657d91d7@o526299.ingest.sentry.io/5641665",
  integrations: [new Integrations.BrowserTracing()],
  logErrors: true,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
