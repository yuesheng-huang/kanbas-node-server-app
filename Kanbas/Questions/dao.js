import model from "./model.js"

export function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId });
}

export function getQuestion(questionId) {
    return model.findOne({ _id: questionId });
}

export function createQuestion(question) {
    return model.create(question);
}