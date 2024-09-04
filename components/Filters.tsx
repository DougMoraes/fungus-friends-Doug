import {StyleSheet,View} from 'react-native';
import { useDispatch } from 'react-redux'

import { fetchMushrooms } from '@/features/mushroomsSlice';
import { AppDispatchType } from '@/types';

import Button from './Button';

function Filters() {
  const dispatch = useDispatch<AppDispatchType>();

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
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default Filters
