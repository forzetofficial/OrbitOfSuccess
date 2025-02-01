import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import axios from "axios";

import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";


export function RefreshPage() {
  const navigate = useNavigate();
  const params = useParams();

  const clickrev = () => {navigate("/auth");};

  const [pass1, setPasswordreg1] = useState("");
  const Pass1set = (event) => {setPasswordreg1(event.target.value);};
  const [pass2, setPasswordreg2] = useState("");
  const Pass2set = (event) => {setPasswordreg2(event.target.value);};
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

  const clicktest = async () => {
    const link = params.url;

    if (passwordRegex.test(pass1) && pass1 === pass2) {
      const password = pass1;
      try {
        const response = await axios.post("http://31.130.150.188:8080/api/v1/auth/change_password", {
            link,
            password,
        });


        if (response.status === 200) { 
            navigate("/Auth");
        } 
      } catch (error) {

        console.error('Error during registration:', error);
        if (error.response) {

          console.log("Error status:", error.response.status);
          console.log("Error data:", error.response.data);
        } else {

          console.log("Error message:", error.message);
        }
      }
    }
  };

    return <>
        <div className="back">
        <div className="indiv">
          <div className="Headbox">
            <header className="HEAD">ИЗМЕНЕНИЕ ПАРОЛЯ</header>
            <h5 className='Smena'>Введите новый пароль чтобы изменить текущий </h5>
            <h5 className="Passwordtext2">Новый пароль</h5>
            <div className="Passwordbox1">
              <TextField 
              id="fullWidth" 
              type="password"
                value={pass1}
                onChange={Pass1set}
              />
            </div>
            <h5 className="Passwordtext11">Повтор пароля </h5>
            <div className="Passwordbox12">
              <TextField 
              id="fullWidth" 
              type="password"
                value={pass2}
                onChange={Pass2set}
              />
            </div>
            <div className="Button">
              <button className="buttonrev" onClick={clicktest}>
                Сохранить
              </button>
            </div>
            <Button
              onClick={clickrev}
              color="white"
              sx={{
                color: "white",
                fontSize: 11,
                top: 40,
                left: 190,
              }}
            >
              Назад ко входу
            </Button>
          </div>
        </div>
      </div>
    </>
  }