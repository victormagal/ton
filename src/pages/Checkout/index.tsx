import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils/format';

const Checkout: React.FC = () => {
  const { products, removeProductToCart } = useContext(CartContext);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => {
        return (
          <View key={index} style={{height: 50, padding: 10, borderWidth: 1, marginVertical: 10}}>
            <View>
              <Text>Produto: {item?.name}</Text>
              <Text>Preço: {formatPrice(item?.price)}</Text>
            </View>
            <View>
              <Button
                onPress={() => removeProductToCart(index)}
                title='Remover'
              />
            </View>
          </View>
        )
      }}
    >
    </FlatList>
  )
}

export default Checkout;
