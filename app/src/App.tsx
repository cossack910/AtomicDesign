import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import SearchInput from "./components/molecule/SearchInput";

function App() {
  return (
    <>
      <div className="App">
        <PrimaryButton text="test" />
        <SecondaryButton text="aaaa" />
        <br />
        <SearchInput />
      </div>
    </>
  );
}

export default App;
