import {Router} from 'express';

import UserRouter from './Users';

const router = Router();

router.use('/user', UserRouter);

export default router;
