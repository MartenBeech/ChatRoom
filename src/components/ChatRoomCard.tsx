import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  description: string;
}

export const ChatRoomCard = (props: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <View style={styles.justifyCenter}>
            <Text style={styles.titleFont}>{props.title}</Text>
          </View>
          <View style={styles.topMargin} />
          <Text style={styles.descriptionFont}>{props.description}</Text>
        </View>
        <View style={styles.chevronIcon}>
          <Text>tester</Text>
          {/* <Image
            style={styles.chevronIcon}
            source={require('../images/Chevron.png')}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: '80%',
  },
  justifyCenter: {
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  descriptionFont: {
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  topMargin: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chevronIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
