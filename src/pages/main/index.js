import React, { Component } from "react";
import { View, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import apiInterceptor from '../../services/apiInterceptor';
import apiOMDB from '../../services/apiOMDB';
import Navbar from "../../components/Navbar";
import { Dimensions } from 'react-native';
import styles from './styles';

const { width: screenWidth } = Dimensions.get('window')
class Main extends Component {
    state = {
     films: ['data'],
     apiKey: 'f2396906',
    };

    componentDidMount() {
      // this.handleFilms();
      
    }
    _renderItem ({item, index}, parallaxProps) {
      return (
          <View style={styles.item}>
              <ParallaxImage
                  source={{ uri: item.thumbnail }}
                  containerStyle={styles.imageContainer}
                  style={styles.image}
                  parallaxFactor={0.4}
                  {...parallaxProps}
              />
              <Text style={styles.title} numberOfLines={2}>
                  { item.title }
              </Text>
          </View>
      );
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
          <View style={styles.filmExView}>
           <Text style={styles.filmEx}>Filmes em cartaz</Text>
          </View>
          {films && films.map((item) => {
            return (
            <View key={item.FilmId} style={styles.container}>
              <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={this.state.films}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
            </View>
            ) 
          })}
            
         
         </View>
        )
    }
};

export default withNavigation(Main);