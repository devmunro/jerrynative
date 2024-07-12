import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
  color?: string;
  variant?: 'icon' | 'default' | 'long'; 
}

export const MyButton = ({
  onPress,
  text,
  color = "slategray",
  variant = 'default', 
}: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: color },
        variantStyles[variant], 
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const variantStyles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    
  },
  default: {
    minWidth: 100,
    maxWidth: 200,
    paddingHorizontal: 16,
  },
  long: {
    minWidth: 200,
    paddingHorizontal: 32,
  },
});