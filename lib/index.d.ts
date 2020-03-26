/// <reference types="react" />
declare type TextProps = {
    children: React.ReactNode;
};

declare const Text: ({ children }: TextProps) => JSX.Element;

export { Text };
