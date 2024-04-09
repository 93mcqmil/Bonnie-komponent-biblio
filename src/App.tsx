import Checkbox from "./Components/Checkbox/Checkbox";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

const App = () => {
  let todos = [
    "Finish homework",
    "Go grocery shopping",
    "Call mom",
    "Workout for 30 minutes",
    "Read a chapter of a book",
  ];

  return (
    <>
      <ProgressBar title="Progress" percentage={75} color={"green"} />

      <article className="todo">
        <h2>My Todos:</h2>
        {todos.map((todo, index) => (
          <Checkbox key={index} title={todo} big={true} />
        ))}
      </article>
    </>
  );
};

export default App;
