import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils/format';

const Checkout: React.FC = () => {
  const { products, removeProductToCart } = useContext(CartContext);
  const totalPrice = products.reduce((acc, current) => acc + current.price, 0);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column'
      }}
    >
      <View
        style={{
          flex: 7
        }}
      >
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
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
                  onPress={() => removeProductToCart(index)}
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
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }}
        >
        </FlatList>
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30
        }}
      >
        <Text
          style={{
            fontSize: 25
          }}
        >
          Total:
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold'
          }}
        >
          {formatPrice(totalPrice)}
        </Text>
      </View>
    </View>
  )
}

export default Checkout;
