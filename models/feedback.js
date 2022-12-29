import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        avaliação: { type: Number, required: true },
        comentário: { type: String, required: true },
    },
    { timestamps: true },
);

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);

export default Feedback;
