import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function HomePage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/auth");
  };
  const napr = () => {
    navigate("/directions");
  };
  const edu = () => {
    navigate("/education");
  };
  const ogeege = () => {
    navigate("/preparation");
  };

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <>
      <div className="container">
        <div className="square">
          <header className="Heading">
            <nav className="nav">
              <ul className="list">
                <li>
                  <Button
                    onClick={napr}
                    color="white"
                    sx={{
                      fontSize: 8,
                      top: -3,
                      transition: "transform 0.2s", // Плавный переход
                      transform: hover1 ? "scale(1.1)" : "scale(1)", // Увеличение при наведении
                    }}
                    onMouseEnter={() => setHover1(true)} // Устанавливаем состояние при наведении
                    onMouseLeave={() => setHover1(false)} // Сбрасываем состояние при уходе мыши
                  >
                    Направления
                  </Button>
                </li>
                <li>|</li>
                <li>
                  <Button
                    onClick={edu}
                    color="white"
                    sx={{
                      fontSize: 8,
                      top: -3,
                      transition: "transform 0.2s", // Плавный переход
                      transform: hover2 ? "scale(1.1)" : "scale(1)", // Увеличение при наведении
                    }}
                    onMouseEnter={() => setHover2(true)} // Устанавливаем состояние при наведении
                    onMouseLeave={() => setHover2(false)} // Сбрасываем состояние при уходе мыши
                  >
                    Обучение
                  </Button>
                </li>
                <li>|</li>
                <li>
                  <Button
                    onClick={ogeege}
                    color="white"
                    sx={{
                      fontSize: 8,
                      top: -3,
                      transition: "transform 0.2s", // Плавный переход
                      transform: hover3 ? "scale(1.1)" : "scale(1)", // Увеличение при наведении
                    }}
                    onMouseEnter={() => setHover3(true)} // Устанавливаем состояние при наведении
                    onMouseLeave={() => setHover3(false)} // Сбрасываем состояние при уходе мыши
                  >
                    Подготовка к Огэ\Егэ
                  </Button>
                </li>
              </ul>
            </nav>
          </header>
          <div className="Inbox">
            <ul>
              <li className="orb">Орбита</li>
              <li className="ysp">успеха</li>
              <li className="n">стань капитаном своей судьбы</li>
              <li className="n">и создай свою историю</li>
              <div className="Inbox2">
                <hr></hr>
                <h4 className="Opsis">
                  Платформа предлагает все необходимое для развития молодого
                  онлайн-образовательного предприятия. Все инструменты для
                  маркетинга, продаж объединены в одном месте.
                </h4>
              </div>
              <div className="ButtonAuth">
                <button className="buttonAu" onClick={handleButtonClick}>
                  Попробовать
                </button>
              </div>
            </ul>
          </div>
        </div>
        <img
          className="img"
          src="https://i.pinimg.com/originals/1f/ab/80/1fab805dc3dd2aab386b855e4ef9748c.jpg"
          alt="Test"
        />
      </div>
    </>
  );
}
