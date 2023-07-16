import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  padding: 6rem 0;
`

export const ImageBox = styled.div`
  padding-left: 4rem;
`

export const TitleBox = styled.div`
  width: 36rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.5rem;
    color: ${(props) => props.theme['gray-900']};
  }

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    margin-top: 1rem;
    font-weight: 200;
  }
`
