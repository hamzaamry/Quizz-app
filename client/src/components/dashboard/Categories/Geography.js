import React from "react";

   const questionsGeo = [
    {
      questionText: "What is the capital city of Australia?",
      answerOptions: [
        { answerText: "Sydney", isCorrect: false },
        { answerText: "Melbourne", isCorrect: false },
        { answerText: "Canberra", isCorrect: true },
        { answerText: "Brisbane", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the largest country by land area?",
      answerOptions: [
        { answerText: "Russia", isCorrect: true },
        { answerText: "China", isCorrect: false },
        { answerText: "Canada", isCorrect: false },
        { answerText: "USA", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the longest river in Africa?",
      answerOptions: [
        { answerText: "Nile", isCorrect: true },
        { answerText: "Congo", isCorrect: false },
        { answerText: "Niger", isCorrect: false },
        { answerText: "Zambezi", isCorrect: false },
      ],
    },
    {
      questionText: "What is the highest mountain peak in the world?",
      answerOptions: [
        { answerText: "Mount Kilimanjaro", isCorrect: false },
        { answerText: "Mount Everest", isCorrect: true },
        { answerText: "K2", isCorrect: false },
        { answerText: "Mount McKinley", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the largest ocean in the world?",
      answerOptions: [
        { answerText: "Indian Ocean", isCorrect: false },
        { answerText: "Atlantic Ocean", isCorrect: false },
        { answerText: "Arctic Ocean", isCorrect: false },
        { answerText: "Pacific Ocean", isCorrect: true },
      ],
    },
    {
      questionText: "Which continent has the highest population density?",
      answerOptions: [
        { answerText: "Africa", isCorrect: false },
        { answerText: "Asia", isCorrect: true },
        { answerText: "Europe", isCorrect: false },
        { answerText: "North America", isCorrect: false },
      ],
    },
    {
      questionText: "What is the largest desert in the world?",
      answerOptions: [
        { answerText: "Sahara", isCorrect: true },
        { answerText: "Gobi", isCorrect: false },
        { answerText: "Kalahari", isCorrect: false },
        { answerText: "Arabian", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the highest waterfall in the world?",
      answerOptions: [
        { answerText: "Victoria Falls", isCorrect: false },
        { answerText: "Angel Falls", isCorrect: true },
        { answerText: "Niagara Falls", isCorrect: false },
        { answerText: "Iguazu Falls", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the only continent with no permanent residents?",
      answerOptions: [
        { answerText: "Antarctica", isCorrect: true },
        { answerText: "Africa", isCorrect: false },
        { answerText: "Australia", isCorrect: false },
        { answerText: "South America", isCorrect: false },
      ],
    },

    {
      questionText: "What is the largest country in South America?",
      answerOptions: [
        { answerText: "Argentina", isCorrect: false },
        { answerText: "Peru", isCorrect: false },
        { answerText: "Brazil", isCorrect: true },
        { answerText: "Chile", isCorrect: false },
      ]
    }
  ];


  const Geography = () => {
    return <div>Geo</div>;
  };
  
  export { questionsGeo };
  export default Geography;

