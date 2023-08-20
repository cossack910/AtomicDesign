import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import SearchInput from "./components/molecule/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

function App() {
  return (
    <>
      <div className="App">
        <PrimaryButton text="test" />
        <SecondaryButton text="aaaa" />
        <br />
        <SearchInput />
        <UserCard
          email="aaa@aaa.com"
          phone="090-8888-7777"
          company={{ name: "aaaaa" }}
          website="test@kaisya.com"
        />
      </div>
    </>
  );
}

export default App;
