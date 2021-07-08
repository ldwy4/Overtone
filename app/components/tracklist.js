import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

import profileInfo from '../api/profileInfo';

function tracklist({ tracks }) {

    return (
        <View style={styles.container}>
            {tracks.map((track) => (
                <View style={styles.track} key={track['id']}>
                    <View style={styles.numberWrap}>
                        <Text style={styles.trackNumber}>{track['position']}</Text>
                    </View>

                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>{track['recording']['title']}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
    },
    numberWrap: {
        marginLeft: 15,
        minWidth: 25,
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    track: {
        flexDirection: 'row',
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
        marginLeft: 20,
        // backgroundColor: 'dodgerblue'
    },
    trackNumber: {
        color: 'dodgerblue',
        fontSize: 18,
    }
});

export default tracklist;