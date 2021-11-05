import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const StepStyledUl = styled.ul`
    
    padding:10px;
    display:flex;
    justify-content: space-between;
    margin-bottom:1.8rem;
`
const StepStyledLi = styled.li`
    position:relative;
    width:100%;
`
const StepStyledA = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${({isEnable,theme})=> isEnable  && `
        cursor:pointer;
        & span {
            color:${(theme.text1)}
        }
    `}
    ${({isSelect,theme})=> isSelect  && `
        & span {
            color:${(theme.bg101)}
        }
    `}
    ${({isEnable,theme})=> !isEnable  && `
        cursor:disable;
        & span {
            color:${(theme.outLine1)}
        }
    `}

    ${({isFirst,isLast,isEnable,theme})=> (isFirst || isLast ) && `
    :after{
        ${(isFirst) && `
            left:0;
        `};
        ${(isLast) && `
            right:0;
        `};
        content: "";
        display: block;
        position: absolute;
        background: ${(isEnable ? theme.bg101 :theme.outLine1)};
        height: .1em;
        width: 50%;
        bottom: 0;
        top: .7rem;
    }
    `}
    ${({isFirst,isEnable,theme})=> !isFirst  && `
    :before{
            content: "";
            display: block;
            position: absolute;
            background: ${(isEnable ? theme.bg101 :theme.outLine1)};

            height: .1em;
            width: 100%;
            left: -50%;
            bottom: 0;
            top: .7rem;
        }
    `}
    
`
const StepStyledDot = styled.div`
    position: relative;
    height: 1.2rem;
    width: 1.2rem;
    align-items: center;
    display: flex;
    border-radius: 1rem;
    font-weight: 700;
    justify-content: center;
    background: #282828;//${({ theme }) => (theme.bgPane )};
    border: .15em solid ${({isEnable,theme})=>isEnable ? theme.bg101:theme.outLine1 }; 
    z-index: 1;
    overflow: hidden;
    ${({isSelect,theme})=>isSelect && `
        :before{
            content: "";
            display: flex;
            position: absolute;
            left: 50%;
            margin-left: -.75rem;
            bottom: 50%;
            margin-bottom: -.75rem;
            width: 1.5rem;
            height: 1.5rem;
            transition: transform .15s ease-out;
            border-radius: 50%;
            transform: scale(0);
            background-color: ${(theme.bg101)};
            transform: scale(.6);
        }
    `}
    
`
const StepTitle = styled.div`
    margin-top: 1rem;

`
// const stepInfo = [
//     {name:'0.1 ETH',isEnable:true},
//     {name:'1 ETH',isEnable:true},
//     {name:'10 ETH',isEnable:true},
//     {name:'100 ETH',isEnable:false}
// ]
const StepLine = ({stepInfo, selCoin, selAmount, setSelAmount})=>{
    const [disableIndex,setDisableIndex] = useState(-1)

    useEffect(()=>{
        if (stepInfo) {
            let index = stepInfo.length;
            for (let i = 0; i < stepInfo.length; i++) {
                if (stepInfo[i].isEnable === false)
                {
                    index = i
                    break
                }
            }
            setDisableIndex(index)
        }
    },[stepInfo])

    const getNormalizedAmount = (amount) => {
        if (amount > 1000) {
            return `${(amount/1000).toString()}k`
        }

        return amount.toString()
    }

    return(
        <StepStyledUl>
        {
            stepInfo && stepInfo.map((info,index)=>{
                return (
                    <StepStyledLi isEnable={index < disableIndex} key={`__key-${index.toString()}`}>
                        <StepStyledA  isSelect={index === selAmount} isEnable={index < disableIndex} onClick={() => 
                            {
                                if(index < disableIndex){
                                    setSelAmount(index)
                                    //   alert(index)
                                }
                                
                            }} isFirst={index === 0} isLast={index === stepInfo.length - 1}
                        >
                            
                            <StepStyledDot isEnable={index < disableIndex} isSelect={index === selAmount}>
                                <></>
                            </StepStyledDot>
                            <StepTitle>
                                <span>{getNormalizedAmount(info.name)}&nbsp;</span>
                                <span>{selCoin.name}</span>
                            </StepTitle>
                        </StepStyledA>
                    </StepStyledLi>
                )
            })
        }
        </StepStyledUl>
    )
}
export default StepLine 