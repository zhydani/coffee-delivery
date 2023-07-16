import {
  AddCaffeeButton,
  CaffeeAmountInput,
  Card,
  CoffeeListBox,
  FormContainer,
  TitleBox,
} from './styles'
import coffee from '../../../../assets/coffees/expresso.png'
import { ShoppingCart } from 'phosphor-react'

interface Tag {
  type: string
}
export interface CaffeeType {
  id: number
  tag: Tag[]
  name: string
  description: string
  value: number
  image: string
}

const caffees: CaffeeType[] = [
  {
    id: 1,
    tag: [{ type: 'tradicional' }],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    image: '../../../../assets/coffees/expresso.png',
  },
  {
    id: 2,
    tag: [{ type: 'tradicional' }],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    image: '../../../../assets/coffees/americano.png',
  },
  {
    id: 3,
    tag: [{ type: 'tradicional' }],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    image: '../../../../assets/coffees/expresso-cremoso.png',
  },
  {
    id: 4,
    tag: [{ type: 'tradicional' }, { type: 'gelado' }],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    image: '../../../../assets/coffees/cafe-gelado.png',
  },
  {
    id: 5,
    tag: [{ type: 'tradicional' }, { type: 'com leite' }],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    image: '../../../../assets/coffees/cafe-com-leite.png',
  },
  {
    id: 6,
    tag: [{ type: 'tradicional' }, { type: 'com leite' }],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    image: '../../../../assets/coffees/latte.png',
  },
  {
    id: 7,
    tag: [{ type: 'tradicional' }, { type: 'com leite' }],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    image: '../../../../assets/coffees/capuccino.png',
  },
  {
    id: 8,
    tag: [{ type: 'tradicional' }, { type: 'com leite' }],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    image: '../../../../assets/coffees/macchiato.png',
  },
]

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
              <form>
                <CaffeeAmountInput
                  type="number"
                  id="coffeeAmount"
                  placeholder="0"
                  min={1}
                />
                <AddCaffeeButton>
                  <ShoppingCart size={24} weight="fill" type="submit" />
                </AddCaffeeButton>
              </form>
            </FormContainer>
          </footer>
        </Card>
      </CoffeeListBox>
    </div>
  )
}
