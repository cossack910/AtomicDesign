import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";

function App() {
  return (
    <>
      <div className="App">
        <PrimaryButton text="test" />
        <SecondaryButton text="aaaa" />
      </div>
    </>
  );
}

export default App;
