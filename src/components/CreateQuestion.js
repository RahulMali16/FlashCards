import React, { useState } from 'react';
import './CreateQuestion.css';
import { createQuestion, createAnswer } from '../utils';

const CreateQuestion = ({ onQuestionCreated }) => {
    const [questionText, setQuestionText] = useState('');
    const [answers, setAnswers] = useState([{ text: '', isCorrect: false }]);

    const handleAnswerChange = (index, field, value) => {
        const newAnswers = [...answers];
        newAnswers[index][field] = value;
        setAnswers(newAnswers);
    };

    const addAnswer = () => {
        setAnswers([...answers, { text: '', isCorrect: false }]);
    };

    const removeAnswer = (index) => {
        const newAnswers = answers.filter((_, i) => i !== index);
        setAnswers(newAnswers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const question = await createQuestion(questionText);
        if (question) {
            const createdAnswers = [];
            for (const answer of answers) {
                const createdAnswer = await createAnswer(answer.text, question.result.id, answer.isCorrect);
                if (createdAnswer) createdAnswers.push(createdAnswer.result);
            }

            const newQuestion = {
                ...question.result,
                answers: createdAnswers
            };

            onQuestionCreated(newQuestion);

         
            window.location.reload();
        }

        setQuestionText('');
        setAnswers([{ text: '', isCorrect: false }]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Question:</label>
                <input
                    type="text"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Answers:</label>
                {answers.map((answer, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder={`Answer ${index + 1}`}
                            value={answer.text}
                            onChange={(e) => handleAnswerChange(index, 'text', e.target.value)}
                            required
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={answer.isCorrect}
                                onChange={(e) => handleAnswerChange(index, 'isCorrect', e.target.checked)}
                            />
                            Correct?
                        </label>
                        {answers.length > 1 && (
                            <button type="button" onClick={() => removeAnswer(index)}>
                                Remove
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <button type="button" onClick={addAnswer}>
                Add Answer
            </button>
            <button type="submit">Create Question</button>
        </form>
    );
};

export default CreateQuestion;
