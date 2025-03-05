import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

// public/img/ja2.png
var ja2_default = "/build/_assets/ja2-5FK7IGHC.png";

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  (0, import_react.useEffect)(() => {
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja2_default }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 21,
      columnNumber: 35
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Hi, I'm Jeffamzn!" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 25,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your no-BS friend making good mornings in the business world even better." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 26,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Gotta minute? Join my free newsletter. And you'll quickly see why it's one of the most insightful ways to start your day." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 27,
          columnNumber: 10
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", placeholder: "Name" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 31,
          columnNumber: 14
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "submit", type: "submit", value: "Subscribe" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 14
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", class: "h-captcha", "data-sitekey": "db0e76a6-3d84-4378-abe6-88526faac9d2" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "b2958", type: "hidden", name: "l", checked: true, value: "b2958bdd-ba18-4541-aff7-58c773cbcb7d" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-IPW6KIKN.js.map
