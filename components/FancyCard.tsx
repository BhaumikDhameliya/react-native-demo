import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Cart Title</Text>
          <Text style={styles.cardLabel}>Card Label</Text>
          <Text style={styles.cardDescription}>Card Description</Text>
          <Text style={styles.cardFooter}>Card Footer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: '90%',
    height: 360,
    borderRadius: 6,
    marginVertical: 13,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',

    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#000000',

    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    color: '#000000',
  },
});
