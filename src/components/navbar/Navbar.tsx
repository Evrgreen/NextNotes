import PropTypes from 'prop-types';
const propTypes = {};

type NavbarProps = PropTypes.InferProps<typeof propTypes>;

const Navbar = ({}: NavbarProps) => {
	return (
		<>
			<h1>NextNotes</h1>
		</>
	);
};

Navbar.propTypes = propTypes;

export default Navbar;
