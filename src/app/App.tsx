import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import { ROUTE_PATH } from '../common/consts/routes';
import AddHistoryPage from '../pages/AddHistoryPage/AddHistoryPage';
import { useEffect } from 'react';
import DatabaseService from '../database/database';

const App = () => {
  useEffect(() => {
    DatabaseService.initialize();
  }, []);

  const router = createBrowserRouter([
    {
      path: ROUTE_PATH.HOME,
      element: <MainPage />,
    },
    {
      path: ROUTE_PATH.ACCOUNT_LIST,
      element: <div>account list</div>,
    },
    {
      path: ROUTE_PATH.ADD_HISTORY,
      element: <AddHistoryPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
