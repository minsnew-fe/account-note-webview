import { Button, Flex, Input } from 'antd';
import { useState } from 'react';
import FullScreenModal from '../../../../components/FullScreenModal/FullScreenModal';
import { ModalCloseReason } from '../../../../components/FullScreenModal/shared/types';
import { Controller, useForm } from 'react-hook-form';
import { Subject } from '../../../../common/models/subject';
import { postSubject } from '../../../../database/subject';
import { generateDbId } from '../../../../utils/database';

interface RegisterSubject extends Omit<Subject, 'id'> {}

const AddSubjectButton = () => {
  const [isModalOpended, setIsModalOpened] = useState(false);

  const { control, watch } = useForm<RegisterSubject>({ defaultValues: { name: '', description: '', isActivate: true } });
  const fieldValues = watch();

  const handleClickButton = () => {
    setIsModalOpened(true);
  };

  const handleCloseModal = (reason?: ModalCloseReason) => {
    console.log('reason', reason);
    setIsModalOpened(false);
  };

  const onSubmit = () => {
    const id = generateDbId();
    const newSubject: Subject = {
      id,
      ...fieldValues,
    };

    try {
      postSubject(id, newSubject);
    } catch (error) {
      console.error('failed to post subject', error);
    }
  };

  return (
    <>
      <Button type='primary' onClick={handleClickButton}>
        폴더 추가하기
      </Button>
      <FullScreenModal opened={isModalOpended}>
        <FullScreenModal.Header title='폴더 추가' onClose={handleCloseModal} />
        <FullScreenModal.Content>
          <Flex vertical flex={1} gap={16}>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <Input showCount maxLength={16} placeholder='폴더 이름' value={field.value} onChange={field.onChange} />
              )}
            />
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <Input showCount maxLength={40} placeholder='폴더 설명' value={field.value} onChange={field.onChange} />
              )}
            />
          </Flex>
        </FullScreenModal.Content>
        <FullScreenModal.Actions onSubmit={onSubmit} />
      </FullScreenModal>
    </>
  );
};

export default AddSubjectButton;
