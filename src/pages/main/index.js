import React, { Component } from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import apiInterceptor from '../../services/apiInterceptor';
import apiOMDB from '../../services/apiOMDB';
import Navbar from "../../components/Navbar";
import styles from './styles';


class Main extends Component {
    state = {
     films: [],
     apiKey: 'f2396906',
    };

    componentDidMount() {
      this.handleFilms();
      
    }

    handleFilms = async () => {
     const response = await apiInterceptor.get('/exhibitions');
     console.log('response =>', response);

    if (response && response.status === 200) {
         this.setState({ films: response.data }, () => {
          this.handleImageFilm();
         });
     }
    };

    handleImageFilm = async () => {
      const { apiKey, films } = this.state;
      console.log('state film =>', this.state.films)
      const apiCode = this.state.films.map((item => {
      return item.film.ApiCode;
    }));
    console.log('apiCode state =>', apiCode);

    const responseOMDB = await apiOMDB.get(`/?apiKey=${apiKey}&i=${apiCode}`);
    console.log('imagem =>', responseOMDB);
    };

    render() {
        const { films } = this.state;
        return (
         <View>
          <Navbar />
          {films && films.map((item) => {
            return (
            <View key={item.FilmId} style={styles.container}>
              <Text style={styles.nameFilm}>{item.film.Name}</Text>
            </View>
            ) 
          })}
            
         
         </View>
        )
    }
};

export default withNavigation(Main);