import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import { MarigoldProvider, SSRProvider } from '@marigold/components';
import { theme } from './theme';

import { Layout } from './components/Layout';
import { MarigoldThemeSwitch, themes } from './components/ThemeSwitch';
import * as mdxComponents from './mdx';
import { MarigoldTheme } from './components/MarigoldTheme';

export const WrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => <Layout {...props}>{element}</Layout>;

export const WrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => (
  <SSRProvider>
    <MarigoldProvider theme={theme}>
      <MarigoldThemeSwitch themes={themes} initial="b2bTheme">
        <MDXProvider components={{ ...mdxComponents, MarigoldTheme }}>
          {element}
        </MDXProvider>
      </MarigoldThemeSwitch>
    </MarigoldProvider>
  </SSRProvider>
);

/**
 * Enforce reloading to update styles.
 */
if (module.hot) {
  module.hot.accept('./theme', () => {
    console.log('🏵  UPDATE THEME!');
    window.location.reload();
  });
}
