import { Button, Flex } from 'antd';
import { ModalCloseReason } from './types';

export interface ActionsProps {
  submitButtonText?: string;
  extraControl?: React.ReactNode;
  onSubmit: (reason?: ModalCloseReason) => void;
}

const Actions = ({ submitButtonText, extraControl, onSubmit }: ActionsProps) => {
  const handleClick = () => {
    onSubmit('SUBMIT');
  };

  return (
    <Flex>
      <Flex justify='flex-end'>
        {extraControl && <Flex>{extraControl}</Flex>}
        <Button onClick={handleClick}>{submitButtonText ?? '저장'}</Button>
      </Flex>
    </Flex>
  );
};

export default Actions;
