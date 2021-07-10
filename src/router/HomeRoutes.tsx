import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Settimg";
import { UserManegement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    excat: true,
    children: <Home />
  },
  {
    path: "/user_management",
    excat: false,
    children: <UserManegement />
  },
  {
    path: "/setting",
    excat: false,
    children: <Setting />
  },
  {
    path: "*",
    excat: false,
    children: <Page404 />
  }
];
