
import React from 'react';
import * as Location from 'expo-location';
import { Alert} from 'react-native';
import Loading from './components/Loading';
import axios from 'axios';
import Weather from './components/Weather';

const API_KAY = '5f426efc9f12500aeb9a6660f18b95ec';

export default class appWeather extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {data:{main:{temp}, weather, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KAY}&units=metric`);
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main,
      icon: weather[0].icon,
      description: weather[0].description,
      name: name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      await this.getWeather(latitude, longitude);
    } catch (error){
      Alert.alert("Не Могу определить местоположение", "Очень грустно :(")
    }

  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, temp, condition, icon, description, name} = this.state;
      return (
        isLoading ? <Loading /> : <Weather temp= {Math.round(temp)} condition= {condition} icon = {icon} description = {description} name={name}/>
      )
  }

};

