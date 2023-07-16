import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 11rem;
      height: 3rem;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 8px;

      color: ${(props) => props.theme['purple-700']};
      background-color: ${(props) => props.theme['purple-100']};

      &:hover {
        background-color: ${(props) => props.theme['purple-500']};
        color: ${(props) => props.theme['purple-100']};
      }

      /* &.active {
        background-color: ${(props) => props.theme['purple-500']};
        color: ${(props) => props.theme['purple-100']};
      } */
    }
    span {
      margin: 0 0.5rem;
    }
    a:nth-of-type(2) {
      width: 3rem;
      height: 3rem;

      color: ${(props) => props.theme['yellow-700']};
      background-color: ${(props) => props.theme['yellow-100']};

      &:hover {
        background-color: ${(props) => props.theme['yellow-500']};
        color: ${(props) => props.theme['yellow-100']};
      }
    }
  }
`
