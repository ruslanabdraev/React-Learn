import styled from 'styled-components'

const StyledImage = styled.div`
    display: inline;
    width:200px;
    max-width: 80%;
    height: auto;
`

const Screen = ({source}) =>
    <StyledImage>
        <img src={source}/>
    </StyledImage>

export default Screen