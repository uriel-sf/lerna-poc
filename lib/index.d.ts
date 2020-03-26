/// <reference types="react" />
declare type ButtonProps = {
    children: React.ReactNode;
};

declare const Button: ({ children }: ButtonProps) => JSX.Element;

export { Button };
