import { Router } from "@hefestos/core";

const routes = Router();

routes.get("/", (req, res) => res.render("home"));
routes.get("/404", (req, res) => res.render("404"));

export default routes;
