import model from "./model";

export function createAttempt(attempt) {
    model.create(attempt);
}

export function removeAttempt(attemptId) {
    model.deleteOne(attemptId);
}