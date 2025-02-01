import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";

const EmailModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    e.preventDefault();
    if (emailRegex.test(email)) {
      try {
        const response = await axios.post("http://31.130.150.188:8080/api/v1/auth/send_password_link", {
          email,
      });

        if (response.status === 200) { 
          onClose();
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

  if (!isOpen) return null;

  return (
      <div style={modalStyle}>
          <div style={modalContentStyle}>
              <h2>Введите ваш Email</h2>
              <form onSubmit={handleSubmit}>
                  <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Введите ваш email" 
                      required 
                  />
                  <button type="submit">Отправить</button>
                  <button type="button1" onClick={onClose}>Закрыть</button>
              </form>
          </div>
      </div>
  );
};


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
      setIsModalOpen(!isModalOpen);
  };

  

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChangep = (event) => {setPassword(event.target.value);};
  const handleChangee = (event) => {setEmail(event.target.value);};

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

  const clicktest = async () => {
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      try {
        const response = await axios.post("http://31.130.150.188:8080/api/v1/auth/login", {
          email,
          password,
      });

        if (response.status === 200) { 
          navigate("/homemain");
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
            <header className="HEAD">ВХОД В ПРОФИЛЬ</header>
            <h5 className="Logintext">Логин</h5>
            <div className="Loginbox">
              <TextField
                id="fullWidth"
                type="email"
                value={email}
                onChange={handleChangee}
              />
            </div>
            <h5 className="Passwordtext">Пароль</h5>
            <div className="Passwordbox">
              <TextField
                id="fullWidth"
                type="password"
                value={password}
                onChange={handleChangep}

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
            <EmailModal isOpen={isModalOpen} onClose={toggleModal} />
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


const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};