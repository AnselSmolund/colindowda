export const phoneWidthMax = 767;

export const phoneOnly = cssRulesStringBlock => `
    @media (max-width: ${phoneWidthMax}px ) {
        ${cssRulesStringBlock}
    }
`;
