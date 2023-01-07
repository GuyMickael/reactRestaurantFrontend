import Homepage from "../components/MainViews/Homepage/Homepage";
import IRoute from "../types/routes.type";
import { AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineUser, AiFillPlusCircle } from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi"

const routesList: IRoute[] = [
  {
    path: '/home',
    element: Homepage,
    icon: AiOutlineHome
  },
]

export default routesList;
