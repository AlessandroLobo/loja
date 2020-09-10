import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function SizeButton(props) {
    return (
        <View style={[styles.container, { backgroundColor: props.bgColor || '#fff' }]}>
            <Text>
                <Text style={[styles.Text, { color: props.color || '#ddd' }]}>
                    {props.children}
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        borderRadius: 15,
        marginHorizontal: 10,

    },
    Text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    }

});