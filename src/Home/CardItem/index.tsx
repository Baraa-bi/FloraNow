import React, { useState } from "react";
import { View, Easing, TouchableOpacity, Animated, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import _ from "lodash";
interface Props {
  item: Object;
}
const CardItem = (props: Props) => {
  const [price] = useState(29);
  const [count, setCount] = useState(1);
  const [spinValue] = useState(new Animated.Value(0));
  const [fontSizeValue] = useState(new Animated.Value(30));
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"]
  });
  const size = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 40]
  });
  const RightContainerLeftPosition = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [55, 0]
  });
  const LeftContainerLeftPosition = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [95, 15]
  });
  const imageSize = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [25, 20]
  });
  const onAddPress = () => {
    if (spinValue._value) {
      animateFontSize();
      return setCount(count + 1);
    }
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start();
  };
  const onRemovePress = () => {
    animateFontSize();
    setCount(count > 1 ? count - 1 : 1);
  };
  const animateFontSize = () => {
    Animated.timing(fontSizeValue, { toValue: 25, duration: 400 }).start(() =>
      Animated.timing(fontSizeValue, { toValue: 35, duration: 400 }).start(() =>
        Animated.timing(fontSizeValue, { toValue: 30, duration: 400 }).start()
      )
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} />
      <View style={styles.subContainer}>
        <View style={styles.subTitleContainer} />
        <View style={styles.subTitleContainer} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>{`$${price}`}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity activeOpacity={0.9} onPress={onRemovePress}>
            <Animated.View
              style={{
                ...styles.removeContainer,
                left: LeftContainerLeftPosition
              }}
            >
              <Icon size={20} color="grey" name="remove" />
            </Animated.View>
          </TouchableOpacity>
          <Animated.View
            style={{
              ...styles.countContainer,
              left: RightContainerLeftPosition
            }}
          >
            <Animated.Text style={{ ...styles.count, fontSize: fontSizeValue }}>
              {count}
            </Animated.Text>
          </Animated.View>
          <TouchableOpacity activeOpacity={0.9} onPress={onAddPress}>
            <Animated.View
              style={{
                ...styles.iconContainer,
                width: size,
                height: size,
                transform: [{ rotate: spin }]
              }}
            >
              <Animated.Image
                style={{
                  tintColor: "white",
                  width: imageSize,
                  height: imageSize
                }}
                source={{
                  uri: ADD_ICON_URL
                }}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const ADD_ICON_URL =
  "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png";
export default CardItem;
