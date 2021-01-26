import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  align-items: ${(props) => props.align || 'center'};
  flex-basis: ${(props) => props.basis || 'auto'};
  flex-flow: ${(props) => props.flow || 'row nowrap'};
  flex-direction: ${(props) => props.fdirection || 'row'};
`

export default Flex
