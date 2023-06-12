import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./components/Home";
function App() {

  const[habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({email:'' , password:''})
  const [dadosusuario, setDadosUsuario] =  React.useState()
  const [dadosentrada, setDadosEntrada] = React.useState()
  const [dadossaida, setDadosSaida] = React.useState()
  


  return (

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login habilitado={habilitado} setHabilitado={setHabilitado} login={login} setLogin={setLogin} dadosusuario={dadosusuario} setDadosUsuario={setDadosUsuario}></Login>}></Route>
      <Route path="/cadastro" element={<Signup habilitado={habilitado} setHabilitado={setHabilitado}></Signup>}></Route>
      <Route path="/home" element={<Home dadosentrada={dadosentrada} dadossaida={dadossaida} dadosusuario={dadosusuario}></Home>}></Route>
      </Routes>
    </BrowserRouter>

  );
}


export default App;
