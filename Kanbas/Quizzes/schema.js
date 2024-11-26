import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
 {
    name: String,
    course: {type: mongoose.Schema.Types.ObjectId, ref: "CourseModel"},
    instruction: String,
    num_of_questions: Number,
    quiz_type: String,
    points: Number,
    assignment_group: String,
    shuffle_answer: String,
    time_limit: Number,
    multiple_attempts: String,
    how_many_attempts: Number,
    show_correct_answer: String,
    access_code: String,
    one_question_at_a_time: String,
    webcam_required: String,
    lock_questions_after_answering: String,
    due_date: Date,
    available_date: Date,
    until_date: Date,
 },
 { collection: "quiz" }
);

export default quizSchema;