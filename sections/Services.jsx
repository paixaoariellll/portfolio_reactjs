'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { TitleText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Services = () => (
  <section
    id="Objectives"
    className={`${styles.yPaddings} mx-24 sm:16 sm:pl-6 `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TitleText
        title={
          <span>Valores importantes para um desenvolvedor full stack</span>
        }
        textStyles="text-center"
      />
      <div className="grid grid-cols-4 mt-10 gap-3">
        <motion.div
          variants={fadeIn('right', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Colaboração</h1>
                <p className="text-gray-300 text-xl">
                  Trabalhar em equipe e se comunicar de forma eficaz com os
                  colegas de trabalho é fundamental para o sucesso do projeto.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Responsabilidade</h1>
                <p className="text-gray-300 text-xl">
                  Ser responsável pelo seu trabalho e tomar decisões informadas
                  é importante para garantir que o projeto esteja no caminho
                  certo.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Inovação</h1>
                <p className="text-gray-300 text-xl">
                  Estar disposto a pensar fora da caixa e encontrar soluções
                  criativas para problemas é fundamental para o sucesso de
                  qualquer projeto.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Civilidade</h1>
                <p className="text-gray-300 text-xl">
                  Ter consciência e consideração pelo impacto social e ambiental
                  do trabalho e tomar decisões éticas e responsáveis ​​em
                  relação ao uso de tecnologia pode ser importante para muitos
                  desenvolvedores.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Integridade</h1>
                <p className="text-gray-300 text-xl">
                  Ser honesto e transparente em todas as interações e trabalhar
                  de forma ética é fundamental para construir relacionamentos de
                  confiança e respeito com colegas de trabalho e clientes.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('down', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Profissionalismo</h1>
                <p className="text-gray-300 text-xl">
                  Ter um alto padrão de trabalho e se apresentar de forma
                  profissional em todas as interações é importante para a
                  credibilidade e reputação da empresa e de si mesmo como
                  desenvolvedor.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('down', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Adaptabilidade</h1>
                <p className="text-gray-300 text-xl">
                  Estar disposto a se adaptar a mudanças e trabalhar com novas
                  tecnologias é importante para se manter atualizado e relevante
                  na indústria de tecnologia.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0, 1)}
          className="col-span-1"
        >
          <Link href="/">
            <div className="flex h-full flex-col glassmorphism rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-3xl">Humildade</h1>
                <p className="text-gray-300 text-xl">
                  Reconhecer os próprios limites e estar disposto a aprender com
                  os erros e ouvir a opinião dos outros pode ser importante para
                  o crescimento pessoal e profissional.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Services;
