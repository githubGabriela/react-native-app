import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ShoppingList  from '../screens/ShoppingList';
import Products from '../screens/products/Products';
import ProductDetail from '../screens/products/Detail';
import Admin from '../screens/admin/Admin';

export const ProductsStack = StackNavigator({
    Products: {
        screen: Products
    } ,
    ProductDetail : {
        screen: ProductDetail
    }
});


export const ShoppingListStack = StackNavigator({
    ShoppingList: {
        screen: ShoppingList
    } ,
    ProductDetail : {
        screen: ProductDetail
    }
});


export const Tabs = TabNavigator({
    ShoppingList: {
        screen: ShoppingListStack,
        navigationOptions: {
            tabBarLabel: 'My List'
        }
    },
    Products: {
        screen: ProductsStack,
        navigationOptions: {
            tabBarLabel: 'All products'
        }
    },
    Admin : {
        screen: Admin,
        navigationOptions: {
            tabBarLabel: 'Admin'
        }
    }
});