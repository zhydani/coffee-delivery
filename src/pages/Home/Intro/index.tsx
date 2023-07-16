import {
  ImageBox,
  IntroContainer,
  Item,
  ItemIconCart,
  ItemIconPackage,
  ItemText,
  ItemsBox,
  TitleBox,
} from './styles'
import ImageIntro from '../../../assets/image-intro.png'
import { Package, ShoppingCart } from 'phosphor-react'

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
        </div>
      </div>
      <ImageBox>
        <img src={ImageIntro} alt="" />
      </ImageBox>
    </IntroContainer>
  )
}
