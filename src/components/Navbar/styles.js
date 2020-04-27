import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === 'ios' ? 100 + getStatusBarHeight() : 70 + getStatusBarHeight(),
    paddingTop: Platform.OS === 'ios' ? 60 + getStatusBarHeight() : getStatusBarHeight() - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#da552f',

    
  },
});

export default styles;