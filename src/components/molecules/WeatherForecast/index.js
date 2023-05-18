import './style.scss';

import ForecastDay from '../../atoms/ForecastDay';

import { ReactComponent as WeatherIcon } from '../../../assets/icons/01d.svg';

const WeatherForecast = () => {
  return ( 
    <div className="forecast" id="forecast">
      <ForecastDay weekDay="Mon" tempMax="25" tempMin="18" WeatherIcon={WeatherIcon} />
      <ForecastDay weekDay="Tue" tempMax="25" tempMin="18" WeatherIcon={WeatherIcon} />
      <ForecastDay weekDay="Wed" tempMax="25" tempMin="18" WeatherIcon={WeatherIcon} />
      <ForecastDay weekDay="Thu" tempMax="25" tempMin="18" WeatherIcon={WeatherIcon} />
      <ForecastDay weekDay="Fri" tempMax="25" tempMin="18" WeatherIcon={WeatherIcon} />
      <ForecastDay weekDay="Sat" tempMax="25" tempMin="18" WeatherIcon={WeatherIcon} />
    </div>
   );
}
 
export default WeatherForecast;