import React, { useState, useEffect } from 'react';
import './FlashCard.css';

const FlashCard = ({ question, onDeleteQuestion, onDeleteAnswer }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    // Reset the flipped state whenever the question changes
    useEffect(() => {
        setFlipped(false);
    }, [question]);

    return (
        <div className="flashcard">
            <div className={`flashcard-inner ${flipped ? 'flip' : ''}`} onClick={handleFlip}>
                <div className="flashcard-front">
                    <div className="flashcard-content">
                        <div className="question">{question.text}</div>
                    </div>
                </div>
                <div className="flashcard-back">
                    <div className="flashcard-content">
                        <ul className="answer-list">
                            {question.answers.map((answer) => (
                                <li
                                    key={answer.id}
                                    className={answer.isCorrect ? 'correct-answer' : 'incorrect-answer'}
                                >
                                    {answer.text}
                                    <br></br>
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteAnswer(answer.id);
                                    }}>
                                        Delete Answer
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDeleteQuestion(question.id);
                            }}
                        >
                            Delete Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
