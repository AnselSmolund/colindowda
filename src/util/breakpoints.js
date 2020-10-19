export const phoneWidthMax = 767;
export const tabletWidthMax = 1200;

export const phoneOnly = cssRulesStringBlock => `
    @media (max-width: ${phoneWidthMax}px ) {
        ${cssRulesStringBlock}
    }
`;

export const desktopOnly = cssRulesStringBlock => `
    @media (min-width: ${tabletWidthMax}px ) {
        ${cssRulesStringBlock}
    }
`;

export const tabletAndPhoneOnly = cssRulesStringBlock => `
    @media (max-width: ${tabletWidthMax}px ) {
        ${cssRulesStringBlock}
    }
`;

export const tabletOnly = cssRulesStringBlock => `
    @media (max-width: ${tabletWidthMax}px ) and (min-width: ${phoneWidthMax}px ) {
        ${cssRulesStringBlock}
    }
`;
