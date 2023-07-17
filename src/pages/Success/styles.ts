import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-700']};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }
  img {
    margin-top: 6.5rem;
  }
`

export const OrderInfo = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  margin-top: 2.5rem;

  border: 1px solid ${(props) => props.theme['purple-700']};
  padding: 3rem;

  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;

  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  p {
    font-size: 1rem;
    width: 19.375rem;
    margin-left: -10.5rem;
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50px;
  color: ${(props) => props.theme.white};
`

export const MapPinIcon = styled(Icon)`
  background-color: ${(props) => props.theme['purple-500']};
`
