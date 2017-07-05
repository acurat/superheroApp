import React, {Component} from 'react';
import {
    View,
    Image,
    Linking,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import * as characters from "../api/characters";

const CharacterDetail = ({
                             navigation
                         }: {
    navigation: Object
}) => {

    const {params} = navigation.state;
    const character = characters.getCharacterById(params.id);
    return (
        <ScrollView contentContainerStyle={style.container}>
            <Image style={style.portrait} source={{uri: character.portrait}}/>
            <View style={style.data}>
                <View style={style.dataSection}>
                    <Text style={style.dataKey}>Name</Text>
                    <Text style={style.dataValue}>{character.name}</Text>
                </View>
                <View style={style.dataSection}>
                    <Text style={style.dataKey}>Description</Text>
                    <Text style={style.dataValue}>{character.description}</Text>
                </View>

                <View style={style.dataSection}>
                    <Text style={style.dataKey}>Comics</Text>
                    <Text style={style.dataValue}>{character.comics}</Text>
                </View>

                <View style={style.dataSection}>
                    <Text style={style.dataKey}>Series</Text>
                    <Text style={style.dataValue}>{character.series}</Text>
                </View>

                <View style={style.dataSection}>
                    <Text style={style.dataKey}>Stories</Text>
                    <Text style={style.dataValue}>{character.stories}</Text>
                </View>

                <View style={style.dataSection}>
                    <Text style={style.dataKey}>Wiki</Text>
                    <Text style={style.wiki} onPress={() => Linking.openURL(`${character.wiki}`)}>
                        More Info ...
                    </Text>
                </View>
            </View>

        </ScrollView>
    );
}


CharacterDetail.navigationOptions = {
    headerStyle: {
        backgroundColor: '#000'
    },
    headerTitleStyle: {
        color: '#fff',
    },
    headerBackTitleStyle: {
        color: '#fff',
    }
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    portrait: {
        alignSelf: 'stretch',
        resizeMode: 'cover',
        height: 500,
    },
    data: {
        flex: 1,
    },
    dataSection: {
        backgroundColor: 'black',
        padding: 10,

    },
    dataKey: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
    },
    dataValue: {
        fontWeight: 'normal',
        fontSize: 16,
        color: 'white',
        textAlign: 'justify',
    },
    wiki: {
        color: 'white',
        textDecorationLine: 'underline'
    }
});


export default CharacterDetail;
