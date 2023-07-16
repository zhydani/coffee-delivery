import {
  AddCoffeeButton,
  CoffeeAmountInput,
  Card,
  CoffeeListBox,
  FormContainer,
  TitleBox,
  TagBox,
} from './styles'
import coffee from '../../../../assets/coffees/expresso.png'
import { ShoppingCart } from 'phosphor-react'

interface Tag {
  id: number
  type: string
}
export interface CoffeeType {
  id: number
  tag: Tag[]
  name: string
  description: string
  value: number
  image: string
}

const coffees: CoffeeType[] = [
  {
    id: 1,
    tag: [{ id: 1, type: 'tradicional' }],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    image: './src/assets/coffees/expresso.png',
  },
  {
    id: 2,
    tag: [{ id: 1, type: 'tradicional' }],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    image: './src/assets/coffees/americano.png',
  },
  {
    id: 3,
    tag: [{ id: 1, type: 'tradicional' }],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    image: './src/assets/coffees/expresso-cremoso.png',
  },
  {
    id: 4,
    tag: [
      { id: 1, type: 'tradicional' },
      { id: 2, type: 'gelado' },
    ],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    image: './src/assets/coffees/cafe-gelado.png',
  },
  {
    id: 5,
    tag: [
      { id: 1, type: 'tradicional' },
      { id: 3, type: 'com leite' },
    ],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    image: './src/assets/coffees/cafe-com-leite.png',
  },
  {
    id: 6,
    tag: [
      { id: 1, type: 'tradicional' },
      { id: 3, type: 'com leite' },
    ],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    image: './src/assets/coffees/latte.png',
  },
  {
    id: 7,
    tag: [
      { id: 1, type: 'tradicional' },
      { id: 3, type: 'com leite' },
    ],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    image: './src/assets/coffees/capuccino.png',
  },
  {
    id: 8,
    tag: [
      { id: 1, type: 'tradicional' },
      { id: 3, type: 'com leite' },
    ],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    image: './src/assets/coffees/macchiato.png',
  },
  {
    id: 9,
    tag: [
      { id: 1, type: 'tradicional' },
      { id: 3, type: 'com leite' },
    ],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    image: './src/assets/coffees/mochaccino.png',
  },
]

export function CoffeeList() {
  return (
    <div>
      <TitleBox>
        <h1>Nossos cafés</h1>
      </TitleBox>
      <CoffeeListBox>
        {coffees.map((coffee) => {
          return (
            <Card key={coffee.id}>
              <img src={coffee.image} alt="" />
              <TagBox>
                {coffee.tag.map((tag) => {
                  return <span key={tag.id}>{tag.type}</span>
                })}
              </TagBox>
              <h1>{coffee.name}</h1>
              <p>{coffee.description}</p>
              <footer>
                <div>
                  <span>R$</span>
                  <h2>
                    {coffee.value
                      .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                      .replace('R$', '')}
                  </h2>
                </div>
                <FormContainer>
                  <form>
                    <CoffeeAmountInput
                      type="number"
                      id="coffeeAmount"
                      placeholder="0"
                      min={1}
                    />
                    <AddCoffeeButton>
                      <ShoppingCart size={24} weight="fill" type="submit" />
                    </AddCoffeeButton>
                  </form>
                </FormContainer>
              </footer>
            </Card>
          )
        })}
      </CoffeeListBox>
    </div>
  )
}
