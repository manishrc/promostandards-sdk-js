import { PromoStandards } from "../lib/index";
const nock = require("nock");

describe("PromoStandardsClient", () => {
  describe("Constructor()", () => {
    it("should accept supplier PS details", () => {
      const supplierClient = new PromoStandards.Client({
        id: "aliquid",
        password: "vitae",
        endpoints: [
          {
            type: "Inventory",
            version: "1.0.0",
            url: "https://test.dev/Inventory"
          },
          {
            type: "Invoice",
            version: "1.0.0",
            url: "https://test.dev/Invoice"
          }
        ]
      });

      expect(supplierClient.id).toBe("aliquid");
      expect(supplierClient.password).toBe("vitae");
      expect(supplierClient.endpoints).toContainEqual({
        type: "Inventory",
        version: "1.0.0",
        url: "https://test.dev/Inventory"
      });
    });

    it("should have arguments optional", () => {
      const supplierClient = new PromoStandards.Client();
      expect(supplierClient).toBeInstanceOf(PromoStandards.Client);
    });
  });
  describe("getEndpoint()", () => {
    const supplierClient = new PromoStandards.Client({
      id: "aliquid",
      password: "vitae",
      endpoints: [
        {
          type: "Inventory",
          version: "1.0.0",
          url: "https://test.dev/Inventory"
        },
        {
          type: "Invoice",
          version: "1.0.0",
          url: "https://test.dev/Invoice"
        }
      ]
    });

    it("should find requested endpoint", () => {
      expect(supplierClient.getEndpoint("Inventory")).toMatchObject({
        type: "Inventory",
        version: "1.0.0",
        url: "https://test.dev/Inventory"
      });
    });

    it("should throw an exception if requested endpoint is not found", () => {
      expect(() => {
        supplierClient.getEndpoint("MediaContent");
      }).toThrow("'MediaContent' endpoint is undefined");
    });
  });
  describe("promoStandardsAPIRequest()", () => {
    nock("https://test.dev")
      .persist()
      .defaultReplyHeaders({ 
        "access-control-allow-origin": "*",
        "access-control-allow-headers": "SOAPAction"
      })
      .options("/ProductData")
      .reply(200);
    nock("https://test2.dev")
      .persist()
      .options("/ProductData")
      .reply((uri: any, requestBody: any, cb: (arg0: null, arg1: (string | number)[]) => void) => {
        setTimeout(() => cb(null, [200, '']), 2500)
      });

    nock("https://test.dev")
      .persist()
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .post("/ProductData")
      .reply(
        200,
        `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/SharedObjects/" xmlns:ns2="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <SOAP-ENV:Body>
          <ns2:GetProductResponse>
            <ns2:Product>
                <ns1:productId>5790</ns1:productId>
                <ns2:productName>20 Oz. Himalayan Tumbler</ns2:productName>
                <ns1:description>Stainless Steel Outer And Inner. Double Wall Construction For Insulation Of Hot Or Cold Liquids. Snap-On,Spill-Resistant Thumb-Slide Lid With Rubber Gasket. Due To Vacuum Insulation Technology, Capacity Is 18 Oz. With Lid On. Keeps Drinks Hot Or Cold Up To 6 Hours. Non-Skid Rubber Bottom. Meets FDA Requirements. BPA Free. Hand Wash Recommended.</ns1:description>
                <ns2:ProductMarketingPointArray>
                  <ns2:ProductMarketingPoint>
                      <ns2:pointType>Highlight</ns2:pointType>
                      <ns2:pointCopy>Stainless Steel Outer And Inner.</ns2:pointCopy>
                  </ns2:ProductMarketingPoint>
                </ns2:ProductMarketingPointArray>
            </ns2:Product>
          </ns2:GetProductResponse>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>`
      );

    const supplierClient = new PromoStandards.Client({
      id: "aliquid",
      password: "vitae",
      endpoints: [
        {
          type: "ProductData",
          version: "1.0.0",
          url: "https://test.dev/ProductData"
        }
      ]
    });

    const supplierWithTimeoutClient = new PromoStandards.Client({
      id: "aliquid",
      password: "vitae",
      axiosConfig: {
        timeout: 1000,
      },
      endpoints: [
        {
          type: "ProductData",
          version: "1.0.0",
          url: "https://test2.dev/ProductData"
        }
      ]
    });

    it("should return a Promise", () => {
      return expect(
        supplierClient.promoStandardsAPIRequest("ProductData.getProduct", {
          productId: "5790",
          localizationCountry: "US",
          localizationLanguage: "en"
        })
      ).toBeInstanceOf(Promise);
    });

    it("should return a timeout error", () => {
      return expect(
        supplierWithTimeoutClient.promoStandardsAPIRequest("ProductData.getProduct", {
          productId: "5790",
          localizationCountry: "US",
          localizationLanguage: "en"
        })
      ).rejects.toThrow('timeout of 1000ms exceeded');
    });

    it("should return a JSON by default", async () => {
      await expect(
        supplierClient.promoStandardsAPIRequest("ProductData.getProduct", {
          productId: "5790",
          localizationCountry: "US",
          localizationLanguage: "en"
        })
      ).resolves.toEqual({
        Envelope: {
          Body: {
            GetProductResponse: {
              Product: {
                productId: 5790,
                productName: "20 Oz. Himalayan Tumbler",
                description:
                  "Stainless Steel Outer And Inner. Double Wall Construction For Insulation Of Hot Or Cold Liquids. Snap-On,Spill-Resistant Thumb-Slide Lid With Rubber Gasket. Due To Vacuum Insulation Technology, Capacity Is 18 Oz. With Lid On. Keeps Drinks Hot Or Cold Up To 6 Hours. Non-Skid Rubber Bottom. Meets FDA Requirements. BPA Free. Hand Wash Recommended.",
                ProductMarketingPointArray: [
                  {
                    pointType: "Highlight",
                    pointCopy: "Stainless Steel Outer And Inner."
                  }
                ]
              }
            }
          }
        }
      });
    });
    it("should optionally return an XML", async () => {
      supplierClient.format = "xml";
      await expect(
        supplierClient.promoStandardsAPIRequest("ProductData.getProduct", {
          productId: "5790",
          localizationCountry: "US",
          localizationLanguage: "en"
        })
      ).resolves.toMatch(/productId/);
    });
  });
});

