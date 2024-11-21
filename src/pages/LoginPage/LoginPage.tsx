import { Flex, Input, Layout } from 'antd';
import { ChangeEvent, useState } from 'react';

const LoginPage = () => {
  const [password, setPassword] = useState<string[]>(['', '', '', '', '', '']);
  const handleChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const updatedPassword = [...password];
    updatedPassword[index] = event.target.value;

    setPassword(updatedPassword);
  };

  return (
    <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Flex gap={8} justify='center'>
        {password.map((value, index) => (
          <Input key={index} value={value} onChange={handleChange(index)} maxLength={1} style={{ width: '32px' }} />
        ))}
      </Flex>

      <Flex>
        {password.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </Flex>
    </Layout>
  );
};

export default LoginPage;
