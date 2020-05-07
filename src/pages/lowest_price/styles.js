import styled from "styled-components/native";
import {colors, metrics} from '../../theme';
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export const ApplicationProvider = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding-top: 35px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Wrapper = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color:  ${colors.black};
  line-height: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Address = styled.Text`
  font-size: 13px;
  color:  ${colors.primary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  width: 55px;
  height: 45px;
  border-radius: 10px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const EqualizerIcon = styled(SimpleLineIcons)`
  color: ${colors.header};
  transform: rotate(90deg);
`;

export const SearchIcon = styled(AntDesign)`
  color: ${colors.header};
  transform: rotate(90deg);
`;

export const HorizontalScrollView = styled.ScrollView`
  padding-vertical: 10px;
  margin-top: 20px;
`;

export const List = styled.View`
  margin-top: 1px
`;

export const CartWrapper = styled.View`
  width: 270px;
  height: 50px;
  align-self: center;
  padding-horizontal: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

export const Bag = styled.View`
  width: 150px;
  height: 100%;
  background-color: ${colors.primary};
  border-radius: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  zIndex: 5;
`;

export const BagText = styled.Text`
  font-size: 14px;
  color:  ${colors.white};
  text-transform: uppercase;
  margin-top: 4px;
`;

export const BagIcon = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: stretch;
`;

export const Counter = styled.View`
  width: 110px;
  height: 95%;
  background-color: ${colors.light_gray};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: -20px;
`;

export const CounterText = styled.Text`
  font-size: 14px;
  color:  ${colors.black};
`;

export const ModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FilterWrapper = styled.View`
  width: 95%;
  height: 280px;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 20px;
`;

export const FilterRow = styled.View`
  flex-direction: row;    
`;

export const FilterButton = styled.TouchableOpacity`
  width: 150px;
  height: 55px;
  background-color: ${colors.primary};
  border-radius: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 20px;
`;

export const FilterButtonText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-transform: uppercase;
  margin-left: 10px;
`;

export const FilterEqualizerIcon = styled(SimpleLineIcons)`
  color: ${colors.white};
  transform: rotate(90deg);
`;

export const FilterBackIcon = styled(SimpleLineIcons)`
  color: #353535;
`;

export const FilterTitle = styled.Text`
  font-size: 22px;
  color: #353535;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 25px;
  margin-top: 7px;
`;

export const CloseModal = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.light_gray};
`;
