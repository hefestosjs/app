import { Router } from "@hefestos/core";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

export default routes;
