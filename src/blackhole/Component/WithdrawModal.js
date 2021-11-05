import React, { useState, useEffect } from "react"
import 'react-rangeslider/lib/index.css'
import Modal from '../UIUtils/Modal'

import {
  ModalHeader,
  ModalContent,
  StyledButton,
  SecondaryStyledButton,
  Text,
  FlexLayout,
  TabHeader,
  InfoSpan,
  WarningWallet
} from '../UtilComponents/Utils'
import DropDownMenu from '../UIUtils/Dropdown'
import CloseIcon from '../assets/icons/close-icon.svg'

const WithdrawModal = ({ isOpen, onDismiss, account, connectWallet }) => {
  const RelayerList = [
    { name: 'mainnet.t-relay.eth', val: 'mainnet' },
    { name: 'smartnet.t-relay.eth', val: 'smartnet' }
  ];

  const contextList = [
    { text: 'Relayer fee', amount: '0.2%' },
    { text: 'Total', amount: '' },
    { text: 'Gas Price', amount: '130 Gwei' },
    { text: 'Network fee', amount: '0.065 ETH' },
    { text: 'Relayer fee', amount: '0.00 ETH' },
    { text: 'Total fee', amount: '0.05 ETH' },
    { text: 'Tokens to receive', amount: '0.04 ETH' }
  ];

  const [tab, setTab] = useState(1);
  const [relayer, setRelayer] = useState(RelayerList[0]);

  const note = "Make sure that ETH used to pay for the gas fee is not linkable to ANY of your addresses. Otherwise, the anonymity of the withdrawal will be compromised. We recommend using a Relayer instead.";

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={null} maxHeight={null}>
      <div style={{ width: '100%' }}>
        <ModalHeader>
          <button type="button" onClick={onDismiss} onKeyDown={onDismiss} style={{ padding: "0", border: "0", position: "absolute", right: "0", cursor: "pointer", backgroundColor: "transparent" }}>
            <img src={CloseIcon} alt="close" style={{ width: "15px" }} />
          </button>
          <Text>
            Withdrawal settings
          </Text>
          <FlexLayout>
            <TabHeader className={tab === 1 ? "tab-header-active" : ""} onClick={() => { setTab(1) }}>
              Relayer
              <InfoSpan>i</InfoSpan>
            </TabHeader>
            <TabHeader className={tab === 2 ? "tab-header-active" : ""} onClick={() => { setTab(2) }}>
              Wallet
              <InfoSpan>i</InfoSpan>
            </TabHeader>
          </FlexLayout>
        </ModalHeader>
        <ModalContent>
          {
            tab === 1 &&
            <div>
              <Text size="13px" padding="0 0 10px 0">
                Relayer
              </Text>
              <DropDownMenu list={RelayerList} current={relayer} setCurrent={setRelayer} small="true">
                .
              </DropDownMenu>
              {contextList.map((item, index) => {
                return (
                  <FlexLayout key={`__key-${index.toString()}`} justify="space-between" borderTop={index === contextList.length - 1 ? "1px solid #27AE60" : "0"} margin={index === contextList.length - 1 ? "5px 0 0 0" : "0"} padding={index === contextList.length - 1 || index === 0 ? "5px 0 0 0" : "0"}>
                    <Text size={item.amount === '' ? "14px" : "12px"} padding={item.amount === '' ? "8px 0 4px 0" : "0"}>
                      {item.text}
                    </Text>
                    <Text size="12px" color="green">
                      {item.amount}
                    </Text>
                  </FlexLayout>
                )
              })}
            </div>
          }
          {
            tab === 2 &&
            <div>
              <FlexLayout border="1px solid #80808099" borderRadius="3px" padding="5px 10px">
                <Text size="12px" color={!account ? "#9b9797" : "white"}>
                  {note}
                </Text>
                {
                  !account &&
                  <WarningWallet>
                    Connect your wallet first
                  </WarningWallet>
                }
              </FlexLayout>
              <Text size="13px" padding="10px 0 0 0">
                Total
              </Text>
              <FlexLayout justify="space-between">
                <Text size="12px">
                  Tokens to receive
                </Text>
                <Text size="12px" color="green">
                  0.04 ETH
                </Text>
              </FlexLayout>
            </div>
          }
          <div className="action-container" style={{ marginTop: '1rem' }}>
            <div className="action-btn" style={{ marginRight: '.5rem' }}>
              <SecondaryStyledButton onClick={onDismiss}>
                Set to Defaults
              </SecondaryStyledButton>
            </div>
            {
              account &&
              <div className="action-btn" style={{ marginRight: '.5rem' }}>
                <StyledButton onClick={onDismiss}>
                  Save
                </StyledButton>
              </div>
            }
            {
              !account &&
              <div className="action-btn" style={{ marginRight: '.5rem' }}>
                <StyledButton onClick={connectWallet}>
                  Connect
                </StyledButton>
              </div>
            }
          </div>
        </ModalContent>
      </div>
    </Modal>
  )
}
export default WithdrawModal