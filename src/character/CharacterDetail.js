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
                             id = 3,
                             key = 1009610,
                             name = 'Spider-Man',
                             comics = 2979,
                             stories = 4701,
                             series = 643,
                             description = "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
                             landscape = "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_xlarge.jpg",
                             portrait = "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/portrait_incredible.jpg",
                             wiki = "https://marvel.com/universe/Spider-Man_(Peter_Parker)"
                         }: {
    id: number,
    key: number,
    name: string,
    comics: number,
    stories: number,
    series: number,
    description: string,
    landscape: string,
    portrait: string,
    wiki: string
}) => {

    const character = characters.getCharacterById(id);
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
