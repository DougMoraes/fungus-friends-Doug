import {StyleSheet,View} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import { RootStateType } from '@/types';

function Map() {
  const { points } = useSelector((state: RootStateType) => state.mushrooms);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
      {points.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.latlng[0],
            longitude: marker.latlng[1]
          }}
          title={marker.name}
        />
      ))}
      </MapView>
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
