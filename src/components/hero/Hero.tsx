"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageCarousel from "../imagecarrousel";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Carousel de fondo */}
      <ImageCarousel />

      {/* Overlay oscuro */}
      <div className={styles.overlay}></div>

      {/* Contenido del Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.content}
      >
        {/* Logo grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.heroLogoWrapper}
        >
          <Image
            src="/icons/LogoB1.1.png"
            alt="Logo Paula Martínez"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        {/* Frase */}
        <p className={styles.phrase}>
          Asesoría contable para decisiones seguras y eficientes
        </p>

        <div className={styles.buttons}>
          <button
            onClick={() => handleScrollTo("contact")}
            className={`${styles.btn} ${styles.btnPrimary}`}
            type="button"
          >
            Contactar
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
