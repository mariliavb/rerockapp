import React from 'react';
import {Wrapper, Category} from './style';

const Notification = ({selected = true, text, width , onPress}) => {
  return (
    <Wrapper selected={selected} width={width} onPress={onPress}>
      <Category selected={selected}>{text}</Category>
    </Wrapper>
  );
};

export default Notification;
