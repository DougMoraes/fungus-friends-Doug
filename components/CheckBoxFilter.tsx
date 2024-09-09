import Checkbox from 'expo-checkbox';
import { StyleSheet, Text,View } from 'react-native'
import { useDispatch } from 'react-redux'

import { filterPoints } from '@/features/mushroomsSlice';
import { AppDispatchType, Mushroom } from '@/types';

type CheckBoxFilterProps = {
  label: string,
  filterName: keyof Mushroom,
  isChecked: boolean,
  onValueChange: (value: boolean) => void,
};

const CheckBoxFilter = ({label, filterName, isChecked, onValueChange}: CheckBoxFilterProps) => {
  const dispatch = useDispatch<AppDispatchType>();

  const handleValueChange = () => {
    dispatch(filterPoints({name: filterName, value: label}));
    onValueChange(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Checkbox value={isChecked} onValueChange={handleValueChange} testID={`checkbox-${label}`}/>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    marginHorizontal: 5,
  },
});

export default CheckBoxFilter;
