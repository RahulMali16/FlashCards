import React, { useEffect, useState } from 'react';
import FlashCard from './FlashCard';
import { fetchAllQuestions } from '../utils';

const FlashcardManager = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const fetchedQuestions = await fetchAllQuestions();
            setQuestions(fetchedQuestions);
        };

        getQuestions();
    }, []);

    return (
        <div className="flashcard-container">
            {questions.map((question) => (
                <FlashCard key={question.id} question={question} />
            ))}
        </div>
    );
};

export default FlashcardManager;
