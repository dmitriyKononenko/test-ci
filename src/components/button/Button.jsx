import PropTypes from 'prop-types';

// Styles
import './button.styles.css';

const propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
}

const defaultProps = {
	disabled: false,
}

const Button = ({ children, onClick, disabled }) => {
	return (
		<button
			className={`button button-${disabled ? 'disabled' : 'primary'}`}
			onClick={!disabled ? onClick : undefined}
		>
			{children}
		</button>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;