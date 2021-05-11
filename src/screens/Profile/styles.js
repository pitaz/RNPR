import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  homeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  pageWrapper: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    padding: 40,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 75,
    backgroundColor: colors.DARK_PURPLE,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.WHITE,
  },
  name: {
    padding: 20,
    fontSize: 20,
  },
  backText: {
    padding: 20,
  },
  username: {
    marginVertical: 10,
  },
});
