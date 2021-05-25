// Use Axios
import Axios from "axios";

// Use QS
import { stringify } from "qs";

// Use Foreach
import foreach from "./foreach";

// Use Empty
import empty from "./empty";

// Set Methods
const METHODS = ["get", "post", "put", "delete", "connect", "head", "options", "trace"];

// Set HEADER - Different Name in Uni or H5
const HEADER = check() ? `header` : `headers`;

// Intercept
const Intercept = {};

// Set Exp
let exp = undefined;

// Set Preset
let preset = {};

// Set Content-Type
let type = "application/x-www-form-urlencoded";

// Touch
let touch = `url method data ${HEADER}`.split(" ");

// Noop
function noop() {}

// Check Uni
function check() {
  // No Delete
  // return [undefined, "undefined"].includes(typeof uni) ? undefined : uni;

  // 4 nebular.js
  const u = [undefined, "undefined"].includes(typeof uni) ? undefined : uni;

  if (u) {
    return !u.simular;
  }

  return u;
}

// Transfer
function transfer(request, response) {
  // Assignment Request
  Intercept.Request = request || noop;
  // Assignment Response
  Intercept.Response = response || noop;
}

// Nova Key
function nova(target) {
  return empty(target) ? {} : target;
}

function merge(keep = {}, runtime = {}) {
  // Set Json for Result
  let json = { ...keep };

  // Loop
  foreach(touch, key => {
    // Objects
    if (["data", HEADER].includes(key)) {
      // Tolerance
      json[key] = keep[key] || {};
      // Merge
      return (json[key] = Object.assign({}, keep[key], runtime[key]));
    }

    json[key] = runtime[key] || keep[key];
  });

  // For Headers
  json[HEADER]["Content-Type"] = json[HEADER]["Content-Type"] || type;

  // Endless
  return json;
}

// Param Process
function process(data, method) {
  return {
    ...[{ params: data }, data][[`put`, `post`, `patch`].includes(method) - 0]
  };
}

// Handler
function help(url, method, data = {}, headers = {}) {
  // Interceptor
  const { Request, Response } = Intercept;

  // Runtime Options
  const options = {
    url,
    method,
    data,
    [HEADER]: headers
  };

  // Case
  if (!exp) {
    // No Thing Impossible
  }

  // Preset
  preset = merge(Request, options);

  // Exp
  exp = Axios.create(preset);

  // Credentials
  Axios.defaults.withCredentials = true;

  // Data Cache
  let cache = process(preset.data, method);

  // Form Data Format
  if (~preset[HEADER]["Content-Type"].indexOf(type) && method === "post") {
    cache = stringify(cache);
  }

  // Result
  return check()
    ? new Promise((resolve, reject) => {
        // Headers Error
        uni.request({
          ...preset,
          success: response => resolve(Response.success(response)),
          fail: error => reject(Response.error(error))
        });
      })
    : exp[method](url, cache)
        .then(response => Response.success(response))
        .catch(error => Response.error(error));
}

// Http Api Create
function http(url, handler = {}) {
  if (!url) {
    return console.error(`url is not defined .`);
  }

  METHODS.map(method => {
    // Set Handlers
    handler[method.toLowerCase()] = (data = {}, headers = {}) => {
      // Extension of Vue
      if (global.httpInceptor) {
        // Get Handler
        const Handler = global.httpInceptor(data, headers);

        // Reset Data or Not
        data = Handler.data || data;
        // Reset Headers or Not
        headers = Handler.headers || headers;
      }

      return help(url, method, data, headers);
    };
  });

  return handler;
}

export default (request, response) => {
  // Transfer Http
  transfer(request, response);

  // Return Api
  return url => http(url);
};
