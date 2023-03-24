import { AddForm } from 'components/AddForm/AddForm';
import { Link } from 'react-router-dom';
import { Title } from '../components/Title/Title';

const AddPage = () => {
  return (
    <>
      <Title text={'Add new product'} />
      <Link to={'/'}>Go back</Link>
      <AddForm />
    </>
  );
};

export default AddPage;
