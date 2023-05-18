import './style.scss';

const Input = ({ type, id }) => {
  return ( 
    <input
      type={type}
      id={id}
      className="search__input"
      placeholder="Enter the city"
      aria-label="Search"
      aria-describedby="search-addon"
      autoComplete="off"
      required
    />
   );
}
 
export default Input;