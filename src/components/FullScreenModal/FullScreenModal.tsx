import { Flex } from 'antd';
import Portal from '../Portal/Portal';
import { PropsWithChildren } from 'react';
import Header from './shared/Header';
import Content from './shared/Content';
import Actions from './shared/Actions';

const FullScreenModal = ({ children, opened }: PropsWithChildren<{ opened: boolean }>) => {
  return (
    <Portal>
      {opened && (
        <Flex style={{ position: 'fixed', top: 0, left: 0, backgroundColor: 'white', width: '100vw', height: '100vh' }}>
          <Flex style={{ flex: 1, margin: '12px 8px' }} vertical>
            {children}
          </Flex>
        </Flex>
      )}
    </Portal>
  );
};

export default Object.assign(FullScreenModal, { Header, Content, Actions });
