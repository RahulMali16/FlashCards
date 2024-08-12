import React, { useEffect, useState } from 'react';
import { fetchAllQuestions } from '../utils';

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const fetchedQuestions = await fetchAllQuestions();
            setQuestions(fetchedQuestions);
        };

        getQuestions();
    }, []);

    if (questions.length === 0) return <div>No questions found.</div>;

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    <h3>{question.text}</h3>
                    <ul>
                        {question.answers.map((answer) => (
                            <li key={answer.id} style={{ color: answer.isCorrect ? 'green' : 'red' }}>
                                {answer.text} {answer.isCorrect && "(Correct)"}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default QuestionList;

