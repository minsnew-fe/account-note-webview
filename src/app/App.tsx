import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import { ROUTE_PATH } from '../common/consts/routes';
import AddHistoryPage from '../pages/AddHistoryPage/AddHistoryPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: ROUTE_PATH.HOME,
      element: <MainPage />,
    },
    {
      path: ROUTE_PATH.ADD_HISTORY,
      element: <AddHistoryPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
