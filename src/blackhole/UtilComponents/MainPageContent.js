import { useState, useEffect } from "react"
import styled from 'styled-components'

export const Article = styled.div`
    margin-bottom:2rem;
    padding: 0;
    border: 1px solid ${({ theme }) => (theme.outLine1)};
    overflow: hidden;
    border-radius:4px;
`
export const ArticleContent = styled.div`
    align-items: center;
    padding-top:0;
    display: flex;
    background-color:${({ theme }) => (theme.bgPane)};
`
export const ArticleLeft = styled.div`
    position: relative;
    align-self: stretch;
    display: inline-flex;
    align-items: center;
    margin-right: 1rem;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    :after{
        content: "";
        position: absolute;
        transform: skewX(
        20deg
        );
        background-color: ${({ theme }) => (theme.bg100)};
        border-right: 1px solid ${({ theme }) => (theme.outLine1)};
        top: -1px;
        bottom: -1px;
        border-top-right-radius: 2px;
        left: -50%;
        right: -.2rem;
    }
`
export const ArticleText = styled.div`
    padding: .5rem 2rem .5rem .5rem;
    text-align: center;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    white-space: pre-wrap;
`
export const MainPageContent = styled.div`
    
    @media (min-width: 768px) {
        display: flex;    
        justify-content:space-between;
    }
`
export const MainPageContentItemDiv = styled.div`
    width:45%;
    margin-bottom:2rem;
    @media (max-width: 768px) {
        width:100%;
    }
`
export const isMobile = query => {
    return `@media screen and (min-width: 0px) and (max-width: 600px) { ${query} }`;
};

export function useCheckMobile() {
    // Constants
    const [width, setWidth] = useState(window.innerWidth);
  
    // Hook Effect
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      // Listeners
      window.addEventListener("load", handleResize);
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("load", handleResize);
        window.removeEventListener("resize", handleResize);
      };
    });
  
    return width < 600;
  }