import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Heading } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Heading />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
