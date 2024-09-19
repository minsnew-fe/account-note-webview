import { useNavigate } from 'react-router-dom';
import BasePageContainer from '../../containers/BasePageContainer/BasePageContainer';
import { ROUTE_PATH } from '../../common/consts/routes';
import { Flex, FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE_PATH.ADD_HISTORY);
  };

  return (
    <BasePageContainer>
      <Flex>Main</Flex>
      <FloatButton
        icon={<PlusOutlined />}
        type='primary'
        style={{ position: 'absolute', insetInlineEnd: '16px', insetBlockEnd: '16px' }}
        onClick={handleClick}
      />
    </BasePageContainer>
  );
};

export default MainPage;
