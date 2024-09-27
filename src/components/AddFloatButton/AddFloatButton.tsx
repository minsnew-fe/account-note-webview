import { PlusOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useNavigate } from 'react-router-dom';

const AddFloatButton = ({ path }: { path: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <FloatButton
      icon={<PlusOutlined />}
      type='primary'
      style={{ position: 'absolute', insetInlineEnd: '16px', insetBlockEnd: '16px' }}
      onClick={handleClick}
    />
  );
};

export default AddFloatButton;
