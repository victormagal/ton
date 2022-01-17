import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
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
          <View
            key={item?.id} 
            style={{
              borderWidth: 1, 
              flexDirection: 'row', 
              height: 50, 
              justifyContent: 'space-between', 
              marginVertical: 10, 
              padding: 10
            }}
          >
            <View>
              <Text>Produto: {item?.name}</Text>
              <Text>Preço: {formatPrice(item?.price)}</Text>
            </View>
            <TouchableOpacity
              onPress={() => addProductToCart(item?.id, item?.name, item?.price)}
              style={{
                backgroundColor: 'black',
                padding: 5
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </View>
        )
      }}
    >
    </FlatList>
  )
}

export default Home;
