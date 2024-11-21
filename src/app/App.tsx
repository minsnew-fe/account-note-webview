import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ROUTE_PATH } from '../common/consts/routes';
import AddHistoryPage from '../pages/AddHistoryPage/AddHistoryPage';
import { useEffect } from 'react';
import DatabaseService from '../database/database';
import SubjectsPage from '../pages/SubjectsPage/SubjectsPage';
import AddAccountPage from '../pages/AddSubjectPage/AddSubjectPage';
import { App as AntdApp } from 'antd';
import LoginPage from '../pages/LoginPage/LoginPage';

const App = () => {
  useEffect(() => {
    DatabaseService.initialize();
  }, []);

  const router = createBrowserRouter([
    {
      path: ROUTE_PATH.HOME,
      element: <Navigate to={ROUTE_PATH.LOGIN} />,
      // TODO: 추후 root path를 로그인 페이지로 활용 예정
      // element: <MainPage />,
    },
    { path: ROUTE_PATH.LOGIN, element: <LoginPage /> },
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

  return (
    <AntdApp style={{ width: '100%', height: '100%' }}>
      <RouterProvider router={router} />
    </AntdApp>
  );
};

export default App;
