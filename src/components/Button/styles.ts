import styled from 'styled-components';

export const Container = styled.button`
border: none;
text-transform: uppercase;
background: transparent;
color:  ${({ theme }) => theme.colors.primary};
border-radius: 0.4rem;
font-weight: 600;

&:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
}
`;
