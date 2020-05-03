import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation'; 
import styles from './styles';

class Navbar extends Component {

    render() {
        return (
        <View>
          <View style={styles.container}>
            <View style={styles.menu}>
              <Icon name="bars" size={30} color="#000" onPress={() => this.props.navigation.openDrawer()}/>
          </View>
          </View>
        </View>
        );
    }
};

export default Navbar;