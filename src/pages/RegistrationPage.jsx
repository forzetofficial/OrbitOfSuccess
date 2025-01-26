import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import { useState } from "react";
import TextField from '@mui/material/TextField';

export function RegistrationPage() {
  const navigate = useNavigate();
  const click = () => { navigate('/');};
  const clickrev = () => { navigate('/auth');};

  return (
    <>
    <div className="back">
      <div className="indiv">
        <div className="Headbox">
          <header className="HEAD">РЕГИСТАЦИЯ</header>
          <h5 className="Logintext1">Логин</h5>
          <div className="Loginbox1"><TextField label="Enter your Login..." id="fullWidth" /></div>
          <h5 className="Etext">E-mail</h5>
          <div className="Ebox"><TextField label="Enter your E-mail..." id="fullWidth" /></div>
          <h5 className="Passwordtext1">Пароль</h5>
          <div className="Passwordbox1"><TextField label="Enter your Password..." id="fullWidth" /></div>
          <h5 className="Passwordtext11">Повтор пароля  </h5>
          <div className="Passwordbox12"><TextField label="Enter your  repeat Password..." id="fullWidth" /></div>
          <div className="Button"><button className="buttonrev" onClick={clickrev}>Зарегистрироваться</button></div>
          <Button onClick={clickrev}
                    color="white"
                    sx={{
                      color: "white",
                      fontSize: 11,
                      top: 40,
                      left: 190,
                    }}
                  >Назад ко входу</Button>
        </div>
      </div>  
    </div>
    </>
  );
}

