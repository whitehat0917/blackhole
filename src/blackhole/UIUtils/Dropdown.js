import React, { useState, useEffect, useRef } from "react";

import styled from 'styled-components'

const StyledDropDown = styled.div`
    position:relative;
`
const StyledDropDownDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 9999;
    
    top: 50px;
    position:absolute;
    border-radius:3px;
    border: 1px solid ${({ theme }) => theme.bg101};
    
    background: ${({ theme }) => theme.bg6};    
    display: ${({ hide }) => (hide ? 'block' : 'none')};
    width:100%;
`
const StyledDropDownHeader = styled.div`
    color:white;
    border:1px solid ${({ theme, hide }) => hide ? theme.bg101 : theme.outLine1};
    padding:.7rem;
    border-radius:3px;
    text-align: left;
    :after{
			border: 2px solid white;
			border-radius: 2px;
			border-right: 0;
			border-top: 0;
			content: " ";
			display: block;
			margin-top: -.5em;
			pointer-events: none;
			position: absolute;
			top: 50%;
			transform: rotate(-45deg);
			transform-origin: center;
			height: .625em;
			width: .625em;
			right: 1.125em;
			transition: border-color .15s ease-in-out;
		}
`

const StyledDropDownItemDiv = styled.div`
    padding:.7rem;
    text-align: left;
    ${({ isSelect, theme }) => !isSelect && `
        :hover{
            background-color:${theme.bg102};
        }
    `}
    ${({ isSelect, theme }) => isSelect && `
        
            background-color:${theme.bg101};
            color:${theme.bg6};
        
    `}
`
const DropDownMenu = ({ list, current, setCurrent, small }) => {
	const [hide, setHide] = useState(false)
	const dropMenuRef = useRef(null);

	const handleClickOutside = (e) => {
		if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
			return;
		}
		setHide(false);
	};

	useEffect(() => {
		if (hide) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [hide]);

	return (
		<StyledDropDown>
			<StyledDropDownHeader hide={hide} onClick={() => setHide(!hide)} small={small}>
				{current.name}
			</StyledDropDownHeader>
			<StyledDropDownDiv ref={dropMenuRef} hide={hide}>
				{list.map((item, index) => {
					return (
						<StyledDropDownItemDiv isSelect={current.val === item.val} small={small} key={`__key-${index.toString()}`} onClick={() => {
							setHide(false)
							setCurrent(item)
						}
						}>
							{item.name}
						</StyledDropDownItemDiv>
					)
				})}

			</StyledDropDownDiv>
		</StyledDropDown>
	)
}
export default DropDownMenu