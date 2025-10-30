"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/practicearea/PracticeAreas.module.css";
import {
  Layers,
  Briefcase,
  Users,
  FileText,
  Rocket,
  Calculator,
  TrendingUp,
} from "lucide-react";
import PracticeAreasMobile from "./practiceareasmobile";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    title: "Asesoría impositiva y contable",
    description:
      "Alta de Monotributo, Responsable Inscripto y análisis de ventajas y desventajas de cada situación. Presentación de declaraciones juradas y recategorizaciones. Asesoramiento y gestión impositiva integral para personas físicas y jurídicas. Defensa ante organismos de fiscalización nacionales y provinciales. Planificación fiscal para una gestión más ordenada y sostenible. Control de documentación contable y cumplimiento normativo. Análisis de informes contables y económicos.",
    icon: <Briefcase size={28} />,
  },
  {
    id: "2",
    title: "Gestión Laboral",
    description:
      "Altas y bajas de personal, liquidación de sueldos y asesoramiento en normativa laboral. Proceso de selección de personal, entrevistas e inducción. Diseño de procesos administrativos, organigramas y manuales de funciones. Optimización de la gestión interna y coordinación entre áreas.",
    icon: <Users size={28} />,
  },
  {
    id: "3",
    title: "Certificaciones Contables",
    description:
      "Elaboración y emisión de certificaciones contables y laborales. Informes para organismos públicos, entidades financieras o particulares.",
    icon: <FileText size={28} />,
  },
  {
    id: "4",
    title: "Asesoría en Inicio de Negocios",
    description:
      "Asistencia integral para emprendedores y nuevas empresas. Orientación en la elección de estructuras legales, planificación fiscal y gestión administrativa inicial.",
    icon: <Rocket size={28} />,
  },
  {
    id: "5",
    title: "Gestión Financiera y Presupuestaria",
    description:
      "Elaboración y control de presupuestos, análisis de flujo de caja y planificación de inversiones. Implementación de estrategias para mejorar la rentabilidad y optimizar los recursos financieros de tu negocio.",
    icon: <Calculator size={28} />,
  },
  {
    id: "6",
    title: "Consultoría Estratégica Empresarial",
    description:
      "Análisis integral del funcionamiento del negocio, detección de oportunidades de mejora y acompañamiento en la toma de decisiones clave. Planificación estratégica para el crecimiento sostenible de la empresa.",
    icon: <TrendingUp size={28} />,
  },
];

const PracticeAreas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderArea = (area: PracticeArea) => (
    <article key={area.id} id={`area-${area.id}`} className={styles.areaCard}>
      {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}
      <h4>{area.title}</h4>
      <p>{area.description}</p>
    </article>
  );

  return (
    <section id="section-practiceareas" className={styles.practiceAreasSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Layers size={18} style={{ marginRight: "0.4rem" }} />
            Nuestros servicios
          </span>
        </div>

        <p className={styles.description}>
          Brindo asesoramiento integral en materia impositiva, contable, laboral
          y empresarial, adaptado a las necesidades de cada cliente —ya sea
          emprendedor, profesional o empresa consolidada.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        {isMobile ? (
          <PracticeAreasMobile practiceAreas={practiceAreas} />
        ) : (
          <div className={styles.gridDesktop}>
            {practiceAreas.map(renderArea)}
          </div>
        )}
      </FadeInOnScroll>
    </section>
  );
};

export default PracticeAreas;
