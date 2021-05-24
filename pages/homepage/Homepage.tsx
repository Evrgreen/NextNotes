import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
type HomepageProps = PropTypes.InferProps<typeof propTypes>;
const Homepage = ({}: HomepageProps) => {
	return (
		<>
			<h1>NextNotes</h1>
			<h2>A NEXT-LEVEL NOTE APP MADE IN NEXT.JS</h2>
			<button>LOGIN</button>
			<button>Sign Up</button>
		</>
	);
};
export default Homepage;
Homepage.propTypes = propTypes;
