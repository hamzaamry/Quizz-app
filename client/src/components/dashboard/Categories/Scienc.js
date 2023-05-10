import React from "react";

const questions = [
  {
    questionText: "Who proposed the theory of relativity?",
    answerOptions: [
      { answerText: "Isaac Newton", isCorrect: false },
      { answerText: "Albert Einstein", isCorrect: true },
      { answerText: "Galileo Galilei", isCorrect: false },
      { answerText: "Charles Darwin", isCorrect: false },
    ],
  },

  {
    questionText:
      "What is the smallest particle of an element that retains its properties?",
    answerOptions: [
      { answerText: "Atom", isCorrect: true },
      { answerText: "Molecule", isCorrect: false },
      { answerText: "Proton", isCorrect: false },
      { answerText: "Electron", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is the process by which plants make their own food called?",
    answerOptions: [
      { answerText: "Photosynthesis", isCorrect: true },
      { answerText: "Respiration", isCorrect: false },
      { answerText: "Fermentation", isCorrect: false },
      { answerText: "Digestion", isCorrect: false },
    ],
  },

  {
    questionText:
      "What is the name of the force that opposes motion between two surfaces that are in contact?",
    answerOptions: [
      { answerText: "Gravity", isCorrect: false },
      { answerText: "Friction", isCorrect: true },
      { answerText: "Tension", isCorrect: false },
      { answerText: "Inertia", isCorrect: false },
    ],
  },
  {
    questionText: "What is the unit of measurement for electrical resistance?",
    answerOptions: [
      { answerText: "Watt", isCorrect: false },
      { answerText: "Ampere", isCorrect: false },
      { answerText: "Volt", isCorrect: false },
      { answerText: "Ohm", isCorrect: true },
    ],
  },

  {
    questionText:
      "What is the process by which a gas turns into a liquid called?",
    answerOptions: [
      { answerText: "Condensation", isCorrect: true },
      { answerText: "Evaporation", isCorrect: false },
      { answerText: "Sublimation", isCorrect: false },
      { answerText: "Solidification", isCorrect: false },
    ],
  },

  {
    questionText:
      "What is the name of the process by which a cell divides into two identical daughter cells?",
    answerOptions: [
      { answerText: "Mitosis", isCorrect: true },
      { answerText: "Meiosis", isCorrect: false },
      { answerText: "Photosynthesis", isCorrect: false },
      { answerText: "Respiration", isCorrect: false },
    ],
  },

  {
    questionText: "Which of the following is not a renewable source of energy?",
    answerOptions: [
      { answerText: "Solar", isCorrect: false },
      { answerText: "Wind", isCorrect: false },
      { answerText: "Oil", isCorrect: true },
      { answerText: "Hydro", isCorrect: false },
    ],
  },

  {
    questionText:
      "What is the name of the particle that carries a negative charge in an atom?",
    answerOptions: [
      { answerText: "Proton", isCorrect: false },
      { answerText: "Neutron", isCorrect: false },
      { answerText: "Electron", isCorrect: true },
      { answerText: "Photon", isCorrect: false },
    ],
  },

  {
    questionText:
      "What is the name of the process by which water changes from a liquid to a gas?",
    answerOptions: [
      { answerText: "Evaporation", isCorrect: true },
      { answerText: "Condensation", isCorrect: false },
      { answerText: "Sublimation", isCorrect: false },
      { answerText: "Solidification", isCorrect: false },
    ],
  },
];

const Scienc = () => {
  return <div>Scienc</div>;
};

export { questions };
export default Scienc;
