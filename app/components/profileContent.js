import { setStatusBarStyle } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, ScrollView } from 'react-native';

import RatingGraph from './ratingGraph'
import profileInfo from '../api/profileInfo';

function profileContent({reviews, albums}) {
    // const [info, setInfo] = useState();

    // useEffect(() => {
    //     loadInfo();
    //   }, []);
    
    //   const loadInfo = async () => {
    //     const albums = await Promise.all( Object.entries(reviews).map(([key,value]) => (profileInfo.getAlbumInfo(key))))
    //     for (let i=0; i<albums.length; i++) {
    //         albums[i] = albums[i].data['artist'];
    //         console.log(albums[i])
    //     }
    //     setInfo(albums);
    //   }
    // //   Object.entries(reviews).map(([key,value]) => {
    const colorPicker = (rating) => {
        if (rating > 8) {
            return 'white';
        } else if (rating <= 5) {
            return 'red';
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.recent}>
                <Text style={styles.subHeading}>
                    Top Reviews
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.coverWrapper}>

                        {reviews.map((review) => (
                            <View style={styles.reviewWrapper} key={review['id']}>
                                <Image 
                                    source={{uri: 'http://9ba70f4bc183.ngrok.io/album/' + review['id']}}
                                    style={styles.reviewCover}
                                    
                                />
                                {/* <Text style={styles.title}>{review['title']}</Text> */}
                                {/* <Text style={styles.rating}>{review['artist']}</Text> */}
                                <View style = {{
                                    alignItems:'center', 
                                    justifyContent:'center',  
                                    borderColor: colorPicker(review['review']['rating']),  
                                    width:30,   
                                    height:30, 
                                    borderRadius:15, 
                                    borderWidth:2,
                                    marginTop: 10,
                                }}>
                                    {/* { color: review['review']['rating'] <= 5 ? 'red' : 'gold',}} */}
                                    <Text style={styles.rating, { color: review['review']['rating'] <= 5 ? 'red' : 'white',}}>{review['review']['rating'].toFixed(1)}</Text>
                                </View>
                            </View> 
                        ))}
                    </View>
                </ScrollView>
            </View>
            <View
                style={{
                backgroundColor: '#777777',
                height: 1,
                width: '100%',
                opacity: 0.2,
                marginBottom: 10,
                }}
            />
            <View style={styles.favourites}>
                <Text style={styles.subHeading}>
                    Recent Listens
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View horizontal={true} style={styles.coverWrapper}>
                            {albums.map((album) => (
                                <Image 
                                    source={{uri: 'http://9ba70f4bc183.ngrok.io/album/' + album}}
                                    style={styles.album}
                                    key={album}
                                />
                            ))}
                        </View>
                </ScrollView>
            </View>

            <View
                style={{
                backgroundColor: '#777777',
                height: 1,
                width: '100%',
                opacity: 0.2,
                marginBottom: 10,
                }}
            />

            <RatingGraph ratings={reviews}/>
        </View>
    );
}

const styles = StyleSheet.create({
    album: {
        height:90,
        width:90,
        marginHorizontal: 5,
        // flex: 1,
        borderRadius: 3,
        // borderWidth: .23,
        // borderColor: '#ffffff',
    },
    container: {
        flex: 1,
        height:200,
        width: '100%',
        // padding: 10,
    },
    coverWrapper: {
        flexDirection: 'row',
        // width: '100%',
        paddingBottom: 15,
    },
    favourites: {
        marginLeft: 10,
    },
    title: {
        fontSize: 14,
        width: 100,
        textAlign: 'center',
        color: 'white',
        // backgroundColor: 'dodgerblue',
    },
    rating: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    recent: {
        marginTop: 10,
        marginLeft: 10,
    },
    reviewCover: {
        height:100,
        width:100,
        borderRadius:5,
        marginHorizontal: 5,
        // borderWidth: .25,
        borderColor: 'white',
    },
    reviewWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'dodgerblue',
    },
    subHeading: {
        color: '#fff',
        fontSize: 16,
        marginBottom:15,
        opacity: 0.8,
        fontWeight: '400',
    },
});

export default profileContent;