import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-WP7OK6OR.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var rotatingWords = ["Top takes.", "Hot steaks."];
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
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "THE POAST" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `${fadeOut ? "fade-out" : "fade-in"}`, children: rotatingWords[index] }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 59,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Sign up for news from the internets perspective." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Subscribe" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
        "Enjoy our ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "free newsletter" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The Poast sends you a recap of the weekly news from the internets perspective. There's really nothing else like it in the world." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 22
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: trump_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: rocket_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: handcoin_default }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Delivered straight to your inbox daily." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Read by people who usually don't take themselves too seriously." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-content5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: tobic_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "One weekly newsletter" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The internet moves fast so we move slow." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: roast_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Poasts that roast" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We don't make the rules, we just break'm." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: chill_default }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "No bad vibes" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Hot steaks and scroll-stopping takes." }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "pricebtn", children: "Sign up for free" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ja1_default, alt: "Logo" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 118,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-signup", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subscribe to The Poast." }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 121,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "email", type: "email", name: "email", required: true, placeholder: "Email Address *" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 124,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "submit", type: "submit", children: "Sign up" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 125,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/index.tsx",
              lineNumber: 123,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "7e96e6a6-eef8-4624-be9c-e468b5a8b230" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 127,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "6d48f", type: "hidden", name: "l", value: "6d48fffe-7d37-4c14-b317-3e4cda33a647" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 128,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 129,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 122,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 120,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Company" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 135,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Home" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 136,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 134,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Newsletters" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 139,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "The Poast Newsletter", href: "https://www.thepoast.com", children: "The Poast" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 140,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { title: "Jeffamzn Newsletter", href: "https://www.jeffamzn.com", target: "_blank", children: "Jeffamzn" }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 141,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 138,
            columnNumber: 3
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 133,
          columnNumber: 1
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 119,
        columnNumber: 1
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/privacy?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 148,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://policies.google.com/terms?hl=en-US", target: "_blank", rel: "noopener noreferrer", children: "Terms of Service" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 151,
            columnNumber: 3
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 147,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-social", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://instagram.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: ig_default, alt: "Instagram" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 157,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 156,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://x.com/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: x_default, alt: "X (formerly Twitter)" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 160,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 159,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://linkedin.com/company/thepoast", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: in_default, alt: "LinkedIn" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 163,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 162,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hey@thepoast.com", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: email_default, alt: "Email us" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 166,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 165,
            columnNumber: 3
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 155,
          columnNumber: 3
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 146,
        columnNumber: 1
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 117,
      columnNumber: 1
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-3OOQ4ZSH.js.map
