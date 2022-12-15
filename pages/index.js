import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Olá mundo! Seja bem vindo ao meu portfólio em ReactJs
          </p>
          <div>
            <a
              href="https://ariel-paixao.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <h1 className='text-2xl'>Ariel Paixão</h1>
            </a>
          </div>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <h1 className=''>Ariel Paixão </h1>
          </div>
        </div>
        <div>

        </div>
      </main>
    </Layout>
  )
}

export default Home