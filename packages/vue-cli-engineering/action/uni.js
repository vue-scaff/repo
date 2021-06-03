// Check Target bind Global
function check(name) {
  return ![undefined, "undefined"].includes(typeof global[name]);
}

// Made Target Assign Proto
function make(name) {
  if (check(name)) {
    return name;
  }

  return (global[name] = Object.assign(function() {}, properties[name]));
}

// Preset Properties
const properties = {
  // Uni
  uni: {
    getSystemInfoSync() {
      const space = {
        docWidth: document.documentElement.clientWidth,
        docHeight: document.documentElement.clientHeight,

        winWidth: window.screen.width,
        winHeight: window.screen.height
      };

      return {
        deviceId: "13817152426",
        language: navigator.language,
        model: "PC",
        pixelRatio: 2,
        platform: "mac",
        safeArea: {
          bottom: space.docHeight,
          height: space.docHeight,
          left: 0,
          right: space.docWidth,
          top: 0,
          width: space.docWidth
        },
        safeAreaInsets: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        screenHeight: space.winHeight,
        screenWidth: space.winWidth,
        statusBarHeight: 0,
        system: navigator.userAgent,
        windowBottom: 0,
        windowHeight: space.docHeight,
        windowTop: 0,
        windowWidth: space.docWidth
      };
    },

    getMenuButtonBoundingClientRect() {}
  },

  wx: {
    canIUse() {
      return false;
    }
  },

  weex: {
    requireModule() {}
  }
};

// First Time Check Uni
export default {
  uni: make("uni"),
  wx: make("wx"),
  weex: make("weex")
};
