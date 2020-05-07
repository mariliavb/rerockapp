import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {MainScreen, LowestPriceScreen, BiggestPriceScreen} from "../pages"
import { fromLeft } from 'react-navigation-transitions';

const fade = (props) => {
    const {position, scene} = props;
    const index = scene.index;
    const translateX = 0;
    const translateY = 0;

    const opacity = position.interpolate({
        inputRange: [index - 0.7, index, index + 0.7],
        outputRange: [0.3, 1, 0.3]
    })

    return {
        opacity,
        transform: [{translateX}, {translateY}]
    }
};

const StackNavigator = createStackNavigator(
    {
        Main: {
            screen: MainScreen,
            navigationOptions:{
                transitionConfig: () => ({
                    screenInterpolator:(props) =>{
                        return fade(props);
                    }
                })
            },
        },
        LowestPrice: {
            screen:LowestPriceScreen,
            navigationOptions:{
                transitionConfig: () => ({
                    screenInterpolator:(props) =>{
                        return fade(props);
                    }
                })
            },
        },
        BiggestPrice: {
            screen: BiggestPriceScreen,
            navigationOptions:{
                transitionConfig: () => ({
                    screenInterpolator:(props) =>{
                        return fade(props);
                    }
                })
            },
        },
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            header: null,
        }
    },
);


const AppNavigator = createSwitchNavigator(
    {
        Stack: StackNavigator,
    },
    {
        initialRouteName: 'Stack',
    },
);

export default createAppContainer(AppNavigator);
