import styled from 'styled-components/native';
import {colors} from '../../theme';
import {AntDesign} from "@expo/vector-icons";

export const Wrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-color: ${colors.light_gray};
  border-bottom-width: 0.3px;
  padding-bottom: 15px;
  margin-top: 15px;
`;

export const Column = styled.View`
  flex-direction: column;
  margin-left: ${props => props.count ? '-45px' : '12px' };
  width: 90px;
`;

export const Name = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  text-align: left;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  text-align: left;
  font-weight: bold;
  margin-top: 3px;
`;

export const Touch = styled.TouchableOpacity`
  position: absolute;
`;

export const Button = styled.View`
 flex-direction: row;
`;

export const PlusIcon = styled(AntDesign)`
  color: ${colors.primary};
`;

export const Thumbnail = styled.Image`
  width: 65px;
  height: 65px;
  background-color: ${colors.light_gray};
  border-radius: 8px;
  resize-mode: stretch;
`;

export const CounterWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 32px;
  border-radius: 20px;
  background-color: ${colors.white};
  margin-top: 12px;
`;

export const Counter = styled.Text`
  font-size: 14px;
  color: ${colors.black};
  text-align: right;
  align-items: flex-end;
  margin-left: 19px;
`;


//zIndex: 3;
