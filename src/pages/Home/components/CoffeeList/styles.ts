import styled from 'styled-components'

export const TitleBox = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-800']};
  }
`
