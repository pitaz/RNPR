import {Alert, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const useHandleClick = () => {
  const navigation = useNavigation();
  const openUrl = async word => {
    const supported = await Linking.canOpenURL(word);
    if (supported) {
      try {
        await Linking.openURL(word);
      } catch (error) {
        // todo
      }
    } else {
      Alert.alert(`Don't know how to open this URL: ${word}`);
    }
  };
  const handleClick = async (web, word) => {
    if (web) {
      await openUrl(word);
    } else {
      navigation.navigate('profile');
    }
  };
  return {
    handleClick,
  };
};

export default useHandleClick;
