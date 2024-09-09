import {StyleSheet, View} from 'react-native';
import MapView from "react-native-map-clustering";
import { Callout, Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import { RootStateType } from '@/types';

import MushroomDetails from './MushroomDetails';

function Map() {
  const INITIAL_REGION = {
    latitude: 52.370216,
    longitude: 4.895168,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const { points } = useSelector((state: RootStateType) => state.mushrooms);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={INITIAL_REGION}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        testID='map'
      >
      {points.map((point, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: point.latlng[0],
            longitude: point.latlng[1]
          }}
          title={point.name}
          testID='marker'
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
