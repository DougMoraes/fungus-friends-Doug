import { StyleSheet, Text, View } from 'react-native';

import Filters from '@/components/Filters';
import Map from '@/components/Map';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>
        Home Screen
      </Text>
      <Map />
      <Filters />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 24,
  },
});
