import PropTypes from 'prop-types';
import Head from 'next/head';
import { Navbar } from '@components/navbar';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

type LayoutProps = PropTypes.InferProps<typeof propTypes>;

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>NextNotes</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<Navbar />
			{children}
		</>
	);
};

Layout.propTypes = propTypes;

export default Layout;
