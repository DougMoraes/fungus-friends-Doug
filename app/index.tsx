import { StyleSheet, Text, View } from 'react-native';
import Map from '@/components/Map';
import Filters from '@/components/Filters';

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
