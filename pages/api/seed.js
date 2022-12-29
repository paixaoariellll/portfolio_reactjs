import Feedback from "../../models/feedback";
import data from "../../utils/data";
import db from "../../utils/db";

const handler = async (req, res) => {
    await db.connect();
    await Feedback.deleteMany();
    await Feedback.insertMany(data.feedbacks);
    await db.disconnect();

    res.send({ message: 'Maníaco da Seed! Todo josé é gay!' })
};

export default handler;
