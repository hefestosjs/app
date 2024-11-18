import { run } from "@hefestos/core/commands";

const [, , script, ...args] = process.argv;

run(script, args);
