import React from 'react'

  const questionsRandom = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Wich is the largest continent?',
			answerOptions: [
				{ answerText: 'Africa', isCorrect: false },
				{ answerText: 'America', isCorrect: false },
				{ answerText: 'Europe', isCorrect: false },
				{ answerText: 'Asia', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Germany  ?',
			answerOptions: [
				{ answerText: 'frankfurt', isCorrect: false },
				{ answerText: 'stuttgart', isCorrect: false },
				{ answerText: 'bayern', isCorrect: false },
				{ answerText: 'Berlin', isCorrect: true },
			],
		},
		{
			questionText: 'What is the smallest country in the world?',
			answerOptions: [
				{ answerText: 'Qatar', isCorrect: false },
				{ answerText: 'Haiti', isCorrect: false },
				{ answerText: 'tuvalu', isCorrect: false },
				{ answerText: 'Vatican', isCorrect: true },
			],
		},
		{
			questionText: 'What is the tallest building in the world?',
			answerOptions: [
				{ answerText: 'Empire State building', isCorrect: false },
				{ answerText: 'Shanghai tower', isCorrect: false },
				{ answerText: 'China zun', isCorrect: false },
				{ answerText: 'Burj Khalifa', isCorrect: true },
			],
		},
		{
			questionText: 'Wich is the biggest country in africa ?',
			answerOptions: [
				{ answerText: 'Egypt', isCorrect: false },
				{ answerText: 'Congo', isCorrect: false },
				{ answerText: 'sudan', isCorrect: false },
				{ answerText: 'Algeria', isCorrect: true },
			],
		},

		{
			questionText: 'What is the capital of tunisia?',
			answerOptions: [
				{ answerText: 'Monastir', isCorrect: false },
				{ answerText: 'Sousse', isCorrect: false },
				{ answerText: 'Sfax', isCorrect: false },
				{ answerText: 'Tunis', isCorrect: true },
			],
		},
	];


	const Random = () => {
		return <div>Random</div>;
	  };
	  
	  export { questionsRandom };
	  export default Random;