import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

import axios from "axios";

export function RegistrationPage() {
  const navigate = useNavigate();
  const clickrev = () => {navigate("/auth");};
  const setregApi = () => {navigate("/auth");};

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;
  const loginRegex = /^[a-z0-9](-?[a-z0-9]){2,20}$/i;

  const [login, setlogin] = useState("");
  const Loginset = (event) => {setlogin(event.target.value);};
  const [email, setEmail] = useState("");
  const Emailset = (event) => {setEmail(event.target.value);};
  const [pass1, setPasswordreg1] = useState("");
  const Pass1set = (event) => {setPasswordreg1(event.target.value);};
  const [pass2, setPasswordreg2] = useState("");
  const Pass2set = (event) => {setPasswordreg2(event.target.value);};


  const clicktest = async () => {
    if (loginRegex.test(login) && emailRegex.test(email) && passwordRegex.test(pass1) && pass1 === pass2) {
      const password = pass1;
      const username = login;
  
      try {
        const response = await axios.post("http://31.130.150.188:8080/api/v1/auth/register", {
          email,
          password,
          username,
        });


        if (response.status === 200) { 
          console.log("Success"); 
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
    } else {
      console.log("Validation failed");
    }
  };
  

  return (
    <>
      <div className="back">
        <div className="indiv">
          <div className="Headbox">
            <header className="HEAD">РЕГИСТАЦИЯ</header>
            <h5 className="Logintext1">Логин</h5>
            <div className="Loginbox1">
              <TextField 
              id="fullWidth"
              type="login"
                value={login}
                onChange={Loginset}
              />
            </div>
            <h5 className="Etext">E-mail</h5>
            <div className="Ebox">
              <TextField 
              id="fullWidth" 
              type="email"
                value={email}
                onChange={Emailset}
              />
            </div>
            <h5 className="Passwordtext1">Пароль</h5>
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
                Зарегистрироваться
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
  );
}
