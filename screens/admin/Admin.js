import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {AdminTabs}  from './AdminRouter';

class Admin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AdminTabs/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
});

export default Admin;
