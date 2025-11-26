"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "General",
    questions: [
      {
        question: "¿Qué servicios ofrece el estudio contable?",
        answer:
          "Brindamos asesoría contable, impositiva, laboral, societaria y financiera para personas y empresas.",
      },
      {
        question: "¿Cómo puedo solicitar una consulta?",
        answer:
          "Podés contactarnos por WhatsApp, correo electrónico o completando el formulario de contacto.",
      },
      {
        question: "¿Qué documentación necesito para una primera reunión?",
        answer:
          "Depende del caso, pero generalmente DNI, constancia de AFIP, últimos pagos, facturación y documentación del negocio.",
      },
    ],
  },
  {
    category: "Monotributo",
    questions: [
      {
        question: "¿Cómo sé en qué categoría de Monotributo debo inscribirme?",
        answer:
          "Analizamos tu facturación, actividad y particularidades de tu caso para determinar la categoría correcta.",
      },
      {
        question: "¿Qué pasa si me excedo en mi categoría?",
        answer:
          "Podés recategorizarte o pasar al Régimen General según corresponda. Te asesoramos en todo el proceso.",
      },
      {
        question: "¿Cada cuánto se realiza la recategorización?",
        answer:
          "La recategorización obligatoria se realiza dos veces al año según lo establecido por AFIP.",
      },
    ],
  },
  {
    category: "Impuestos",
    questions: [
      {
        question: "¿Qué impuestos debo pagar como autónomo o empresa?",
        answer:
          "Depende del tipo de actividad. Puede incluir IVA, Ganancias, Autónomos, Ingresos Brutos, entre otros.",
      },
      {
        question: "¿Qué documentación necesito para declarar Ganancias?",
        answer:
          "Comprobantes de ingresos, gastos, extractos bancarios, facturas y documentación patrimonial.",
      },
      {
        question: "¿Qué pasa si tengo deuda con AFIP?",
        answer:
          "Te ayudamos a regularizar tu situación mediante planes de pago, refinanciación o asesoramiento personalizado.",
      },
    ],
  },
  {
    category: "Empleados y Sueldos",
    questions: [
      {
        question: "¿Realizan liquidación de sueldos?",
        answer:
          "Sí, calculamos recibos de sueldo, cargas sociales, altas/bajas y cumplimos con obligaciones laborales.",
      },
      {
        question: "¿Qué necesito para registrar un empleado?",
        answer:
          "Datos del trabajador, alta temprana, categoría laboral y documentación del empleador.",
      },
      {
        question: "¿Hacen liquidación de vacaciones o indemnizaciones?",
        answer:
          "Sí, realizamos el cálculo completo y asesoramos al empleador en todo el proceso.",
      },
    ],
  },
];

const FAQTabsCarousel: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    null
  );

  const toggleQuestion = (index: number) => {
    setActiveQuestionIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className={styles.tabList}>
        {faqItems.map((group, index) => (
          <button
            key={group.category}
            className={`${styles.tabItem} ${
              index === activeCategoryIndex ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setActiveCategoryIndex(index);
              setActiveQuestionIndex(null);
            }}
          >
            {group.category}
          </button>
        ))}
      </div>

      <ul className={styles.questionList}>
        {faqItems[activeCategoryIndex].questions.map((item, index) => {
          const isActive = activeQuestionIndex === index;

          return (
            <FadeInOnScroll key={item.question} delay={index * 0.1}>
              <button
                className={styles.questionItem}
                tabIndex={0}
                onClick={() => toggleQuestion(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleQuestion(index);
                }}
              >
                <div className={styles.questionHeader}>
                  <span
                    className={
                      isActive ? styles.answerText : styles.questionText
                    }
                  >
                    {isActive ? item.answer : item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${
                      isActive ? styles.chevronOpen : ""
                    }`}
                  />
                </div>
              </button>
            </FadeInOnScroll>
          );
        })}
      </ul>
    </>
  );
};

export default FAQTabsCarousel;
