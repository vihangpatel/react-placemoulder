import React, { useRef, useEffect, useMemo } from 'react';
import { mouldParagraph, createObjectFromSchema } from './utils';
import './index.css';
export const Stencil = ({
  children
}) => {
  const currentRef = useRef(null);
  useEffect(() => {
    mouldParagraph([...currentRef.current.querySelectorAll('.stensil-para')]);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "enable-stensil",
    ref: currentRef
  }, children);
};
export const StencilList = ({
  data,
  length,
  schema,
  Component
}) => {
  // Create dummy props if config is provided
  const dummyProps = data || createObjectFromSchema(schema); // Memoize fakeArray based on length

  const fakeArray = useMemo(() => [...Array(length)], [length]);
  return fakeArray.map((_, index) => /*#__PURE__*/React.createElement(Stencil, {
    key: index
  }, /*#__PURE__*/React.createElement(Component, dummyProps)));
};