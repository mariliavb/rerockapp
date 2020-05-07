import React from 'react';
import {Wrapper, Column, Button, PlusIcon, Name, Price, Thumbnail, CounterWrapper, Counter, Touch, Line } from './style';

const Notification = ({productName, productPrice, productImage, onPress, count = true, number}) => {

    const shadowEffect = {
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "grey",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        zIndex:999,
    };

    return (
        <Wrapper>
            <Button>
                {count && (
                    <CounterWrapper style={{...shadowEffect}}>
                        <Counter>{number}</Counter>
                    </CounterWrapper>
                )}
            </Button>
            <Touch onPress={onPress}>
                <PlusIcon name="pluscircle" size={30}/>
            </Touch>
            <Column count={count}>
                <Name>{productName}</Name>
                <Price>R$ {productPrice}</Price>
            </Column>
            <Thumbnail source={productImage}/>
        </Wrapper>
  );
};

export default Notification;
