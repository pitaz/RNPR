import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#F0F1FE',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    paddingVertical: 15,
    flexGrow: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  inputText: {
    color: 'white',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
});
