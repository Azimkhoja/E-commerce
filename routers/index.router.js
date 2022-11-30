import { Router } from "express";
import * as CategoriesRouter  from './category.routes'
import * as Sub_CategoriesRouter  from './sub_category.routes'
import * as ProductsRouter  from './product.routes'
const router = Router()





router.use('/categories', CategoriesRouter)
router.use('/sub_categories', Sub_CategoriesRouter)
router.use('/products', ProductsRouter)