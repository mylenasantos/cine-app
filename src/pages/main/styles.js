import { Dimensions, StyleSheet } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const styles = StyleSheet.create({
   container: {
      marginTop: 30,
      justifyContent: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },
   content: {
      backgroundColor: '#fbe9e7',
      height: screenHeight,
   },
   nameFilm: {
      fontSize: 14,
      fontWeight: 'bold',
   },
   filmEx: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#212121',
   },
   filmExView: {
      marginTop: 40,
      justifyContent: 'center',
      flexDirection: 'row',
      borderBottomColor: '#da552f',
      borderBottomWidth: StyleSheet.hairlineWidth
   },
   item: {
      width: screenWidth - 90,
      height: screenWidth,
      marginTop: 10,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'transparent',
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'contain',
    },
    title: {
       fontWeight: 'bold',
       fontSize: 17,
       textAlign: 'center',
       marginTop: 20,
       color: '#212121'
    },
    text: {
      padding: 4,
      borderBottomColor: '#da552f',
      borderBottomWidth: StyleSheet.hairlineWidth
    }
});

export default styles;