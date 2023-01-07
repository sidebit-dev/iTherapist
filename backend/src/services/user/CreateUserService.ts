
interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
   async execute({name, email, password}: UserRequest){
    console.log(name);
    // return { Ok: true }
    return { name: name }
   } 
}

export { CreateUserService };