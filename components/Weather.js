import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Thunderstorm: {
        iconName: 'thunderstorm-outline',
        gradient:['#bdc3c7','#2c3e50']
    },

    Drizzle: {
        iconName: 'cloud-drizzle',
        gradient:['#3E5151','#DECBA4']
    },

    Rain: {
        iconName: 'rainy-outline',
        gradient:['#403B4A','#E7E9BB']
    },

    Snow: {
        iconName: 'snow-outline',
        gradient:['#E6DADA','#274046']
    },

    Haze: {
        iconName: 'day-haze',
        gradient:['#EDE574','#E1F5C4']
    },

    Fog: {
        iconName: 'weather-fog',
        gradient:['#acb6e5','#86fde8']
    },

    Dust: {
        iconName: '',
        gradient:['#F7F8F8','#ACBB78']
    },

    Sand: {
        iconName: '',
        gradient:['#659999','#f4791f']
    },

    Mist: {
        iconName: 'weather-rainy',
        gradient:['#334d50','#cbcaa5']
    },

    Clear: {
        iconName: 'sunny-outline',
        gradient:['#00B4DB','#0083B0']
    },

    Clouds: {
        iconName: 'day-cloudy',
        gradient:['#2c3e50','#bdc3c7']
    }

}

export default function Weather ({temp, condition, icon, description, name}) {
    return (
        <LinearGradient colors={weatherOption[condition].gradient}
        style= {styles.container}>
            <View style={styles.uperContainer}>
                <Text style= {styles.subTitle}>{name}</Text>
                <StatusBar barStyle={'light-content'}/>
                <Image source={{uri: `https://openweathermap.org/img/wn/${icon}.png`}}
                    style={{width: 150, height: 150}} />
                <Text style= {styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.downerContainer, ...styles.textContent}}>
                <Text style= {styles.title}>{description}</Text>
                <Text style= {styles.subTitle}>{''}</Text>
            </View>
      </LinearGradient>
    );
};

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(['Thunderstorm','Drizzle','Rain','Snow','Haze','Fog','Dust','Sand','Mist','Clear','Clouds']).isRequired,

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    uperContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    downerContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    temp: {
        fontSize: 42,
        color:'white',
        marginTop: 30,
    },

    title: {
        fontSize: 44,
        color:'white',
        fontWeight: '300',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 24,
        color:'white',
        fontWeight: '600',
    },
    textContent: {
        paddingHorizontal:20,
        alignItems: 'flex-start'
    }
})