import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  padding-top: 4rem;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-800']};
    padding-bottom: 0.8rem;
  }
`

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 8px;
  width: 40rem;
  padding: 2rem;
  header {
    display: flex;
    gap: 0.5rem;
    h2 {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-800']};
    }
    p {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-700']};
      padding-top: 0.2rem;
    }
  }
`

export const MapPinLineIcon = styled.div`
  color: ${(props) => props.theme['yellow-700']};
`
