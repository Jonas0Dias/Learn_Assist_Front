import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Animated } from "react-animated-css";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Imagem } from "../components/Imagem";
import env from 'react-dotenv';

export default function Login(props) {

    const navigate = useNavigate();
    const [entrar, setEntrar] = React.useState('Log in')
   

    return (

        
            <Home>
               
                <Animated animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <Imagem>
                    <img className="logo" src="./assets/img/logo-direito.png"></img>
                    <h1>LearnAssist</h1>
                </Imagem>
                </Animated>
                <Animated   animationIn="slideInRight" animationOut="slideInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <Input>

                    <input  type='email' placeholder="email" disabled={props.habilitado} onChange={e => props.setLogin({ ...props.login, email: e.target.value })}></input>
                    <input type='password' placeholder="password" disabled={props.habilitado} onChange={e => props.setLogin({ ...props.login, password: e.target.value })}></input>

                    <Button  onClick={() => {
                        setEntrar('')
                        props.setHabilitado(true)
                        axios.post(`${process.env.REACT_APP_API_URL}/login`, props.login).then((res) => {
                            props.setDadosUsuario(res.data)
                            props.setHabilitado(false);
                            navigate('/home')
                        }).catch(() => {
                            alert('Usuário ou senha incorretos')
                            props.setHabilitado(false)
                            setEntrar('Log in')

                        })
                    }} > {entrar === 'Log in' ? entrar : <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />}</Button>

                </Input>
                <Link to='/cadastro'><p className="cadastro" > Ainda não tem uma conta? Cadastre-se</p></Link>
                </Animated>
            </Home>

     



    )
}


const Home = styled.div`
height: 100vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
.cadastro{
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: black;
}
.animation{
    display:flex;
    flex-direction: column;
    align-items: center;
}
`

