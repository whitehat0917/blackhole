import React, { useState, useEffect } from "react"
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Modal from '../UIUtils/Modal'

import {
  ModalHeader,
  ModalContent,
  StyledButton,
  DisabledStyledButton,
  Text,
  CopyButton
} from '../UtilComponents/Utils'
import CopyLinkIcon from '../assets/icons/copy-link.svg'
import CloseIcon from '../assets/icons/close-icon.svg'

const DepositModal = ({ isOpen, onDismiss, sendDeposit }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [checkValue, setCheckValue] = useState(false);
  const [copyStatus, setCopyStatus] = useState('zoom-in');

  const note = "tornado-eth-0.1-1-0x73042cd217fa07334cc60547ae4327ad511d1bea648ba669750ff7d1d6c3aed628d48eb4ac834160df2d6f37274084d190191da9d45e9423db24ec2b3873"

  const handleChange = (value) => {
    setSliderValue(value);
  }

  const handleChangeCheck = (e) => {
    setCheckValue(e.target.checked);
    return true;
  }

  const handleCopyClick = (e) => {
    const timeout = setTimeout(() => {
      setCopyStatus('zoom-in');
    }, 700);
    clearTimeout(700);
    setCopyStatus('zoom-out');
  }

  const horizontalLabels = {
    0: 'Slow',
    50: 'Standard',
    100: 'Fast'
  }
  const label = "123";

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} minHeight={null} maxHeight={null}>
      <div style={{ width: '100%' }}>
        <ModalHeader>
          <button type="button" onClick={onDismiss} onKeyDown={onDismiss} style={{ padding: "0", border: "0", position: "absolute", right: "0", cursor: "pointer", backgroundColor: "transparent" }}>
            <img src={CloseIcon} alt="close" style={{ width: "15px" }} />
          </button>
          <Text>
            Your note
          </Text>
          <Text size="13px">Please backup your note. If you lose it, you won&#39;t get your deposit back.Treat your note as a private key - never share it with anyone, including blackhole.com developers</Text>
        </ModalHeader>
        <ModalContent>
          <Text size="13px" color="green">
            {note}
            <CopyToClipboard text={note}>
              <CopyButton className={`copy-link scale-wrapper ${copyStatus}`} onClick={handleCopyClick}>
                <img src={CopyLinkIcon} alt="copy" style={{ height: "9px" }} />
              </CopyButton>
            </CopyToClipboard>
          </Text>
          <Text size="13px">
            The browser will ask to save your note as a file: <a href="/note.txt" download style={{ color: "#27AE60" }}>backup-tornado-eth-0.1-10x537463c3.txt</a>
          </Text>

          <div className="slider-container">
            <div className="slider-header">
              <h5 className="slider-title">Gas Price</h5>
              <h5 className="slider-amount">126 Gwei</h5>
            </div>
            <Slider
              min={0}
              max={100}
              value={sliderValue}
              labels={horizontalLabels}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox-wrapper">
            <label className="checkbox-container" htmlFor="checkbox">
              I backed up the note
              <input type="checkbox" id="checkbox" onChange={handleChangeCheck} />
              <span className="checkmark" />
            </label>
          </div>
          <div className="action-container" style={{ marginTop: '1rem' }}>
            <div className="action-btn" style={{ marginRight: '.5rem' }}>
              {
                checkValue === true &&
                <StyledButton onClick={sendDeposit}>
                  Send Deposit
                </StyledButton>
              }
              {
                checkValue === false &&
                <DisabledStyledButton>
                  Send Deposit
                </DisabledStyledButton>
              }
            </div>
          </div>
        </ModalContent>
      </div>
    </Modal>
  )
}
export default DepositModal