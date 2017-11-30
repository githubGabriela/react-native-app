//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { data } from 
// create a component
class AdminCategories extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Admin categories</Text>

                <FlatList data={data.categories}
                    renderItem={({item}) =>
                        <Text style={styles.item} onPress={() => this.goToDetail(item)}
                        >{item.key}</Text>}
                    />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AdminCategories;
