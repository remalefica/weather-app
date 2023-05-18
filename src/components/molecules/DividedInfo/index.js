import './style.scss';

const DividedInfo = ({ LeftComponent, RightComponent }) => {
  return (
    <div className="divided-info">
      <LeftComponent className="divided-info__smaller"/>
      <span className="v-line"></span>
      <RightComponent />
    </div>
  );
}

export default DividedInfo;