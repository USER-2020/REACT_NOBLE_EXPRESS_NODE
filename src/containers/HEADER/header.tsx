import React, { useEffect, useState } from "react";
import Navbar from "../../components/NAVBAR/navbar";
import "./header.css";
import shirt1 from "../../assets/imgs/header/FRONT.png";
import shirt2 from "../../assets/imgs/header/BACK.png";
import { Fab, Fade, Grow } from "@mui/material";
import { ArrowDownward, Navigation } from "@mui/icons-material";
import MyThree from "../../components/THREEJS/myThree";

const Header = ({ delayRender }) => {
  const [checked, setChecked] = useState(false);
  const [showRenderSection, setShowRenderSection] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleWindowScroll = (e) => {
    console.log(e.clientY);
    const newY = window.scrollY + e.clientY + 100; // Ajusta según sea necesario
    window.scrollTo({
      top: newY,
      behavior: "smooth", // Agrega 'smooth' para un desplazamiento suave
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowRenderSection(true);
    }, delayRender);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="shirts">
          <div className="shirt1">
            <img src={shirt1} alt="" />
          </div>
          <div className="texto">
            ATREVETETE SALTE DEL CLOSE
          </div>
          <div className="shirt2">
            <img src={shirt2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
