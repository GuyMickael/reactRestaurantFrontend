import { IconType } from "react-icons/lib";

interface IRoute {
  path: string,
  element: React.FC,
  icon: IconType
}

export default IRoute;