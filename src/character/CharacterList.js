import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    StatusBar,
    View,
} from 'react-native';
import Character from "./Character";
import * as characters from "../api/characters";
import Divider from "./Divider";

export default class CharacterList extends Component {

    static navigationOptions = {
        headerTitle: 'All Heros',
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTitleStyle: {
            color: '#fff',
        }
    };

    render() {
        const data = characters.all();
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <FlatList
                    data={data}
                    ItemSeparatorComponent={Divider}
                    renderItem={({item}) =>
                        <Character {...item} navigation={this.props.navigation}/>}
                />
            </View>
        );
    }
}


const style = StyleSheet.create({

    container: {
        marginTop: 15,
    }
});
