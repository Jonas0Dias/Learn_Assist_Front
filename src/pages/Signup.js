import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Imagem } from "../components/Imagem";
import env from 'react-dotenv';
import { Animated } from "react-animated-css"

export default function Signup(props){
    const navigate=useNavigate();
    const [usuario, setUsuario] = React.useState({email:'',name:'',password:'',passwordConfirmation:''})
    const[entrar, setEntrar] = React.useState('Register')
    console.log(usuario)
    
    // CadastroAnimeJs();
   
    
    return(
        <Home>
             <Animated animationIn="slideInLeft" animationOut="slideOutRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
        <Imagem>
        
        <img className="logo" src="./assets/img/logo-direito.png"></img>
                    <h1>LearnAssist</h1>

        </Imagem>
        </Animated>
        <Animated   animationIn="slideInRight" animationOut="slideInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
        <Input>

        <input  type='text' placeholder="name" value={usuario.name} onChange={e => setUsuario({...usuario, name: e.target.value})} disabled={props.habilitado}></input>
        <input type='email' placeholder="e-mail" value={usuario.email} onChange={e => setUsuario({...usuario, email: e.target.value})} disabled={props.habilitado}></input>
        <input type='password' placeholder="password" onChange={e => setUsuario({...usuario, password: e.target.value})} disabled={props.habilitado}></input>
        <input  type='password' placeholder="confirm password" onChange={e => setUsuario({...usuario, passwordConfirmation: e.target.value})} disabled={props.habilitado}></input>

        <Button onClick={() => {
            setEntrar('')
            props.setHabilitado(true)
            axios.post(`${process.env.REACT_APP_API_URL}/signup`, usuario).then(()=>  {
                props.setHabilitado(false);
                navigate('/')
        }).catch(() => {
            alert('Não foi possível cadastrar o usuário.')
            props.setHabilitado(false)
            setEntrar('Register')
        })
        }}> {entrar==='Register' ? entrar : <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="white" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />}
         </Button>

        </Input>
        <Link to='/'><p className="cadastro" > Already have an account? Log in!</p></Link>
        </Animated>

        </Home>
    )
}


const Home=styled.div`
height: 100vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
a{

}
.cadastro{
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: black;
}
`



