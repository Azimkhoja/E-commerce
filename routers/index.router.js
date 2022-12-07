const Router = require("express");
const categoryRouter = require("./category.routes");
const subCategoryRouter = require("./sub_category.routes");
const productRouter = require("./product.routes");
const routes = Router();

routes.use("/categories", categoryRouter);
routes.use("/sub_categories", subCategoryRouter);
routes.use("/products", productRouter);

module.exports = routes;
