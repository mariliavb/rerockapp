import React, {useState, useEffect} from "react";
import Modal from 'react-native-modal';
import {
    ApplicationProvider,
    ScrollView,
    Wrapper,
    Title,
    Row,
    Address,
    Button,
    ButtonsRow,
    Column,
    EqualizerIcon,
    SearchIcon,
    HorizontalScrollView,
    List,
    CartWrapper,
    Bag,
    BagText,
    BagIcon,
    Counter,
    CounterText,
    FilterWrapper,
    ModalWrapper,
    FilterRow,
    FilterButton,
    FilterButtonText,
    FilterEqualizerIcon,
    FilterTitle,
    CloseModal,
    FilterBackIcon
} from "./styles";
import {Category, Product} from '../../components';
import bag from '../../assets/images/bag.png';

import product01 from '../../assets/images/produto1.jpg';
import product02 from '../../assets/images/produto2.jpg';
import product03 from '../../assets/images/produto3.jpg';
import product04 from '../../assets/images/produto4.jpg';
import product05 from '../../assets/images/produto5.png';
import product06 from '../../assets/images/produto6.jpg';
import product07 from '../../assets/images/produto7.png';
import product08 from '../../assets/images/produto8.jpg';
import product09 from '../../assets/images/produto9.jpg';

const HomeScreen = ({navigation}) => {

    const shadowEffect = {
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "grey",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        zIndex:999,
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [click] = useState(true);
    const [countButtonOne, setCountButtonOne] = useState(0);
    const [countButtonTwo, setCountButtonTwo] = useState(0);
    const [biggestPrice, setBiggestPrice] = useState(false);
    const [lowestPrice, setLowestPrice] = useState(false);
    const [mostPopular, setMostPopular] = useState(false);


    let [blockOne] = useState(false);
    let [blockTwo] = useState(false);

    blockOne = countButtonOne !== 0;
    blockTwo = countButtonTwo !== 0;

    function closeModal() {
        setModalOpen(false);
        setTimeout( () => {
            navigation.navigate('LowestPrice');
        },1000);
    }

    return (
            <ApplicationProvider>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Wrapper>
                        <Row>
                            <Column>
                                <Title>loja.com</Title>
                                <Address>Av Pinheiro Laranja, nº50</Address>
                            </Column>
                        <ButtonsRow>
                            <Button style={{...shadowEffect}}>
                                <SearchIcon name="search1" size={18}/>
                            </Button>
                            <Button style={{...shadowEffect}} onPress={() => setModalOpen(true)}>
                                <EqualizerIcon name="equalizer" size={18}/>
                            </Button>
                            <Modal isVisible={modalOpen} animationType="fancy">
                                <ModalWrapper>
                                    <FilterWrapper>
                                        <FilterRow>
                                            <CloseModal  onPress={() => setModalOpen(!modalOpen)}>
                                                <FilterBackIcon name="arrow-left" size={18}/>
                                            </CloseModal>
                                            <FilterTitle>Filtros</FilterTitle>
                                        </FilterRow>
                                        <FilterRow>
                                           <Category text="Menor valor" selected={lowestPrice}  width="130px" onPress={() => setLowestPrice(!lowestPrice)}/>
                                           <Category text="Maior valor" selected={biggestPrice}  width="130px" onPress={() => setBiggestPrice(!biggestPrice)}/>
                                        </FilterRow>
                                        <Category text="Mais populares" selected={mostPopular} width="150px" onPress={() => setMostPopular(!mostPopular)}/>
                                        <FilterButton onPress={closeModal}>
                                            <FilterEqualizerIcon name="equalizer" size={20}/>
                                            <FilterButtonText>filtrar</FilterButtonText>
                                        </FilterButton>
                                    </FilterWrapper>
                                </ModalWrapper>
                            </Modal>
                        </ButtonsRow>
                        </Row>

                        <HorizontalScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Category text="Bebidas" selected={true}/>
                            <Category text="Frutas" selected={false}/>
                            <Category text="Limpeza" selected={false}/>
                            <Category text="Frigobar" selected={false}/>
                            <Category text="Higiene" selected={false}/>
                        </HorizontalScrollView>

                        <List>
                            <Product
                                productPrice="16,80"
                                productName="X Tudo"
                                productImage={product09}
                                count={false}
                                //onPress={() => setCountButtonOne(countButtonOne + 1)}
                                //number={countButtonOne}
                            />
                            <Product
                                productPrice="15,90"
                                productName="X Bacon Milho"
                                productImage={product03}
                                count={false}
                                //onPress={() => setCountButtonOne(countButtonOne + 1)}
                                //number={countButtonOne}
                            />
                            <Product
                                productPrice="15,90"
                                productName="X Egg Bacon"
                                productImage={product07}
                                count={blockOne}
                                onPress={() => setCountButtonOne(countButtonOne + 1)}
                                number={countButtonOne}
                            />
                            <Product
                                productPrice="15,20"
                                productName="X Bacon"
                                productImage={product08}
                                count={blockTwo}
                                onPress={() => setCountButtonTwo(countButtonTwo + 1)}
                                number={countButtonTwo}
                            />
                            <Product
                                productPrice="14,80"
                                productName="X Egg Milho"
                                productImage={product04}
                                count={false}
                                //onPress={() => setCountButtonOne(countButtonOne + 1)}
                                //number={countButtonOne}
                            />
                            <Product
                                productPrice="13,80"
                                productName="X Egg"
                                productImage={product01}
                                count={false}
                                //onPress={() => setCountButtonOne(countButtonOne + 1)}
                                //number={countButtonOne}
                            />
                            <Product
                                productPrice="13,80"
                                productName="X Milho"
                                productImage={product06}
                                count={false}
                                //onPress={() => setCountButtonOne(countButtonOne + 1)}
                                //number={countButtonOne}
                            />
                            <Product
                                productPrice="11,80"
                                productName="X Salada"
                                productImage={product05}
                                count={false}
                                //onPress={() => setCountButtonOne(countButtonOne + 1)}
                                //number={countButtonOne}
                            />
                            <Product
                                productPrice="10,00"
                                productName="X Burguer"
                                productImage={product02}
                                count={false}
                                //onPress={() => setCountButtonOne(countButtonOne + 1)}
                                //number={countButtonOne}
                            />
                        </List>
                    </Wrapper>
                </ScrollView>
                {click && (
                    <CartWrapper>
                        <Bag>
                            <BagIcon source={bag}/>
                            <BagText>sacola</BagText>
                        </Bag>
                        <Counter>
                            <CounterText>{2 + blockOne + blockTwo} itens</CounterText>
                        </Counter>
                    </CartWrapper>
                )}
            </ApplicationProvider>
    );
};
export default HomeScreen;

