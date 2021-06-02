export default [undefined, "undefined"].includes(typeof uni) ? (global.uni = {}) : uni;
