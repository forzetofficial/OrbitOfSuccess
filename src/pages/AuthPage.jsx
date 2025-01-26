import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import { useState } from "react";


export function AuthPage() {
  const navigate = useNavigate();
  const click = () => { navigate('/');};

  return (
    <>
    <div className="back">
      <div className="indiv">
        <div className="Headbox">
          <header className="HEAD">ВХОД В ПРОФИЛЬ</header>
          <h5 className="Logintext">Логин</h5>
          <div className="Loginbox"></div>
          <h5 className="Passwordtext">Пароль</h5>
          <div className="Passwordbox"></div>
          <h5 className="RevPasswordtext">Забыли пароль?</h5>
          <div className="Button"><button class="buttonAuth">Войти</button></div>
          <div className="Button"><button class="buttonReg">Зарегестрироваться</button></div>
          <Button onClick={click}
                    color="white"
                    sx={{
                      color: "white",
                      fontSize: 10,
                      top: 50,
                      left: 160,
                    }}
                  >Назад на главную страницу</Button>
        </div>
      </div>  
    </div>
    </>
  );
}
