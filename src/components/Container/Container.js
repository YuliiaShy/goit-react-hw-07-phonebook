import React from 'react';
import PropTypes from 'prop-types';
import { Div } from './Container.styled';

function Container({ children }) {
  return (
    <Div>
      {children}
    </Div>
  );
}
  
Container.propType = {
  children: PropTypes.object.isRequired,
};

export default Container;