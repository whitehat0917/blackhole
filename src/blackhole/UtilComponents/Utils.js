import styled from 'styled-components'
import { isMobile } from './MainPageContent'

export const Row = styled.div`
    margin:1rem 0px 0px 0px;
`
export const Col = styled.div`

`
export const MainSection = styled.div`
    margin:3rem 0px 3rem 0px;
`
export const PanelContent = styled.div`
    margin:1.5rem;
`
export const PanelContentItem = styled.div`
    margin:0.2rem;
`
export const PanelContentSmallTitle = styled.div`
    margin-bottom:.7rem;
`
export const PanelContentSmallContent = styled.div`
    margin-bottom:1.5rem;
`
export const Notification = styled.div`
    display: flex;
    background-color: #35373d;
    border: 1px solid #80808099;
    padding: 10px 35px 10px 15px;
    position: fixed;
    top: 20px;
    right: 20px;
    align-items: center;
    z-index: 10;
`
export const StyledButton = styled.div`
    background-color: ${({ theme }) => (theme.bg101)};
    color:${({ theme }) => (theme.bg6)};
    border-radius:3px;
    padding:.7rem;
    text-align:center;
    cursor:pointer;
    :hover{
        background-color: ${({ theme }) => (theme.bg102)};
    }
`
export const DisabledStyledButton = styled.div`
    opacity: 0.5;
    background-color: ${({ theme }) => (theme.bg101)};
    color:${({ theme }) => (theme.bg6)};
    border-radius:3px;
    padding:.7rem;
    text-align:center;
    cursor:pointer;
`
export const SecondaryStyledButton = styled.div`
    background-color: ${({ theme }) => (theme.bg6)};
    color:${({ theme }) => (theme.bg101)};
    border: 1px solid ${({ theme }) => (theme.bg101)};
    border-radius:3px;
    padding:.7rem;
    text-align:center;
    cursor:pointer;
    :hover{
        background-color: ${({ theme }) => (theme.bg102)};
    }
`
export const CopyLink = styled.div`
    color:${({ theme }) => (theme.bg101)};
    cursor:pointer;
    :hover{
        background-color: ${({ theme }) => (theme.bg105)};
    }

    .copy-link {
        width: 20px;
        height: 20px;
    }
`
export const InfoSpan = styled.span`
background-color: ${({ theme }) => (theme.bg101)};
color:${({ theme }) => (theme.bg6)};
cursor:pointer;
margin:.5rem;
font-size:12px;
padding:0rem .3rem;
border-radius:3px;
`
export const InfoSpan2 = styled.span`
    background-color: ${({ theme }) => (theme.bg100)};
    border: 1px solid ${({ theme }) => (theme.bg101)};
    color:${({ theme }) => (theme.text10)};
    cursor:pointer;
    margin:.1rem 1rem .1rem 1rem;
    font-size:14px;
    font-weight:200;
    padding:0rem .3rem;
    border-radius:3px;
`
export const StyledInput = styled.input`
    padding: .7rem .7rem;
    width:94%;
    font-size:15px;
    background-color: ${({ theme }) => (theme.bg6)};
    color:${({ theme }) => (theme.text1)};
    border:1px solid ${({ theme }) => (theme.outLine1)};
    border-radius:2px;
    margin-bottom: 1.5rem;

`
export const PanelContentSmallContentRow = styled.div`
    display: flex;
    justify-content:space-between;
`
export const PanelContentSmallContentCol = styled.div`
    width:45%;
`
export const DepositesDetailItem = styled.div`
    margin:0rem 0rem .5rem 0rem;
    background-color: ${({ theme, hasback }) => (hasback ? '#2c2c2c' : theme.bg6)};
    padding:.3rem;
    width:100%;
`
export const DepositesDetailItemIndex = styled.span`
`
export const DepositesDetailItemContent = styled.span`
    color:${({ theme }) => (theme.bg101)};
`
export const TabNavPart = styled.div`
    align-items: center;
    border-bottom: 0 solid #393939;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: space-between;

`
export const TabNavItemLeft = styled.li`
    

    background-color: ${({ theme, HasOutLine, Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
    font-weight: 700;
    position: relative;
    z-index: 1;
    border: solid ${({ theme, HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    border-width: 1px 1px 0px;
    
    padding: .68rem 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
    vertical-align: top;
    border-radius:5px 5px 0px 0px;
    transition: background-color .15s ease-in-out;
    ${({ HasOutLine, Select, theme }) => HasOutLine && `
        color:${(Select ? theme.bg100 : theme.text10)};
    `}
    :first-child:after{
        position: absolute;
        background-color: ${({ theme, HasOutLine, Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
        transform-origin: bottom left;
        width: 2rem;
        border: solid ${({ theme, HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
        border-width: 1px 1px 0px;
        top: -1px;
        bottom: 1px;
        transition: background-color .15s ease-in-out;

        content: "";
        right: -1.5rem;
        transform: skewX(
            20deg
        );
        border-left: none;
        border-top-right-radius: 5px;
        
    }
   
    :hover{
        ${({ theme, HasOutLine, MultiTab, Select }) => !Select && `
            background-color:  ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
            cursor:pointer;

            :first-child:after{
                background-color: ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
                cursor:pointer;

            }
        `}
    }
   
`;
export const TabNavItemRight = styled.li`
    
    background-color: ${({ theme, HasOutLine, Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
    font-weight: 700;
    position: relative;
    z-index: 1;
    border: solid ${({ theme, HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    border-width: 1px 1px 0px;

    padding: .68rem 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
    vertical-align: top;
    border-radius:5px 5px 0px 5px;
    transition: background-color .15s ease-in-out;
    ${({ HasOutLine, Select, theme }) => HasOutLine && `
        color:${(Select ? theme.bg100 : theme.text10)};
    `}
    :last-child:before{
        position: absolute;
        background-color: ${({ theme, HasOutLine, Select }) => (Select ? theme.bg101 : (HasOutLine ? theme.bg100 : theme.bg6))};
        transform-origin: bottom left;
        width: 2rem;
        border: solid ${({ theme, HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
        border-width: 1px 1px 0px;

        top: -1px;
        bottom: 1px;
        transition: background-color .15s ease-in-out;

        content: "";
        left: -1.5rem;
        transform: skewX(
            -20deg
        );
        border-right: none;
        border-top-left-radius: 5px;
    } 
  
    :hover{
        ${({ theme, HasOutLine, MultiTab, Select }) => !Select && `
            background-color:  ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
            cursor:pointer;

            :last-child:before{
                background-color: ${(HasOutLine ? (HasOutLine && MultiTab ? theme.bg102 : theme.bg100) : theme.bg6)};
                cursor:pointer;
            }
        `}
    }
`
export const TabBottomPart = styled.div`
    display:flex;
    justify-content:space-between;
    ${({ IsBottomRight }) => IsBottomRight && `
        float:right;
    `}
`
export const TabBottomNavPart = styled.div`
    background-color: ${({ theme }) => (theme.bg6)};
    font-weight: 700;
    position: relative;
    z-index: 1;
    border: solid ${({ theme, HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    border-width: 0px 1px 1px 1px;

    padding: .68rem 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
    vertical-align: top;
    ${({ IsBottomRight }) => !IsBottomRight && `
        border-radius:0px 0px 0px 5px;
    `}
    ${({ IsBottomRight }) => IsBottomRight && `
        border-radius:0px 0px 5px 0px;
    `}
    transition: background-color .15s ease-in-out;
    :after{
        position: absolute;
        background-color: ${({ theme }) => (theme.bg6)};
        
        width: 2.4rem;
        border: solid ${({ theme, HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
        top: -1px;
        transition: background-color .15s ease-in-out;
        ${({ IsBottomRight }) => !IsBottomRight && `
            content: "";
            transform-origin: bottom left;
            right: -.5rem;
            transform: skewX(
                -20deg
            );
            border-bottom-right-radius: 5px;
            bottom:-2px;
            border-width: 1px 1px 1px 0px;

        `}
        ${({ IsBottomRight }) => IsBottomRight && `
            content: "";
            transform-origin: bottom left;
            left: -.2rem;
            transform: skewX(
                20deg
            );
            border-bottom-left-radius: 5px;
            bottom:-1px;
            border-width: 1px 0px 1px 1px;

        `}
        
    }
`
export const TabContentPart = styled.div`
    background-color:${({ theme }) => (theme.bgPane)};
    
    border:1px solid ${({ theme, HasOutLine }) => (HasOutLine ? theme.bg101 : theme.outLine1)};
    ${({ IsBottomRight }) => IsBottomRight && `
        border-radius:0px 0px 0px 5px;
    `}
    ${({ IsBottomRight }) => !IsBottomRight && `
        border-radius:0px 0px 5px 0px;
    `}
    
    min-height:18rem;   
`
export const BottomStyledSpan = styled.div`
    padding:.3rem;
    font-size:11px;
    & a{
        color: ${({ theme }) => (theme.bg101)};
        cursor:pointer;
        :hover{
            color: ${({ theme }) => (theme.bg105)};
        }
    }
`
export const ModalHeader = styled.div`
    color:${({ theme }) => (theme.text1)};
    font-size:20px;
    margin:1rem;
    text-align:center;
    position: relative;
`
export const ModalContent = styled.div`
    color:${({ theme }) => (theme.text1)};
    font-size:15px;
    margin:1rem;
    text-align:center;

    .endpoint-label {
        text-align: left;
        margin-bottom: .7rem;
    }

    .action-container {
        display: flex;
        flex-direction: row;

        .action-btn {
            flex: 1;
        }
    }

    .slider-container {
        display: block;

        .slider-header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .slider-amount: {
                padding: 7px;
                border: 1px solid ${({ theme }) => (theme.outLine1)}
            }
        }
    }
`
export const FooterDiv = styled.div`
    padding-top:3rem;
    padding-bottom:3rem;
    bottom: 0; 
    height: 40px; 
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    
`
export const FoorterInfoItem = styled.div`
    @media (min-width: 768px) {
        display:flex;
    }
    @media (max-width: 768px) {
        text-align:center;
    }

`
export const FooterSocialPanel = styled.div`
    display: flex;
    justify-content: center;

    & a{
        width: 24px;
        height: 24px;
        margin: 0 10px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const Text = styled.p`
    text-align: ${props => props.align || "left"};
    font-size: ${props => props.size || "16px"};
    color: ${({ theme, color }) => (color === 'green' ? theme.green1 : color || "white")};
    line-height: ${props => props.lineHeight || "18px"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
`

export const SpanText = styled.span`
    text-align: ${props => props.align || "left"};
    font-size: ${props => props.size || "16px"};
    color: ${props => props.color || "white"};
`

export const CopyButton = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 7px;
    padding: 3px;
    background-color: #4be48c;
    border-radius: 5px;
    cursor: pointer;
    color: black;
    font-size: 10px;
    width: ${props => props.width || "auto"};
    ${isMobile(`
        font-size: 16px;
    `)}
`
export const FlexLayout = styled.div`
    display: flex;
    width: ${props => props.width || "auto"};
    border: ${props => props.border || "0"};
    padding: ${props => props.padding || "0"};
    margin: ${props => props.margin || "0"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    border-top: ${props => props.borderTop || "0"};
    border-right: ${props => props.borderRight || "0"};
    border-radius: ${props => props.borderRadius || "0"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    position: relative;
`
export const TabHeader = styled.div`
    width: 50%;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-bottom: 2px solid #80808099;
    cursor: pointer;
`
export const WarningWallet = styled.div`
    position: absolute;
    top: calc(50% - 15px);
    line-height: 18px;
    border-radius: 3px;
    background-color: #585555;
    padding: 7px 20px;
    font-size: 13px;
`
export const FilterItem = styled.div`
    display: flex;
    color: white;
    border: ${props => props.border || "1px solid white"};
    border-radius: ${props => props.borderRadius || "3px"};
    border-left: ${props => props.borderLeft || "auto"};
    margin:${props => props.margin || "0 3px"};
    font-size: 11px;
    padding: ${props => props.padding || "4px 8px"};
    opacity: ${props => props.opacity || 0.4};
    background-color: ${props => props.backgroundColor || "transparent"};
    cursor: pointer;
    ${isMobile(`
        flex-wrap: wrap;
    `)}
`
export const ListItemText = styled.span`
    text-align: ${props => props.align || "left"};
    font-size: ${props => props.size || "11px"};
    color: ${({ theme, color }) => (color === 'green' ? theme.green1 : color || "white")};
    width: 12%;
    padding: 0 0 0 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 20px;
    box-sizing: border-box;
    ${props => `
        ${isMobile(`
            width: ${props.width || "50%"};
            margin: ${props.margin || "0"};
            font-size: 14px;
        `)}
    `}
`