import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Main } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


class Navbar extends Component {

    render() {
        return (
        <>
         <Header>
         <FontAwesomeIcon icon="coffee" />
         </Header>
         <Main />   
        </>
        )
    }
};

export default Navbar;