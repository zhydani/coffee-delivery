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
  SecondItem,
  TitleBox,
} from './styles'
import ImageIntro from '../../../assets/image-intro.png'
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
        <div>
          <ItemsBox>
            <Item>
              <ItemIconCart>
                <ShoppingCart size={16} weight="fill" />
              </ItemIconCart>
              <ItemText>Compra simples e segura</ItemText>
            </Item>
            <Item>
              <ItemIconPackage>
                <Package size={16} weight="fill" />
              </ItemIconPackage>
              <ItemText>Embalagem mantém o café intacto</ItemText>
            </Item>
          </ItemsBox>
          <ItemsBox>
            <SecondItem>
              <ItemIconTimer>
                <Timer size={16} weight="fill" />
              </ItemIconTimer>
              <ItemText>Entrega rápida e rastreada</ItemText>
            </SecondItem>
            <SecondItem>
              <ItemIconCoffee>
                <Coffee size={16} weight="fill" />
              </ItemIconCoffee>
              <ItemText>O café chega fresquinho até você</ItemText>
            </SecondItem>
          </ItemsBox>
        </div>
      </div>
      <ImageBox>
        <img src={ImageIntro} alt="" />
      </ImageBox>
    </IntroContainer>
  )
}
