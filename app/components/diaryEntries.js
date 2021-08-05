import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import DiaryEntry from './diaryEntry';

import profileInfo from '../api/profileInfo';

function diaryEntries({ diaryEntries }) {

    return (
        <View style={styles.container}>
            {diaryEntries.map((entry) => (
                <DiaryEntry entry={entry} key={entry['uid']}></DiaryEntry>
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

export default diaryEntries;