import './style.scss';

const Button = ({ type, content }) => {
  return (
    <button type={type} className="btn btn--outline">{content}</button>
  );
}

export default Button;