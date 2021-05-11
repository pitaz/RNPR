import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomText from '../../components/CutomText';
import Input from '../../components/Input';
import {styles} from './styles';

const Home = () => {
  const [post, setPost] = useState();

  const handleChange = value => {
    setPost(value);
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.inputWrapper}>
          <Input onChangeText={handleChange} style={styles.input} />
          <Icon name="send" size={30} />
        </View>
        <Text style={styles.welcome}>Welcome!</Text>
        <CustomText text={post} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
