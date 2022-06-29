import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;

`;
export const Heading = styled.h3`
display: flex;
justify-content: center;
color: ${({ theme }) => theme.colors.primary};
text-transform: uppercase;
font-size: 1rem;
font-weight: 400;
`;
