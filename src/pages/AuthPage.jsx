import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function AuthPage() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/");
  };
  const clickreg = () => {
    navigate("/registration");
  };

  const helppass = () => {
    toggleModal;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      console.log(isModalOpen);
      setIsModalOpen(false);
    } else {
      console.log(isModalOpen);
      setIsModalOpen(true);
    }
  };

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChangep = (event) => {
    setPassword(event.target.value);
  };

  const handleChangee = (event) => {
    setEmail(event.target.value);
  };

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const clicktest = () => {
    console.log(emailRegex.test(email));
    console.log(passwordRegex.test(password)); // Здесь вы можете использовать значение пароля
  };

  return (
    <>
      <div className="back">
        <div className="indiv">
          <div className="Headbox">
            <header className="HEAD">ВХОД В ПРОФИЛЬ</header>
            <h5 className="Logintext">Логин</h5>
            <div className="Loginbox">
              <TextField
                id="fullWidth"
                type="email"
                value={email}
                onChange={handleChangee}
                fullWidth
              />
            </div>
            <h5 className="Passwordtext">Пароль</h5>
            <div className="Passwordbox">
              <TextField
                id="fullWidth"
                type="password"
                value={password}
                onChange={handleChangep}
                fullWidth
              />
            </div>
            <Button
              onClick={toggleModal}
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
            <div className="Button">
              <button className="buttonAuth" onClick={clicktest}>
                Войти
              </button>
            </div>
            <div className="Button">
              <button className="buttonReg" onClick={clickreg}>
                Зарегистрироваться
              </button>
            </div>
            <Button
              onClick={click}
              color="white"
              sx={{
                color: "white",
                fontSize: 10,
                top: 50,
                left: 155,
              }}
            >
              Назад на главную страницу
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
