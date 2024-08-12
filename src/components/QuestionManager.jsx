import React from 'react';
import CreateQuestionForm from './CreateQuestion';
import QuestionList from './QuestionList';
import FlashcardManager from './FlashCardManager';

const QuestionManager = () => {
    return (
        <div>
            <CreateQuestionForm onQuestionCreated={() => {}} />
            {/* <QuestionList /> */}
            <FlashcardManager />
        </div>
    );
};

export default QuestionManager;

