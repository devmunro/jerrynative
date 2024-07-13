import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, DimensionValue } from 'react-native';

interface MyButtonProps {
  onPress: () => void;
  text: string;
  variant?: 'default' | 'icon' | 'full';
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  width?: DimensionValue;
}

interface VariantStyles {
  [key: string]: ViewStyle;
}

const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  text,
  variant = 'default',
  backgroundColor = '#333',
  textColor = '#fff',
  borderRadius = 8,
  paddingHorizontal = 16,
  paddingVertical = 8,
  width,
}) => {
  const variantStyles: VariantStyles = {
    default: {
      width: width ?? 150,
    },
    icon: {
      width: 50,
      height: 50,
      paddingHorizontal: 0,
      paddingVertical: 0,
      borderRadius: 8,
    },
    full: {
      width: width ?? '100%',
      minWidth: '100%',
    },
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyles[variant],
        {
          backgroundColor,
          borderRadius,
          paddingHorizontal,
          paddingVertical,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  } as TextStyle,
});

export default MyButton;
