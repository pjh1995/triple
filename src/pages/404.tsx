import { ErrorPage } from '@/components/templates';
import type { NextPage } from 'next';

const Custom404: NextPage = () => <ErrorPage statusCode={404} title={'Page Not Found'} />;

export default Custom404;
