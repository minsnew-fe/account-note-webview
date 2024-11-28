import { Button, Flex, Input, Layout, Typography } from 'antd';
import { ChangeEvent, useState } from 'react';

const INPUT_PREFIX = 'otp-';

const LoginPage = () => {
  const [password, setPassword] = useState<string[]>(['', '', '', '', '', '']);
  const createChangeHandler = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const updatedPassword = [...password];
    updatedPassword[index] = event.target.value;

    setPassword(updatedPassword);

    const nextElement = document.getElementById(`${INPUT_PREFIX}${index + 1}`);
    if (nextElement) {
      nextElement.focus();
    }
  };

  return (
    <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Flex vertical>
        <Typography style={{ fontSize: '18px' }}>
          Enter <span style={{ fontWeight: 'bold', color: 'orangered' }}>6</span>digits verification code.
        </Typography>
        <Flex gap={8} justify='center' style={{ marginBottom: '8px' }}>
          {password.map((value, index) => (
            <Input.Password
              id={`${INPUT_PREFIX}${index}`}
              key={index}
              value={value}
              onInput={createChangeHandler(index)}
              onFocus={(event) => event.target.select()}
              maxLength={1}
              style={{ width: '32px' }}
              iconRender={() => null}
            />
          ))}
        </Flex>
        <Button>Enter</Button>
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
