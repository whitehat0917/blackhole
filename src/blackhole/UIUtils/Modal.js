import React from 'react'
import styled, { css } from 'styled-components'


import { animated, useTransition } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

const AnimatedDialogOverlay = animated(DialogOverlay)
const WrappedDialogOverlay = ({ suppressClassNameWarning, ...rest }) => <AnimatedDialogOverlay {...rest} />
const StyledDialogOverlay = styled(WrappedDialogOverlay).attrs({
  suppressClassNameWarning: true
})`
  &[data-reach-dialog-overlay] {
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.modalBackground};
    
  }
`
const FilteredDialogContent = ({ minHeight, maxHeight, ...rest }) => <DialogContent {...rest} />
const StyledDialogContent = styled(FilteredDialogContent)`
  &[data-reach-dialog-content] {
    margin: 0 0 2rem 0;
    border: 1px solid ${({ theme }) => theme.outLine1};
    background-color: ${({ theme }) => theme.bg6};
    
    ${({ theme }) => theme.mediaWidth.upToMedium`margin: 0;`};
    
    width: 40vw;
    max-width: 550px;
    ${({ theme }) => theme.mediaWidth.upToMedium`width: 65vw;`}
    ${({ theme }) => theme.mediaWidth.upToSmall`width: 85vw;`}
    ${({ maxHeight }) =>
    maxHeight &&
    css`
        max-height: ${maxHeight}vh;
      `}
    ${({ minHeight }) =>
    minHeight &&
    css`
        min-height: ${minHeight}vh;
      `}
    ${({ theme }) => theme.mediaWidth.upToMedium`max-height: 65vh;`}
    ${({ theme }) => theme.mediaWidth.upToSmall`max-height: 80vh;`}
    display: flex;
    border-radius: 3px;
    padding:1rem;
    font-family: monospace;
    overflow-wrap: anywhere;

  }
`

const HiddenCloseButton = styled.button`
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
  border: none;
`
const truevalue = true
export default function Modal({ isOpen, onDismiss, minHeight = false, initialFocusRef, children, maxHeight = 50 }) {
  const transitions = useTransition(isOpen, null, {
    config: { duration: 150 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <StyledDialogOverlay key={key} style={props} onDismiss={onDismiss} initialFocusRef={initialFocusRef}>
          <StyledDialogContent  hidden={truevalue} minHeight={minHeight} maxHeight={maxHeight}>
            <HiddenCloseButton onClick={onDismiss} />
            {children}
          </StyledDialogContent>
        </StyledDialogOverlay>
      )
  )
}
