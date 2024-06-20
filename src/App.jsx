import { NavComponent } from "./components/Navigation/Nav.jsx";
import { HotPage } from "./pages/HotPage";
import { RegularPage } from "./pages/RegularPage";
import { ErrorPage } from "./pages/ErrorPage";
import { AddMemePage } from "./pages/AddMemePage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as constants from "./constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MemeBackground from "./assets/meme-background.png";

function App() {
  return (
    <div
      className="App background h-screen"
      style={{ backgroundImage: `url(${MemeBackground})` }}
    >
      <BrowserRouter>
        <NavComponent></NavComponent>
        <main>
          <ToastContainer />
          <Routes>
            <Route
              path={constants.routes.MAINROUTE}
              element={<HotPage></HotPage>}
            ></Route>
            <Route
              path={constants.routes.HOTPAGEROUTE}
              element={<HotPage></HotPage>}
            ></Route>
            <Route
              path={constants.routes.REGULARPAGEROUTE}
              element={<RegularPage></RegularPage>}
            ></Route>
            <Route
              path={constants.routes.ADDMEMEPAGEROUTE}
              element={<AddMemePage></AddMemePage>}
            ></Route>
            <Route
              path={constants.routes.ERRORROUTE}
              element={<ErrorPage></ErrorPage>}
            ></Route>
            <Route
              path={constants.routes.CONTACTPAGE}
              element={<ContactPage></ContactPage>}
            ></Route>
            <Route
              path={constants.routes.LOGINPAGE}
              element={<LoginPage></LoginPage>}
            ></Route>
            <Route
              path={constants.routes.USERPAGE}
              element={<UserPage></UserPage>}
            ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