// Inventory
describe("Inventory", () => {
  const supplierClient = new PromoStandards.Client({
    id: "aliquid",
    password: "vitae",
    endpoints: [
      {
        type: "Inventory",
        version: "1.0.0",
        url: "https://test.dev/Inventory"
      }
    ]
  });

  describe("getInventoryLevels()", () => {
    it("to exist", () => {
      expect(supplierClient.inventory.getInventoryLevels).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.inventory.getInventoryLevels({
          productId: "DELTA1",
          localizationCountry: "US",
          localizationLanguage: "en",
          productIDtype: "Supplier"
        })
      ).toBeInstanceOf(Promise);
    });
  });

  describe("getFilterValues()", () => {
    it("to exist", () => {
      expect(supplierClient.inventory.getFilterValues).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.inventory.getFilterValues({
          productId: "DELTA1"
        })
      ).toBeInstanceOf(Promise);
    });
  });
});

// Invoice
describe("Invoice", () => {
  const supplierClient = new PromoStandards.Client({
    id: "aliquid",
    password: "vitae",
    endpoints: [
      {
        type: "Invoice",
        version: "1.0.0",
        url: "https://test.dev/Invoice"
      }
    ]
  });

  describe("getInvoices()", () => {
    it("to exist", () => {
      expect(supplierClient.invoice.getInvoices).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(supplierClient.invoice.getInvoices({})).toBeInstanceOf(
        Promise
      );
    });
  });
});

// MediaContent
describe("MediaContent", () => {
  const supplierClient = new PromoStandards.Client({
    id: "aliquid",
    password: "vitae",
    endpoints: [
      {
        type: "MediaContent",
        version: "1.0.0",
        url: "https://test.dev/MediaContent"
      }
    ]
  });
  describe("getMediaContent()", () => {
    it("to exist", () => {
      expect(supplierClient.mediaContent.getMediaContent).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.mediaContent.getMediaContent({
          productId: "DELTA1",
          localizationCountry: "US",
          localizationLanguage: "en",
          productIDtype: "Supplier"
        })
      ).toBeInstanceOf(Promise);
    });
  });
  describe("getMediaDateModified()", () => {
    it("to exist", () => {
      expect(supplierClient.mediaContent.getMediaDateModified).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.mediaContent.getMediaDateModified({
          changeTimeStamp: "2019-10-10"
        })
      ).toBeInstanceOf(Promise);
    });
  });
});

// OrderShipmentNotification
describe("OrderShipmentNotification", () => {
  const supplierClient = new PromoStandards.Client({
    id: "aliquid",
    password: "vitae",
    endpoints: [
      {
        type: "OrderShipmentNotification",
        version: "1.0.0",
        url: "https://test.dev/OrderShipmentNotification"
      }
    ]
  });

  describe("getOrderShipmentNotification()", () => {
    it("to exist", () => {
      expect(
        supplierClient.orderShipmentNotification.getOrderShipmentNotification
      ).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.orderShipmentNotification.getOrderShipmentNotification({
          productId: "DELTA1",
          localizationCountry: "US",
          localizationLanguage: "en",
          productIDtype: "Supplier"
        })
      ).toBeInstanceOf(Promise);
    });
  });
});

