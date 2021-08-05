import { NONE } from 'apisauce';
import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import profileInfo from '../api/profileInfo';

function diaryEntry({ entry }) {

    return (
        <View style={styles.track}>
            <View style={styles.diaryInfo}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.albumCover} source={require('../assets/stefo.jpg')} />
                    <View style={styles.artistWrap}>
                        <View style={styles.titleWrap}>
                            <Text style={styles.title}>{entry['title']}</Text>
                        </View>
                        <View style={styles.titleWrap}>
                            <Text style={styles.artist}>{entry['artist']}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 5, }}>
                    {entry['review'] != '' ? <MaterialIcons style={{ padding: 2, paddingTop: 15, marginRight: 5,}} name="rate-review" size={22} color="#888"/> : NONE}
                    {entry['favourite'] ? <AntDesign style={{ padding: 2, paddingTop: 15, marginRight: 5,}} name="heart" size={22} color="#466ce5" /> : NONE}
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: 'white',
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        borderWidth: 2,
                        marginTop: 10,
                        marginRight: 10,
                    }}>
                        <Text style={styles.rating}>{entry['rating']}</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#777777',
                    height: 1,
                    width: '95%',
                    opacity: 0.25,
                    // marginBottom: 50,
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    albumCover: {
        height: 60,
        width: 60,
        borderRadius: 4,
    },
    artist: {
        fontWeight: '400',
        fontSize: 14,
        color: '#ccc',
    },
    artistWrap: {
        flexDirection: 'column',
    },
    rating: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginTop: 10,
        // backgroundColor: 'red',
    },
    numberWrap: {
        marginLeft: 15,
        minWidth: 25,
        // backgroundColor: 'dodgerblue',
        alignItems: 'center',
    },
    track: {
        // flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'left',
        marginLeft: 10,
        // backgroundColor: 'dodgerblue'
    },
    diaryInfo: {
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    trackNumber: {
        color: '#888888',
        fontSize: 18,
    }
});

export default diaryEntry;