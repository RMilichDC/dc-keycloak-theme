import React from "react";
import Particles from "react-tsparticles";
import styles from "./DcLogin.module.scss";
import logo from "./DigitalClues.svg";
import {particlesOptions, particle} from './utils'

const ParticlesWrapper = () => {
  return (
    <div className={styles.header_container}>
      
      <div className={styles.dc_label_container}>
        <h1 className={styles.digital_clues_label}>ProFound</h1>
        <div className={styles.separator}></div>
        <img src={logo} alt="digital-clues" />
      </div>

      <Particles
        id="tsparticles"
        options={{
          ...particlesOptions,
          particles: {
            ...particle,
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesWrapper;