// OrderStatus
describe("OrderStatus", () => {
  const supplierClient = new PromoStandards.Client({
    id: "aliquid",
    password: "vitae",
    endpoints: [
      {
        type: "OrderStatus",
        version: "1.0.0",
        url: "https://test.dev/OrderStatus"
      }
    ]
  });

  describe("getOrderStatusDetails()", () => {
    it("to exist", () => {
      expect(supplierClient.orderStatus.getOrderStatusDetails).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.orderStatus.getOrderStatusDetails({
          productId: "DELTA1",
          localizationCountry: "US",
          localizationLanguage: "en",
          productIDtype: "Supplier"
        })
      ).toBeInstanceOf(Promise);
    });
  });
  describe("getOrderStatusTypes()", () => {
    it("to exist", () => {
      expect(supplierClient.orderStatus.getOrderStatusTypes).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.orderStatus.getOrderStatusTypes({
          changeTimeStamp: "2019-10-10"
        })
      ).toBeInstanceOf(Promise);
    });
  });
});

// ProductData
describe("ProductData", () => {
  const supplierClient = new PromoStandards.Client({
    id: "aliquid",
    password: "vitae",
    endpoints: [
      {
        type: "ProductData",
        version: "1.0.0",
        url: "https://test.dev/ProductData"
      }
    ]
  });
  describe("getProduct()", () => {
    it("to exist", () => {
      expect(supplierClient.productData.getProduct).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productData.getProduct({
          productId: "DELTA1",
          localizationCountry: "US",
          localizationLanguage: "en"
        })
      ).toBeInstanceOf(Promise);
    });
  });

  describe("getProductDateModified()", () => {
    it("to exist", () => {
      expect(supplierClient.productData.getProductDateModified).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productData.getProductDateModified({
          productId: "DELTA1",
          localizationCountry: "US",
          localizationLanguage: "en",
          changeTimeStamp: "2019-10-10"
        })
      ).toBeInstanceOf(Promise);
    });
  });

  describe("getProductCloseOut()", () => {
    it("to exist", () => {
      expect(supplierClient.productData.getProductCloseOut).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productData.getProductCloseOut({})
      ).toBeInstanceOf(Promise);
    });
  });

  describe("getProductSellable()", () => {
    it("to exist", () => {
      expect(supplierClient.productData.getProductSellable).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productData.getProductSellable({
          productId: "DELTA1",
          localizationCountry: "US",
          localizationLanguage: "en",
          isSellable: true
        })
      ).toBeInstanceOf(Promise);
    });
  });
});

// ProductPricingAndConfiguration
describe("ProductPricingAndConfiguration", () => {
  const supplierClient = new PromoStandards.Client({
    id: "aliquid",
    password: "vitae",
    endpoints: [
      {
        type: "ProductPricingAndConfiguration",
        version: "1.0.0",
        url: "https://test.dev/ProductPricingAndConfiguration"
      }
    ]
  });
  // getAvailableLocations
  describe("getAvailableLocations()", () => {
    it("to exist", () => {
      expect(
        supplierClient.productPricingAndConfiguration.getAvailableLocations
      ).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productPricingAndConfiguration.getAvailableLocations({})
      ).toBeInstanceOf(Promise);
    });
  });

  // getDecorationColors
  describe("getDecorationColors()", () => {
    it("to exist", () => {
      expect(
        supplierClient.productPricingAndConfiguration.getDecorationColors
      ).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productPricingAndConfiguration.getDecorationColors({})
      ).toBeInstanceOf(Promise);
    });
  });
  // getFobPoints
  describe("getFobPoints()", () => {
    it("to exist", () => {
      expect(
        supplierClient.productPricingAndConfiguration.getFobPoints
      ).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productPricingAndConfiguration.getFobPoints({})
      ).toBeInstanceOf(Promise);
    });
  });
  // getAvailableCharges
  describe("getAvailableCharges()", () => {
    it("to exist", () => {
      expect(
        supplierClient.productPricingAndConfiguration.getAvailableCharges
      ).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productPricingAndConfiguration.getAvailableCharges({})
      ).toBeInstanceOf(Promise);
    });
  });
  // getConfigurationAndPricing
  describe("getConfigurationAndPricing()", () => {
    it("to exist", () => {
      expect(
        supplierClient.productPricingAndConfiguration.getConfigurationAndPricing
      ).toBeDefined();
    });
    it("should return a promise, by default", () => {
      return expect(
        supplierClient.productPricingAndConfiguration.getConfigurationAndPricing({})
      ).toBeInstanceOf(Promise);
    });
  });
});
