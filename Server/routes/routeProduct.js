import  express  from "express";
import { getallProduct , getProductByid, creatNewProduct , updateProduct , deleteProduct} from "../controller/controllerProduct.js";

const router = express.Router();

router.route('/product').get(getallProduct);
router.route('/product/id').get(getProductByid);
router.route('/product/id').post(creatNewProduct);
router.route('/product/id').put(updateProduct);
router.route('/product/id').get(deleteProduct);

export default router