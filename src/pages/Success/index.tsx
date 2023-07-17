import { Info, MapPinIcon, OrderInfo, SuccessContainer } from './styles'
import delivery from '../../assets/delivery.png'
import { MapPin } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderInfo>
          <Info>
            <MapPinIcon>
              <MapPin size={16} weight="fill" />
            </MapPinIcon>
            <div>
              <p>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </p>
            </div>
          </Info>
        </OrderInfo>
      </div>
      <div>
        <img src={delivery} alt="" />
      </div>
    </SuccessContainer>
  )
}
