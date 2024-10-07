import PropTypes from 'prop-types';

import { H1 } from './styles';

function Title(first){
const {text} = first;

    return <H1 {...first}>{text}</H1>
}

Title.PropTypes = {
    text: PropTypes.string,
};

export default Title