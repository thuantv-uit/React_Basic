import "./App.css";
import Info from "./Info";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState></ButtonState>
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [counter, setCounter] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title");
  }

  const updateCounterClicked = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Data title={title} counter={counter}/>
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.counter}</p>
    </div>
  )
}

export default App;
