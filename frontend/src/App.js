import { Route, Routes } from "react-router-dom";
import publicRoutes from "./Routes/publicRoutes";
import privateRoutes from "./Routes/privateRoutes";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map(({ Component, path }, index) => (
          <Route key={index + 394} path={path} element={<Component />}></Route>
        ))}
        {privateRoutes.map(({ Component, path }, index) => (
          <Route path="/home" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route
              key={index + 33494}
              path={path}
              element={<Component />}
            ></Route>
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
