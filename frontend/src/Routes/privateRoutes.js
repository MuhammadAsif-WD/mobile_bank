import AllDepositReplay from "../Components/AllDepositReplay";
import AllTransition from "../Pages/AllTransition";
import Deposit from "../Pages/Deposit";
import Home from "../Pages/Home";
import NewRequest from "../Pages/NewRequest";
import OrderHistory from "../Pages/OrderHistory";
import Payment from "../Pages/Payment";
import PendingOrder from "../Pages/PendingOrder";
const privateRoutes = [
  { path: "/home", Component: Home },
  { path: "/home/new-request", Component: NewRequest },
  { path: "/home/order-history", Component: OrderHistory },
  { path: "/home/pending-order", Component: PendingOrder },
  { path: "/home/payment", Component: Payment },
  { path: "/home/deposit", Component: Deposit },
  { path: "/home/all-transition", Component: AllTransition },
  { path: "/home/deposit/all-deposit-replay", Component: AllDepositReplay },
];
export default privateRoutes;
