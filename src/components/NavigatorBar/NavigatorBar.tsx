import { Button, Flex } from 'antd';
import { NAVIGATOR_HEIGHT } from '../../styles/consts';
import { NAVIGATOR_MENUS } from './shared/menus';
import { useLocation } from 'react-router-dom';

const NavigatorBar = () => {
  const { pathname } = useLocation();

  return (
    <Flex style={{ padding: 0, height: NAVIGATOR_HEIGHT }}>
      {NAVIGATOR_MENUS.map((menu) => (
        <Button style={{ backgroundColor: pathname === menu.to ? 'red' : 'inherit' }}>{menu.icon}</Button>
      ))}
    </Flex>
  );
};

export default NavigatorBar;
