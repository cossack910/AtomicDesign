import { Router } from "./router/Router";
import "./styles.css";
import "./App.css";
// import UserProvider from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
