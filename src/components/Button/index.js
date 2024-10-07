import PropTypes from 'prop-types';
import { Button as ButtonOrder } from "./styles";

function Button(props) {

    const { theme } = props;

    return (
        <ButtonOrder {...props}>{theme}</ButtonOrder>
    );
}


Button.propTypes = {
    theme: PropTypes.string,
};

export default Button;
