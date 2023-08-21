import { Router } from "./router/Router";
import "./styles.css";
import "./App.css";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
