'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const Fdbs = (props) => {
  const { avaliação } = props;
  const filledStars = Math.floor(avaliação);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex">
      {Array.from({ length: filledStars }).map((_, index) => (
        <AiFillStar key={`filled-${index}`} />
      ))}
      {avaliação % 1 !== 0 && <AiOutlineStar key="half" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <AiOutlineStar key={`empty-${index}`} />
      ))}
    </div>
  );
};

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [nome, setNome] = useState('');
  const [comentário, setComentário] = useState('');
  const [avaliação, setAvaliação] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/feedback');
      const data = await result.json();
      setFeedbacks(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/feedback/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, avaliação, comentário }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <section id="feedback" className={`${styles.paddings} relative z-10`}>
      <form className="glassmorphism-2 p-5 rounded-lg" onSubmit={handleSubmit}>
        <TypingText
          title="Envie seu feedback"
          textStyles="text-center text-white font-bold p-5 mb-5 text-xl"
        />
        <div className="mb-5 grid grid-cols-2 gap-x-10">
          <div>
            <label
              htmlFor="nome"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Nome:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="nome"
              nome="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="avaliação"
              className="block text-gray-400 text-sm font-bold mb-2"
            >
              Classificação:
            </label>
            <select
              className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avaliação"
              nome="avaliação"
              required
              value={avaliação}
              onChange={(e) => setAvaliação(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="comentário"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Comentário:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comentário"
            nome="comentário"
            required
            value={comentário}
            onChange={(e) => setComentário(e.target.value)}
            maxLength="500"
          />
          <div className="text-gray-400 text-xs">
            {500 - comentário.length} caracteres restantes
          </div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-screen-xl mx-auto"
      >
        <TypingText
          title="Feedbacks"
          textStyles="text-center !text-white !font-bold p-10 mb-5 text-5xl"
        />
        <div className="grid lg:grid-cols-4 w-full h-full md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 md:gap-y-5 gap-x-5 ">
          {feedbacks.map((feedback, index) => (
            <ul
              key={index}
              className="text-white p-5 h-[300px] glassmorphism rounded-xl shadow-lg shadow-slate-900"
            >
              <li>
                <div className="flex justify-center">
                  <div className="grid gap-y-3">
                    <div className="text-md">
                      <h2 className="text-white font-bold text-xl p-3">
                        {feedback.nome}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="text-center border h-fit max-h-[190px] p-4 text-sm border-slate-700 rounded-md overflow-hidden">
                  <p className="font-mono h-full">{feedback.comentário}</p>
                </div>
              </li>
              <div className="flex items-end justify-between pt-2">
                <Fdbs avaliação={feedback.avaliação} />{' '}
                <span className="text-[#ffffff80] font-mono">
                  {' '}
                  {feedback.avaliação}
                </span>
              </div>
            </ul>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeedbackList;
