import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import Track from './track';

import profileInfo from '../api/profileInfo';

function tracklist({ tracks }) {

    return (
        <View style={styles.container}>
            {tracks.map((track) => (
                <Track track={track} key={track['id']}></Track>
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
        // marginTop: 10,
        // backgroundColor: 'red',
    },
});

export default tracklist;