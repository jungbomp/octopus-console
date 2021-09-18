// declarations.d.ts

// styles
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.less';

// images
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
  