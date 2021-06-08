/**
 * 基于 vue-apollo apollo-client 的封装
 * 先简单写写，等有空了再优化
 * ========== ========== ==========
 */

// Use Vue Apollo
import VueApollo from 'vue-apollo';

// Use Apollo Boost
import ApolloClient from 'apollo-boost';

// Use Message for Error
import { console } from '../kit';

/**
 * https://apollo.vuejs.org/api/apollo-provider.html#constructor
 * ========== ========== ==========
 */
export default (Vue, options = {}) => {
  // Use Vue Apollo
  Vue.use(VueApollo);

  // Set Client
  const apolloClient = new ApolloClient(options);

  // Export for Vue Init
  return new VueApollo({
    // Set Client
    defaultClient: apolloClient,

    // Error Hanlder
    errorHandler(error) {
      // Debug
      console.error(error.gqlError);

      // Return
      return error;
    },
  });
};
