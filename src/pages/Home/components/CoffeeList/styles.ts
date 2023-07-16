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

    margin-top: -6rem;
  }

  span {
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};
    border-radius: 10px;
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
`
