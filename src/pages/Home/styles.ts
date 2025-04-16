import styled from 'styled-components';
import { device } from '../../styles/rwd';

export const Container = styled.div`
z-index: 999;
position: absolute;
width: 90%;
display: flex;
justify-content:center;
gap: 3rem;
margin-top: 0.8rem;


@media ${device.tablet} { 
  display: flex; 
  flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;
export const MapHeader = styled.header`
display: flex;
justify-content:space-around;
`;

export const Bottom = styled.footer`
display: flex;
justify-content: space-around;

`;
