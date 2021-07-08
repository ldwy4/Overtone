import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import profileInfo from '../api/profileInfo';

import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'
import ProfileContent from '../components/profileContent';


function profileHeader(props) {
  const [name, setName] = useState();
  const [favourites, setFavourites] = useState([]);
  const [insta, setInsta] = useState();
  const [location, setLocation] = useState();
  const [reviews, setReviews] = useState([]);
  const [numFollowers, setNumFollowers] = useState(0);
  const [numFollowing, setNumFollowing] = useState(0);



  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async () => {
    const response = await profileInfo.getInfo();
    setName(response.data['username']);
    setInsta(response.data['instagram']);
    setLocation(response.data['location']);
    setFavourites(response.data['favourites']);
    setNumFollowers(response.data['num_followers']);
    setNumFollowing(response.data['num_following']);

    const albums = await Promise.all( Object.entries(response.data['reviews']).map(([key,value]) => (profileInfo.getAlbumInfo(key))))
    const reviewInfo = []
    for (let i =0; i<albums.length; i++) {
      reviewInfo[i] = {'artist': albums[i].data['artist'],
                        'title': albums[i].data['title'],
                        'id': albums[i].data['id'],
                        'review': response.data['reviews'][albums[i].data['id']],
                      }
      // albums[i]['info'] = albums[i]['info'].data;
      // albums[i]['review'] = response.data['reviews'][albums[i]['key']]

      // console.log(albums[i]['key']);
      // console.log(response.data['reviews'][key]);
    }
    // console.log(response.data['reviews'])
    setReviews(reviewInfo);

  }

  // const loadInfo = async () => {
  //   try {
  //     let response = await fetch('http://ad0c599f4f96.ngrok.io/user/2/name');
  //     console.log(response);
  //     setInfo(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.background}>

      <View style={styles.header}>
        <Image style={styles.profilePic} source={require('../assets/stefo.jpg')}/>
        <View style={styles.info}>

          <View style={styles.handle}>
            <View style={styles.nameWrapper}>
              <Text style={styles.name}>
                {name}
              </Text>
            </View>
            <View style={styles.instagramWrapper}>
              <View style={styles.instagramWrapper}>
                <Text style={styles.instagram}>
                  {location}
                </Text>
              </View>
              <View style={styles.instagramWrapper}>
                <AntDesign style={{padding: 2}}name="instagram" size={18} color="white" />
                <Text style={styles.instagram}>
                  {insta}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.stats}>

              <View style={styles.count}>
                  <Text style={styles.subHeading}>
                    Reviews
                  </Text>
                  <Text style={styles.number}>
                    {Object.keys(reviews).length}
                    
                  </Text>
              </View>

              <View style={styles.count}>
                  <Text style={styles.subHeading}>
                    Followers
                  </Text>
                  <Text style={styles.number}>
                    {numFollowers}
                  </Text>
              </View>

              <View style={styles.count}>
                  <Text style={styles.subHeading}>
                    Following
                  </Text>
                  <Text style={styles.number}>
                    {numFollowing}
                  </Text>
              </View>


              {/* <View style={styles.count}>
                  <Text style={styles.subHeading}>
                    Lists
                  </Text>
                  <Text style={styles.number}>
                    420
                    {lists}
                  </Text>
              </View> */}

              {/* <View style={styles.count}>
                  <Text style={styles.subHeading}>
                    Albums
                  </Text>
                  <Text style={styles.number}>
                    
                    {favourites.length}
                  </Text>
              </View> */}

          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#777777',
          height: 1,
          width: '100%',
          opacity: 0.5,
        }}
      />
      <ProfileContent reviews={reviews} albums={favourites}/>
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
  instagramWrapper: {
    flexDirection: 'row',
    opacity: .65,
    paddingTop: 2,
    paddingLeft: 10,
  },
  handle: {
    flexDirection: 'column',
    // justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  header: {
    marginTop: 5,
    marginLeft: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },
  instagram: {
    fontSize: 14,
    color: '#fff',
  },
  number: {
    color: '#fff',
    fontSize: 15,
    fontWeight: "bold"
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginTop: 10,
    flex: 1
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  subHeading: {
    color: '#fff',
    fontSize: 16,
  }
})

export default profileHeader;