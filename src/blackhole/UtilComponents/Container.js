import styled from 'styled-components'

export const Container = styled.div`
    max-width:1140px;
    margin:auto;
    font-weight: 400;
    white-space: nowrap;
    font-family: monospace;
    padding: 6px;
//    background-color: ${({ theme }) => theme.bg6};
    color: ${({ theme }) => theme.text1};
    @media (max-width: 768px) {
        width:95%
    }
`
const a = 1;
export default a