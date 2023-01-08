
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password }: AuthRequest){
        // console.log(email);
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect.");
        }

        //Verificar se a senha que ele mandou está correta.
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("User/password incorrect.");
        }

        // gerar um token JWT e devolver os dados do usuario com id, name e email

        return {ok: true};
    }
}

export { AuthUserService };