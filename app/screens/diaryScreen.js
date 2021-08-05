import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, ScrollView, Text, View, Platform, StatusBar, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import profileInfo from '../api/profileInfo';
import Tracklist from '../components/tracklist';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import DiaryEntries from '../components/diaryEntries';

import colors from '../config/colors'

function diaryScreen(props) {
    const info = [
        {
            'uid': '4aaaa715-df17-43b8-987e-04b54ec4a697',
            'title': 'ipsum',
            'artist': 'boop',
            'favourite': false,
            'rating': 4,
            'review': ''
        },
        {
            'uid': '4aaaa715-df17-43b8-987e-04b54ec4a697',
            'title': 'Views',
            'artist': 'Drake',
            'favourite': false,
            'rating': 5,
            'review': 'not the best view'
        },
        {
            'uid': '8f892c1b-0709-4cf4-9711-493892a9eb9b',
            'title': 'Ctrl',
            'artist': 'SZA',
            'favourite': true,
            'rating': 9,
            'review': 'feeling 20 something listening to this'
        },
        {
            'uid': '93d5a1d1-73c0-34d3-b7f1-49473c48face',
            'title': 'Gob',
            'artist': 'Glizzy',
            'favourite': true,
            'rating': 9,
            'review': 'feeling 20 something listening to this'
        }
    ]

    return (
        <ScrollView style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.title}>Dairy</Text>
            </View>
            <DiaryEntries diaryEntries={info}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.dark,
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        paddingTop: StatusBar.currentHeight,
    },
    header: {
        width: '100%',
        backgroundColor: colors.nav,
        alignItems: 'center',
        height: 50,
    },
    title: {
        paddingTop: 10,
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
    }
})

export default diaryScreen