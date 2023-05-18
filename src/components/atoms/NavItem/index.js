import './style.scss';

const NavItem = ({ content }) => {
  return (
    <li>
      <a className="city-link" href="#">{content}</a>
    </li>
  );
}

export default NavItem;