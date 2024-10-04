import { Button } from 'antd';
import FullScreenModal from '../../../../components/FullScreenModal/FullScreenModal';
import { ModalCloseReason } from '../../../../components/FullScreenModal/FullScreenModal.types';
import { useState } from 'react';

const AddSubjectButton = () => {
  const [isModalOpended, setIsModalOpened] = useState(false);

  const handleClickButton = () => {
    setIsModalOpened(true);
  };

  const handleCloseModal = (reason?: ModalCloseReason) => {
    console.log('reason', reason);
    setIsModalOpened(false);
  };

  return (
    <>
      <Button type='primary' onClick={handleClickButton}>
        폴더 추가하기
      </Button>
      <FullScreenModal opened={isModalOpended} title='폴더 추가' onClose={handleCloseModal}>
        AAAA
      </FullScreenModal>
    </>
  );
};

export default AddSubjectButton;
