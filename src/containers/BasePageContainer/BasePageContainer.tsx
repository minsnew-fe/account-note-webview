import { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { NAVIGATOR_HEIGHT } from '../../styles/consts';
import NavigatorBar from '../../components/NavigatorBar/NavigatorBar';

const BasePageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ height: `calc(100% - ${NAVIGATOR_HEIGHT})`, overflow: 'auto', position: 'relative' }}>{children}</Content>
      <NavigatorBar />
    </Layout>
  );
};

export default BasePageContainer;
