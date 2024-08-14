import React from 'react';
import CreateQuestionForm from './CreateQuestion';

import FlashCardManager from './FlashCardManager';

const QuestionManager = () => {
    return (
        <div>
            <CreateQuestionForm onQuestionCreated={() => {}} />
           
            <FlashCardManager />
        </div>
    );
};

export default QuestionManager;

