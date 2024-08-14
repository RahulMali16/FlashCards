
export async function createQuestion(text) {
    try {
        const response = await fetch("/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error(`Error creating question: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Question Created:", result);
        return result;
    } catch (error) {
        console.error("Error creating question:", error.message);
        return null;
    }
}


export async function createAnswer(text, questionId, isCorrect) {
    try {
        const response = await fetch("/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, questionId, isCorrect }),
        });

        if (!response.ok) {
            throw new Error(`Error creating answer: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Answer Created:", result);
        return result;
    } catch (error) {
        console.error("Error creating answer:", error.message);
        return null;
    }
}

// Function to fetch a question and its associated answers
export async function fetchQuestionWithAnswers(questionId) {
    try {
        const response = await fetch(`/question/${questionId}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Error fetching question: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Question Fetched:", result);
        return result;
    } catch (error) {
        console.error("Error fetching question:", error.message);
        return null;
    }
}

// Function to fetch all questions with their associated answers
export async function fetchAllQuestions() {
    try {
        const response = await fetch("/questions", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Error fetching questions: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Questions Fetched:", result);
        return result;
    } catch (error) {
        console.error("Error fetching questions:", error.message);
        return [];
    }
}

// Function to delete a question by ID
export async function deleteQuestion(id) {
    try {
        const response = await fetch(`/question/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Error deleting question: ${response.statusText}`);
        }

        const result = response.status === 204 ? {} : await response.json();
        console.log("Question Deleted:", result);
        return result;
    } catch (error) {
        console.error("Error deleting question:", error.message);
        return null;
    }
}

// Function to delete an answer by ID
export async function deleteAnswer(id) {
    try {
        const response = await fetch(`/answer/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Error deleting answer: ${response.statusText}`);
        }

        const result = response.status === 204 ? {} : await response.json();
        console.log("Answer Deleted:", result);
        return result;
    } catch (error) {
        console.error("Error deleting answer:", error.message);
        return null;
    }
}
