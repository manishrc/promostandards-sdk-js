const pug = require("pug");

// Inventory
// getInventoryLevels()
export const getInventoryLevels: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/Inventory/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/Inventory/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/Inventory/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/Inventory/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/Invoice/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/Invoice/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/MediaService/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/MediaService/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/MediaService/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/MediaService/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/OrderShipmentNotificationService/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/OrderShipmentNotificationService/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/OrderStatusService/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/OrderStatusService/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/OrderStatusService/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/OrderStatusService/" + majorVersion + "/SharedObjects/"
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
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/SharedObjects/"
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
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/SharedObjects/"
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
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/SharedObjects/"
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
    xmlns:ns="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/"
    xmlns:shar="http://www.promostandards.org/WSDL/ProductDataService/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/SharedObjects/"
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
  xmlns:ns="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PricingAndConfiguration/" + majorVersion + "/SharedObjects/"
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

// PurchaseOrder
// getSupportedOrderTypes()

// @todo sendPO()
export const sendPO: () => string = pug.compile(
  `soapenv:Envelope(
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ns="http://www.promostandards.org/WSDL/PO/" + majorVersion + "/"
  xmlns:shar="http://www.promostandards.org/WSDL/PO/" + majorVersion + "/SharedObjects/"
)
  soapenv:Header/
  soapenv:Body
    ns:SendPORequest
      shar:wsVersion #{wsVersion}
      shar:id #{id}
      if password
        shar:password #{password}
      ns:PO
        ns:orderType #{orderType}
        ns:orderNumber #{orderNumber}
        ns:orderDate #{orderDate}
        if lastModified
          ns:lastModified #{lastModified}
        ns:totalAmount #{totalAmount}
        if paymentTerms
          ns:paymentTerms #{paymentTerms}
        ns:rush #{rush}
        shar:currency #{currency}
        if DigitalProof
          shar:DigitalProof
            shar:DigitalProofAddressArray
              each DigitalProofAddress in DigitalProof.DigitalProofAddressArray
                shar:DigitalProofAddress
                  shar:type #{DigitalProofAddress.type}
                  shar:email #{DigitalProofAddress.email}
                  shar:lineItemGroupingId #{DigitalProofAddress.lineItemGroupingId}
            shar:required #{required}
        if OrderContactArray
          ns:OrderContactArray
          each OrderContact in OrderContactArray
            shar:Contact
              if OrderContact.accountName
                shar:accountName #{OrderContact.accountName}
              if OrderContact.accountNumber
                shar:accountNumber #{OrderContact.accountNumber}
              shar:contactType #{OrderContact.contactType}
              if OrderContact.ContactDetails
                shar:ContactDetails
                  if OrderContact.ContactDetails.attentionTo
                    shar:attentionTo #{OrderContact.ContactDetails.attentionTo}
                  if OrderContact.ContactDetails.companyName
                    shar:companyName #{OrderContact.ContactDetails.companyName}
                  if OrderContact.ContactDetails.address1
                    shar:address1 #{OrderContact.ContactDetails.address1}
                  if OrderContact.ContactDetails.address2
                    shar:address2 #{OrderContact.ContactDetails.address2}
                  if OrderContact.ContactDetails.address3
                    shar:address3 #{OrderContact.ContactDetails.address3}
                  if OrderContact.ContactDetails.city
                    shar:city #{OrderContact.ContactDetails.city}
                  if OrderContact.ContactDetails.region
                    shar:region #{OrderContact.ContactDetails.region}
                  if OrderContact.ContactDetails.postalCode
                    shar:postalCode #{OrderContact.ContactDetails.postalCode}
                  if OrderContact.ContactDetails.country
                    shar:country #{OrderContact.ContactDetails.country}
                  if OrderContact.ContactDetails.email
                    shar:email #{OrderContact.ContactDetails.email}
                  if OrderContact.ContactDetails.phone
                    shar:phone #{OrderContact.ContactDetails.phone}
                  if OrderContact.ContactDetails.comments
                    shar:comments #{OrderContact.ContactDetails.comments}
        ns:ShipmentArray
          each Shipment in ShipmentArray
            shar:Shipment
              shar:shipReferences #{Shipment.shipReferences}
              if Shipment.comments
                shar:comments #{Shipment.comments}
              if Shipment.ThirdPartyAccount
                shar:ThirdPartyAccount
                  shar:accountName #{Shipment.ThirdPartyAccount.accountName}
                  shar:accountNumber #{Shipment.ThirdPartyAccount.accountNumber}
                  shar:ContactDetails
                    if Shipment.ThirdPartyAccount.ContactDetails.attentionTo
                      shar:attentionTo #{Shipment.ThirdPartyAccount.ContactDetails.attentionTo}
                    if Shipment.ThirdPartyAccount.ContactDetails.companyName
                      shar:companyName #{Shipment.ThirdPartyAccount.ContactDetails.companyName}
                    if Shipment.ThirdPartyAccount.ContactDetails.address1
                      shar:address1 #{Shipment.ThirdPartyAccount.ContactDetails.address1}
                    if Shipment.ThirdPartyAccount.ContactDetails.address2
                      shar:address2 #{Shipment.ThirdPartyAccount.ContactDetails.address2}
                    if Shipment.ThirdPartyAccount.ContactDetails.address3
                      shar:address3 #{Shipment.ThirdPartyAccount.ContactDetails.address3}
                    if Shipment.ThirdPartyAccount.ContactDetails.city
                      shar:city #{Shipment.ThirdPartyAccount.ContactDetails.city}
                    if Shipment.ThirdPartyAccount.ContactDetails.region
                      shar:region #{Shipment.ThirdPartyAccount.ContactDetails.region}
                    if Shipment.ThirdPartyAccount.ContactDetails.postalCode
                      shar:postalCode #{Shipment.ThirdPartyAccount.ContactDetails.postalCode}
                    if Shipment.ThirdPartyAccount.ContactDetails.country
                      shar:country #{Shipment.ThirdPartyAccount.ContactDetails.country}
                    if Shipment.ThirdPartyAccount.ContactDetails.email
                      shar:email #{Shipment.ThirdPartyAccount.ContactDetails.email}
                    if Shipment.ThirdPartyAccount.ContactDetails.phone
                      shar:phone #{Shipment.ThirdPartyAccount.ContactDetails.phone}
                    if Shipment.ThirdPartyAccount.ContactDetails.comments
                      shar:comments #{Shipment.ThirdPartyAccount.ContactDetails.comments}
        `
);
