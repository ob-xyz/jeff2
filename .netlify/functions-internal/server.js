var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-XE3ZTRYU.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "The Poast",
  description: "Welcome to New York where it's mostly sunny with a slight chance of chaos.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react3 = require("react"), import_react4 = require("@remix-run/react");

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-T6WB4D3A.png";

// public/img/chill.jpg
var chill_default = "/build/_assets/chill-TZU6SYAK.jpg";

// public/img/tobic.jpg
var tobic_default = "/build/_assets/tobic-6YGHSOL4.jpg";

// public/img/roast.jpg
var roast_default = "/build/_assets/roast-NE64XGMA.jpg";

// public/img/trump.jpeg
var trump_default = "/build/_assets/trump-36S6F5RK.jpeg";

// public/img/rocket.jpeg
var rocket_default = "/build/_assets/rocket-HK2KYFZB.jpeg";

// public/img/handcoin.jpeg
var handcoin_default = "/build/_assets/handcoin-DJHV4JRN.jpeg";

// public/img/in.png
var in_default = "/build/_assets/in-4S25RRTW.png";

// public/img/ig.png
var ig_default = "/build/_assets/ig-WB7RHRJR.png";

// public/img/x.png
var x_default = "/build/_assets/x-J2PMTTZT.png";

// public/img/email.png
var email_default = "/build/_assets/email-KANKX45L.png";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), rotatingWords = [" gridlock", " cabbies.", " construction.", " choas."];
function Index() {
  let [index, setIndex] = (0, import_react3.useState)(0), [fadeOut, setFadeOut] = (0, import_react3.useState)(!1);
  return (0, import_react3.useEffect)(() => {
    let interval = setInterval(() => {
      setFadeOut(!0), setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length), setFadeOut(!1);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []), (0, import_react3.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja1_default, alt: "The Poast Logo" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "THE POAST" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
          "Mostly sunny with a chance of",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `${fadeOut ? "fade-out" : "fade-in"}`, children: rotatingWords[index] }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 59,
            columnNumber: 16
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Sign up to know what's really going on in the greatest city in the world." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "submit", type: "submit", children: "Let's do it" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "bcd05", type: "hidden", name: "l", value: "bcd05274-b4b9-4a90-a8b5-1fdee92637fa" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: [
        "Enjoy our ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "free" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 23
        }, this),
        " newsletter"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "We writes headlines that make headlines. And our weekly scoop tells it like it is for the greatest city in the world." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 22
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: trump_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: rocket_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: handcoin_default }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Delivered straight to your inbox daily." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Read by people who actually love New York." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: roast_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Poasts that roast" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "We write headlines that make headlines." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: chill_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "No bad vibes" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Hot takes, big steaks, all from the empire state." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: tobic_default }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Once a week" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Know what's happening in the greatest city in the world." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", className: "pricebtn", children: "Sign up for free" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ja1_default, alt: "Logo" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 119,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-signup", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Subscribe to The Poast." }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 122,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email Address *" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 125,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 126,
                columnNumber: 9
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 124,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 128,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 129,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 130,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 123,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 121,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Company" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 136,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "#", children: "Home" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 137,
              columnNumber: 5
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 135,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { children: "Newsletters" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 140,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { title: "The Poast Newsletter", href: "https://www.thepoast.com", children: "The Poast" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 141,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { title: "Jeffamzn Newsletter", href: "https://www.jeffamzn.com", target: "_blank", children: "Jeffamzn" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 142,
              columnNumber: 5
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 139,
            columnNumber: 3
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 134,
          columnNumber: 1
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 120,
        columnNumber: 1
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://policies.google.com/privacy?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 149,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 152,
            columnNumber: 3
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 148,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://instagram.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: ig_default, alt: "Instagram" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 158,
            columnNumber: 5
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 157,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://x.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 161,
            columnNumber: 5
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 160,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://linkedin.com/company/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 164,
            columnNumber: 5
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 163,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:hey@thepoast.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 167,
            columnNumber: 5
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 166,
            columnNumber: 3
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 156,
          columnNumber: 3
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 147,
        columnNumber: 1
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 118,
      columnNumber: 1
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SWXXE3EK.js", imports: ["/build/_shared/chunk-WP7OK6OR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-27OWONWQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-XQQLUOEH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "fc470152", hmr: void 0, url: "/build/manifest-FC470152.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
