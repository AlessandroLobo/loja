import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from "../Shoes";

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR!</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsVerticalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/5.png')} cost="190,90">
                            Sapatenis Preto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/1.png')} cost="99,90">
                            NIKE AIR MX
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/3.png')} cost="1100,90">
                            Bota Adventure
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/4.png')} cost="89,90">
                            Sapatenis Café
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/6.png')} cost="210,90">
                            Tenis furta cor
                        </Shoes>
                    </View>

                </ScrollView>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginHorizontal: '2%',
        paddingHorizontal: '2%',
        paddingBottom: '3%'


    }

})