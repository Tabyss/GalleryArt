import { Route, Routes } from "react-router-dom";
import "./_app.scss";
import Landing from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
    </Routes>
  );
}

export default App;
