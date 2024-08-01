import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface LinkToProps {
    children: string;
    to: string;
    UI?: "standard" | "primary" | "button" | "button--primary" | "button--red" | "button--blue";
    noDarkMode?: boolean;
    active?: boolean;
    className?: string;
}

declare const LinkTo: ({ children, to, UI, noDarkMode, active, className, ...attributes }: LinkToProps) => React.JSX.Element;

interface TextProps {
    children: string;
    UI?: "standard" | "primary";
    className?: string;
    noDarkMode?: boolean;
}

declare const Text: ({ children, UI, className, noDarkMode, ...attributes }: TextProps) => react_jsx_runtime.JSX.Element;

interface TitleProps {
    children: string;
    UI?: "standard" | "primary";
    Level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    noDarkMode?: boolean;
}

/** Интерактивная карточка */
declare const Title: ({ children, UI, Level, className, noDarkMode, ...attributes }: TitleProps) => react_jsx_runtime.JSX.Element;

export { LinkTo, type LinkToProps, Text, type TextProps, Title, type TitleProps };
