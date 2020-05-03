import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 60 + getStatusBarHeight() : 70 + getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#da552f',
  },
  menu: {
    marginTop: 40,
    marginLeft: 20,
    
}
});

export default styles;