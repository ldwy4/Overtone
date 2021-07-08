import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../config/colors'

import AppButton from '../components/AppButton'

function Welcome(props) {
    const handleLogin = () => console.log('Login!');
    const handleSignUp = () => console.log('Sign Up!');
    return (
        <View style={styles.background}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../assets/favicon.png")}></Image>
                    <Text style={styles.title}>Overblown</Text>
                </View>
            <View style={styles.buttonContainer}>
                <AppButton title='Login' onPress={handleLogin} color='secondary'></AppButton>
                <AppButton title='Sign Up' onPress={handleSignUp} color='primary'></AppButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.dark,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        color: colors.secondary,
        textTransform: 'uppercase',
    },
})

export default Welcome;