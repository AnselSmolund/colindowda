export const phoneWidthMax = 767;
export const tabletWidthMax = 1200;

export const phoneOnly = cssRulesStringBlock => `
    @media (max-width: ${phoneWidthMax}px ) {
        ${cssRulesStringBlock}
    }
`;

export const tabletAndPhoneOnly = cssRulesStringBlock => `
    @media (max-width: ${1200}px ) {
        ${cssRulesStringBlock}
    }
`;
