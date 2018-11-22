export namespace PromoStandards {
  interface Method<MethodArguments> {
    (params:MethodArguments, options?:string): Promise<any>;
  }
  /** Base Attributes for a PromoStandards Client */
  interface PromoStandardsBaseAttributes {
    id?: string;
    password?: string;
    endpoints?: ServiceEndpointType[];
  }

  /** Type of service check */
  type ServiceType =
    | 'Inventory'
    | 'Invoice'
    | 'MediaContent'
    | 'OrderShipmentNotification'
    | 'OrderStatus'
    | 'ProductData'
    | 'ProductPricingAndConfiguration'
    | 'PurchaseOrder';

  /** Service endpoint object signature check */
  type ServiceEndpointType = {
    type: ServiceType;
    version: string; // @todo create a SemVer type
    url: string; // @todo create a valid URL type
  };

  /** PromoStandards method name check */
  type MethodType =
    | 'getFilterValues'
    | 'getInventoryLevels'
    | 'getMediaContent'
    | 'getMediaDateModified'
    | 'getOrderShipmentNotification'
    | 'getOrderStatusDetails'
    | 'getOrderStatusTypes'
    | 'getProduct'
    | 'getProductDateModified'
    | 'getProductSellable'
    | 'getAvailableLocations'
    | 'getDecorationColors'
    | 'getFobPoints'
    | 'getAvailableCharges'
    | 'GetConfigurationAndPricing'
    | 'getSupportedOrderTypes'
    | 'sendPO';

  interface ProductDataGetProductArguments {
    productId: string;
    localizationCountry: string;
    localizationLanguage: string;
    partId?: string;
    colorName?: string;
    ApparelSizeArray?: any[];
  }

  /** Class representing a PromoStandards Client */
  export class Client {
    public id?: string;
    public password?: string;
    public endpoints?: ServiceEndpointType[];

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
    }

    /**
     * Get the service endpoint, if present.
     * @param {ServiceName} serviceName Service Endpoint Name
     */
    public getEndpoint(serviceName: ServiceType): ServiceEndpointType {
      let endpoint;
      if (this.endpoints && this.endpoints.length > 0) {
        endpoint = this.endpoints.find(
          x => x.type === serviceName,
        ) as ServiceEndpointType;
      }
      if (endpoint) return endpoint;
      throw new ReferenceError(`'${serviceName}' endpoint is undefined`);
    }

    /**
     * Generic method to use for all PS methods
     * @param {string} methodName - Identifies the PromoStandards service time and method name
     * @param params - Arguments required for the given PromoStandards method
     * @todo validate arguments based on service/method
     * @todo pick template based on service/method
     * @todo render request using provided options
     * @todo make request
     * @todo return response
     * */
    public promoStandardsAPIRequest(
      methodName: string,
      params: {},
    ): Promise<any> {
      return new Promise((resolve, reject) => {
        const [service, method] = methodName.split('.');
        const endpoint = this.getEndpoint(service as ServiceType);
        resolve(endpoint);
      });
    }

    public readonly productData = {
      getProduct: (this.promoStandardsAPIRequest.bind(
        this,
        'productData.getProduct',
      )) as Method<ProductDataGetProductArguments>,
    };
  }
}
