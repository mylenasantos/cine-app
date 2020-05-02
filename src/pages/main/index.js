import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import apiInterceptor from '../../services/apiInterceptor';
import apiOMDB from '../../services/apiOMDB';
import Navbar from "../../components/Navbar";
import { Dimensions } from 'react-native';
import styles from './styles';

const { width: screenWidth } = Dimensions.get('window')

export default class Main extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Filmes em Cartaz',
  };
    state = {
     films: [],
     apiKey: 'f2396906',
    };

    componentDidMount() {
      this.handleFilms();
    }
    
    _renderItem ({item, index}, parallaxProps) {
        return (
          <View style={styles.item} key={index}>
              <ParallaxImage
                  source={{ uri: item.Poster }}
                  containerStyle={styles.imageContainer}
                  style={styles.image}
                  parallaxFactor={0.4}
                  {...parallaxProps}
              />
              <View style={styles.text}>
                <Text style={styles.title} numberOfLines={2}>
                    {item.film.Name}
                </Text>
              </View>
          </View>
      );
  }

    handleFilms = async () => {
     const response = await apiInterceptor.get('/exhibitions');

    if (response && response.status === 200) {
         this.setState({ films: response.data }, () => {
           this.handleImageFilm();
         });
     }
    };

    handleImageFilm = async () => {
      const { films, apiKey } = this.state;
      const promises = films.map(async (film) => {
        const responseOMDB = await apiOMDB.get(`/?apiKey=${apiKey}&i=${film.film.ApiCode}`);
        return {... film, Poster: responseOMDB.data.Poster };
      })
      this.setState({ films: await Promise.all(promises) });
    };

    render() {
        const { films } = this.state;
        return (
         <View>
          <Navbar />
          <View style={styles.content}>
            <View style={styles.filmExView}>
              <Text style={styles.filmEx}>Filmes em cartaz</Text>
            </View>
              <View style={styles.container}>
                <Carousel
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 60}
                  data={this.state.films}
                  renderItem={this._renderItem}
                  hasParallaxImages={true}
                />
            </View>
          </View>
        </View>
        )
    }
};