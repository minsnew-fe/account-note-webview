import { Button, Flex } from 'antd';
import { Account } from '../../../../common/models/account';
import { removeAccount } from '../../../../database/account';
import { DeleteOutlined } from '@ant-design/icons';

const AccountList = ({ accounts }: { accounts: Account[] }) => {
  const handleRemoveAccount = (id: string) => async () => {
    try {
      await removeAccount(id);
    } catch (error) {
      console.error('failed to remove account', error);
    }
  };

  return (
    <Flex>
      {accounts.map((account) => (
        <Flex key={account.id}>
          {account.name}
          <Button onClick={handleRemoveAccount(account.id)}>
            <DeleteOutlined />
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};

export default AccountList;
