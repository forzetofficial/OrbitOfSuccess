import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import { useState } from "react";
import TextField from '@mui/material/TextField';


export function AuthPage() {
  const navigate = useNavigate();
  const click = () => { navigate('/');};
  const clickreg = () => { navigate('/registration');};
  const helppass = () => {};

  return (
    <>
    <div className="back">
      <div className="indiv">
        <div className="Headbox">
          <header className="HEAD">ВХОД В ПРОФИЛЬ</header>
          <h5 className="Logintext">Логин</h5>
          <div className="Loginbox"><TextField label="Enter your E-mail..." id="fullWidth" /></div>
          <h5 className="Passwordtext">Пароль</h5>
          <div className="Passwordbox"><TextField label="Enter your password..." id="fullWidth" /></div>
          <Button onClick={helppass}
                  sx={{
                    color: "white",
                    fontSize: 10,
                    top: 15,
                    left: 57,
                    fontFamily: "Montserrat",
                  }}
                >
                  Забыли пароль?
          </Button>
          <div className="Button"><button className="buttonAuth">Войти</button></div>
          <div className="Button"><button className="buttonReg" onClick={clickreg}>Зарегистрироваться</button></div>
          <Button onClick={click}
                    color="white"
                    sx={{
                      color: "white",
                      fontSize: 10,
                      top: 50,
                      left: 155,
                    }}
                  >Назад на главную страницу</Button>
        </div>
      </div>  
    </div>
    </>
  );
}
