import Head from 'next/head'
import { useState } from 'react'
import styles from 'src/styles/Home.module.css'
import {TodoItem} from "src/components/TodoItem/index"

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>To-do App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>To-do App</h1>
        <div className={styles.grid}>
         <div>
           <input />
           <button className={styles.enterButton}>Enter</button>
         </div>

         <div className={styles.toDoList}>
           <TodoItem />
         </div>

        </div>
      </main>

    </div>
  )
}
