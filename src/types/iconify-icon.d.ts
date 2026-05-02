import React from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
          icon: string;
          class?: string;
          style?: React.CSSProperties;
          flip?: string;
          rotate?: string;
        }, HTMLElement>;
      }
    }
  }
}
