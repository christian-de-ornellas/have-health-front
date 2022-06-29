import styled from 'styled-components';

interface StyledProps {
  width?: string;
  textAlign?: string;
}

export const Input = styled.input`
padding: 0.5rem;
margin: 1rem 0.5rem;
border: none;
outline: none;
border-bottom: 0.1rem solid  ${({ theme }) => theme.colors.primary};
background: transparent;
width: ${(props: StyledProps) => props.width};
text-align: ${(props: StyledProps) => props.textAlign};
`;
