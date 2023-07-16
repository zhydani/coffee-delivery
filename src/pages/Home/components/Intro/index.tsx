import {
  ImageBox,
  IntroContainer,
  Item,
  ItemIconCart,
  ItemIconCoffee,
  ItemIconPackage,
  ItemIconTimer,
  ItemText,
  ItemsBox,
  ItemsContainer,
  TitleBox,
} from './styles'
import ImageIntro from '../../../../assets/image-intro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <TitleBox>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </TitleBox>
        <ItemsContainer>
          <ItemsBox>
            <Item>
              <ItemIconCart>
                <ShoppingCart size={16} weight="fill" />
              </ItemIconCart>
              <ItemText>Compra simples e segura</ItemText>
            </Item>
            <Item>
              <ItemIconTimer>
                <Timer size={16} weight="fill" />
              </ItemIconTimer>
              <ItemText>Entrega rápida e rastreada</ItemText>
            </Item>
          </ItemsBox>
          <ItemsBox>
            <Item>
              <ItemIconPackage>
                <Package size={16} weight="fill" />
              </ItemIconPackage>
              <ItemText>Embalagem mantém o café intacto</ItemText>
            </Item>
            <Item>
              <ItemIconCoffee>
                <Coffee size={16} weight="fill" />
              </ItemIconCoffee>
              <ItemText>O café chega fresquinho até você</ItemText>
            </Item>
          </ItemsBox>
        </ItemsContainer>
      </div>
      <ImageBox>
        <img src={ImageIntro} alt="" />
      </ImageBox>
    </IntroContainer>
  )
}
