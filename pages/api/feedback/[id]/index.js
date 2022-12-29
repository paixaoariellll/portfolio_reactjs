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

const deleteHandler = async (req, res) => {
  await db.connect();
  const feedback = await Feedback.findById(req.query.id);
  if (feedback) {
    await feedback.remove();
    await db.disconnect();
    res.send({ message: 'Feedback deletado com sucesso!' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Feedback não encontrado!' });
  }
};

export default handler;