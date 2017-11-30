import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import  CreateProduct  from '../products/CreateProduct';
import  CreateCategory  from '../categories/CreateCategory';


export const AdminTabs = TabNavigator({
    CreateProduct: {
        screen: CreateProduct,
        navigationOptions: {
            tabBarLabel: 'Products'
        }
    }, 
    CreateCategory: {
        screen: CreateCategory,
        navigationOptions: {
            tabBarLabel: 'Categories'
        }
    },
});