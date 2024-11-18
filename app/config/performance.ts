import type { PerformanceInterface } from "@hefestos/core";

const PerformanceConfig: PerformanceInterface = {
  redis: false,
  cache: {
    active: true,
    lifeTime: 60,
  },
};

export default PerformanceConfig;
