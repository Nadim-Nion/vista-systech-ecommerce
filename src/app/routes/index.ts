import express from 'express';
import { ProductRoutes } from '../modules/product/product.route';

const router = express.Router();

/* 
router.use('/users', UserRoutes);
router.use('/students', StudentRoutes); 
*/

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((moduleRoute) => {
  router.use(moduleRoute.path, moduleRoute.route);
});

export default router;
