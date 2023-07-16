import styled from 'styled-components'

export const TitleBox = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CoffeeListBox = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`

export const TagBox = styled.div`
  display: flex;
  gap: 0.3rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;

  background-color: ${(props) => props.theme['gray-200']};
  width: 16rem;
  height: 19.375rem;

  img {
    width: 120px;
    height: 120px;

    margin-top: -2rem;
  }

  span {
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};
    border-radius: 8px;
    padding: 0.2rem 1rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.625rem;
    margin: 0.5rem 0;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    padding: 0.5rem 1rem;
  }

  footer {
    display: flex;
    padding-top: 2.5rem;
    gap: 1.5rem;
    div {
      display: flex;
    }
    span {
      background-color: transparent;
      color: ${(props) => props.theme['gray-700']};
      font-size: 0.875rem;
      font-weight: 400;
      width: 2.2rem;
    }
    h2 {
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
    }
  }
`

export const FormContainer = styled.div`
  form {
    display: flex;
    gap: 0.5rem;
  }
`

export const CoffeeAmountInput = styled.input`
  background-color: ${(props) => props.theme['gray-400']};
  height: 2.5rem;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-900']};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
  width: 4rem;
`

export const AddCoffeeButton = styled.button`
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  width: 2.375rem;
  height: 2.375rem;

  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['purple-700']};

  cursor: pointer;

  /* :hover {
    background-color: ${(props) => props.theme['purple-500']};
  } */
`
