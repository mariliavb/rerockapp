import styled from 'styled-components/native';
import {colors} from '../../theme';

export const Wrapper = styled.TouchableOpacity`
  width:  ${props => props.width ? props.width: '110px' };
  height: 40px;
  background-color: ${props => props.selected ? '#D8591F' : '#E8E8E8'};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const Category = styled.Text`
  font-size: 13px;
  color: ${props => props.selected ? '#FFF': '#000' };
  text-align: center;
`;
