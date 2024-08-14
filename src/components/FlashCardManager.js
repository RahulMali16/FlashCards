import React, { useEffect, useState } from 'react';
import FlashCard from './FlashCard';
import { fetchAllQuestions, deleteQuestion, deleteAnswer } from '../utils';

const FlashCardManager = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const getQuestions = async () => {
            const fetchedQuestions = await fetchAllQuestions();
            setQuestions(fetchedQuestions);
        };

        getQuestions();
    }, []);

    const handleDeleteQuestion = async (questionId) => {
        await deleteQuestion(questionId);
        setQuestions(questions.filter((q) => q.id !== questionId));
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleDeleteAnswer = async (answerId) => {
        await deleteAnswer(answerId);
        const updatedQuestions = questions.map((question) => ({
            ...question,
            answers: question.answers.filter((answer) => answer.id !== answerId),
        }));
        setQuestions(updatedQuestions);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % questions.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
    };

    if (questions.length === 0) return <div>No questions available.</div>;

    return (
        <div>
            <div className="flashcard-container">
                <FlashCard
                    question={questions[currentIndex]}
                    onDeleteQuestion={handleDeleteQuestion}
                    onDeleteAnswer={handleDeleteAnswer}
                />
            </div>
            <div className="navigation-buttons">
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default FlashCardManager;
