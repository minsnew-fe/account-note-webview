import { Flex } from 'antd';
import { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return <Flex style={{ padding: '12px' }}>{children}</Flex>;
};

export default Content;
