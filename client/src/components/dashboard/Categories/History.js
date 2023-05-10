import React from 'react'
  
  const questionsHistory = [
    {
    questionText: 'Who was the first president of the United States?',
    answerOptions: [
    { answerText: 'George Washington', isCorrect: true },
    { answerText: 'Abraham Lincoln', isCorrect: false },
    { answerText: 'Thomas Jefferson', isCorrect: false },
    { answerText: 'John F. Kennedy', isCorrect: false },
    ],
    },
    {
    questionText: 'Which event started World War I?',
    answerOptions: [
    { answerText: 'The sinking of the Lusitania', isCorrect: false },
    { answerText: 'The assassination of Archduke Franz Ferdinand', isCorrect: true },
    { answerText: 'The signing of the Treaty of Versailles', isCorrect: false },
    { answerText: 'The invasion of Poland', isCorrect: false },
    ],
    },
    {
    questionText: 'Who discovered America?',
    answerOptions: [
    { answerText: 'Christopher Columbus', isCorrect: true },
    { answerText: 'Marco Polo', isCorrect: false },
    { answerText: 'Vasco da Gama', isCorrect: false },
    { answerText: 'Amerigo Vespucci', isCorrect: false },
    ],
    },
    {
    questionText: 'Which country was the first to successfully circumnavigate the globe?',
    answerOptions: [
    { answerText: 'Spain', isCorrect: true },
    { answerText: 'England', isCorrect: false },
    { answerText: 'France', isCorrect: false },
    { answerText: 'Portugal', isCorrect: false },
    ],
    },
    {
    questionText: 'What was the cause of the French Revolution?',
    answerOptions: [
    { answerText: 'The rise of Napoleon Bonaparte', isCorrect: false },
    { answerText: 'The invention of the guillotine', isCorrect: false },
    { answerText: 'The monarchy’s abuse of power', isCorrect: true },
    { answerText: 'The success of the American Revolution', isCorrect: false },
    ],
    },
    {
    questionText: 'Who invented the printing press?',
    answerOptions: [
    { answerText: 'Leonardo da Vinci', isCorrect: false },
    { answerText: 'Johannes Gutenberg', isCorrect: true },
    { answerText: 'Thomas Edison', isCorrect: false },
    { answerText: 'Alexander Graham Bell', isCorrect: false },
    ],
    },
    {
    questionText: 'Who wrote “The Communist Manifesto”?',
    answerOptions: [
    { answerText: 'Karl Marx', isCorrect: true },
    { answerText: 'Friedrich Engels', isCorrect: true },
    { answerText: 'Vladimir Lenin', isCorrect: false },
    { answerText: 'Joseph Stalin', isCorrect: false },
    ],
    },
    {
    questionText: 'Who was the first emperor of Rome?',
    answerOptions: [
    { answerText: 'Julius Caesar', isCorrect: false },
    { answerText: 'Augustus', isCorrect: true },
    { answerText: 'Nero', isCorrect: false },
    { answerText: 'Caligula', isCorrect: false },
    ],
    },

    {
      questionText: 'Who invented the telephone?',
      answerOptions: [
        { answerText: 'Alexander Graham Bell', isCorrect: true },
        { answerText: 'Thomas Edison', isCorrect: false },
        { answerText: 'Nikola Tesla', isCorrect: false },
        { answerText: 'Guglielmo Marconi', isCorrect: false },
      ],
    },
    {
      questionText: 'Who was the first president of the United States?',
      answerOptions: [
        { answerText: 'George Washington', isCorrect: true },
        { answerText: 'John Adams', isCorrect: false },
        { answerText: 'Thomas Jefferson', isCorrect: false },
        { answerText: 'James Madison', isCorrect: false },
      ],
    }
  ]

  const History = () => {
    return <div>History</div>;
  };
  
  export { questionsHistory };
  export default History;