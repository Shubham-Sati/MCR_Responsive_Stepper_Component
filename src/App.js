import "./App.css";
import Stepper from "./components/Stepper";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import Component4 from "./components/component4";

function App() {
  const list = [<Component1 />, <Component2 />, <Component3 />, <Component4 />];

  return (
    <div className="App">
      <Stepper list={list} />
    </div>
  );
}

export default App;
