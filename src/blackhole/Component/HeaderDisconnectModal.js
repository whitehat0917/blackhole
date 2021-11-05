import React from "react";
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'


import Modal from '../UIUtils/Modal'

import {
    ModalHeader,
    ModalContent,
    StyledButton
} from '../UtilComponents/Utils'

const AccountSpan = styled.span`
    color:${({theme})=>theme.bg101};
`
const HeaderDisconnectModal = ({isOpen,onDismiss}) =>{
    const { account, deactivate } = useWeb3React()
    const DisConnectWallet = () =>{
        deactivate()
        onDismiss()
    }
    return(
        <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={null} maxHeight={90}>
            <div style={{width:'100%'}}>
            <ModalHeader>
                <span>
                    Your Wallet
                </span>
            </ModalHeader>
            <ModalContent>
                
                <AccountSpan>
                    {account}
                </AccountSpan>
                <StyledButton
                    style={{marginTop:'1rem'}}
                onClick={DisConnectWallet}
                >
                    DisConnect
                </StyledButton>
            </ModalContent>
            </div>
        </Modal>
    )
}
export default HeaderDisconnectModal