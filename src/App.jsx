import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const handleDelete = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = "No Tasks Right now , Add a new One";

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div
          className="bg-pink-200 text-xl font-semibold p-6 m-4 flex justify-between"
          key={i}
        >
          <div>
            <h4 className="text-2xl font-bold">{t.title}</h4>
            <h5>{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              handleDelete(i);
            }}
            className="text-2xl px-4 py-2 m-6 font-bold text-white bg-black rounded-lg"
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      <p className="bg-black p-4 m-4 text-5xl text-white font-bold text-center">
        To Do List
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="p-3 m-8 text-xl w-80 border-4 border-zinc-950"
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          className="p-3 m-8 text-xl w-80 border-4 border-zinc-950 "
          type="text"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></input>
        <button className="text-2xl px-6 py-4 m-8 font-bold text-white bg-black rounded-lg">
          Add Task
        </button>
      </form>

      <hr></hr>

      <div className="font-bold text-center text-3xl">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}

export default App;

