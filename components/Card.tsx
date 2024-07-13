import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface MyCardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  borderRadius?: number;
  padding?: number;
  shadow?: boolean;
  image?: ImageSourcePropType;
  onPress?: () => void;
}

const MyCard: React.FC<MyCardProps> = ({
  title,
  description,
  backgroundColor = '#fff',
  titleColor = '#000',
  descriptionColor = '#666',
  borderRadius = 8,
  padding = 16,
  shadow = true,
  image,
  onPress,
}) => {
  return (
    <View style={[styles.card, { backgroundColor, borderRadius, padding }, shadow ? styles.shadow : null]}>
      {image && <Image source={image} style={styles.image} />}
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.description, { color: descriptionColor }]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default MyCard;
