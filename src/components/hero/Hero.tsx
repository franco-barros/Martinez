"use client";

import React from "react";
import { motion } from "framer-motion";
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
        <h1 className={styles.title}>Paula Martínez</h1>
        <h2 className={styles.subtitle}>Contadora Pública</h2>

        <p className={styles.description}>
          Asesoramiento contable para decisiones seguras y eficientes.
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
