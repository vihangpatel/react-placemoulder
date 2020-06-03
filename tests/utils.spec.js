import { createObjectFromSchema } from '../src/utils';

describe('Test utils', () => {
  describe('should test createObjectFromSchema', () => {
    it('should create object out schema with different supported data types', () => {
      const schema = {
        name: 10,
        address: {
          houseNo: 4,
          street: 80,
          locality: 20,
          country: 12,
          state: 12,
        },
        pin: null,
        resident: true,
        onSelect: (item) => {
          console.log('item');
        },
      };

      expect(createObjectFromSchema(schema)).toMatchSnapshot();
    });
  });
});
