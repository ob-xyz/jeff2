import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/altcha.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AltchaWrapper() {
  const [isMounted, setIsMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsMounted(true);
    import("/build/_shared/altcha-3KHXF6YF.js").catch((err) => console.error("Altcha load error:", err));
  }, []);
  if (!isMounted) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { height: "80px" } }, void 0, false, {
      fileName: "app/components/altcha.tsx",
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "altcha-widget",
    {
      challengeurl: "https://app.jeffamzn.com/api/public/captcha/altcha",
      hidefooter: "true",
      hidelogo: "true"
    },
    void 0,
    false,
    {
      fileName: "app/components/altcha.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

// public/img/social/linkedin.png
var linkedin_default = "/build/_assets/linkedin-34LPKGU3.png";

// public/img/social/x.png
var x_default = "/build/_assets/x-2OTC4MLH.png";

// public/img/social/instagram.png
var instagram_default = "/build/_assets/instagram-NEV5BMHS.png";

// public/img/social/info.png
var info_default = "/build/_assets/info-FQKLT5OI.png";

// public/img/ja1.png
var ja1_default = "/build/_assets/ja1-K4FG3FWD.png";

export {
  AltchaWrapper,
  linkedin_default,
  x_default,
  instagram_default,
  info_default,
  ja1_default
};
//# sourceMappingURL=/build/_shared/chunk-ATSNJHQY.js.map
