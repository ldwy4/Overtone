import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

import profileInfo from '../api/profileInfo';

function track({ track }) {

    return (
            <View style={styles.track}>
                <View style={styles.trackInfo}>
                    <View style={styles.numberWrap}>
                        <Text style={styles.trackNumber}>{track['position']}</Text>
                    </View>

                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>{track['recording']['title']}</Text>
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
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'space-between',
            width: '100%',
        },
        title: {
            color: '#fff',
            fontSize: 18,
            fontWeight: '400',
        },
        titleWrap: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            textAlign: 'left',
            marginLeft: 10,
            // backgroundColor: 'dodgerblue'
        },
        trackInfo: {
            flexDirection: 'row',
            marginBottom: 20,
            marginTop: 20,
        },
        trackNumber: {
            color: '#888888',
            fontSize: 18,
        }
    });
    
    export default track;