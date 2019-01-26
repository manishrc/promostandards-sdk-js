import * as Util from '../lib/Utils';

describe('ensureArray()', () => {
  it('should always return an array', () => {
    expect(Util.ensureArray('string')).toEqual(['string']);
    expect(Util.ensureArray(['string'])).toEqual(['string']);

    expect(Util.ensureArray(1)).toEqual([1]);
    expect(Util.ensureArray([1])).toEqual([1]);

    expect(Util.ensureArray({ hello: 'world' })).toEqual([{ hello: 'world' }]);
    expect(Util.ensureArray([{ hello: 'world' }])).toEqual([
      { hello: 'world' },
    ]);

    expect(Util.ensureArray(true)).toEqual([true]);
    expect(Util.ensureArray([true])).toEqual([true]);
  });
});

describe('skipLevel()', () => {
  it('should return a child node, given an multi-level object', () => {
    expect(Util.skipLevel({ level1: { level2: 'value2' } })).toEqual({
      level2: 'value2',
    });
    expect(
      Util.skipLevel({
        level1: [{ level2a: 'value2a' }, { level2b: 'value2b' }],
      }),
    ).toEqual([{ level2a: 'value2a' }, { level2b: 'value2b' }]);
  });
  it('should return value, given an 1-level object', () => {
    expect(Util.skipLevel({ level0: 'value' })).toEqual('value');
  });
  it('should return value, not an object', () => {
    expect(Util.skipLevel('value')).toEqual('value');
  });
});

describe('replaceArrayTagsWithArrays()', () => {
  it('should replace ArrayNodes with Arrays', () => {
    const inputJSON = JSON.parse(
      `{
        "productId": "5790",
        "productName": "Himalayan Tumbler",
        "ProductMarketingPointArray": {
          "ProductMarketingPoint": {
            "pointType": "H1",
            "pointCopy": "Steel"
          }
        },
        "ProductPartArray": {
          "ProductPart": [
            {
              "partId": "5790MATBLK",
              "ShippingPackageArray": {
                "ShippingPackage": [
                  {
                    "packageType": "Box"
                  }
                ]
              }
            },
            {
              "partId": "5790GREEN",
              "ShippingPackageArray": {
                "ShippingPackage": [
                  {
                    "packageType": "Box"
                  }
                ]
              }
            }
          ]
        }
      }`,
    );
    const expectedJSON = JSON.parse(
      `{
        "productId": "5790",
        "productName": "Himalayan Tumbler",
        "ProductMarketingPointArray": [
          {
            "pointType": "H1",
            "pointCopy": "Steel"
          }
        ],
        "ProductPartArray": [
          {
            "partId": "5790MATBLK",
            "ShippingPackageArray": [
              {
                "packageType": "Box"
              }
            ]
          },
          {
            "partId": "5790GREEN",
            "ShippingPackageArray": [
              {
                "packageType": "Box"
              }
            ]
          }
        ]
      }`,
    );
    expect(Util.replaceArrayTagsWithArrays(inputJSON)).toEqual(
      expectedJSON,
    );
  });
});

describe('convertXMLtoJSON()', () => {
  it('should strip prefixes', async () => {
    expect.assertions(2);
    await expect(
      Util.convertXMLtoJSON('<SOAP-ENV:Envelope>test</SOAP-ENV:Envelope>'),
    ).resolves.toEqual(JSON.parse('{ "Envelope": "test" }'));

    await expect(
      Util.convertXMLtoJSON(
        '<ns2:GetProductResponse>test</ns2:GetProductResponse>',
      ),
    ).resolves.toEqual(JSON.parse('{ "GetProductResponse": "test" }'));
  });

  it('should parse numbers', async () => {
    expect.assertions(1);
    await expect(
      Util.convertXMLtoJSON('<Quantity>1</Quantity>'),
    ).resolves.toEqual(JSON.parse('{ "Quantity": 1 }'));
  });

  it('should parse booleans', async () => {
    expect.assertions(1);
    await expect(
      Util.convertXMLtoJSON('<OnSale>true</OnSale>'),
    ).resolves.toEqual(JSON.parse('{ "OnSale": true }'));
  });

  it('should put child nodes in array for ArrayTypes', async () => {
    expect.assertions(2);
    await expect(
      Util.convertXMLtoJSON(
        '<ProductArray><Product><Name>tumbler</Name></Product></ProductArray>',
      ),
    ).resolves.toEqual(JSON.parse('{"ProductArray": [{"Name":"tumbler"}]}'));
    await expect(
      Util.convertXMLtoJSON(
        '<ProductArray><Product><Name>tumbler1</Name></Product><Product><Name>tumbler2</Name></Product></ProductArray>',
      ),
    ).resolves.toEqual(
      JSON.parse('{"ProductArray": [{"Name":"tumbler1"}, {"Name":"tumbler2"}]}'),
    );
  });

  it('should not put child nodes in array for non-ArrayTypes', async () => {
    expect.assertions(2);
    await expect(
      Util.convertXMLtoJSON('<Product><Name>tumbler</Name></Product>'),
    ).resolves.toEqual(JSON.parse('{"Product": {"Name": "tumbler"}}'));
    await expect(
      Util.convertXMLtoJSON(
        '<Product><Name>tumbler</Name><Quantity>1</Quantity></Product>',
      ),
    ).resolves.toEqual(
      JSON.parse('{"Product": {"Name": "tumbler", "Quantity": 1}}'),
    );
  });
});
