import PropTypes from 'prop-types';
import { Form, Input, Button } from './Search.styled';

function Search({ onSubmit }) {
  let queryValue = '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    queryValue = form.elements.query.value;
    onSubmit(queryValue);
    form.reset();
  };

  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <Input type="text" name="query" defaultValue={queryValue} />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Search;
