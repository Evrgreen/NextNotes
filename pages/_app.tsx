import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/Layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</>
	);
};

export default MyApp;
