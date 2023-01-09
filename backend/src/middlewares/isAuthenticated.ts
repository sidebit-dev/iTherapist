import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string; //id do usuario
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){

    // Receber o token
    const authToken = req.headers.authorization;

    if(!authToken){
       return res.status(401).end(); 
    }

    const [, token] = authToken.split(" "); // despresa o primeiro item e chama o segundo de token
    //console.log(token);
    try {
        // Validar esse token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;   //verify - metodo do JWT

        //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
        req.user_id = sub;
        // console.log(sub);
        return next();
        
    } catch (err) {
        return res.status(401).end();
    }
}