import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {

    app.get("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const question = await questionsDao.getQuestion(questionId);
        res.json(question);
    });

}