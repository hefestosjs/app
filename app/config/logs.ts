import { join } from "node:path";
import type { LoggerInterface } from "@hefestos/core";

const LogsConfig: LoggerInterface = {
  active: true,
  format: "combined",
  customFormat: "",
  rotate: {
    active: true,
    options: {
      size: "5M",
      interval: "1d",
      compress: "gzip",
      path: join(process.cwd(), "logs"),
    },
  },
};

export default LogsConfig;
