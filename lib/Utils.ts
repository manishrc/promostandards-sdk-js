'use strict';
const xml2js = require('xml2js');

export const ensureArray = (obj: any) => (obj instanceof Array ? obj : [obj]);

export const skipLevel = (obj: any) => {
  let key: string;
  if (obj instanceof Object) {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) return obj[key];
    }
  }
  return obj;
};

export const replaceArrayTagsWithArrays = (obj: any) => {
  let key;
  if (obj instanceof Object) {
    for (key in obj) {
      if (obj.hasOwnProperty(key) && /.*Array/.test(key)) {
        obj[key] = ensureArray(skipLevel(obj[key]));
      }
      replaceArrayTagsWithArrays(obj[key]);
    }
  }
  return obj;
};

export const convertXMLtoJSON = (xml: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(
      xml,
      {
        explicitArray: false, // explicitArray sets an array only if there are multiple records
        ignoreAttrs: true,
        tagNameProcessors: [xml2js.processors.stripPrefix],
        valueProcessors: [
          xml2js.processors.parseNumbers,
          xml2js.processors.parseBooleans,
        ],
      },
      (err: any, data: any) => {
        if (err) {
          reject(err);
        }
        resolve(replaceArrayTagsWithArrays(data));
      },
    );
  });
};
