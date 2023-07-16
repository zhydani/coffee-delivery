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
export const ItemsBox = styled.div`
  width: 36rem;
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`

export const Item = styled.div`
  padding: 1rem 0;
  margin-top: 2.5rem;
`

export const ItemIcon = styled.span`
  width: 5rem;
  border-radius: 50px;
  padding: 0.5rem 0.4rem 0.2rem;
  color: ${(props) => props.theme.white};
`

export const ItemIconCart = styled(ItemIcon)`
  background-color: ${(props) => props.theme['yellow-700']};
`

export const ItemIconPackage = styled(ItemIcon)`
  background-color: ${(props) => props.theme['gray-700']};
`

export const ItemText = styled.span`
  padding-left: 0.7rem;
`
