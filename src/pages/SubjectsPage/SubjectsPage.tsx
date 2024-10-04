import { Empty, Flex } from 'antd';
import { useEffect, useState } from 'react';
import { Subject } from '../../common/models/subject';
import { getSubjects } from '../../database/subject';
import SubjectList from './shared/SubjectList/SubjectList';
import AppBar from '../../components/AppBar/AppBar';
import AddSubjectButton from './shared/AddSubjectButton/AddSubjectButton';

const SubjectsPage = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const fetchSubjects = async () => {
    try {
      const result = await getSubjects();

      setSubjects(result);
    } catch (error) {
      console.error('failed to fetch subjects', error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <Flex style={{ height: '100vh', padding: '8px 12px' }} vertical>
      <AppBar title='폴더 목록' />
      <Flex style={{ height: 'calc(100% - 48px)', padding: '16px 0' }} justify='center' align='center'>
        {subjects.length === 0 ? (
          <Flex vertical>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='등록된 폴더가 없습니다.' />
            <AddSubjectButton />
          </Flex>
        ) : (
          <SubjectList subjects={subjects} />
        )}
      </Flex>
    </Flex>
  );
};

export default SubjectsPage;
