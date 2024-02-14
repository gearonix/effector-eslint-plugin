module.exports = {
  rules: {
    "enforce-store-naming-convention": require("./rules/enforce-store-naming-convention/enforce-store-naming-convention"),
    "enforce-effect-naming-convention": require("./rules/enforce-effect-naming-convention/enforce-effect-naming-convention"),
    "no-getState": require("./rules/no-getState/no-getState"),
    "no-unnecessary-duplication": require("./rules/no-unnecessary-duplication/no-unnecessary-duplication"),
    "prefer-sample-over-forward-with-mapping": require("./rules/prefer-sample-over-forward-with-mapping/prefer-sample-over-forward-with-mapping"),
    "no-useless-methods": require("./rules/no-useless-methods/no-useless-methods"),
    "no-ambiguity-target": require("./rules/no-ambiguity-target/no-ambiguity-target"),
    "no-watch": require("./rules/no-watch/no-watch"),
    "no-unnecessary-combination": require("./rules/no-unnecessary-combination/no-unnecessary-combination"),
    "no-duplicate-on": require("./rules/no-duplicate-on/no-duplicate-on"),
    "strict-effect-handlers": require("./rules/strict-effect-handlers/strict-effect-handlers"),
    "enforce-gate-naming-convention": require("./rules/enforce-gate-naming-convention/enforce-gate-naming-convention"),
    "keep-options-order": require("./rules/keep-options-order/keep-options-order"),
    "no-forward": require("./rules/no-forward/no-forward"),
    "no-guard": require("./rules/no-guard/no-guard"),
    "mandatory-scope-binding": require("./rules/mandatory-scope-binding/mandatory-scope-binding"),
    "prefer-useUnit": require("./rules/prefer-useUnit/prefer-useUnit"),
    "no-patronum-debug": require("./rules/no-patronum-debug/no-patronum-debug"),
    "no-on": require("./rules/no-on/no-on"),
  },
  configs: {
    recommended: require("./config/recommended"),
    scope: require("./config/scope"),
    react: require("./config/react"),
    future: require("./config/future"),
    patronum: require("./config/patronum"),
  },
};
