import {StyleSheet, Text,View} from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import { RootStateType } from '@/types';
import MushroomDetails from './MushroomDetails';

function Map() {
  const { points } = useSelector((state: RootStateType) => state.mushrooms);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
      >
      {points.map((point, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: point.latlng[0],
            longitude: point.latlng[1]
          }}
          title={point.name}
        >
          <Callout>
            <MushroomDetails mushroom={point}/>
          </Callout>
        </Marker>
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
