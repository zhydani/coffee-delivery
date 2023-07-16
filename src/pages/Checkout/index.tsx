import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  BairroInput,
  CepInput,
  CheckoutContainer,
  CidadeInput,
  ComplementoInput,
  CurrencyDollarIcon,
  FormContainer,
  MapPinLineIcon,
  NumeroInput,
  RuaInput,
  SelectedCoffees,
  UfInput,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <header>
            <MapPinLineIcon>
              <MapPinLine size={24} />
            </MapPinLineIcon>
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <form action="">
            <div>
              <CepInput id="cep" placeholder="CEP" />
            </div>
            <div>
              <RuaInput id="rua" placeholder="Rua" />
            </div>
            <div>
              <NumeroInput id="numero" placeholder="Número" />
              <ComplementoInput id="complemento" placeholder="Complemento" />
            </div>
            <div>
              <BairroInput id="bairro" placeholder="Bairro" />
              <CidadeInput id="cidade" placeholder="Cidade" />
              <UfInput id="uf" placeholder="UF" />
            </div>
          </form>
        </FormContainer>
        <FormContainer>
          <header>
            <CurrencyDollarIcon>
              <CurrencyDollar size={24} />
            </CurrencyDollarIcon>
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <form action=""></form>
        </FormContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <SelectedCoffees></SelectedCoffees>
      </div>
    </CheckoutContainer>
  )
}
