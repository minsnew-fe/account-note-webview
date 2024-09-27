import { Flex, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { Account } from '../../common/models/account';
import { getAccounts } from '../../database/account';

const AccountsPage = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const fetchAccounts = async () => {
    try {
      const result = await getAccounts();

      setAccounts(result);
    } catch (error) {
      console.error('failed to fetch accounts', error);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {accounts.length === 0 ? (
        <Flex>등록된 정보가 없습니다.</Flex>
      ) : (
        <Flex>
          {accounts.map((account) => (
            <Flex key={account.id}>{account.name}</Flex>
          ))}
        </Flex>
      )}
    </Layout>
  );
};

export default AccountsPage;
