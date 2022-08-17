import { Switch } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Switch style={{
      left: 46,
      top: 43,
      position: "absolute",
      width: 50,
      height: 25,
      transform: "rotate(78deg)"
    }}></Switch></View>;
};

export default Untitled2;