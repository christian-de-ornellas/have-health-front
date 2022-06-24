import styled from 'styled-components';

export const Container = styled.button`
border: none;
padding: 0.4rem 1.6rem;
text-transform: uppercase;
border: 0.1rem solid ${({ theme }) => theme.colors.primary};
background: transparent;
color:  ${({ theme }) => theme.colors.primary};
border-radius: 0.4rem;

&:hover{
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    animate: linear all 1s;
}


`;
