import "./App.css";
import { NavComponent } from "./components/NavCompontent";
import { HotPage } from "./pages/HotPage";
import { RegularPage } from "./pages/RegularPage";
import { ErrorPage } from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as routesDeclarations from "./constants/routesDeclarations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent></NavComponent>
        <main>
          <Routes>
            <Route
              path={routesDeclarations.MAINROUTE}
              element={<HotPage></HotPage>}
            ></Route>
            <Route
              path={routesDeclarations.HOTPAGEROUTE}
              element={<HotPage></HotPage>}
            ></Route>
            <Route
              path={routesDeclarations.REGULARPAGEROUTE}
              element={<RegularPage></RegularPage>}
            ></Route>
            <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
