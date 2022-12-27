'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { Cnpj } from '../constants';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const CnpjSearch = () => {
  const { handleSubmit, register, setValue } = useForm();
  const [campo, setCampo] = useState('');

  const checkCNPJ = () => {
    fetch(`https://brasilapi.com.br/api/cnpj/v1/${campo}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue('checkCNPJ', data.checkCNPJ);
        setValue('razao_social', data.razao_social);
        setValue('nome_fantasia', data.nome_fantasia);
        setValue('cnpj', data.cnpj);
        setValue('cnae_fiscal_descricao', data.cnae_fiscal_descricao);
        setValue('situacao_cadastral', data.situacao_cadastral);
        setValue('cnae_fiscal', data.cnae_fiscal);
        setValue('natureza_juridica', data.natureza_juridica);
        setValue('situacao_cadastral', data.situacao_cadastral);
        setValue(
          'descricao_situacao_cadastral',
          data.descricao_situacao_cadastral,
        );
      });
  };

  return (
    <section id="cnpj" className={`${styles.paddings} -top-40 relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-screen-xl mx-auto"
      >
        <TitleText
          title={<span className="text-white">Exemplo APIS de consulta</span>}
          textStyles="text-center text-white"
        />
        <div className="grid w-full h-full gap-5">
          <div className=" rounded-lg p-10">
            <span className="text-center my-2">
              <TypingText
                title="Pesquisar CNPJ"
                textStyles="sm:text-center sm:text-xl md:text-2xl md:text-center lg:text-3xl text-white font-bold my-10 "
              />
            </span>
            <form className=" rounded-xl flex justify-center text-xl p-5">
              <div className="rounded-xl flex items-center">
                <input
                  type="text"
                  id="cnpj"
                  onChange={(e) => setCampo(e.target.value.replace(/\D/g, ''))}
                  className="rounded-xl shadow-sm shadow-slate-700 px-2"
                />
                <button
                  className="text-white  px-1"
                  type="button"
                  onClick={checkCNPJ}
                >
                  <FiSearch className="text-3xl " />
                </button>
              </div>
            </form>
            <div>
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="mt-4 pb-5 grid gap-y-3  rounded-xl  p-2">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {Cnpj.cnpj01.map((cnpj) => (
                      <motion.div
                        key={cnpj.id}
                        variants={fadeIn(`${cnpj.fadeIn}`, 'tween', 0, 1)}
                        className="text-md  grid gap-y-3 col-span-1 w-full p-5  rounded-xl text-center shadow glassmorphism-2  shadow-slate-600 "
                      >
                        <label
                          className="text-md text-white font-mono"
                          htmlFor="razao_social"
                        >
                          {cnpj.name}
                        </label>
                        <input
                          {...register(cnpj.type)}
                          placeholder="Não encontrado"
                          readOnly
                          className="rounded-full whitespace-normal overflow-auto py-[8px] h-auto font-bold px-5 text-sm  block text-center text-slate-900 bg-slate-50 "
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CnpjSearch;
