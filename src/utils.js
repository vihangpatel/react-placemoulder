const REAPEAT_CHAR = ' .';

const noop = () => {};

export const createObjectFromSchema = (schema) => {
  const outputObject = {};

  for (const key in schema) {
    const val = schema[key];

    /** Ignore undefined or null keys and continue */
    if (typeof val === 'undefined' || val === null) {
      continue;
    }

    switch (typeof val) {
      case 'string':
      case 'number':
        outputObject[key] = REAPEAT_CHAR.repeat(+val);
        break;

      case 'function':
        outputObject[key] = noop;
        break;

      case 'boolean':
        outputObject[key] = val;
        break;

      case 'object':
        outputObject[key] = createObjectFromSchema(val);

      default:
        break;
    }
  }

  return outputObject;
};

export const mouldParagraph = (pTags) =>
  pTags.map(
    (pTag) =>
      (pTag.innerHTML = `${Array.apply(null, Array(4)).reduce(
        (resultStr, item) =>
          `${resultStr}<span class="stensil">${' .'.repeat(50)}</span>`,
        ''
      )}<span class="stensil half"/>`)
  );
