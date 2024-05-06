"use strict";
const axios = require("axios");

import * as templates from "./templates";
import * as Utils from "./Utils";

export namespace PromoStandards {
  interface PromoStandardsAPICallParams {}
  interface Method<MethodArguments extends PromoStandardsAPICallParams> {
    (params: MethodArguments): Promise<any>;
  }

  /** Base Attributes for a PromoStandards Client */
  interface PromoStandardsBaseAttributes {
    id?: string;
    password?: string;
    endpoints?: ServiceEndpointType[];
    format?: ResponseFormatType;
  }

  /** Type of service check */
  type ServiceType =
    | "Inventory"
    | "Invoice"
    | "MediaContent"
    | "OrderShipmentNotification"
    | "OrderStatus"
    | "ProductData"
    | "ProductPricingAndConfiguration"
    | "PurchaseOrder";

  /** Service endpoint object signature check */
  type ServiceEndpointType = {
    type: ServiceType;
    version: string; // @todo create a SemVer type
    url: string; // @todo create a valid URL type
  };

  /** PromoStandards method name check */
  type MethodType =
    | "getFilterValues"
    | "getInventoryLevels"
    | "getMediaContent"
    | "getMediaDateModified"
    | "getOrderShipmentNotification"
    | "getOrderStatusDetails"
    | "getOrderStatusTypes"
    | "getProduct"
    | "getProductDateModified"
    | "getProductSellable"
    | "getProductCloseOut"
    | "getAvailableLocations"
    | "getDecorationColors"
    | "getFobPoints"
    | "getAvailableCharges"
    | "GetConfigurationAndPricing"
    | "getSupportedOrderTypes"
    | "sendPO";

  type ProductDataGetProductArguments = PromoStandardsBaseAttributes & {
    productId: string;
    localizationCountry: string;
    localizationLanguage: string;
    partId?: string;
    colorName?: string;
    ApparelSizeArray?: any[];
  };

  type ResponseFormatType = "xml" | "json";

  /** Class representing a PromoStandards Client */
  export class Client {
    public id?: string;
    public password?: string;
    public endpoints?: ServiceEndpointType[];

    public format: ResponseFormatType = "json";

    /**
     * Create a new PromoStandards Client
     * @param {string} options.id - Username provided by the supplier
     * @param {string} options.password - Password provided by the supplier
     * @param {Array.<ServiceEndpointType>} options.endpoints - List of endpoint objects
     */
    constructor(options: PromoStandardsBaseAttributes = {}) {
      this.id = options.id;
      this.password = options.password;
      this.endpoints = options.endpoints;
      this.format = options.format || this.format;
    }

    /**
     * Get the service endpoint, if present.
     * @param {ServiceName} serviceName Service Endpoint Name
     */
    public getEndpoint(serviceName: ServiceType): ServiceEndpointType {
      let endpoint;
      if (this.endpoints && this.endpoints.length > 0) {
        endpoint = this.endpoints.find(
          (x) => x.type === serviceName
        ) as ServiceEndpointType;
        if (endpoint) return endpoint;
      }
      throw new ReferenceError(`'${serviceName}' endpoint is undefined`);
    }

    /**
     * Generic method to use for all PS methods
     * @param {string} serviceAndMethodName - Identifies the PromoStandards service type and method name
     * @param params - Arguments required for the given PromoStandards method
     * @todo validate arguments based on service/method
     * */
    public promoStandardsAPIRequest(
      serviceAndMethodName: string,
      params: any
    ): Promise<any> {
      return new Promise((resolve, reject) => {
        const [service, method] = serviceAndMethodName.split(".");
        const endpoint = this.getEndpoint(service as ServiceType);

        /** @todo fix type check*/
        const soapTemplateIndex: {
          [index: string]: any;
        } = templates;

        const requestXML: string = soapTemplateIndex[method](
          Object.assign(
            {
              id: this.id,
              password: this.password,
              wsVersion: endpoint.version,
              majorVersion: Utils.majorVersion(endpoint.version),
            },
            params
          )
        );

        axios
          .post(endpoint.url, requestXML, {
            headers: {
              "Content-Type": "text/xml",
              SOAPAction: method,
            },
          })
          .then((result: any) => {
            this.format === "json"
              ? resolve(Utils.convertXMLtoJSON(result.data))
              : resolve(result.data);
          })
          .catch((error: Error) => reject(error));
      });
    }

    /** @todo Add TypeChecking for all methods. */
    public readonly productData = {
      getProduct: this.promoStandardsAPIRequest.bind(
        this,
        "ProductData.getProduct"
      ),
      getProductSellable: this.promoStandardsAPIRequest.bind(
        this,
        "ProductData.getProductSellable"
      ),
      getProductDateModified: this.promoStandardsAPIRequest.bind(
        this,
        "ProductData.getProductDateModified"
      ),
      getProductCloseOut: this.promoStandardsAPIRequest.bind(
        this,
        "ProductData.getProductCloseOut"
      ),
    };

    public readonly mediaContent = {
      getMediaContent: this.promoStandardsAPIRequest.bind(
        this,
        "MediaContent.getMediaContent"
      ),
      getMediaDateModified: this.promoStandardsAPIRequest.bind(
        this,
        "MediaContent.getMediaDateModified"
      ),
    };

    public readonly inventory = {
      getInventoryLevels: this.promoStandardsAPIRequest.bind(
        this,
        "Inventory.getInventoryLevels"
      ),
      getFilterValues: this.promoStandardsAPIRequest.bind(
        this,
        "Inventory.getFilterValues"
      ),
    };

    public readonly orderStatus = {
      getOrderStatusDetails: this.promoStandardsAPIRequest.bind(
        this,
        "OrderStatus.getOrderStatusDetails"
      ),
      getOrderStatusTypes: this.promoStandardsAPIRequest.bind(
        this,
        "OrderStatus.getOrderStatusTypes"
      ),
    };

    public readonly orderShipmentNotification = {
      getOrderShipmentNotification: this.promoStandardsAPIRequest.bind(
        this,
        "OrderShipmentNotification.getOrderShipmentNotification"
      ),
    };

    public readonly invoice = {
      getInvoices: this.promoStandardsAPIRequest.bind(
        this,
        "Invoice.getInvoices"
      ),
    };

    public readonly productPricingAndConfiguration = {
      getAvailableLocations: this.promoStandardsAPIRequest.bind(
        this,
        "ProductPricingAndConfiguration.getAvailableLocations"
      ),
      getDecorationColors: this.promoStandardsAPIRequest.bind(
        this,
        "ProductPricingAndConfiguration.getDecorationColors"
      ),
      getFobPoints: this.promoStandardsAPIRequest.bind(
        this,
        "ProductPricingAndConfiguration.getFobPoints"
      ),
      getAvailableCharges: this.promoStandardsAPIRequest.bind(
        this,
        "ProductPricingAndConfiguration.getAvailableCharges"
      ),
      getConfigurationAndPricing: this.promoStandardsAPIRequest.bind(
        this,
        "ProductPricingAndConfiguration.getConfigurationAndPricing"
      ),
    };

    public readonly purchaseOrder = {
      sendPO: this.promoStandardsAPIRequest.bind(this, "PurchaseOrder.sendPO"),
    };
  }
}
