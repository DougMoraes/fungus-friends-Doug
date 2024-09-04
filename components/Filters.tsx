import {StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { fetchMushrooms } from '@/features/mushroomsSlice';
import { AppDispatchType, RootStateType } from '@/types';

import Button from './Button';
import CheckBox from './CheckBox';

export type checkboxOptionsType = {
  uniqueColors: string[],
  uniqueSpotsTypes: string[],
};

function Filters() {
  const dispatch = useDispatch<AppDispatchType>();
  const { points } = useSelector((state: RootStateType) => state.mushrooms);
  const {uniqueColors, uniqueSpotsTypes} = points.reduce(
    (checkboxOptions, point) => {
        if (!checkboxOptions.uniqueColors.includes(point.color)) {
          checkboxOptions.uniqueColors.push(point.color);
        }

        if (!checkboxOptions.uniqueSpotsTypes.includes(point.spots)) {
          checkboxOptions.uniqueSpotsTypes.push(point.spots);
        }

        return checkboxOptions;
    }, {uniqueColors: [], uniqueSpotsTypes: []} as checkboxOptionsType);

  const onPressFetchMushrooms = async () => {
    try {
      await dispatch(fetchMushrooms());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Button text='Fetch Mushrooms' onPress={onPressFetchMushrooms}/>
        {uniqueColors.length > 0 && <Text style={styles.filterTitle}>Colors:</Text>}
        <View style={styles.filterOptions}>
          {uniqueColors.map((color) => (
            <CheckBox label={color} filterName='color'/>
          ))}
        </View>
        {uniqueSpotsTypes.length > 0 && <Text style={styles.filterTitle}>Spots:</Text>}
        <View style={styles.filterOptions}>
          {uniqueSpotsTypes.map((spotsType) => (
            <CheckBox label={spotsType} filterName='spots'/>
          ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  filterTitle: {
    fontWeight: 'bold',
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxLabel: {
    marginHorizontal: 5,
  },
});

export default Filters
