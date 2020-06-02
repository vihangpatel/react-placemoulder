"use strict";

exports.__esModule = true;
exports.mouldParagraph = exports.createObjectFromSchema = void 0;
var REAPEAT_CHAR = ' .';

var noop = function noop() {};

var createObjectFromSchema = function createObjectFromSchema(schema) {
  var outputObject = {};

  for (var key in schema) {
    var val = schema[key];
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

exports.createObjectFromSchema = createObjectFromSchema;

var mouldParagraph = function mouldParagraph(pTags) {
  return pTags.map(function (pTag) {
    return pTag.innerHTML = Array.apply(null, Array(4)).reduce(function (resultStr, item) {
      return resultStr + "<span class=\"stensil\">" + ' .'.repeat(50) + "</span>";
    }, '') + "<span class=\"stensil half\"/>";
  });
};

exports.mouldParagraph = mouldParagraph;