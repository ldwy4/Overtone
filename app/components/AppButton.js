import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import colors  from '../config/colors'

function AppButton({title, color = 'primary', onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.button, {backgroundColor: colors[color]}]}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff'
    },
})

export default AppButton;