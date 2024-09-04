import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

function Map() {
  return (
  <View style={styles.container}>
    <MapView style={styles.map} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map
