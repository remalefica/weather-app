import './style.scss';

import NavItem from '../../atoms/NavItem';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavItem content={"Munich"} />
        <NavItem content={"London"} />
        <NavItem content={"Tokyo"} />
        <NavItem content={"New York"} />
        <NavItem content={"Current"} />
      </ul>
    </nav>
  );
}

export default Navigation;