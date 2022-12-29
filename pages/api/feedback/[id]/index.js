import Feedback from '../../../../models/feedback';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const feedback = new Feedback({
    nome: req.body.nome,
    avaliação: req.body.avaliação,
    comentário: req.body.comentário,
  });
  const savedFeedback = await feedback.save();
  await db.disconnect();
  res.send(savedFeedback);
};

export default handler;
