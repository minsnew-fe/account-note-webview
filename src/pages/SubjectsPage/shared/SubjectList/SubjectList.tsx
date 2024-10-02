import { Button, Flex } from 'antd';
import { Subject } from '../../../../common/models/subject';
import { removeSubject } from '../../../../database/subject';
import { DeleteOutlined } from '@ant-design/icons';

const SubjectList = ({ subjects }: { subjects: Subject[] }) => {
  const handleRemoveSubject = (id: string) => async () => {
    try {
      await removeSubject(id);
    } catch (error) {
      console.error('failed to remove subject', error);
    }
  };

  return (
    <Flex>
      {subjects.map((subject) => (
        <Flex key={subject.id}>
          {subject.name}
          <Button onClick={handleRemoveSubject(subject.id)}>
            <DeleteOutlined />
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};

export default SubjectList;
