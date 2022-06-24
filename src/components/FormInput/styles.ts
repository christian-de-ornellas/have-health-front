import styled from 'styled-components';

export const Input = styled.input`
padding: 0.6rem;
margin: 0 0.6rem;
border: none;
outline: none;
border-bottom: 0.1rem solid  ${({ theme }) => theme.colors.primary};
background: transparent;
`;
