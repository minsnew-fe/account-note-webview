import { MenuOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

interface AppBarProps {
  title: string;
}

const AppBar = ({ title }: AppBarProps) => {
  return (
    <Flex style={{ padding: '8px 0' }} justify='space-between' align='center'>
      <Flex style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</Flex>
      <Button style={{ backgroundColor: 'inherit', padding: '4px 8px', border: 'none', boxShadow: 'none' }}>
        <MenuOutlined style={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      </Button>
    </Flex>
  );
};

export default AppBar;
