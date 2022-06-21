import React, { FC, ReactNode } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
interface Iprops extends NextSeoProps {
  children: ReactNode;
}

export const Layout: FC<Iprops> = ({ children, ...rest }) => (
  <>
    <NextSeo {...rest} />
    <>{children}</>
  </>
);
