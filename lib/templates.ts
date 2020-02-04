const pug = require("pug");

// Inventory
// getInventoryLevels()
export const getInventoryLevels: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/Inventory/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/Inventory/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetInventoryLevelsRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:productId #{productId}
      if productIDtype
        shar:productIDtype
      if filters
        shar:Filter
          if filters.partIdArray
            shar:partIdArray
              each partId in filters.partIdArray
                shar:partId #{partId}
          if filters.LabelSizeArray
            shar:LabelSizeArray
              each labelSize in filters.LabelSizeArray
                shar:labelSize #{labelSize}
          if filters.PartColorArray
            shar:PartColorArray
              each partColor in filters.PartColorArray
                shar:partColor #{partColor}`
);

// getFilterValues()
export const getFilterValues: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/Inventory/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/Inventory/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetFilterValuesRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:productId #{productId}`
);

// Invoice
// getInvoices()
export const getInvoices: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/Invoice/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/Invoice/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetInvoicesRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:productId #{productId}
      shar:queryType #{queryType}
      if referenceNumber
        shar:referenceNumber #{referenceNumber}
      if requestedDate
        shar:requestedDate #{requestedDate}
      if availableTimeStamp
        shar:availableTimeStamp #{availableTimeStamp}`
);

// MediaContent
// getMediaContent()
export const getMediaContent: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/MediaService/1.0.0/"
  xmlns:shar="http://www.promostandards.org/WSDL/MediaService/1.0.0/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetMediaContentRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      if cultureName
        shar:cultureName #{cultureName}
      shar:mediaType #{mediaType}
      shar:productId #{productId}
      if partId
        shar:partId #{partId}
      if classType
        ns:classType #{classType}`
);

// getMediaDateModified()
export const getMediaDateModified: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/MediaService/1.0.0/"
  xmlns:shar="http://www.promostandards.org/WSDL/MediaService/1.0.0/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetMediaDateModifiedRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      if cultureName
        shar:cultureName #{cultureName}
      if changeTimeStamp
        shar:changeTimeStamp #{changeTimeStamp}`
);

// OrderShipmentNotification
// getOrderShipmentNotification()
export const getOrderShipmentNotification: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/OrderShipmentNotificationService/1.0.0/"
  xmlns:shar="http://www.promostandards.org/WSDL/OrderShipmentNotificationService/1.0.0/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetMediaDateModifiedRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      ns:queryType #{queryType}
      if referenceNumber
        ns:referenceNumber #{referenceNumber}
      if shipmentDateTimeStamp
        ns:shipmentDateTimeStamp #{shipmentDateTimeStamp}`
);

// OrderStatus
// getOrderStatusDetails()
export const getOrderStatusDetails: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/OrderStatusService/1.0.0/"
  xmlns:shar="http://www.promostandards.org/WSDL/OrderStatusService/1.0.0/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetOrderStatusDetailsRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      ns:queryType #{queryType}
      if referenceNumber
        ns:referenceNumber #{referenceNumber}
      ns:statusTimeStamp #{statusTimeStamp}`
);

// getOrderStatusTypes()
export const getOrderStatusTypes: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/OrderStatusService/1.0.0/"
  xmlns:shar="http://www.promostandards.org/WSDL/OrderStatusService/1.0.0/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetOrderStatusTypesRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}`
);

// ProductData
// getProduct()
/** @todo Add support for ApparelSizeArray */
export const getProduct: () => string = pug.compile(
  `soapenv:Envelope(
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/SharedObjects/"
  )
  soapenv:Header/
  soapenv:Body
    ns:GetProductRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:localizationCountry #{localizationCountry}
      shar:localizationLanguage #{localizationLanguage}
      shar:productId #{productId}
      if partId
        shar:partId #{partId}
      if colorName
        shar:colorName #{colorName}`
);

// getProductDateModified()

export const getProductDateModified: () => string = pug.compile(
  `soapenv:Envelope(
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/SharedObjects/"
  )
  soapenv:Header/
  soapenv:Body
    ns:GetProductDateModifiedRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:productId #{productId}
      if partId
        shar:partId #{partId}
      shar:changeTimeStamp #{changeTimeStamp}`
);

// getProductCloseOut()
export const getProductCloseOut: () => string = pug.compile(
  `soapenv:Envelope(
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/SharedObjects/"
  )
  soapenv:Header/
  soapenv:Body
    ns:GetProductCloseOutRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}`
);

// getProductSellable()
export const getProductSellable: () => string = pug.compile(
  `soapenv:Envelope(
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/1.0.0/SharedObjects/"
  )
  soapenv:Header/
  soapenv:Body
    ns:GetProductSellableRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      if productId
        shar:productId #{productId}
      if partId
        shar:partId #{partId}
      shar:isSellable #{isSellable}`
);

// ProductPricingAndConfiguration
// getAvailableLocations()
export const getAvailableLocations: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetAvailableLocationsRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:productId #{productId}
      shar:localizationCountry #{localizationCountry}
      shar:localizationLanguage #{localizationLanguage}`
);

// getDecorationColors()
export const getDecorationColors: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetDecorationColorsRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:locationId #{locationId}
      shar:productId #{productId}
      if decorationId
        shar:decorationId #{decorationId}
      shar:localizationCountry #{localizationCountry}
      shar:localizationLanguage #{localizationLanguage}`
);

// getFobPoints()
export const getFobPoints: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetFobPointsRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:productId #{productId}
      shar:localizationCountry #{localizationCountry}
      shar:localizationLanguage #{localizationLanguage}`
);
// getAvailableCharges()
export const getAvailableCharges: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetAvailableChargesRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      if productId
        shar:productId #{productId}
      shar:localizationCountry #{localizationCountry}
      shar:localizationLanguage #{localizationLanguage}`
);

// getConfigurationAndPricing()
export const getConfigurationAndPricing: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + wsVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:GetConfigurationAndPricingRequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      shar:productId #{productId}
      if partId
        shar:partId #{partId}
      shar:currency #{currency}
      shar:fobId #{fobId}
      shar:priceType #{priceType}
      shar:localizationCountry #{localizationCountry}
      shar:localizationLanguage #{localizationLanguage}
      shar:configurationType #{configurationType}`
);
