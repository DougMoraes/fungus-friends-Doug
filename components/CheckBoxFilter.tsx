import Checkbox from 'expo-checkbox';
import { StyleSheet, Text,View } from 'react-native'
import { useDispatch } from 'react-redux'

import { filterPoints } from '@/features/mushroomsSlice';
import { AppDispatchType, Mushroom } from '@/types';

type CheckBoxProps = {
  label: string,
  filterName: keyof Mushroom,
  value: boolean,
  onValueChange: (value: boolean) => void,
};

const CheckBoxFilter = ({label, filterName, value, onValueChange}: CheckBoxProps) => {
  const dispatch = useDispatch<AppDispatchType>();

  const handleValueChange = () => {
    dispatch(filterPoints({name: filterName, value: label}));
    onValueChange(!value);
  };

  return (
    <View style={styles.container}>
      <Checkbox value={value} onValueChange={handleValueChange} testID='checkbox'/>
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
