import Head from 'next/head'
import { useState } from 'react'
import styles from 'src/styles/Home.module.css'

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
           <div className={styles.toDoItem}>
              <input type="checkbox" />
              <p className={styles.toDoTask}>xxxxxxx</p>
              <button className={styles.deleteButton}>-</button>
           </div>
           <div className={styles.toDoItem}>
              <input type="checkbox" />
              <p className={styles.toDoTask}>xxxxxxx</p>
              <button className={styles.deleteButton}>-</button>
           </div>
         </div>

        </div>
      </main>

    </div>
  )
}
