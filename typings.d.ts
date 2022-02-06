/**
 * Default CSS definition for typescript
 */
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.css";
