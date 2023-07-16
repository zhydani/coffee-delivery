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
export const ItemsContainer = styled.div`
  width: 37rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.5rem;
`

export const ItemsBox = styled.div`
  /* gap: 1rem; */
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  margin-bottom: 1rem;
`

export const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50px;
  color: ${(props) => props.theme.white};
`

export const ItemIconCart = styled(ItemIcon)`
  background-color: ${(props) => props.theme['yellow-700']};
`

export const ItemIconPackage = styled(ItemIcon)`
  background-color: ${(props) => props.theme['gray-700']};
`

export const ItemIconTimer = styled(ItemIcon)`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const ItemIconCoffee = styled(ItemIcon)`
  background-color: ${(props) => props.theme['purple-500']};
`

export const ItemText = styled.span`
  padding-left: 0.7rem;
  padding-top: 0.4rem;
`
