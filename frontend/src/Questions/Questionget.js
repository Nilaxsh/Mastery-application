
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizQuestionList = () => {
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [timer, setTimer] = useState(60); // 1 minute in seconds for each question
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5007/api/users/getquestions');
        console.log('API response:', response.data);

        if (Array.isArray(response.data.questions)) {
          const questions = response.data.questions.map((question) => {
            const uniqueAnswers = [...new Set(question.answers)];
            return { ...question, answers: uniqueAnswers };
          });
          setQuizQuestions(questions);
        } else {
          console.error('API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
        setQuizQuestions([]);
      }
    };

    fetchQuizQuestions();
  }, []);
  const renderQuestionImage = (image) => {
    if (image) {
      return <img src={image} style={{ height: '250px', width: '400px' }} alt="Question" />;
    }
    return null;
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          handleNextQuestion();
        }
        return prevTimer > 0 ? prevTimer - 1 : prevTimer;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestionIndex]);

  const handleAnswerChange = (questionId, answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    const index = newSelectedAnswers.findIndex((q) => q.id === questionId);
    if (index === -1) {
      newSelectedAnswers.push({ id: questionId, answer });
    } else {
      newSelectedAnswers[index] = { id: questionId, answer };
    }
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    const errors = {};
    let hasErrors = false;
  
    // Check if quizQuestions is not null and the index is within bounds
    if (quizQuestions && currentQuestionIndex < quizQuestions.length) {
      // Check for validation errors
      const currentQuestion = quizQuestions[currentQuestionIndex];
      const selectedAnswer = selectedAnswers.find((q) => q.id === currentQuestion._id);

      if (!selectedAnswer || !selectedAnswer.answer) {
        errors[currentQuestion._id] = 'Please select an answer';
        hasErrors = true;
      }
  
      setValidationErrors(errors);
      if (!hasErrors) {
        calculateScore();
        setSubmitted(true);
  
        // Move to the next question
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setTimer(60); // Reset timer for the next question
          setSelectedAnswers([]); // Reset selected answers for the next question
          setSubmitted(false); // Reset submitted state
        }
      }
    }
  };

  const calculateScore = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers.find((q) => q.id === currentQuestion._id);
    console.log(currentQuestion.rightanswer,selectedAnswer)
    if (selectedAnswer && selectedAnswer.answer === currentQuestion.rightanswer) {

      setScore((prevScore) => {const newScore = prevScore +  1 
       
        return newScore
       
      });
     
    } else {
      setMistakes((prevMistakes) => [
        ...prevMistakes,
        { question: currentQuestion, selectedAnswer: selectedAnswer?.answer },
      ]);
    }
  
    // Check for marks summary after each set of 10 questions
    if ((currentQuestionIndex + 1) % 10 === 0) {
      const currentMarks = score + (selectedAnswer && selectedAnswer.answer === currentQuestion.rightanswer ? 1 : 0);
      setMarks((prevMarks) => [...prevMarks, currentMarks]);
    }
  };
  

  const renderMistakes = () => (
    <div>
      <h2>Mistakes Summary</h2>
      <ul>
        {mistakes.map((mistake, index) => (
          <li key={index}>
            Question {mistake.question.questionNumber}: {mistake.question.question}
            <br />
            Your Answer: {mistake.selectedAnswer}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderMarks = () => (
    <div>
      <h2>Marks Summary</h2>
      <ul>
        {marks.map((mark, index) => (
          <li key={index}>Set {index + 1}: {mark} / 10</li>
        ))}
      </ul>
    </div>
  );

  if (!Array.isArray(quizQuestions) || currentQuestionIndex >= quizQuestions.length) {
    return (
      <div>
        <p>Loading...</p>
        {currentQuestionIndex > 0 && currentQuestionIndex % 10 === 0 && renderMistakes()}
        {currentQuestionIndex > 0 && currentQuestionIndex % 10 === 0 && renderMarks()}
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz">
      <h1>Quiz Questions</h1>
      {submitted ? (
        <div>
          <h3>Correct Answer: {currentQuestion.rightanswer}</h3>
          {renderQuestionImage(currentQuestion.image)}
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      ) : (
        <div>
          <p>Time remaining: {timer} seconds</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>{currentQuestion.questionNumber}: {currentQuestion.question}</h3>
          {renderQuestionImage(currentQuestion.image)}
            <ul>
              {currentQuestion.answers.map((answer, index) => (
                <li key={index} className="answer">
                  <input
                    type="radio"
                    id={`question-${currentQuestion._id}-answer-${index}`}
                    name={`question-${currentQuestion._id}`}
                    value={answer}
                    checked={selectedAnswers.find((q) => q.id === currentQuestion._id)?.answer === answer}
                    onChange={() => handleAnswerChange(currentQuestion._id, answer)}
                  />
                  <label htmlFor={`question-${currentQuestion._id}-answer-${index}`}>{answer}</label>
                  {validationErrors[currentQuestion._id] && <p>{validationErrors[currentQuestion._id]}</p>}
                </li>
              ))}
            </ul>
            <button onClick={handleNextQuestion}>Submit</button>
          </form>
        </div>
      )}
      {currentQuestionIndex > 0 && currentQuestionIndex % 10 === 0 && renderMistakes()}
      {currentQuestionIndex > 0 && currentQuestionIndex % 10 === 0 && renderMarks()}
      {currentQuestionIndex % 20 === 0 && currentQuestionIndex > 0 && (
        <div>
          <h2>Quiz Summary</h2>
          <p>Score: {score} / {currentQuestionIndex}</p>
          <p>Score: {score} / {currentQuestionIndex}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestionList;

