// declare module '*.scss' {
//     const content: { [className: string]: string };
//     export default content;
// }

// declare module '*.css' {
//     const content: { [className: string]: string };
//     export default content;
// }

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.scss' {
    const content: string;
    export default content;
}

declare module '*.css' {
    const content: string;
    export default content;
}
// declare module '*.css' {
//     import { CSSResult } from 'lit-element';
//     const css: CSSResult;
//     export default css;
// }