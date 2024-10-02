import { Flex, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { Subject } from '../../common/models/subject';
import { getSubjects } from '../../database/subject';
import SubjectList from './shared/SubjectList/SubjectList';

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
    <Layout style={{ minHeight: '100vh' }}>
      {subjects.length === 0 ? <Flex>등록된 정보가 없습니다.</Flex> : <SubjectList subjects={subjects} />}
    </Layout>
  );
};

export default SubjectsPage;
