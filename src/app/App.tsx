import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ROUTE_PATH } from '../common/consts/routes';
import AddHistoryPage from '../pages/AddHistoryPage/AddHistoryPage';
import { useEffect } from 'react';
import DatabaseService from '../database/database';
import SubjectsPage from '../pages/SubjectsPage/SubjectsPage';
import AddAccountPage from '../pages/AddSubjectPage/AddSubjectPage';

const App = () => {
  useEffect(() => {
    DatabaseService.initialize();
  }, []);

  const router = createBrowserRouter([
    {
      path: ROUTE_PATH.HOME,
      element: <Navigate to={ROUTE_PATH.SUBJECTS} />,
      // TODO: 추후 root path를 로그인 페이지로 활용 예정
      // element: <MainPage />,
    },
    {
      path: ROUTE_PATH.SUBJECTS,
      element: <SubjectsPage />,
    },
    {
      path: ROUTE_PATH.ADD_SUBJECT,
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
