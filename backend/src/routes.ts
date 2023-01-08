// import { Router, Request, Response } from 'express';
import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';


const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({iTherapist: "Online!"})
//     //throw new Error('Erro ao fazer essa requisição.')
// });

//--Rotas Users --
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

export { router };