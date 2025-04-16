import styled from 'styled-components';

export const Container = styled.article`
background: ${({ theme }) => theme.colors.white};
padding: 1rem;
box-shadow: 1px 1px 10px 0 #ccc;
width: ${(props: { width?: string }) => props.width};
`;
