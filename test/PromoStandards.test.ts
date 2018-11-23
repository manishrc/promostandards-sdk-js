import { PromoStandards } from '../lib/index';

describe('PromoStandardsClient', () => {
  describe('Constructor()', () => {
    it('should accept supplier PS details', () => {
      const supplierClient = new PromoStandards.Client({
        id: 'aliquid',
        password: 'vitae',
        endpoints: [
          {
            type: 'Inventory',
            version: '1.0.0',
            url: 'https://test.dev/Inventory',
          },
          {
            type: 'Invoice',
            version: '1.0.0',
            url: 'https://test.dev/Invoice',
          },
        ],
      });

      expect(supplierClient.id).toBe('aliquid');
      expect(supplierClient.password).toBe('vitae');
      expect(supplierClient.endpoints).toContainEqual({
        type: 'Inventory',
        version: '1.0.0',
        url: 'https://test.dev/Inventory',
      });
    });

    it('should have arguments optional', () => {
      const supplierClient = new PromoStandards.Client();
      expect(supplierClient).toBeInstanceOf(PromoStandards.Client);
    });
  });
  describe('getEndpoint()', () => {
    const supplierClient = new PromoStandards.Client({
      id: 'aliquid',
      password: 'vitae',
      endpoints: [
        {
          type: 'Inventory',
          version: '1.0.0',
          url: 'https://test.dev/Inventory',
        },
        {
          type: 'Invoice',
          version: '1.0.0',
          url: 'https://test.dev/Invoice',
        },
      ],
    });

    it('should find requested endpoint', () => {
      expect(supplierClient.getEndpoint('Inventory')).toMatchObject({
        type: 'Inventory',
        version: '1.0.0',
        url: 'https://test.dev/Inventory',
      });
    });

    it('should throw an exception if requested endpoint is not found', () => {
      expect(() => {
        supplierClient.getEndpoint('MediaContent');
      }).toThrow("'MediaContent' endpoint is undefined");
    });
  });
  describe('promoStandardsAPIRequest()', () => {
    const supplierClient = new PromoStandards.Client({
      id: 'aliquid',
      password: 'vitae',
      endpoints: [
        {
          type: 'ProductData',
          version: '1.0.0',
          url: 'https://test.dev/ProductData',
        },
      ],
    });
    it('should return a Promise', () => {
      return expect(
        supplierClient.promoStandardsAPIRequest('productData.getProduct', {
          productId: '5790',
          localizationCountry: 'US',
          localizationLanguage: 'en',
        }),
      ).toBeInstanceOf(Promise);
    });
  });
  describe('ProductData', () => {
    describe('getProduct()', () => {
      const supplierClient = new PromoStandards.Client({
        id: 'aliquid',
        password: 'vitae',
        endpoints: [
          {
            type: 'ProductData',
            version: '1.0.0',
            url: 'https://test.dev/ProductData',
          },
        ],
      });

      it('to exist', () => {
        expect(supplierClient.productData.getProduct).toBeDefined();
      });
      it('should return a promise, by default', () => {
        return expect(
          supplierClient.productData.getProduct({
            productId: 'DELTA1',
            localizationCountry: 'US',
            localizationLanguage: 'en',
          }),
        ).toBeInstanceOf(Promise);
      });
    });
  });
});
