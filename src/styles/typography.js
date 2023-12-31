export const fonts = {
  primary: `'Source Sans 3', sans-serif`,
};

export const typography = {
  text: {
    xs: `
    font-size: 0.625rem;
    line-height: 0.55rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    md: `
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.26rem;
    `,
    lg: `
    font-size: 1.125rem;
    line-height: 1.41rem;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    `,
    xl: `
    font-size: 1.3rem;
    line-height: 1.75rem;
    `,
    xt: `
    font-size: 0.875rem;
    line-height: normal;
    color: gray;
    `,
    xx: `
    font-size: 1.125rem;
    line-height: normal;
    color: black;
    `,
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    `,
    md: `
    font-size: 1.875rem;
    line-height: 2.25rem;
    `,
    lg: `
    font-size: 2.25rem;
    line-height: 2.5rem;
    `,
    xl: `
    font-size: 3rem;
    line-height: 3rem;
    `,
    xxl: `
    font-size: 3.75rem;
    line-height: 3.75rem;
    `,
  },
};

for (const size in typography.text) {
  typography.text[size] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.head) {
  typography.head[size] += `
  font-family: ${fonts.primary};
  font-weight: 600;
  `;
}
