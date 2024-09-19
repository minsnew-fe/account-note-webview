import { HomeOutlined } from '@ant-design/icons';
import { ROUTE_PATH } from '../../../common/consts/routes';
import { NavigatorMenu } from './types';

export const NAVIGATOR_MENUS: NavigatorMenu[] = [
  {
    title: 'Home',
    to: ROUTE_PATH.HOME,
    icon: <HomeOutlined />,
  },
];
