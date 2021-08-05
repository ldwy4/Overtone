import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, ScrollView, Text, View, Platform, StatusBar, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import profileInfo from '../api/profileInfo';
import Tracklist from '../components/tracklist';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { Rating } from 'react-native-ratings';


import colors from '../config/colors'
import ProfileContent from '../components/profileContent';

function albumScreen( {navigation} ) {
    // const [title, setTitle] = useState();
    // const [artist, setArtist] = useState();
    // const [tracklist, setTracklist] = useState([]);
    const [liked, setLiked] = useState(false);
    const [pressIn, setPressIn] = useState(false);
    const title = 'Views';
    const artist = 'Drake';
    const tracklist = [{'id': '05644a9f-5dc4-4be8-9d05-3cc3a62bb610',
                   'length': '329000',
                   'number': '1',
                   'position': '1',
                   'recording': {'id': 'dac663a7-29a6-42f7-b87e-7300bc25e31c',
                                 'length': '324000',
                                 'title': 'Keep the Family Close'},
                   'track_or_recording_length': '329000'},
                  {'id': '40dafdb1-613b-4d23-83e3-4a63765c7662',
                   'length': '256000',
                   'number': '2',
                   'position': '2',
                   'recording': {'id': '40fae8e0-16e7-4e96-869a-704ce98e776f',
                                 'length': '256000',
                                 'title': '9'},
                   'track_or_recording_length': '256000'},
                  {'id': '08e080b9-000c-4d17-b678-319adaff1e6e',
                   'length': '297000',
                   'number': '3',
                   'position': '3',
                   'recording': {'id': '820edd92-aa0e-4071-90d2-6529f5261b55',
                                 'length': '291000',
                                 'title': 'U With Me?'},
                   'track_or_recording_length': '297000'},
                  {'id': 'adaa02c7-729e-4cd1-86f8-81e8433cd827',
                   'length': '241000',
                   'number': '4',
                   'position': '4',
                   'recording': {'id': '81c5145b-82b6-47a8-bca3-c1607ede1fec',
                                 'length': '240000',
                                 'title': 'Feel No Ways'},
                   'track_or_recording_length': '241000'},
                  {'id': '1943fd35-d55c-4341-a4f6-5936b0321abe',
                   'length': '209000',
                   'number': '5',
                   'position': '5',
                   'recording': {'id': '7fedffc2-9acc-4781-9ed7-94f93657b200',
                                 'length': '208000',
                                 'title': 'Hype'},
                   'track_or_recording_length': '209000'},
                  {'id': '3d98e354-5fe0-4086-b086-65336529c2ea',
                   'length': '254000',
                   'number': '6',
                   'position': '6',
                   'recording': {'id': '7aead371-6639-4ea7-ac4c-28b7c4379841',
                                 'length': '254000',
                                 'title': 'Weston Road Flows'},
                   'track_or_recording_length': '254000'},
                  {'id': 'eaff6014-aecf-4f28-bce7-ea709c6e43ed',
                   'length': '334000',
                   'number': '7',
                   'position': '7',
                   'recording': {'id': '76a2f897-2a1d-440f-b918-254713775648',
                                 'length': '334000',
                                 'title': 'Redemption'},
                   'track_or_recording_length': '334000'},
                  {'id': 'ecaaba74-85be-4bd8-8d99-89606d834b80',
                   'length': '195000',
                   'number': '8',
                   'position': '8',
                   'recording': {'id': 'fc31a149-b2dd-4c02-af47-292f239237d2',
                                 'length': '195000',
                                 'title': 'With You'},
                   'track_or_recording_length': '195000'},
                  {'id': '7efee0fd-9951-4e48-9596-cbea000d9975',
                   'length': '290000',
                   'number': '9',
                   'position': '9',
                   'recording': {'id': '2512c460-1146-46dc-a94b-e6070d95e320',
                                 'length': '284000',
                                 'title': 'Faithful'},
                   'track_or_recording_length': '290000'},
                  {'id': '5adadc7e-e31d-4cd6-9228-1e677c17822d',
                   'length': '190000',
                   'number': '10',
                   'position': '10',
                   'recording': {'id': 'd82913bb-b79b-4655-ab21-600bf4a70717',
                                 'length': '190000',
                                 'title': 'Still Here'},
                   'track_or_recording_length': '190000'},
                  {'id': '2d54d56e-6f57-4dc1-9b0e-de79e140696e',
                   'length': '245000',
                   'number': '11',
                   'position': '11',
                   'recording': {'id': '2552ab2d-3470-4764-997f-99ae22c4dad3',
                                 'length': '245000',
                                 'title': 'Controlla'},
                   'track_or_recording_length': '245000'},
                  {'id': 'fd28b7ce-e27a-4356-bbf2-30732af56ec1',
                   'length': '174000',
                   'number': '12',
                   'position': '12',
                   'recording': {'id': 'be9e4a6b-3f56-468a-aa61-b1bcb6fc277f',
                                 'length': '174080',
                                 'title': 'One Dance'},
                   'track_or_recording_length': '174000'},
                  {'id': 'b30ebd1e-4140-4d99-a3d4-fc0137de1f86',
                   'length': '220000',
                   'number': '13',
                   'position': '13',
                   'recording': {'id': '4f1c5b66-8b3d-45f0-be2f-58d46133a497',
                                 'length': '220000',
                                 'title': 'Grammys'},
                   'track_or_recording_length': '220000'},
                  {'id': '73447f05-a21d-4bf4-a931-f30510dc163a',
                   'length': '241000',
                   'number': '14',
                   'position': '14',
                   'recording': {'id': '6b705833-22e9-4056-be39-6501f837de63',
                                 'length': '241000',
                                 'title': 'Childs Play'},
                   'track_or_recording_length': '241000'},
                  {'id': 'f959b88c-7cc9-4303-8ca1-d88ecacf8c99',
                   'length': '213000',
                   'number': '15',
                   'position': '15',
                   'recording': {'id': '245dce04-ec8a-467e-9659-4ffd75f33634',
                                 'length': '213000',
                                 'title': 'Pop Style'},
                   'track_or_recording_length': '213000'},
                  {'id': '83f3f017-82f4-4f0b-a7f1-b2ab0c68e28e',
                   'length': '263000',
                   'number': '16',
                   'position': '16',
                   'recording': {'id': '63a6a97b-90be-410e-b5ed-03973e5a55ea',
                                 'length': '263000',
                                 'title': 'Too Good'},
                   'track_or_recording_length': '263000'},
                  {'id': '61018968-2ed4-4750-8cbf-0219f5398be8',
                   'length': '106000',
                   'number': '17',
                   'position': '17',
                   'recording': {'id': '2ca9724a-b2d6-4ddc-aedb-652b47edd37f',
                                 'length': '106000',
                                 'title': 'Summers Over (interlude)'},
                   'track_or_recording_length': '106000'},
                  {'id': '394d2894-0435-40d9-90be-eed9f42273c9',
                   'length': '238000',
                   'number': '18',
                   'position': '18',
                   'recording': {'id': '4a3c03d0-8b02-4561-b9b4-798928be1615',
                                 'length': '238000',
                                 'title': 'Fire & Desire'},
                   'track_or_recording_length': '238000'},
                  {'id': '3830d897-7546-4889-ae52-8e9f21ab583b',
                   'length': '312000',
                   'number': '19',
                   'position': '19',
                   'recording': {'id': '29debfe5-081a-4b26-af69-91792ad69187',
                                 'length': '305000',
                                 'title': 'Views'},
                   'track_or_recording_length': '312000'},
                  {'id': '28d7bf81-5d1a-4abb-bdd2-61fe214dcb3d',
                   'length': '267000',
                   'number': '20',
                   'position': '20',
                   'recording': {'id': 'e288e33a-5c40-4b9f-98f6-0062be760e4a',
                                 'length': '266920',
                                 'title': 'Hotline Bling'},
                   'track_or_recording_length': '267000'}];

    const _onPressButton = () => {
        setLiked(!liked);
    };

    const _onPress = () => {
        setPressIn(!pressIn);
    }

    const _onPressOut = () => {
        navigation.navigate('Review')
    }

    // useEffect(() => {
    //     loadInfo();
    // }, []);

    // const loadInfo = async () => {
    //     const response = await profileInfo.getTracklist('bc2b7291-11f1-4307-8191-df5639f96207');
    //     setTracklist(response.data['tracklist'])
    //     setArtist(response.data['artist'])
    //     setTitle(response.data['title'])
    // }
    return (
        // <SafeAreaView style={styles.background}>
            <ScrollView style={styles.background}>
                <View style={styles.header}>
                    <View style={styles.info}>
                        {/* album cover*/}
                        <Image style={styles.albumCover} source={require('../assets/stefo.jpg')} />
                        <Text style={styles.subHeading}>{title}</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16,
                        }}>{artist}</Text>
                    </View>
                    //todo: create touchable that links to apple music/spotify
                    {/* <FontAwesome style={{padding: 2,}} name="spotify" size={40} color= 'white'/> */}
                </View>
                <View style={{backgroundColor: colors.dark,}}>
                    <Rating
                        type='custom'
                        ratingCount={5}
                        imageSize={30}
                        style={{backgroundColor: colors.dark,}}
                        tintColor={colors.dark}
                        startingValue={0}
                        // jumpValue={0.5}
                        ratingBackgroundColor={colors.primary}
                    />
                </View>
                <View style={styles.buttons}>
                    <TouchableWithoutFeedback style={styles.button} onPress={_onPressButton}>
                        <View style={styles.like}>
                            {liked ? 
                             <AntDesign style={{padding: 2}} name="heart" size={22} color="red" />:
                             <AntDesign style={{padding: 2}}name="hearto" size={22} color="white" />}
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight style={styles.button} onPressIn={_onPress} onPressOut={_onPressOut}>
                        <View style={styles.review}>
                            <FontAwesome style={{padding: 2}} name="pencil-square-o" size={22} color= {pressIn ? 'dodgerblue' : 'white'}/>
                        </View>
                    </TouchableHighlight>
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
                <Tracklist tracks={tracklist} />
            </ScrollView>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    albumCover: {
        height: 150,
        width: 150,
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
        justifyContent: 'center'
    },
    info: {
        // flexDirection: 'row',
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
        fontWeight: 'bold',
    }
})

export default albumScreen;