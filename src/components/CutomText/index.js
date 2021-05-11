import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Alert, Linking, Text} from 'react-native';
import {formatText} from '../../utils/formatText';

const CustomText = ({text}) => {
  const navigation = useNavigation();

  const openUrl = useCallback(async word => {
    const supported = await Linking.canOpenURL(word);
    if (supported) {
      await Linking.openURL(word);
    } else {
      Alert.alert(`Don't know how to open this URL: ${word}`);
    }
  }, []);

  const handleClick = async (web, word) => {
    if (web) {
      await openUrl(word);
    } else {
      navigation.navigate('profile');
    }
  };
  return <Text>{formatText(text, handleClick)}</Text>;
};

export default CustomText;
