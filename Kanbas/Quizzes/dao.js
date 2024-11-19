import Database from "../Database/index.js";

export function findQuizzesForCourse(courseID) {
    const { quizzes } = Database;
    return quizzes.filter((quiz) => quiz.course === courseID);
}

export function createQuiz(quiz) {
    Database.quizzes = [...Database.quizzes, quiz];
    return quiz;
}

export function deleteQuiz(quizId) {
    const { quizzes } = Database;
    Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}

export function updateQuiz(quizId, quizUpdates) {
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    Object.assign(quiz, quizUpdates);
    return quiz;
}