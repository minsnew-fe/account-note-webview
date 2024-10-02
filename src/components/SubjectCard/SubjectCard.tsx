import { Flex } from 'antd';
import { Subject } from '../../common/models/subject';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  return <Flex>{subject.name}</Flex>;
};

export default SubjectCard;
