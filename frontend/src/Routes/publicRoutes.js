import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
const publicRoutes = [
  { path: "/", Component: Login },
  { path: "/registration", Component: Registration },
];
export default publicRoutes;
