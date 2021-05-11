import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentWrapper: {
    paddingHorizontal: 15,
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    right: 0,
    left: 0,
    bottom: 0,
    paddingHorizontal: 15,
  },
  input: {
    width: '90%',
  },
  text: {
    height: 24,
    fontSize: 18,
    position: 'absolute',
    top: 0,
    color: 'transparent',
  },
  mention: {
    color: 'rgba(0, 150, 255, .5)',
  },
  welcome: {
    fontSize: 18,
    marginTop: 50,
    marginBottom: 20,
  },
});
