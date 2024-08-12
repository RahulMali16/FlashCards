import React, { useState } from 'react';
import './flashcard.css';

const Flashcard = ({ question }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        console.log("Clicked", flipped)
        setFlipped(!flipped);
    };

    return (
        <div className="flashcard" onClick={handleFlip}>
            <div className={`flashcard-inner ${flipped ? 'flip' : ''}`}>
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
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
