import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, FlatList, Text, View } from 'react-native';
import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils/format';

const Home: React.FC = () => {
  const url = 'https://61dceb7c591c3a0017e1ab18.mockapi.io/api/cars';
  const [cars, setCars] = useState();
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setCars(res.data);
      })
      .catch(error => {
        console.warn(error);
      });
  }, []);

  return (
    <FlatList
      data={cars}
      keyExtractor={item => item?.id}
      renderItem={({item}) => {
        return (
          <View key={item?.id} style={{height: 50, padding: 10, borderWidth: 1, marginVertical: 10}}>
            <View>
              <Text>Produto: {item?.name}</Text>
              <Text>Preço: {formatPrice(item?.price)}</Text>
            </View>
            <View>
              <Button
                onPress={() => addProductToCart(item?.id, item?.name, item?.price)}
                title='Adicionar'
              />
            </View>
          </View>
        )
      }}
    >
    </FlatList>
  )
}

export default Home;
