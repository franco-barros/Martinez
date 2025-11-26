"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { User } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <User size={18} style={{ marginRight: "0.4rem" }} />
            Sobre mí
          </span>
        </div>

        <div className={styles.descriptionCard}>
          {/* Imagen */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/professionals.png"
              alt="Foto Paula"
              fill
              style={{ objectFit: "cover", borderRadius: "16px 0 0 16px" }}
              priority
            />
          </div>

          {/* Contenedor de descripción */}
          <div className={styles.infoWrapper}>
            <div className={styles.textWrapper}>
              <p>
                Soy <strong>Paula Martínez</strong>, Contadora Pública con más
                de seis años de experiencia en el ámbito contable,
                administrativo y en gestión de recursos humanos. Me especializo
                en <strong>asesoría impositiva y contable</strong>, gestión
                laboral, certificaciones contables, asesoría en inicio de
                negocios acompañando a empresas, profesionales y emprendedores
                en la organización de sus finanzas y en la toma de decisiones.
              </p>

              <p>
                Trabajo con <strong>compromiso, precisión y cercanía</strong>{" "}
                para brindar un servicio contable confiable y orientado a
                resultados sostenibles.
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
