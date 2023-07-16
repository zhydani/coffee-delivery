import { Card, CoffeeListBox, TitleBox } from './styles'
import coffee from '../../../../assets/coffees/expresso.png'

export function CoffeeList() {
  return (
    <div>
      <TitleBox>
        <h1>Nossos cafés</h1>
      </TitleBox>
      <CoffeeListBox>
        <Card>
          <img src={coffee} alt="" />
          <span>Tradicional</span>
          <h1>Expresso Tradicional</h1>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <footer>
            <div>
              <span>R$</span>
              <span>9,90</span>
            </div>
          </footer>
        </Card>
      </CoffeeListBox>
    </div>
  )
}
