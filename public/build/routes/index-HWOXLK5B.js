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

// public/img/trump.jpeg
var trump_default = "/build/_assets/trump-36S6F5RK.jpeg";

// public/img/rocket.jpeg
var rocket_default = "/build/_assets/rocket-HK2KYFZB.jpeg";

// public/img/handcoin.jpeg
var handcoin_default = "/build/_assets/handcoin-DJHV4JRN.jpeg";

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
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "NEW YORK'S FAVE EMAIL" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Stay informed in just 1 minute." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to The Poast for our Friday email." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 62,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        "We are ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New York's" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 67,
          columnNumber: 20
        }, this),
        " fave email."
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "subscription form", href: "https://app.jeffamzn.com/subscription/form", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Got a minute? We'll help you stay informed about what's driving the good stuff happening in NY this weekend." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: trump_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: rocket_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: handcoin_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Delivered straight to your inbox." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enjoy our free, Friday email that helps 10,000+ New Yorker's stay informed about the good stuff happening this weekend." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: samae_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Drivers of the world" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Read what some of the most prolific people driving the world do." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tobic_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "One weekly email" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Get a weekly email of good stuff happening in around the city." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: chill_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Just perfect" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "It's the perfect way to start your weekend." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "subscription form", href: "https://app.jeffamzn.com/subscription/form", rel: "noopener noreferrer", className: "pricebtn", children: "Subscribe for free" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-HWOXLK5B.js.map
