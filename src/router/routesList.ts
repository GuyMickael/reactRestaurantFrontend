import Friends from "../components/MainViews/Friends/Friends";
import Homepage from "../components/MainViews/Homepage/Homepage";
import IRoute from "../types/routes.type";
import { AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineUser, AiFillPlusCircle } from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi"
import Profile from "../components/MainViews/Profile/Profile";
import Messages from "../components/MainViews/Messages/Messages";
import Publication from "../components/MainViews/Publication/Publication";

const routesList: IRoute[] = [
  {
    path: '/home',
    element: Homepage,
    icon: AiOutlineHome
  },
  {
    path: '/friends',
    element: Friends,
    icon: AiOutlineUsergroupAdd,
  },
  {
    path: '/publication',
    element: Publication,
    icon: AiFillPlusCircle
  },
  {
    path: '/messages',
    element: Messages,
    icon: BiMessageDetail,
  },
  {
    path: '/profile',
    element: Profile,
    icon: AiOutlineUser
  },
]

export default routesList;
