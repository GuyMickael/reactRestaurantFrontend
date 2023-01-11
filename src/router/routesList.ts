import Homepage from "../components/MainViews/Homepage/Homepage";
import Reservation from "../components/MainViews/Reservation/Reservation";
import ReservationClickAndCollect from "../components/MainViews/ReserveationClickAndCollect/ReservationClickAndCollect";
import IRoute from "../types/routes.type";


const routesList: IRoute[] = [
  {
    path: '/',
    element: Homepage,
  },
  {
    path: '/Reservation',
    element: Reservation,
  },
  {
    path: '/ClickAndCollect',
    element: ReservationClickAndCollect,
  }
]

export default routesList;
