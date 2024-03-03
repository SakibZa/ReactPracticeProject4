import React from "react";
import { useState } from "react";
import Taskcard from "./Taskcard";
import Boxcard from "../components/Boxcard";
export default function Tasklist() {
  const [task, setTask] = useState([
    { id: 1, name: "sakibZaidi", status: false },
    { id: 2, name: "AsakriZaidi", status: true },
    { id: 3, name: "DeebaZaidi", status: false },
    { id: 4, name: "ShaziaZaidi", status: true },
  ]);
  function handledelete(id) {
    setTask(task.filter((item) => item.id !== id));
  }
  return (
    <div>
      <h1>Here is the taskcard</h1>

      {task.map((item) => (
        <Taskcard
          key={item.id}
          id={item.id}
          name={item.name}
          status={item.status}
          handledelte={() => handledelete(item.id)}
        />
      ))}

      <h2>
        <Boxcard>
          <p>Sakib Zaidi</p>
          <p>Deeba Zaidi</p>
        </Boxcard>
        <Boxcard>
          <p>Deeba Zaidi</p>
          <p>Sakib Zaidi</p>
        </Boxcard>
      </h2>
    </div>
  );
}
