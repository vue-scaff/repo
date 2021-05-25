// Use Context of Require
const context = require.context("./", false, /\.js$/);

// Set Packages
const modules = {};

// Get Packages from Loop
context.keys().forEach(key => {
  // Get Name
  const name = key.replace(/^\.\/|\.js$/g, "");

  // Without Index
  if (name === "index") {
    return;
  }

  // Get Package
  const pkg = context(key);

  // Read Default of Package
  modules[name] = pkg.default || pkg;
});

// Export Packages
module.exports = modules;
