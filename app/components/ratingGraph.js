import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

function ratingGraph({ratings}) {
    const [ratingArr, setRatingArr] = useState(Array.apply(null, Array(20)).map(function() { return 0 }));
    const [height, setHeight] = useState()
    useEffect(() => {
        arr =  Array.apply(null, Array(20)).map(function() { return 0 });
        let sum = 0;
        for (let i=0; i<ratings.length; i++) {
            arr[Math.floor(ratings[i]['review']['rating'] * 2)]++;
            sum++
            console.log(sum)
        };
        console.log(sum)

        setRatingArr(arr);
        setHeight(Math.floor(100/{sum}));
    }, []);

    return (
        <View> 
            <Text style={styles.subHeading}>Rating</Text>
            <View style={styles.graph}>
                {console.log(height)}
                { [...Array(20)].map((e,i) => 
                <View style={styles.bar} key={e}>
                    { [...Array(ratingArr[i])].map((i) => 
                    <View style={{height: 30, borderBottomWidth: 2, backgroundColor: 'red',}} key={i}>
                        
                    </View>)}
                </View>)}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bar: {
        height: 100,
        width: 18,
        borderWidth: 0.25,
        borderTopColor: 'transparent',
        borderRightColor: '#333',
        borderLeftColor: '#333',
        // borderBottomColor: 'red',
        // backgroundColor: 'dodgerblue',
        justifyContent: 'flex-end'
    },
    block: {
        height: 10,
        borderBottomWidth: 2,
        backgroundColor: 'red',
    },
    graph: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        color: "white",
        fontSize: 24,
    },
    subHeading: {
        color: '#fff',
        fontSize: 16,
        marginBottom:15,
        marginLeft: 10,
        opacity: 0.8,
        fontWeight: '400',
    },
});

export default ratingGraph;
