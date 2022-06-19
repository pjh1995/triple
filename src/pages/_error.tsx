import { ErrorPage } from '@/components/templates';
import type { NextPage, NextPageContext } from 'next';
const Error: NextPage = () => <ErrorPage />;

export default Error;

Error.getInitialProps = async (ctx: NextPageContext) => {
  const { res, err } = ctx;
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
