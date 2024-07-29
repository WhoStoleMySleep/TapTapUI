import React from 'react';

interface LinkToProps {
    children: string;
    to: string;
    UI?: "standard" | "primary" | "button" | "button--primary" | "button--red" | "button--blue";
    noDarkMode?: boolean;
    active?: boolean;
    className?: string;
}

declare const LinkTo: ({ children, to, UI, noDarkMode, active, className, ...attributes }: LinkToProps) => React.JSX.Element;

/** Интерактивная карточка */
declare const Text: ({ children, }: {
    children: string;
}) => React.JSX.Element;

interface TextProps {
    /** Содержимое **/
    children: string;
}

/** Интерактивная карточка */
declare const Title: ({ children, }: {
    children: string;
}) => React.JSX.Element;

interface TitleProps {
    /** Содержимое **/
    children: string;
}

export { LinkTo, type LinkToProps, Text, type TextProps, Title, type TitleProps };
