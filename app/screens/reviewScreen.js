import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, ScrollView, Text, View, Platform, StatusBar, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import profileInfo from '../api/profileInfo';
import Tracklist from '../components/tracklist';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


import colors from '../config/colors'

function reviewScreen( {navigation} ) {
    const title = 'Views';
    const artist = 'Drake';
    return (
        // <SafeAreaView style={styles.background}>
            <ScrollView style={styles.background}>
                <View style={styles.header}>
                    {/* album cover*/}
                    <Image style={styles.albumCover} source={require('../assets/stefo.jpg')} />
                    <Text style={styles.subHeading}>{title}</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 14,
                    }}>{artist}</Text>
                    <View>
                        <Text>Done</Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: '#777777',
                        height: 1,
                        width: '100%',
                        opacity: 0.5,
                        // marginTop: 10,
                        // marginBottom: 50,
                    }}
                />
                {/* tracklist */}
                <View>
                    <Text>Review goes here</Text>
                </View>
            </ScrollView>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    albumCover: {
        height: 100,
        width: 100,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10,
    },
    background: {
        flex: 1,
        backgroundColor: colors.dark,
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    buttons: {
        flexDirection: 'row',
        height: 40,
    },
    button: {
        flex: 1,
    },
    count: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    like: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20,
    },
    number: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
    },
    review: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    subHeading: {
        color: '#fff',
        fontSize: 20,
        marginRight: 10,
        fontWeight: 'bold',
    }
})

export default reviewScreen;