declare module "react-syntax-highlighter" {
  import * as React from "react";
  
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberStyle?: any;
    codeTagProps?: any;
    customStyle?: any;
    className?: string;
    children?: React.ReactNode;
  }

  export class Prism extends React.Component<SyntaxHighlighterProps> {}
  export class Light extends React.Component<SyntaxHighlighterProps> {}
  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const oneDark: any;
  export const oneLight: any;
  export const prism: any;
  export const dark: any;
}
