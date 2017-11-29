import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { products } from '../../config/data';

class Products extends Component {
    goToDetail = (item) => {
        this.props.navigation.navigate('ProductDetail', { ...item } );
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Products</Text>
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
    },
});

export default Products;
