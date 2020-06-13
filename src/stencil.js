import React, { useRef, useEffect, useMemo } from 'react';

import {
  mouldParagraph,
  createObjectFromSchema,
  createDummyArray,
} from './utils';

import './stencil.css';

export const Stencil = ({ children, ...rest }) => {
  const currentRef = useRef(null);

  useEffect(() => {
    mouldParagraph(
      Array.prototype.slice.call(
        currentRef.current.querySelectorAll('.stensil-para')
      )
    );
  }, []);

  return (
    <div
      ref={currentRef}
      tabIndex="-1"
      aria-disabled="true"
      {...rest}
      className={`enable-stensil ${rest.className || ''}`.trim()}
    >
      {children}
    </div>
  );
};

export const StencilList = ({
  data,
  length,
  schema,
  Component,
  children,
  ...rest
}) => {
  // Create dummy props if config is provided
  const dummyProps = data || createObjectFromSchema(schema);

  // Memoize fakeArray based on length
  const fakeArray = useMemo(() => createDummyArray(length), [length]);

  return (
    <Stencil {...rest}>
      {Component
        ? fakeArray.map((index) => (
            <Component key={index} {...dummyProps} stencilLoading />
          ))
        : null}
    </Stencil>
  );
};

export const StencilWrapper = ({ repeat, children, ...rest }) => {
  // Memoize fakeArray based on length
  const fakeArray = useMemo(() => createDummyArray(repeat), [repeat]);

  const isOnlyChild = React.Children.only(children);

  return (
    <Stencil {...rest}>
      {fakeArray.map((key) =>
        React.cloneElement(children, { stencilLoading: true, key })
      )}
    </Stencil>
  );
};
