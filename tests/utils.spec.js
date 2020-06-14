import {
  mouldParagraph,
  createDummyArray,
  createObjectFromSchema,
} from '../src/utils';

describe('Test utils', () => {
  describe('should test createObjectFromSchema', () => {
    it('should create object out schema with different supported data types', () => {
      const schema = {
        name: 10,
        address: {
          houseNo: '4',
          street: 80,
          locality: 20,
          country: 12,
          state: 12,
        },
        pin: null,
        resident: true,
        onSelect: (item) => item,
      };

      expect(createObjectFromSchema(schema)).toMatchSnapshot();
    });
  });

  describe('should test mouldParagraph', () => {
    it('should create dummy paragraph', () => {
      const paragraph = mouldParagraph([{}, {}, {}, {}]).join(',');
      expect(paragraph).toMatchSnapshot();
    });
  });

  describe('should test createDummyArray', () => {
    it('should create dummy array', () => {
      const array = createDummyArray(3);
      expect(array).toEqual([0, 1, 2]);
    });
  });
});
