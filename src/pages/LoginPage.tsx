import React from 'react';
import {View, Button} from 'react-native';

export const LoginPage = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to lobby"
        onPress={() => navigation.navigate('LobbyPage')}
      />
    </View>
  );
};
