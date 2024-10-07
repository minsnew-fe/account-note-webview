import { Button, Flex, Typography } from 'antd';
import { ModalCloseReason } from './types';
import { LeftOutlined } from '@ant-design/icons';

export interface HeaderProps {
  title: string;
  onClose: (reason?: ModalCloseReason) => void;
}

const Header = ({ title, onClose }: HeaderProps) => {
  const handleClose = () => {
    onClose('CLOSE');
  };

  return (
    <Flex style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', height: '48px' }}>
      <Button style={{ width: '24px', height: '24px', border: 'none', boxShadow: 'none' }} onClick={handleClose}>
        <LeftOutlined style={{ fontSize: '18px' }} />
      </Button>
      <Typography style={{ marginLeft: '8px', fontSize: '20px', fontWeight: 'bold' }}>{title}</Typography>
    </Flex>
  );
};

export default Header;
