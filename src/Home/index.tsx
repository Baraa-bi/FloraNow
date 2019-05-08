import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import CardItem from "./CardItem";
import styles from "./styles";
interface Props {}
const Home = (props: Props) => {
  const renderItem = ({ item }) => {
    return <CardItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        ListHeaderComponent={
          <Text style={styles.title}>
            Flora<Text style={{ color: "#00B8D4" }}>Now</Text>
          </Text>
        }
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const DATA = [
  {
    id: "1"
  },
  {
    id: "2"
  },
  {
    id: "3"
  }
];
export default Home;
