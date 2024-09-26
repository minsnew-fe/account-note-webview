import { Button, Layout } from 'antd';
import { getHistories, postHistory } from '../../database/accountHistory';
import { useState } from 'react';

const AddHistoryPage = () => {
  const [histories, setHistories] = useState<{ id: string; price: number }[]>([]);

  const handleClick = () => {
    postHistory();
  };

  const handleClickGetHistories = async () => {
    try {
      const histories = await getHistories();
      setHistories(histories);
    } catch (error) {
      console.error('failed to get histories', error);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      AddHistoryPage
      <Button onClick={handleClick}>Set</Button>
      <Button onClick={handleClickGetHistories}>Get</Button>
      <div>
        {histories.map((history) => (
          <div key={history.id}>{history.price}</div>
        ))}
      </div>
    </Layout>
  );
};

export default AddHistoryPage;
