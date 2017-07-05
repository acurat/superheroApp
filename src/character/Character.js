// @flow

import React from 'react';
import {
    Image,
    View,
    StyleSheet,
    StatusBar,
    Text,
    TouchableHighlight,
} from 'react-native';


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#000'
    },

    characterName: {
        color: 'red',
        fontWeight: '900',
        fontSize: 24,
    },

    characterHeader: {
        color: 'darkgrey',
        fontSize: 16,
        fontWeight: 'bold'
    },

    characterData: {
        color: 'darkgrey',
        fontWeight: 'normal',
        fontSize: 14,
    },

    characterSummary: {
        justifyContent: 'space-between',
    }
});


const Character = ({
                       id,
                       name,
                       comics,
                       series,
                       stories,
                       landscape,
                       portrait,
                       navigation
                   }: {
    id: number,
    name: string,
    comics: number,
    series: number,
    stories: number,
    landscape: string,
    portrait: string,
    navigation: Object
}) => (
    <View>
        <StatusBar barStyle="light-content"/>
        <TouchableHighlight onPress={() => navigation.navigate('Detail', {id: id})}>
            <View style={style.container}>
                <Image style={{width: 150, height: 150}} source={{uri: landscape}}>
                </Image>
                <View style={style.characterSummary}>
                    <Text style={style.characterName}> {name} </Text>
                    <View>
                        <Text style={style.characterHeader}> Comics:
                            <Text style={style.characterData}> {comics} </Text>
                        </Text>

                        <Text style={style.characterHeader}> Series:
                            <Text style={style.characterData}> {series} </Text>
                        </Text>

                        <Text style={style.characterHeader}> Stories:
                            <Text style={style.characterData}> {stories} </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    </View>
);

export default Character;