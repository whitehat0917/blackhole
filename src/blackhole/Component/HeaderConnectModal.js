import React, { useState } from "react";
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'

import { injected, bsc, walletconnect } from '../connectors'

import {ConnectModalContext,ConnectModalDispatchContext} from '../ContextProviders/ConnectModalProvider'
import Modal from '../UIUtils/Modal'

import {
    ModalHeader,
    ModalContent,
} from '../UtilComponents/Utils'

const WalletOptions = [
    {
        name:'MetaMask',
        value:'injected',
        backgroundImage:
            <svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-bdfBwQ cuuOmQ">
                <circle cx="48" cy="48" r="48" fill="white"/>
                <path d="M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z" fill="#E17726"/>
                <path d="M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z" fill="#E27625"/>
                <path d="M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z" fill="#E27625"/>
                <path d="M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z" fill="#E27625"/>
                <path d="M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z" fill="#E27625"/>
                <path d="M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z" fill="#E27625"/>
                <path d="M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z" fill="#E27625"/>
                <path d="M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z" fill="#E27625"/>
                <path d="M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z" fill="#D5BFB2"/>
                <path d="M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z" fill="#D5BFB2"/>
                <path d="M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z" fill="#233447"/>
                <path d="M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z" fill="#233447"/>
                <path d="M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z" fill="#CC6228"/>
                <path d="M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z" fill="#CC6228"/>
                <path d="M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z" fill="#CC6228"/>
                <path d="M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z" fill="#CC6228"/>
                <path d="M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z" fill="#E27525"/>
                <path d="M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z" fill="#E27525"/>
                <path d="M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z" fill="#E27525"/>
                <path d="M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z" fill="#E27525"/>
                <path d="M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z" fill="#F5841F"/>
                <path d="M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z" fill="#F5841F"/>
                <path d="M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z" fill="#C0AC9D"/>
                <path d="M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z" fill="#161616"/>
                <path d="M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z" fill="#763E1A"/><path d="M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z" fill="#763E1A"/>
                <path d="M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z" fill="#F5841F"/>
                <path d="M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z" fill="#F5841F"/>
                <path d="M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z" fill="#F5841F"/>
            </svg>
        },
//    {name:'',value:'bsc'},
    {
        name:'WalletConnect',
        value:'wallectconnect',
        backgroundImage:
            <svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-bdfBwQ cuuOmQ">
                <path d="M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z" fill="#3389FB"/>
                <path d="M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z" fill="white"/>
            </svg>
    },
]

const ContentDiv = styled.div`
    @media (min-width: 768px) {
//        display: flex;
//        justify-content: space-around;
    }
    
//    border:1px solid ${(theme)=>theme.bg105};
    border-radius:3px;
    padding:1rem;
    margin:1rem;
    align-items: center;
`
const WalletSelection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:1rem;
`
const WalletSelectionItem = styled.div`
    padding:.7rem 1rem .7rem 1rem;
    margin:1rem;
    border-radius:3px;
    cursor:pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 1px 1px ${(theme)=>theme.bg105};
    ${({isSelect,theme})=>!isSelect && `
    :hover{
        background-color:${theme.bg102};
    }
    `}
    ${({isSelect,theme})=>isSelect && `

        background-color:${theme.bg101};
        color:${theme.bg6};

    `}
`

const a = true
const HeaderConnectModal = () =>{
    const [currentWalletIndex, setCurrentWalletIndex] = useState('')
    const { activate } = useWeb3React()

    const ConnectModalShow = React.useContext(ConnectModalContext);
    const setConnectModalShow = React.useContext(ConnectModalDispatchContext);

    // const [ConnectModalShow, setConnectModalShow] = useState(true);

    const ConnectWallet = (index) =>{
        if(WalletOptions[index].value === 'injected'){
            activate(injected)
        }
        if(WalletOptions[index].value === 'bsc'){
            activate(bsc)
        }
        if(WalletOptions[index].value === 'wallectconnect'){
            activate(walletconnect)
        }
        setConnectModalShow(false)
      //  onDismiss()
    }
    return(

        <Modal isOpen={ConnectModalShow} onDismiss={() => setConnectModalShow(false)} minHeight={null} maxHeight={90}>
            <div style={{width:'100%'}}>
                <ModalHeader>
                    <span>
                        Your Wallet
                    </span>
                </ModalHeader>
                <ModalContent>
                    <span>
                        Please select your Web3 compatible wallet
                    </span>
                    <ContentDiv>
                        <WalletSelection>
                            {WalletOptions.map((item,index)=>{
                                return(
                                    <WalletSelectionItem /* isSelect={index === currentWalletIndex} */  
                                        onClick={()=>{
                                            setCurrentWalletIndex(index)
                                            ConnectWallet(index)
                                        }}
                                        key={`__key-${index.toString()}`}
                                    >
                                        <span>{item.name}</span>
                                        {item.backgroundImage}
                                        
                                        
                                    </WalletSelectionItem>
                                )
                            })}
                        </WalletSelection>
                    </ContentDiv>
                </ModalContent>
                </div>
        </Modal>

    )
}
export default HeaderConnectModal