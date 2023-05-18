import './style.scss';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const Search = () => {
  return (
    <form className="search" id="search-city__form">
      <Input type="search" id="search-city__input"/>
      <Button type='submit' content='Search'/>
    </form>
  );
}

export default Search;