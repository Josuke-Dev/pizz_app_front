import './PageContainer.css';
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


interface IFormInputs {
    email: string
    password: number
}
  
const schema = yup.object({
    email: yup.string().email().required("Merci de renseigner votre email"),
    password: yup.string().required("Merci de renseigner votre mot de passe").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"),
    /* confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Les mots de passe doivent être identiques") */
}).required();


const LoginForm: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data: IFormInputs) => console.log(data);
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Email" type="email" required />
          <p>{errors.email?.message}</p>
            
          <input {...register("password")} placeholder="Mot de passe" type="password" required />
          <p>{errors.password?.message}</p>
          
          <input type="submit" />
        </form>
      );

};

export default LoginForm;
