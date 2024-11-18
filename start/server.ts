import { bootOperations, startServer } from "@hefestos/core";
import { executionList } from "app/middlewares/boot";

bootOperations.push(...executionList);
startServer();
