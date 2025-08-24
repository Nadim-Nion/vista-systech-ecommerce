import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidations } from './product.validation';
const router = express.Router();

router.post(
  '/create-product',
  validateRequest(ProductValidations.createProductValidationSchema),
);

export const ProductRoutes = router;
