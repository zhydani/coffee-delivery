import {
  CaffeeAmountInput,
  Card,
  CoffeeListBox,
  FormContainer,
  TitleBox,
} from './styles'
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
              <h2>9,90</h2>
            </div>
            <FormContainer>
              <CaffeeAmountInput
                type="number"
                id="coffeeAmount"
                placeholder="0"
                min={1}
              />
            </FormContainer>
          </footer>
        </Card>
      </CoffeeListBox>
    </div>
  )
}
