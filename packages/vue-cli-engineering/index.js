// Import Action
import { support, registry, provider, catcher, fare, newest, procer, blader, vuelax, peel, lint, fusion, attendant, taunt, namespace } from './action';

// Import Util
import { vueApollo, vueRunner, vueRegister, vueComponent, vueFilter, vueDirective, vueRouter, vueStore, vueLanguage } from './registry';

// Import Kit
import { rc, http, json } from './kit';

// Glober
const glober = {};

// Sniper
const sniper = {};

// Projecter
const projecter = {};

// Config
const config = {};

// External
function subscribe(mode, hand) {
  // Treatment
  config[mode] = ['request', 'response'].includes(mode) ? lint(mode) : {};

  // Get Surface
  sniper[mode] = hand(config[mode], sniper[mode]) || sniper[mode];
}

export default ({ Vue, Router, Vuex, I18N, Configure, Root }) => {
  // Set Structure
  function Structure() {
    // Basic Support
    support(Vue, { Router, Vuex, I18N });

    // ★ project as RC
    if (rc.projects) {
      // Catcher
      catcher(rc || {}, projecter);

      // ✿ Blader
      blader(projecter);
    }

    // ★ Snipe Provider
    provider(rc || {}, sniper);

    // ✿ Procer Util
    procer(sniper.util);

    // ✿ Procer Filter
    procer(sniper.filter);

    // ★ Registry Provider -- No Store
    registry(rc || {}, glober, sniper.util);

    // Api Hook External
    return {
      // Core
      Vue,
      // Model External
      subscribe,
    };
  }

  // Set Compile
  function Compile(App) {
    // Taunt First
    taunt(glober, peel(projecter, 'api'));

    // Get Http
    const { request, response } = config;

    // Set Syringe
    const syringe = {
      $http: http(request, response),
      $style: sniper.style,
      $api: glober.api,
    };

    // ★ project as RC
    if (rc.projects) {
      vuelax(projecter, glober, sniper);
    }

    // Set Senior
    const senior = {
      // Utils
      ...sniper.util,
      // Cudstom Params
      ...newest(sniper, Object.keys(rc.extract)),
      // Built-In
      ...syringe,
    };

    // ★ Snipe Provider -- Just Store
    provider(rc || {}, sniper, senior, true);
    // ★★★ Special -- Get Result of Store
    fare(sniper.store, senior, json);
    // ★★★ Special -- Get Result of Directive
    fare(sniper.directive, senior);

    // ★ Registry Provider -- Just Store
    registry({ registry: { store: rc.registry.store } }, glober, senior, true);

    // Fusion Debris
    fusion(glober, sniper);

    // Waiting Prototype
    const waitress = attendant(sniper, syringe);

    // Util Register
    Vue.use(vueRegister, waitress);
    // Component Register
    Vue.use(vueComponent, sniper.component, { ...config.component });
    // Filter Register
    Vue.use(vueFilter, sniper.filter);
    // Directive Register
    Vue.use(vueDirective, sniper.directive);
    // Mixin Register
    Vue.mixin(glober.mixin);

    // Derivative
    const derivative = config.store && config.store.getters ? config.store.getters : {};

    // Instance
    const instance = {
      // Init Store
      store: vueStore(Vuex, sniper.store, waitress, derivative, glober.store),
      // Init Router
      router: vueRouter(Router, sniper.route, waitress, config.route, glober.route),
      // Init Language
      i18n: vueLanguage(I18N, sniper.i18n, config.i18n),
    };

    if (rc.apollo) {
      instance.apolloProvider = vueApollo(Vue, rc.apollo);
    }

    // Vue Runner
    Vue.use(vueRunner, App, instance);

    // Return for Next
    return {
      ...namespace(instance),
      ...senior,
    };
  }

  // Export for Usage
  return { Structure, Compile };
};
