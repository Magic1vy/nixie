import React, { useState } from 'react';

const SurveyModal = ({ questions, onSubmit }) => {
    const [showModal, setShowModal] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [isAnswerValid, setIsAnswerValid] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && isAnswerValid) {
            handleAnswer();
        }
    };
    const handleAnswer = () => {
        if (!isAnswerValid) {
            alert("Please provide an answer.");
            return;
        }


        const newAnswers = [...answers, { question: questions[currentQuestionIndex].text, answer: currentAnswer }];
        setAnswers(newAnswers);
        setCurrentAnswer(''); 
        setIsAnswerValid(false); 

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            onSubmit(newAnswers);
            setShowModal(false);
        }
    };

    const setCurrentAnswerState = (answer) => {
        if (questions[currentQuestionIndex].type === 'radio') {
            setIsAnswerValid(true);
        } else {
            setIsAnswerValid(answer.trim() !== "");
    }

    setCurrentAnswer(answer);
};

    const renderQuestion = (question) => {
        if (question.type === 'text') {
            return <input 
                        className='input' 
                        type="text" 
                        value={currentAnswer} 
                        onChange={(e) => setCurrentAnswerState(e.target.value)}
                        onKeyDown={handleKeyDown}
                        />;
        } else if (question.type === 'number') {
            return <input 
            className='input' 
            type="number" 
            value={currentAnswer} 
            onChange={(e) => setCurrentAnswerState(e.target.value)}
            onKeyDown={handleKeyDown}
            />;
        }
        else if (question.type === 'radio') {
            return question.options.map((option, index) => (
                <label className='survey-input-field' key={index}>
                    <input
                        className='radio-input'
                        type="radio"
                        name="radio-answer"
                        value={option}
                        checked={currentAnswer === option}
                        onChange={(e) => setCurrentAnswerState(e.target.value)}
                    />
                    {option}
                </label>
            ));
        }
    };

    return (
        <>
            {showModal && (
                <section className='survey-section'>
                    <div className='survey-container'>
                        <h2 className='survey-header'>{questions[currentQuestionIndex].text}</h2>
                        {renderQuestion(questions[currentQuestionIndex])}
                        <div>
                            <button 
                                className='btn-survey-next' 
                                onClick={handleAnswer}
                                disabled={!isAnswerValid}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default SurveyModal;
