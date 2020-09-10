import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Shoes from "../../componets/Shoes";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.Image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.Text}>TÊNIS</Text>
          <Text style={[styles.Text, { color: "#CECECF" }]}>•</Text>
          <Text style={[styles.Text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.Text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/1.png")}
            cost="R$140,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Air Max Confort
          </Shoes>
          <Shoes
            img={require("../../assets/2.png")}
            cost="R$280,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Plus Side
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/3.png")}
            cost="R$79,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Coturno Bota Botina Adventure Trilha Couro Legítimo
          </Shoes>
          <Shoes
            img={require("../../assets/4.png")}
            cost="R$1140,90"
            onClick={() => alert("Clicou coming soon")}
          >
            Sapatênis Café Casual Masculino Couro Legítimo
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/5.png")}
            cost="R$119,90"
            onClick={() => alert("Clicou coming soon")}
          >
            Sapatênis Preto Casual Masculino Couro Legítimo
          </Shoes>
          <Shoes
            img={require("../../assets/6.png")}
            cost="R$350,90"
            onClick={() => alert("Clicou coming soon")}
          >
            Tênis Nike Zoom Gravity Feminino
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  Image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  Text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
  },
});
