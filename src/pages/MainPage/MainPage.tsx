import BasePageContainer from '../../containers/BasePageContainer/BasePageContainer';
import { ROUTE_PATH } from '../../common/consts/routes';
import { Flex } from 'antd';
import AddFloatButton from '../../components/AddFloatButton/AddFloatButton';

const MainPage = () => {
  return (
    <BasePageContainer>
      <Flex>Main</Flex>
      <AddFloatButton path={ROUTE_PATH.ADD_HISTORY} />
    </BasePageContainer>
  );
};

export default MainPage;
