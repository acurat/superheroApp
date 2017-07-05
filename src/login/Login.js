import React, {Component} from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import {NavigationActions} from 'react-navigation';

export default class Login extends Component {

    static navigationOptions = {
        header: null
    };

    onPressHandler = () => {
        this.props.navigation.dispatch(navigateToCharacters);
    };

    render() {
        return (
            <View style={style.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TouchableHighlight onPress={() => this.onPressHandler()}>
                    <View style={style.logoContainer}>
                        <Image style={style.marvelLogo}
                               source={require('../../images/MarvelLogo.svg.png')}/>
                        <Text style={style.homeMessage}>
                            Tap to continue
                        </Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const navigateToCharacters = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Home'})
    ]
});


const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    marvelLogo: {
        height: 100,
        width: 250,
    },

    homeMessage: {
        paddingTop: 15,
        color: '#fff',
    }
});