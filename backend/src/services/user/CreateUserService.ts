import prismaClient from '../../prisma'; // Importa direto, foi exportado como default

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
   async execute({name, email, password}: UserRequest){
    // Verificar se ele enviou um email
    if(!email){
        throw new Error("Email incorect.")
    }

    // Verificar se esse email já está cadastrado na plataforma
    const userAreadyExists = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    })

    if(userAreadyExists){
        throw new Error("User already exist.");
    }

    const user = await prismaClient.user.create({
        data:{
           name: name,
           email: email,
           password: password, 
        },
        select:{
            id: true,
            name: true,
            email: true,
        }
    })
    
    // console.log(name);    
    // return { Ok: true }
    // return { name: name }
    return user;
   } 
}

export { CreateUserService };