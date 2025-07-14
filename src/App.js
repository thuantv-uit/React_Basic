import "./App.css";
import Info from "./Info";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Thuan" number="Thuan" />
      <AddItem text="Tran"/>
      <AddItem />
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}
AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
