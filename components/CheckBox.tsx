import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { StyleSheet, Text,View } from 'react-native'
import { useDispatch } from 'react-redux'

import { filterPoints } from '@/features/mushroomsSlice';
import { AppDispatchType, Mushroom } from '@/types';

type CheckBoxProps = {
  label: string,
  filterName: keyof Mushroom,
};

const CheckBox = ({label, filterName}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch<AppDispatchType>();

  const handleValueChange = () => {
    dispatch(filterPoints({filterName, filterValue: label}));

    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Checkbox value={isChecked} onValueChange={handleValueChange}/>
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

export default CheckBox;
