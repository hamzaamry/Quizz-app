import React, { useState } from "react";

import { questionsSport } from "./Categories/Sports.js";
import { questionsGeo } from "./Categories/Geography.js";
import { questionsRandom } from "./Categories/Random.js";
import { questionsHistory } from "./Categories/History.js";

import './Styles/Quizz.css'

export default function Quizz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [text, setText] = useState("click to donate");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selected , setSelected] = useState(false);

  const handleReload = () => {
    setShowScore(false);
    setScore(0);
    setSelected(false);
    setSelectedCategory("");
    setCurrentQuestion(0);
  };

  const donate = () => {
    setText("Thank you for your donation");
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
	setSelected(true);
  };

  let questions = [];
  switch (selectedCategory) {
    case "sport":
      questions = questionsSport;
      break;
    case "geography":
      questions = questionsGeo;
      break;
    case "random":
      questions = questionsRandom;
      break;
    case "history":
      questions = questionsHistory;
      break;
    default:
      questions = [];
      break;
  }

  return (
    <div className="quizz">
      {showScore ? (
        <>
          <div className="score-section">

            <h2>
              You scored {score} out of {questions.length}
            </h2>
            <div className="donation-text">{text}</div>
            <div className="association">
              <button className="donation-btn" onClick={donate}>Famine</button>
              <button className="donation-btn" onClick={donate}>education</button>
              <button className="donation-btn" onClick={donate}>Droit des enfants</button>
              <button className="donation-btn" onClick={donate}>Protection de l'environnement</button>
            </div>
            <br />
           
          </div>
          <div className="again-btn-div">
            <button className="again-btn" onClick={handleReload}>
              Play Again
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="category-selection">
			{ selected === false && (
				<>
				<div>
          <h5>
          Select a category:
          </h5>
        <div  className="select" >
				<select
				value={selectedCategory}
				onChange={handleCategoryChange}
				id="selectcat"
				style={{
					display: "block",
				}}
       
				>
					<option selected disabled>--Select a category--</option>
					<option value="sport">Sports</option>
					<option value="geography">Geography</option>
					<option value="random">Random</option>
					<option value="history">History</option>
				</select>
        </div>
        </div>
				</>
			)}
          </div>
          {selectedCategory !== "" && (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="choices-btn"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
