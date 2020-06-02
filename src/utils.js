const REAPEAT_CHAR = ' .';

export const createObjectFromSchema = (schema) => {
  const outputObject = {};

  for (const key in schema) {
    const val = schema[key];
    if (val && typeof val === 'object') {
      // Recursively create object from schema object
      outputObject[key] = createObjectFromSchema(val);
    } else {
      outputObject[key] = REAPEAT_CHAR.repeat(+val);
    }
  }

  return outputObject;
};

export const mouldParagraph = (pTags) =>
  pTags.map(
    (pTag) =>
      (pTag.innerHTML = `${[...Array(3)].reduce(
        (resultStr, item) =>
          `${resultStr}<span class="stensil">${' .'.repeat(50)}</span>`,
        ''
      )}<span class="stensil half"/>`)
  );
