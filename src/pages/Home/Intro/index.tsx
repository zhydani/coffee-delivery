import { ImageBox, IntroContainer, TitleBox } from './styles'
import ImageIntro from '../../../assets/image-intro.png'

export function Intro() {
  return (
    <IntroContainer>
      <TitleBox>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
      </TitleBox>
      <div></div>
      <ImageBox>
        <img src={ImageIntro} alt="" />
      </ImageBox>
    </IntroContainer>
  )
}
