import React from 'react';
import {Text} from 'react-native';
import {formatText} from '../../utils/formatText';
import useHandleClick from '../../hooks/useHandleClick';

/**
 * custom TextView
 */
const CustomText = ({text}) => {
  const {handleClick} = useHandleClick();
  return <Text>{formatText(text, handleClick)}</Text>;
};

export default CustomText;
