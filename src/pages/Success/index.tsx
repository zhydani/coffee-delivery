import {
  CurrencyDollarIcon,
  Info,
  MapPinIcon,
  OrderInfo,
  SuccessContainer,
  TimerIcon,
} from './styles'
import delivery from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

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
          <Info>
            <TimerIcon>
              <Timer size={16} weight="fill" />
            </TimerIcon>
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </Info>
          <Info>
            <CurrencyDollarIcon>
              <CurrencyDollar size={16} weight="fill" />
            </CurrencyDollarIcon>
            <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
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
