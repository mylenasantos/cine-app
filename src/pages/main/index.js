import React, { Component } from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import apiInterceptor from '../../services/apiInterceptor';
import Navbar from "../../components/Navbar";
import styles from './styles';


class Main extends Component {
    state = {
     films: [],
    };

    componentDidMount() {
      this.handleFilms();
    }

    handleFilms = async () => {
     const response = await apiInterceptor.get('/exhibitions');
     console.log('response =>', response);

     if (response && response.status === 200) {
         this.setState({ films: response.data }, () => {
             console.log('films =>', this.state.films[0].film);
         })
     }
    }

    render() {
        const { films } = this.state;
        return (
         <View style={styles.container}>
          <Navbar />
          {films && films.map((item) => {
            return (
            <View key={item.FilmId}>
              <Text>{item.film.Name}</Text>
            </View>
            ) 
          })}
            
         
         </View>
        )
    }
};

export default withNavigation(Main);