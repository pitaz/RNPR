import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {formatText} from '../../utils/formatText';
import {colors} from '../../theme/colors';

const Profile = props => {
  const {navigation} = props;
  const renderView = () => (
    <View style={styles.homeWrapper}>
      <View style={styles.avatar}>
        <Icon name="person" size={30} color={colors.WHITE} />
      </View>
      <Text style={styles.name}>Peter Odekwo</Text>
      <Text style={styles.username}>{formatText('@peter')}</Text>
      <Text>{formatText('www.abeg.app')}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.pageWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.contentWrapper}>{renderView()}</View>
    </SafeAreaView>
  );
};

Profile.propTypes = {
  props: PropTypes.object,
};

export default Profile;
