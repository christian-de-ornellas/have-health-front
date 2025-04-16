import styled from 'styled-components';
import { device } from '../../styles/rwd';

export const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;

@media ${device.tablet} { 
    display: flex; 
          
    }
`;
export const Heading = styled.h3`
display: flex;
justify-content: center;
color: ${({ theme }) => theme.colors.primary};
text-transform: uppercase;
font-size: 1rem;
font-weight: 400;
`;
export const Form = styled.form`
display: flex;
flex-direction: column;


`;
