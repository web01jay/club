import "./App.scss";
import Routes from "./routes";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase";

// Initialize Firebase
export const club = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
