import { MapPinLine } from 'phosphor-react'
import { CheckoutContainer, FormContainer, MapPinLineIcon } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
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
        <form action=""></form>
      </FormContainer>
    </CheckoutContainer>
  )
}
