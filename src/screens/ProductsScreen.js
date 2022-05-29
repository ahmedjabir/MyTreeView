import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductsList from '../components/ProductsList'
import { Context } from '../context/ProductContext';
import SelectedItem from '../components/SelectedItem'

const ProductScreen = () => {
    
    //Temporary fetching data from file.
    const data = require('../../data.json');
    
    //Get selected items from state.
    const { state } = useContext(Context);    

    return (
        <>
          <View style={styles.topContainer}>
            <ProductsList data={data.products}/>
          </View>
          <Text style={styles.variantsTitle}>Selected Variants</Text>
          <View style={styles.bottomContainer}>
              <FlatList
                  data={state}
                  keyExtractor={(item) => item.id}
                  horizontal={false}
                  renderItem={({item}) => <SelectedItem item={item}/>}>
              </FlatList>
          </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    topContainer: {
        flex:5,
        borderWidth:1,
        borderColor:'gray'
    },
    bottomContainer: {
        flex:3,
        borderWidth:1,
        borderColor:'gray'
    },
    variantsTitle: {
        fontSize:17,
        fontWeight:'bold',
        margin:10
    }
});

export default ProductScreen;