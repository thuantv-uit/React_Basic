import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log("Data: ", data)

  const updateData = (SearchParams) => {
    setData(SearchParams);
  }

  return (
    <div className="App">
      <SearchBar callback={updateData}/>
      <p>Name: {"name" in data ? data["name"]: "No Data to display"}</p>
      <p>Display: {"display" in data ? data["display"]: "No Data to display"}</p>
      <p>Type: {"type" in data ? data["type"]: "No Data to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"]: "No Data to display"}</p>
    </div>
  );
}
export default App;
