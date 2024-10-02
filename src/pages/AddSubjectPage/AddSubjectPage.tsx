import { Button, Flex, Input, Layout, Typography } from 'antd';
import { Subject } from '../../common/models/subject';
import { Controller, useForm } from 'react-hook-form';
import { isValidSubjectName, postSubject } from '../../database/subject';
import { generateDbId } from '../../utils/database';

interface RegisterSubject extends Omit<Subject, 'id' | 'isActivate'> {
  isValid: boolean;
}

const AddSubjectPage = () => {
  const { control, handleSubmit, setValue, watch } = useForm<RegisterSubject>({
    defaultValues: { name: '', description: '', isValid: false },
  });

  const { name, isValid } = watch();

  const handleCheckIsValidName = async () => {
    try {
      const isValid = await isValidSubjectName(name);
      setValue('isValid', isValid);
    } catch (error) {
      console.error('failed to check valid name', error);
    }
  };

  const onSubmit = async (values: RegisterSubject) => {
    const id = generateDbId();

    const subject: Subject = {
      id,
      name: values.name,
      description: values.description,
      isActivate: true,
    };

    try {
      await postSubject(id, subject);
    } catch (error) {
      console.error('failed to post subject', error);
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

export default AddSubjectPage;
