import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Dot from "../../componets/Dot";
import SizeButton from "../../componets/SizeButton";
import Button from "../../componets/Button";
import Footer from "../../componets/Footer";



export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Detalhes do Produto",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.Bline} />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 24 }]}>Nike Plus Size</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">37</SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>40</SizeButton>
            <SizeButton>41</SizeButton>
            <SizeButton>42</SizeButton>
            <SizeButton>43</SizeButton>
            <SizeButton>44</SizeButton>
          </ScrollView>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Plus Size
          </Text>
          <Text style={styles.textContent}>
            Com ótimo amortecimento em espuma, o Tênis Nike Masculino Revolution 5 é ideal para os corredores que buscam leveza e conforto. Confeccionado em material respirável, esse tênis para correr possui reforço no calcanhar para proteger contra possíveis torções e fechamento dinâmico, garantindo um ajuste personalizado. Aposte na Nike para te acompanhar nos seus desafios dentro do esporte!
          </Text>
          <Text style={styles.textList}>
            -Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            -Material: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />

      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
  },
  Bline: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
  },
  title: {
    marginTop: 10,
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent: {
    fontSize: 14,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },

  line: {

    borderBottomWidth: 2,
    alignSelf: 'center',
    width: '90%',
    borderBottomColor: '#D8d8d8',
    marginVertical: '2%',
  }
});
