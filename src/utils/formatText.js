import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../screens/Home/styles';

export const formatText = (value, handleClick) => {
  const returnedLine = value?.split('\n');
  const formattedText = [];

  returnedLine?.forEach(retLine => {
    const words = retLine.split(' ');
    const contentLength = words.length;
    const format = /[ !#@$%^&*()+\-=\[\]{};':"\\|,.<>\/?\n]/;
    const url =
      /^((https?|ftp|smtp):\/\/)?(www.)?([a-zA-Z0-9]{1,})+\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]*)?(\/[a-zA-Z0-9#]+\/?)*$/;
    words.forEach((word, index) => {
      const web = url.test(word.substr(1));
      const tag = word.startsWith('@') && !format.test(word.substr(1));

      if (tag || web) {
        const mention = (
          <TouchableOpacity
            key={index}
            onPress={() => (handleClick ? handleClick(web, word) : null)}>
            <Text style={styles.mention}>{word}</Text>
          </TouchableOpacity>
        );
        if (index !== contentLength - 1) {
          formattedText.push(mention, ' ');
        } else {
          formattedText.push(mention);
        }
      } else {
        if (index !== contentLength - 1) {
          return formattedText.push(word, ' ');
        } else {
          return formattedText.push(word);
        }
      }
    });
  });

  return formattedText;
};
