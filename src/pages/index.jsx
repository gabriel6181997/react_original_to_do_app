import Head from "next/head";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import styles from "src/styles/Home.module.css";
import { TodoItem } from "src/components/TodoItem/index";
import { FilterButton } from "src/components/FilterButton/index";
import { FILTERINFOS } from "src/util/filterInfo";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleChange = useCallback((e) => {
    setTodoText(e.target.value.trim());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTodoList = useCallback(async () => {
    const res = await fetch("http://localhost:3001/todoList");
    const json = await res.json();
    setTasks(json);
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  const handleAddTask = useCallback(() => {
    setTasks((preTasks) => {
      if (todoText === "") {
        alert("必ず何かを入力してください！");
        return preTasks;
      }
      const newTask = { id: nanoid(), title: todoText, completed: false };
      const newTasks = [...preTasks, newTask];
      return newTasks;
    });
    setTodoText("");
  }, [todoText]);

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id != id);
    setTasks(remainingTasks);
  };

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
            <input value={todoText} onChange={handleChange} />
            <button className={styles.enterButton} onClick={handleAddTask}>
              Enter
            </button>
          </div>

          <div className={styles.buttons}>
            {Object.keys(FILTERINFOS).map((name) => {
              return (
                <FilterButton
                  key={name}
                  name={name}
                  isPressed={name === filter}
                  setFilter={setFilter}
                />
              );
            })}
          </div>

          <ul className={styles.toDoList}>
            {tasks.filter(FILTERINFOS[filter]).map((task) => {
              return (
                <TodoItem
                  id={task.id}
                  key={task.id}
                  title={task.title}
                  completed={task.completed}
                  toggleTaskCompleted={toggleTaskCompleted}
                  deleteTask={deleteTask}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
