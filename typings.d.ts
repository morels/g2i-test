/**
 * Default CSS definition for typescript
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
