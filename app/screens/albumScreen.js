import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import profileInfo from '../api/profileInfo';
import Tracklist from '../components/tracklist';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'
import ProfileContent from '../components/profileContent';

function albumScreen(props) {
    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [tracklist, setTracklist] = useState([]);

    useEffect(() => {
        loadInfo();
    }, []);

    const loadInfo = async () => {
        const response = await profileInfo.getTracklist('bc2b7291-11f1-4307-8191-df5639f96207');
        setTracklist(response.data['tracklist'])
        setArtist(response.data['artist'])
        setTitle(response.data['title'])
    }
    return (
        <SafeAreaView style={styles.background}>

            <View style={styles.header}>
                {/* album cover*/}
                <Image style={styles.albumCover} source={{ uri: 'http://da046b555586.ngrok.io/release/bc2b7291-11f1-4307-8191-df5639f96207' }} />
                <Text style={styles.subHeading}>{title}</Text>
                <Text style={{
                    color: '#fff',
                    fontSize: 16,
                }}>{artist}</Text>
            </View>
            <View
                style={{
                    backgroundColor: '#777777',
                    height: 1,
                    width: '100%',
                    opacity: 0.5,
                }}
            />
            {/* tracklist */}
            <Tracklist tracks={tracklist} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.dark,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    count: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 3,
        flexDirection: "column",
        justifyContent: 'space-around',
        marginTop: 10,
    },
    header: {
        // flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
    albumCover: {
        height: 150,
        width: 150,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10,
    },
    subHeading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default albumScreen;