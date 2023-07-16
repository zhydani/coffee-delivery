import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
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
  padding: 2.5rem;
  margin-bottom: 0.8rem;
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
  form {
    padding-top: 2rem;
  }
`

export const MapPinLineIcon = styled.div`
  color: ${(props) => props.theme['yellow-700']};
`

export const CurrencyDollarIcon = styled.div`
  color: ${(props) => props.theme['purple-500']};
`

export const SelectedCoffees = styled.div`
  background-color: ${(props) => props.theme['gray-200']};

  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;

  width: 28rem;
  height: 31.125rem;
  padding: 2rem;
`
const BaseInput = styled.input`
  background-color: ${(props) => props.theme['gray-300']};
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 5px;

  font-size: 0.875rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-700']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CepInput = styled(BaseInput)`
  flex: 1;
  width: 12.5rem;
`
