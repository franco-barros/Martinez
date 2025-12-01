"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { SlideInFromLeft } from "../shared/slideInfromleft";
import { SlideInFromRight } from "../shared/slideInfromright";
import { User } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        {/* BADGE */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <User size={18} style={{ marginRight: "0.4rem" }} />
            Sobre mí
          </span>
        </div>

        {/* ============================
            MOBILE VERSION
        ============================ */}
        <div className={styles.mobileLayout}>
          <SlideInFromLeft>
            <div className={styles.mobileImage}>
              <Image
                src="/images/professionals.png"
                alt="Foto Paula"
                fill
                style={{ objectFit: "cover", borderRadius: "16px" }}
                priority
              />
            </div>
          </SlideInFromLeft>

          <SlideInFromRight>
            <div className={styles.infoWrapper}>
              <div className={styles.textWrapper}>
                <p>
                  Soy <strong>Paula Martínez</strong>, Contadora Pública con más
                  de seis años de experiencia en el ámbito contable,
                  administrativo y en gestión de recursos humanos. Me
                  especializo en{" "}
                  <strong> asesoría impositiva y contable </strong>, gestión
                  laboral, certificaciones contables, asesoría en inicio de
                  negocios acompañando a empresas, profesionales y emprendedores
                  en la organización de sus finanzas y en la toma de decisiones.
                </p>

                <p>
                  Trabajo con <strong>compromiso, precisión y cercanía</strong>{" "}
                  para brindar un servicio contable confiable y orientado a
                  resultados sostenibles.
                </p>

                <div className={styles.iconWrapper}>
                  <Image
                    src="/icons/LogoA2.png"
                    alt="Icono decorativo"
                    width={42}
                    height={42}
                    className={styles.decorationIcon}
                  />
                </div>
              </div>
            </div>
          </SlideInFromRight>
        </div>

        {/* ============================
            DESKTOP VERSION
        ============================ */}
        <div className={styles.desktopLayout}>
          <SlideInFromLeft>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/professionals.png"
                alt="Foto Paula"
                fill
                style={{ objectFit: "cover", borderRadius: "16px 0 0 16px" }}
                priority
              />
            </div>
          </SlideInFromLeft>

          <SlideInFromRight>
            <div className={styles.infoWrapper}>
              <div className={styles.textWrapper}>
                <p>
                  Soy <strong>Paula Martínez</strong>, Contadora Pública con más
                  de seis años de experiencia en el ámbito contable,
                  administrativo y en gestión de recursos humanos. Me
                  especializo en{" "}
                  <strong> asesoría impositiva y contable </strong>, gestión
                  laboral, certificaciones contables, asesoría en inicio de
                  negocios acompañando a empresas, profesionales y emprendedores
                  en la organización de sus finanzas y en la toma de decisiones.
                </p>

                <p>
                  Trabajo con <strong>compromiso, precisión y cercanía</strong>{" "}
                  para brindar un servicio contable confiable y orientado a
                  resultados sostenibles.
                </p>

                <div className={styles.iconWrapper}>
                  <Image
                    src="/icons/LogoA2.png"
                    alt="Icono decorativo"
                    width={42}
                    height={42}
                    className={styles.decorationIcon}
                  />
                </div>
              </div>
            </div>
          </SlideInFromRight>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutUs;
