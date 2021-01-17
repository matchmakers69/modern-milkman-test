import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from '../common.styles';

const BackButton = ({ text, onClick }) => {
  return (
    <ButtonWrapper>
      <Button isHome onClick={onClick} type="button">
        {text}
      </Button>
    </ButtonWrapper>
  );
};

BackButton.propTypes = {};

export default BackButton;
