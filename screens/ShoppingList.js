import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';

import { products } from '../config/data';

class ShoppingList extends Component {
    goToDetail = (item) => {
        this.props.navigation.navigate('ProductDetail', { ...item } );
    };

    render() {
        return (
        <View style={styles.container}>
            <FlatList data={products}
            renderItem={({item}) =>
            <Text style={styles.item} onPress={() => this.goToDetail(item)}
            >{item.key}</Text>}
            />
      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        flex: 1,
        paddingTop: 22
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
});

export default ShoppingList;
