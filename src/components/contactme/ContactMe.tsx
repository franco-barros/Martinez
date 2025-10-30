"use client";

import React, { useState } from "react";
import styles from "../../styles/contactme/ContactMe.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import {
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    alert("Formulario enviado (simulación)");
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>@ Contacto</div>
        </div>

        <p className={styles.subHeading}>
          Responderemos tu consulta lo antes posible.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        <div className={styles.contactWrapper}>
          {/* Tarjeta izquierda con info */}
          <div className={`${styles.card} ${styles.contactInfo}`}>
            <h3 className={styles.cardTitle}>
              <FaInfoCircle style={{ marginRight: "0.5rem" }} />
              Información de Contacto
            </h3>

            <h4 className={styles.infoTitle}>
              <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
              Dirección
            </h4>
            <p>Calle Falsa 123</p>
            <p>Ciudad Ejemplo, País Ficticio</p>

            <h4 className={styles.infoTitle}>
              <FaPhoneAlt style={{ marginRight: "0.5rem" }} />
              Teléfonos
            </h4>
            <p>
              <FaWhatsapp style={{ marginRight: "0.5rem" }} />
              264-417-1075
            </p>

            <h4 className={styles.infoTitle}>
              <FaEnvelope style={{ marginRight: "0.5rem" }} />
              Correo
            </h4>
            <p>contacto@ficticio.com</p>
          </div>

          {/* Tarjeta con formulario (solo maqueta) */}
          <form
            onSubmit={handleSubmit}
            className={`${styles.card} ${styles.contactForm}`}
          >
            <h3 className={styles.cardTitle}>
              <FaEnvelopeOpenText style={{ marginRight: "0.5rem" }} />
              Envíanos un mensaje
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Correo"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
            />
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              value={formData.message}
              onChange={handleChange}
              className={styles.textAreaField}
            />
            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.3}>
        <div className={styles.socialCardWrapper}>
          <div className={`${styles.card} ${styles.socialCard}`}>
            <h3 className={styles.cardTitle}>Seguinos en nuestras redes</h3>
            <p>Mantenete informado con nuestras novedades.</p>
            <div className={styles.socialButtons}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.instagramButton}`}
              >
                <FaInstagram style={{ marginRight: "0.5rem" }} />
                Instagram
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.facebookButton}`}
              >
                <FaFacebook style={{ marginRight: "0.5rem" }} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ContactMe;
