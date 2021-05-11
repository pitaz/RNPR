import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../screens/Home/styles';

export const formatText = (value, handleClick) => {
  const formattedText = [];
  const words = value?.split(' ');
  const contentLength = words?.length;
  const format = /[ !#@$%^&*()+\-=\[\]{};':"\\|,.<>\/?\n]/;
  const url =
    /^((https?|ftp|smtp):\/\/)?(www.)?([a-zA-Z0-9]{1,})+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]*)?(\/[a-zA-Z0-9#]+\/?)*$/;
  words?.forEach((word, index) => {
    const web = word.startsWith('http') && !url.test(word.substr(1));
    const tag = word.startsWith('@') && !format.test(word.substr(1));

    if (tag || web) {
      const mention = (
        <TouchableOpacity key={index} onPress={() => handleClick(web, word)}>
          <Text style={styles.mention}>{word}</Text>
        </TouchableOpacity>
      );
      if (index !== contentLength - 1) {
        formattedText.push(mention, ' ');
      } else {
        formattedText.push(mention);
      }
    } else {
      const unformattedText = (
        <View key={index}>
          <Text>{word}</Text>
        </View>
      );
      if (index !== contentLength - 1) {
        return formattedText.push(unformattedText, ' ');
      } else {
        return formattedText.push(unformattedText);
      }
    }
  });

  return formattedText;
};
