import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import { ROUTE_PATH } from '../common/consts/routes';
import AddHistoryPage from '../pages/AddHistoryPage/AddHistoryPage';
import { useEffect } from 'react';
import DatabaseService from '../database/database';
import AccountsPage from '../pages/AccountsPage/AccountsPage';
import AddAccountPage from '../pages/AddAccountPage/AddAccountPage';

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
      path: ROUTE_PATH.ACCOUNTS,
      element: <AccountsPage />,
    },
    {
      path: ROUTE_PATH.ADD_ACCOUNT,
      element: <AddAccountPage />,
    },
    {
      path: ROUTE_PATH.ADD_HISTORY,
      element: <AddHistoryPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
