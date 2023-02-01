import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {ChatRoom} from '../entities/chatRoom';
import {getChatRoom} from '../firebase/chatRoom';

interface Props {
  navigation: any;
  route: any;
}

export const ChatRoomPage = (props: Props) => {
  const [state, setState] = useState<ChatRoom>();
  const [inputText, setInputText] = useState<string>('');
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getChatRoom(props.route.params.name).then(response => {
        setState(response);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        {state && (
          <View>
            {state.messages.map(message => {
              return (
                <View>
                  <Text>{message.messageText}</Text>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
      <View style={styles.row}>
        <TextInput
          placeholder="Add message..."
          style={inputText ? styles.textInputFilled : styles.textInputEmpty}
          value={inputText}
          onChangeText={setInputText}
        />
        {inputText ? (
          <Pressable>
            <Image
              style={styles.chevronIcon}
              source={require('../images/Send.png')}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputFilled: {
    width: '80%',
    height: 40,
    marginVertical: 12,
    marginHorizontal: '4%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textInputEmpty: {
    width: '90%',
    height: 40,
    marginVertical: 12,
    marginHorizontal: '4%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  scrollView: {
    height: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
