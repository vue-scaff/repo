// First Time Check Uni
export default [undefined, "undefined"].includes(typeof uni) ? (global.uni = function() {}) : uni;
