import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;
export const Heading = styled.header`
display: flex;
justify-content: center;
color: ${({ theme }) => theme.colors.primary};
text-transform: uppercase;
`;
export const FormGroup = styled.div`
padding: 1rem 0;
`;

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
