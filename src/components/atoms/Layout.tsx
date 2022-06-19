import React, { FC } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

export const Layout: FC<NextSeoProps> = ({ children, ...rest }) => (
  <>
    <NextSeo {...rest} />
    <>{children}</>
  </>
);
