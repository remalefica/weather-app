import './style.scss';

const Link = ({children, source}) => {
  return ( 
    <a href={source} target="_blank">
      {children}
    </a>
   );
}
 
export default Link;