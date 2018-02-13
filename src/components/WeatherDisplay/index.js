import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../../modules/weather/actionsWeather";

export class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchWeather();
  }

  render() {
    if (!this.props.todoWeather) return <div>Loading</div>;

    const {
      temp,
      temp_max,
      temp_min,
      speed,
      name,
      picture,
      weatherFetchError
    } = this.props.todoWeather;

    if (weatherFetchError) return <div>weatherFetchError</div>;

    const iconUrl = `http://openweathermap.org/img/w/${picture}.png`;

    return (
      <div>
        {/* hggggggg */}
        <h1>
          {name}
          <img src={iconUrl} />
        </h1>
        <p>Current: {temp}°</p>
        <p>High: {temp_max}°</p>
        <p>Low: {temp_min}°</p>
        <p>Wind Speed: {speed} mi/hr</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchWeather
      },
      dispatch
    )
  };
};

const mapStateToProps = stateWeather => {
  return {
    todoWeather: stateWeather.todoWeather
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
