import { StyleSheet,Text,View } from 'react-native'

import { Mushroom } from '@/types'

type MushroomDetailsProps = {
  mushroom: Mushroom,
};

const MushroomDetails = ({mushroom} : MushroomDetailsProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>Name: </Text>
        <Text>{mushroom.name}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Color: </Text>
        <Text>{mushroom.color}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Spots: </Text>
        <Text>{mushroom.spots}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold'
  },
});


export default MushroomDetails
