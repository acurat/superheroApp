import React, {Component} from 'react';
import Login from "./login/Login";
import { StackNavigator } from 'react-navigation';
import Home from "./home/Home";


const MarvelApp = StackNavigator({
    Login: {
        screen: Login,
    },
    Home: {
        screen: Home,
    },
}, {
    headerMode: 'none'
});

export default MarvelApp;