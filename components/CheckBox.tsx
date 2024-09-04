import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { StyleSheet, Text,View } from 'react-native'

type CheckBoxProps = {
  label: string;
};

const CheckBox = ({label}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox value={isChecked} onValueChange={() => setIsChecked(!isChecked)}/>
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
