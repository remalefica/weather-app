import './style.scss';

const ForecastDay = ({ weekDay, tempMax, tempMin, WeatherIcon }) => {
  return (
    <div className="forecast__item">
      <p className="forecast__accent">{weekDay}</p>
      <WeatherIcon className="forecast__icon"/>
      <p className="forecast__temp">
        <span className="forecast__accent">{tempMax}°</span>
        <span>{tempMin}°</span>
      </p>
    </div>
  );
}

export default ForecastDay;