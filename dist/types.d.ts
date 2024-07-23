import React from 'react';

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

export { Text, type TextProps, Title, type TitleProps };
