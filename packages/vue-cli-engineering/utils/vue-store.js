// Use Foreach
import { foreach, store } from "../kit";

// Use Store
const { states, mutations, actions } = store;

// Export
export default (Vuex, modules, utils, getters, global) => {
  // Loop Modules
  foreach(modules, (module, key) => {
    // Add Namespace
    module.namespaced = true;

    // Use States
    module.state = states(module.state);

    // Use Mutations
    module.mutations = mutations(module.mutations);

    // Use Actions
    module.actions = actions(module.actions);
  });

  // Merge Global
  if (global) {
    Object.assign(modules, global);
  }

  // Return
  return new Vuex.Store({
    modules,
    getters
  });
};
