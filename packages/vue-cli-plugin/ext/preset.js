// Use Check Presence
const { presence } = require("./concert");

// Get Injection
const injection = presence(`/injection.json`);

// Export
module.exports = { injection };
