import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import { useState } from "react";


export function HomePage() { 

  const navigate = useNavigate();
  const handleButtonClick = () => { navigate('/auth');}; 
  const napr = () => { navigate('/directions');}; 
  const edu = () => { navigate('/education');}; 
  const ogeege = () => { navigate('/preparation');}; 
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
                      fontSize: 12,
                      top: -7,
                    }}
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
                      fontSize: 12,
                      top: -7,
                    }}
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
                      fontSize: 12,
                      top: -7,
                    }}
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
                <h4 className="Opsis">Платформа предлагает все необходимое для развития
                                      молодого онлайн-образовательного предприятия.
                                      Все инструменты для маркетинга, продаж объединены
                                      в одном месте.</h4>
              </div>
              <div className="ButtonAuth">
              <button className="buttonAu" onClick={handleButtonClick}>Попробовать</button>
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
