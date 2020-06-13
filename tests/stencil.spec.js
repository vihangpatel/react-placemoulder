import React from 'react';

import DummyComponent, { props } from './dummy-component';

import { Stencil, StencilList, StencilWrapper } from '../src';

describe('Test react-placemoulder', () => {
  describe('Test <Stencil />', () => {
    it('should render base structure', () => {
      const wrapper = mount(
        <Stencil>
          <DummyComponent />
        </Stencil>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Test <StencilList />', () => {
    it('should test base structure', () => {
      const wrapper = mount(
        <StencilList
          length={3}
          Component={DummyComponent}
          schema={{ name: 12, lastSeen: 12, lastChat: 72 }}
        >
          <DummyComponent data={props} />
          <DummyComponent data={props} />
        </StencilList>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render empty shell if Component is not passed', () => {
      const wrapper = mount(
        <StencilList
          length={3}
          schema={{ name: 12, lastSeen: 12, lastChat: 72 }}
        ></StencilList>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Test <StencilWrapper />', () => {
    it('should render base structure', () => {
      const wrapper = mount(
        <StencilWrapper repeat={3} className="vertical-list">
          <DummyComponent data={props} />
        </StencilWrapper>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
