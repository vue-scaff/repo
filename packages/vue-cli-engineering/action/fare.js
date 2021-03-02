// Use Foreach
import { foreach } from '../kit';

// Export
export default (group, inject, invoke) => {
  // Loop
  foreach(group, (item, key) => {
    // Item is Function
    if (item.constructor === Function) {
      // Get PKG
      const pkg = invoke ? item.call({}, inject) : item(inject);

      // Set Result
      group[pkg.name || key] = pkg;
    }
  });
};
