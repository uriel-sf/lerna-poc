import React from 'react';
import { styled } from "../Theme";
import Text from "../Text";

const StyledButton = styled.button`
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.foreground}
`;

const Button = (props: { children: any }) => {
    const { children } = props;
    return (
        <StyledButton>
            <Text>{children}</Text>
        </StyledButton>
    );
};

export default Button;