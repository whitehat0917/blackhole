import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import Modal from '../UIUtils/Modal'

import {
    ModalHeader,
    ModalContent,
    StyledButton
} from '../UtilComponents/Utils'
import DropDownMenu from '../UIUtils/Dropdown'

const EndpointList = [
  {name:'Infura',val:'Infura'},
  {name:'MyCrypto',val:'MyCrypto'},
  {name:'Custom',val:'Custom'},
]

const HeaderSettingsModal = ({isOpen,onDismiss}) =>{
  const [curEndpoint, setCurEndpoint] = useState(EndpointList[0])

  return(
      <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={null} maxHeight={200}>
        <div style={{width:'100%'}}>
          <ModalHeader>
            <span>
                Settings
            </span>
          </ModalHeader>
          <ModalContent>
            <div className="endpoint-label">
              <span>Token</span>
            </div>
            <DropDownMenu list={EndpointList} current={curEndpoint} setCurrent={setCurEndpoint}>
                .
            </DropDownMenu>
            <div className="action-container" style={{marginTop:'1rem'}}>
              <div className="action-btn" style={{marginRight: '.5rem'}}>
                <StyledButton >
                  Set to Defaults
                </StyledButton>
              </div>
              <div className="action-btn" style={{marginLeft: '.5rem'}}>
                <StyledButton>
                  Save
                </StyledButton>
              </div>
            </div>
          </ModalContent>
        </div>
      </Modal>
  )
}
export default HeaderSettingsModal