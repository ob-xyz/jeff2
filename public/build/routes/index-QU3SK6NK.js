import {
  ja1_default
} from "/build/_shared/chunk-IFBMNJUC.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-SBNNL67F.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

// public/img/chill.jpg
var chill_default = "/build/_assets/chill-TZU6SYAK.jpg";

// public/img/tobic.jpg
var tobic_default = "/build/_assets/tobic-6YGHSOL4.jpg";

// public/img/samae.jpg
var samae_default = "/build/_assets/samae-QLCDMFQL.jpg";

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var rotatingWords = [" Brooklyn.", " Manhattan.", " Queens.", " the Bronx.", " Staten Island."];
function Index() {
  const [index, setIndex] = (0, import_react.useState)(0);
  const [fadeOut, setFadeOut] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "The Poast Logo" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "NEW YORK'S FAVE EMAIL" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Stay informed in just 1 minute." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to The Poast for our Friday email." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        "We are ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New York's" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 64,
          columnNumber: 20
        }, this),
        " fave email."
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "subscription form", href: "https://app.jeffamzn.com/subscription/form", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Got a minute? We'll help you catch the good stuff happening this weekend." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Delivered straight to your inbox." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enjoy our free, Friday email that helps 10,000+ New Yorker's stay informed about what's happening in the city this weekend." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: samae_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Know what's happening" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get the good stuff happening this weekend." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: chill_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "One quick email" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get our one minute Friday email." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tobic_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Real conversations" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enjoy knowing what's moving traffic and people." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "subscription form", href: "https://app.jeffamzn.com/subscription/form", rel: "noopener noreferrer", className: "pricebtn", children: "Subscribe for free" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-QU3SK6NK.js.map
