import { Button, Flex, Typography } from 'antd';
import Portal from '../Portal/Portal';
import { PropsWithChildren } from 'react';
import { FullScreenModalProps } from './FullScreenModal.types';
import { LeftOutlined } from '@ant-design/icons';

const FullScreenModal = ({ opened, title, onClose, children }: PropsWithChildren<FullScreenModalProps>) => {
  const handleClose = () => {
    onClose('CLOSE');
  };

  return (
    <Portal>
      {opened && (
        <Flex style={{ position: 'fixed', top: 0, left: 0, backgroundColor: 'white', width: '100vw', height: '100vh' }}>
          <Flex style={{ flex: 1 }} vertical>
            <Flex style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', height: '48px' }}>
              <Button style={{ width: '24px', height: '24px', border: 'none', boxShadow: 'none' }} onClick={handleClose}>
                <LeftOutlined style={{ fontSize: '18px' }} />
              </Button>
              <Typography style={{ marginLeft: '8px', fontSize: '20px', fontWeight: 'bold' }}>{title}</Typography>
            </Flex>
            {children}
          </Flex>
        </Flex>
      )}
    </Portal>
  );
};

export default FullScreenModal;
