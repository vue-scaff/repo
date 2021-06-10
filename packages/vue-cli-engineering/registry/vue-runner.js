export default {
  // Install
  install(Vue, App, registries = {}) {
    // Set Instance
    const instance = new Vue({
      // Dependencies
      ...registries,
      // Render
      render: h => h(App),
    });

    // Bind on Global
    global.v = instance;

    // Mount
    instance.$mount(`#app`);
  },
};
