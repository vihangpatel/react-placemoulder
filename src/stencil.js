import React, { useRef, useEffect, useMemo } from 'react';

import { mouldParagraph, createObjectFromSchema } from './utils';

import './stencil.css';

export const Stencil = ({ children }) => {
  const currentRef = useRef(null);

  useEffect(() => {
    mouldParagraph(Array.prototype.slice.call(currentRef.current.querySelectorAll('.stensil-para')));
  }, []);

  return (
    <div className="enable-stensil" ref={currentRef}>
      {children}
    </div>
  );
};

export const StencilList = ({ data, length, schema, Component }) => {
  // Create dummy props if config is provided
  const dummyProps = data || createObjectFromSchema(schema);

  // Memoize fakeArray based on length
  const fakeArray = useMemo(
    () => Array.apply(null, Array(length)),
    [length]
  );

  return fakeArray.map((_, index) => (
    <Stencil key={index}>
      <Component {...dummyProps} />
    </Stencil>
  ));
};
