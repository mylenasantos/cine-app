import React, { Component } from "react";
import { withNavigation } from 'react-navigation';
import Navbar from "../../components/Navbar";


class Main extends Component {

    render() {
        return <Navbar />
    }
};

export default withNavigation(Main);