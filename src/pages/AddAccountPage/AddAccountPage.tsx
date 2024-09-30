import { Button, Flex, Input, Layout, Typography } from 'antd';
import { Account } from '../../common/models/account';
import { Controller, useForm } from 'react-hook-form';
import { isValidAccountName, postAccount } from '../../database/account';
import { generateDbId } from '../../utils/database';

interface RegisterAccount extends Omit<Account, 'id' | 'isActivate'> {
  isValid: boolean;
}

const AddAccountPage = () => {
  const { control, handleSubmit, setValue, watch } = useForm<RegisterAccount>({
    defaultValues: { name: '', description: '', isValid: false },
  });

  const { name, isValid } = watch();

  const handleCheckIsValidName = async () => {
    try {
      const isValid = await isValidAccountName(name);
      setValue('isValid', isValid);
    } catch (error) {
      console.error('failed to check valid name', error);
    }
  };

  const onSubmit = async (values: RegisterAccount) => {
    const id = generateDbId();

    const account: Account = {
      id,
      name: values.name,
      description: values.description,
      isActivate: true,
    };

    try {
      await postAccount(id, account);
    } catch (error) {
      console.error('failed to post account', error);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Typography>등록</Typography>
      <form>
        <Flex>
          <Controller name='name' control={control} render={({ field }) => <Input value={field.value} onChange={field.onChange} />} />
          <Button disabled={name.length === 0} onClick={handleCheckIsValidName}>
            중복 확인
          </Button>
        </Flex>
        <Controller name='description' control={control} render={({ field }) => <Input value={field.value} onChange={field.onChange} />} />
        <Button disabled={!isValid || name.length === 0} onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default AddAccountPage;
