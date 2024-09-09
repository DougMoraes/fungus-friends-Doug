import { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { fetchMushrooms, resetMushrooms } from '@/features/mushroomsSlice';
import { AppDispatchType, CheckboxOptionsType, RootStateType } from '@/types';

import Button from './Button';
import CheckBoxFilter from './CheckBoxFilter';

function Filters() {
  const [isColorFilterChecked, setIsColorFilterChecked] = useState(false);
  const [isSpotsFilterChecked, setIsSpotsFilterChecked] = useState(false);

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
    }, {uniqueColors: [], uniqueSpotsTypes: []} as CheckboxOptionsType);

  const onPressFetchMushrooms = async () => {
    try {
      await dispatch(fetchMushrooms());
    } catch (err) {
      console.log(err);
    }
  };

  const onPressResetFilters = async () => {
    try {
      await dispatch(resetMushrooms());
      setIsColorFilterChecked(false);
      setIsSpotsFilterChecked(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Button text='Fetch Mushrooms' onPress={onPressFetchMushrooms}/>

      {(uniqueColors.length > 0 || uniqueSpotsTypes.length > 0) && <Button text='Reset Filters' onPress={onPressResetFilters}/>}

      {uniqueColors.length > 0 && <Text style={styles.filterTitle}>Colors:</Text>}

      <View style={styles.filterOptions}>
        {uniqueColors.map((color) => (
          <CheckBoxFilter key={color} label={color} filterName='color' isChecked={isColorFilterChecked} onValueChange={setIsColorFilterChecked}/>
        ))}
      </View>

      {uniqueSpotsTypes.length > 0 && <Text style={styles.filterTitle}>Spots:</Text>}

      <View style={styles.filterOptions}>
        {uniqueSpotsTypes.map((spotsType) => (
          <CheckBoxFilter key={spotsType} label={spotsType} filterName='spots' isChecked={isSpotsFilterChecked} onValueChange={setIsSpotsFilterChecked}/>
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
