import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { mouldParagraph, createObjectFromSchema } from './utils';

import './stencil.css';

export const Stencil = ({ children }) => {
  const currentRef = useRef(null);

  useEffect(() => {
    mouldParagraph([...currentRef.current.querySelectorAll('.stensil-para')]);
  }, []);

  return (
    <div className="enable-stensil" ref={currentRef}>
      {children}
    </div>
  );
};

export const StencilList = ({
  data,
  length,
  schema,
  Component,
}) => {
  // Create dummy props if config is provided
  const dummyProps = data || createObjectFromSchema(schema);

  // Memoize fakeArray based on length
  const fakeArray = useMemo(() => [...Array(length)], [length]);

  return fakeArray.map((_, index) => (
    <Stencil key={index}>
      <Component {...dummyProps} />
    </Stencil>
  ));
};

Stencil.propTypes = {
  /** Children whose skeleton is required to be rendered */
  children: PropTypes.element.isRequired
}


StencilList.propTypes = {
  /** `data` is dummy or representational data which will be used to determine the dummy space occupied by the DOM element */
  data: PropTypes.object,

  /** Number of repetitive skeletons required to fill in the placeholder list */
  length: PropTypes.number.isRequired,

  /** If `data` is not provided, provide schema of the props required by `Component` prop. */
  schema: PropTypes.object,

  /** `Component` for which we want to generate skeleton on the fly  */
  Component: PropTypes.elementType.isRequired,
}