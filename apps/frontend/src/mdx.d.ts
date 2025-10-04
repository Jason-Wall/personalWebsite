declare module '*.mdx' {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
  export const frontmatter: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    author?: string;
    slug?: string;
    featured?: boolean;
    draft?: boolean;
    [key: string]: unknown;
  };
}
