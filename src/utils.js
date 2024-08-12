// Function to create a question
export async function createQuestion(text) {
    try {
        const response = await fetch("http://localhost:8081/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        const result = await response.json();
        console.log("Question Created:", result);
        return result;
    } catch (error) {
        console.error("Error creating question:", error);
        return null;
    }
}

// Function to create an answer for a specific question
export async function createAnswer(text, questionId, isCorrect) {
    try {
        const response = await fetch("http://localhost:8081/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, questionId, isCorrect }),
        });

        const result = await response.json();
        console.log("Answer Created:", result);
        return result;
    } catch (error) {
        console.error("Error creating answer:", error);
        return null;
    }
}

// Function to fetch a question and its associated answers
export async function fetchQuestionWithAnswers(questionId) {
    try {
        const response = await fetch(`http://localhost:8081/question/${questionId}`, {
            method: "GET",
        });

        const result = await response.json();
        console.log("Question Fetched:", result);
        return result;
    } catch (error) {
        console.error("Error fetching question:", error);
        return null;
    }
}


// Function to fetch all questions with their associated answers
export async function fetchAllQuestions() {
    try {
        const response = await fetch("http://localhost:8081/questions", {
            method: "GET",
        });

        const result = await response.json();
        console.log("Questions Fetched:", result);
        return result;
    } catch (error) {
        console.error("Error fetching questions:", error);
        return [];
    }
}
