import "./App.css";
import { NavComponent } from "./components/NavCompontent";
import { HotPage } from "./pages/HotPage";
import { RegularPage } from "./pages/RegularPage";
import { ErrorPage } from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavComponent></NavComponent>
      <main>
        <Routes>
        <Route path="/" element={<HotPage></HotPage>}></Route>
        <Route path="/hot" element={<HotPage></HotPage>}></Route>
        <Route path="/regular" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/*" element={<RegularPage></RegularPage>}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
