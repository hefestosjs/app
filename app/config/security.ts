import type { ContentSecurityPolicy } from "@hefestos/core";

const SecurityPolicy: ContentSecurityPolicy = {
  ssl: false,
  gracefulShutdown: true,
  useDefaults: true,
  directives: {
    // "img-src": ["'self'", "https: data:"],
    // "script-src": ["'self'", "'unsafe-inline'"],
    // "script-src-attr": ["'unsafe-inline'"],
  },
};

export default SecurityPolicy;
