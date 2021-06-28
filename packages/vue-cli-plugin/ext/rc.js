// Use Check Presence
const { presence } = require('./concert');

// Get RC
const rc = presence(`/vuescaffrc.js`);

// Preset
const preset = {
  /**
   * Main of Entry
   * @property app { Path }
   * ========== ========== ==========
   */
  main: {
    app: `App.vue`,
  },

  /**
   * Data Mock
   * @value { Boolean }
   * ========== ========== ==========
   */
  mock: false,

  /**
   * GraphQL Client
   * @property uri { String }
   * ========== ========== ==========
   */
  apollo: false,

  /**
   * GraphQL Client
   * @value { Number }
   * ========== ========== ==========
   */
  px2rem: 10,

  /**
   * Registry
   * @property host { Boolean }
   * @property api { Boolean }
   * @property route { Boolean }
   * @property store { Boolean }
   * @property mixin { Boolean }
   * ========== ========== ==========
   */
  registry: {
    host: true,
    api: true,
    route: true,
    store: true,
    mixin: true,
  },

  /**
   * Extract
   * @property util { Json }
   * @property filter { Json }
   * @property directive { Json }
   * @property route { Json }
   * @property store { Json }
   * @property component { Json }
   * @property style { Json }
   * @property i18n { Json }
   * ========== ========== ==========
   */
  extract: {
    util: {
      context: `@/utils`,
      suffix: /.js$/,
    },

    filter: {
      context: `@/filters`,
      suffix: /.js$/,
    },

    directive: {
      context: `@/directives`,
      suffix: /.js$/,
    },

    route: {
      context: `@/pages`,
      suffix: /\S+\/route.js$/,
    },

    store: {
      context: `@/pages`,
      suffix: /\S+\/store.js$/,
    },

    component: {
      context: `@/components`,
      suffix: /.vue$/,
    },

    style: {
      context: `@/sheet`,
      suffix: /variables.scss$/,
    },

    i18n: {
      context: `@/i18n`,
      suffix: /.js$/,
    },
  },

  /**
   * Rant Tolerance
   * @property uni { Boolean }
   * @property wx { Boolean }
   * @property weex { Boolean }
   * ========== ========== ==========
   */
  rant: null,
};

// Export RC
module.exports = Object.assign(preset, rc);
