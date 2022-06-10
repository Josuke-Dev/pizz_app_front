import './PageContainer.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { login } from "../actions/auth";

import store from '../store';


interface IFormInputs {
    username: string
    password: number
}
  
const schema = yup.object({
    username: yup.string().email().required("Merci de renseigner votre email"),
    /*password: yup.string().required("Merci de renseigner votre mot de passe").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"),*/
    password: yup.string().required("Merci de renseigner votre mot de passe"),
    /* confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Les mots de passe doivent être identiques") */
}).required();


const LoginForm: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
      });

    const [connexion , setConnexion] = React.useState({
      username : '',
      password : '',
    })

    /*const onSubmit = (data: IFormInputs) => console.log(data);*/
    const onSubmit = (data: IFormInputs) => {
        console.log(data)
        store.dispatch(login(data.username, data.password))
            .then(() => {
                console.log(data);
                console.log(login(data));
                /* window.location.href = "/profil"; */
            })
    }

    /* If { isLoggedIn } => window.location.href= "/profil"; */
  
      return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username")} placeholder="Email" type="email" required onChange={(e) => setConnexion({...connexion, username : e.target.value}) } />
          <p>{errors.username?.message}</p>
            
          <input {...register("password")} placeholder="Mot de passe" type="password" required onChange={(e) => setConnexion({...connexion, password : e.target.value}) } />
          <p>{errors.password?.message}</p>
          
          <input type="submit" value="Connexion" />
        </form>
      );

};



export default LoginForm;
