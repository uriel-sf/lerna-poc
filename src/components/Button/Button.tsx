import { styled } from "../Theme";

const Button = styled.button`
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.foreground}
`;

export default Button;