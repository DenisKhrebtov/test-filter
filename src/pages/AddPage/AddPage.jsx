import { AddForm } from 'components/AddForm/AddForm';
import { Title } from '../../components/Title/Title';

const AddPage = () => {
  return (
    <>
      <Title text={'Add new product'} />

      <AddForm />
    </>
  );
};

export default AddPage;
