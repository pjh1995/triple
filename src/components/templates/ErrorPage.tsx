import React, { FC } from 'react';
import { Layout, Maybe } from '@/components/atoms';
import { DEFAULT_SEO } from '@/utils';
import styled from 'styled-components';

interface Iprops {
  statusCode?: number;
  title?: string;
}
export const ErrorPage: FC<Iprops> = ({ statusCode = 999, title = 'Error' }) => {
  const errorSeo = {
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title,
    },
  };

  return (
    <>
      <Layout {...errorSeo}>
        <WrapError>
          <h1>{title}</h1>
          <Maybe test={!!statusCode}>
            <p>Error code: {statusCode}</p>
          </Maybe>
        </WrapError>
      </Layout>
    </>
  );
};

const WrapError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
