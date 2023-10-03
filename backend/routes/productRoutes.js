import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  reviewProduct,
  searchProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, createProduct)
router.route('/:id/reviews').post(protect, reviewProduct)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, updateProduct)

// api/products?keyword=key&pageNumber=1
router.route('/search/:keyword').get(searchProducts)

export default router
