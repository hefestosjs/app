import { bootOperations, middlewares, startServer } from "@hefestos/core";
import { middlewareList } from "app/middlewares";
import { executionList } from "app/middlewares/boot";

/**
 * Initialize the functions registered in app/middlewares/boot.ts before start the server.
 */
bootOperations.push(...executionList);

/**
 * Register the middlewares listed in app/middlewares/index.ts
 */
middlewares.push(...middlewareList);

startServer();
