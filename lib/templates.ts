const pug = require("pug");

// Inventory
// getInventoryLevels()
export const getInventoryLevels: () => string = pug.compile(`
if wsVersion == "1.2.1"
  soapenv:Envelope(
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ns="http://www.promostandards.org/WSDL/InventoryService/" + majorVersion + "/"
  )
    soapenv:Header/
    soapenv:Body
      ns:Request
        ns:wsVersion #{wsVersion}
        ns:id #{id}
        if password
          ns:password #{password}
        ns:productID #{productId}
        if productIDtype
          ns:productIDtype #{productIDtype}
        if filters
          ns:Filter
            if filters.partIdArray
              ns:partIdArray
                each partId in filters.partIdArray
                  ns:partId #{partId}
            if filters.LabelSizeArray
              ns:LabelSizeArray
                each labelSize in filters.LabelSizeArray
                  ns:labelSize #{labelSize}
            if filters.PartColorArray
              ns:PartColorArray
                each partColor in filters.PartColorArray
                  ns:partColor #{partColor}
else
  soapenv:Envelope(
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
                  shar:partColor #{partColor}
`);

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
      shar:password #{password}
      ns:PO
        ns:orderType #{orderType}
        ns:orderNumber #{orderNumber}
        ns:orderDate #{orderDate}
        if lastModified
          ns:lastModified #{lastModified}
        ns:totalAmount #{totalAmount}
        ns:rush #{rush}
        shar:currency #{currency}
        if digitalProof
          ns:DigitalProof
            shar:required #{digitalProof.required}
            shar:DigitalProofAddressesArray
              each address in digitalProof.addresses
                shar:DigitalProofAddress
                  shar:type #{address.type}
                  shar:email #{address.email}
                  shar:lineItemGroupingId #{address.lineItemGroupingId}
        if orderContactArray
          ns:OrderContactArray
            each contact in orderContactArray
              shar:Contact
                shar:contactType #{contact.contactType}
                shar:ContactDetails
                  if contact.attentionTo
                    shar:attentionTo #{contact.attentionTo}
                  if contact.companyName
                    shar:companyName #{contact.companyName}
                  if contact.address1
                    shar:address1 #{contact.address1}
                  if contact.address2
                    shar:address2 #{contact.address2}
                  if contact.city
                    shar:city #{contact.city}
                  if contact.region
                    shar:region #{contact.region}
                  if contact.postalCode
                    shar:postalCode #{contact.postalCode}
                  if contact.country
                    shar:country #{contact.country}
                  if contact.phone
                    shar:phone #{contact.phone}
                  if contact.email
                    shar:email #{contact.email}
                  if contact.comments
                    shar:comments #{contact.comments}
                if contact.accountName
                  shar:accountName #{contact.accountName}
                if contact.accountNumber
                  shar:accountNumber #{contact.accountNumber}
        ns:ShipmentArray
          // 1 or more repetitions:
          each shipment in shipments
            shar:Shipment
              shar:customerPickup #{shipment.customerPickup}
              shar:ShipTo
                shar:customerPickup #{shipment.customerPickup}
                shar:shipmentId #{shipment.shipTo.shipmentId}
                shar:ContactDetails
                  if shipment.shipTo.attentionTo
                    shar:attentionTo #{shipment.shipTo.attentionTo}
                  if shipment.shipTo.companyName
                    shar:companyName #{shipment.shipTo.companyName}
                  if shipment.shipTo.address1
                    shar:address1 #{shipment.shipTo.address1}
                  if shipment.shipTo.address2
                    shar:address2 #{shipment.shipTo.address2}
                  if shipment.shipTo.address3
                    shar:address3 #{shipment.shipTo.address3}
                  if shipment.shipTo.city
                    shar:city #{shipment.shipTo.city}
                  if shipment.shipTo.region
                    shar:region #{shipment.shipTo.region}
                  if shipment.shipTo.postalCode
                    shar:postalCode #{shipment.shipTo.postalCode}
                  if shipment.shipTo.country
                    shar:country #{shipment.shipTo.country}
                  if shipment.shipTo.email
                    shar:email #{shipment.shipTo.email}
                  if shipment.shipTo.phone
                    shar:phone #{shipment.shipTo.phone}
                  if shipment.shipTo.comments
                    shar:comments #{shipment.shipTo.comments}
              if shipment.thirdPartyAccount
                shar:ThirdPartyAccount
                  shar:accountName #{shipment.thirdPartyAccount.accountName}
                  shar:accountNumber #{shipment.thirdPartyAccount.accountNumber}
                  shar:ContactDetails
                    if shipment.shipTo.attentionTo
                      shar:attentionTo #{shipment.shipTo.attentionTo}
                    if shipment.shipTo.companyName
                      shar:companyName #{shipment.shipTo.companyName}
                    if shipment.shipTo.address1
                      shar:address1 #{shipment.shipTo.address1}
                    if shipment.shipTo.address2
                      shar:address2 #{shipment.shipTo.address2}
                    if shipment.shipTo.address3
                      shar:address3 #{shipment.shipTo.address3}
                    if shipment.shipTo.city
                      shar:city #{shipment.shipTo.city}
                    if shipment.shipTo.region
                      shar:region #{shipment.shipTo.region}
                    if shipment.shipTo.postalCode
                      shar:postalCode #{shipment.shipTo.postalCode}
                    if shipment.shipTo.country
                      shar:country #{shipment.shipTo.country}
                    if shipment.shipTo.email
                      shar:email #{shipment.shipTo.email}
                    if shipment.shipTo.phone
                      shar:phone #{shipment.shipTo.phone}
                    if shipment.shipTo.comments
                      shar:comments #{shipment.shipTo.comments}
              // @todo shipReferences 
              shar:packingListRequired #{shipment.packingListRequired}
              shar:blindShip #{shipment.blindShip}
              shar:allowConsolidation #{shipment.allowConsolidation}
              shar:FreightDetails
                shar:carrier #{shipment.freightDetails.carrier}
                shar:service #{shipment.freightDetails.service}
              if shipment.comments
                shar:comments
        if lineItems
          ns:LineItemArray
            each lineItem in lineItems
              ns:LineItem
                ns:lineNumber #{lineItem.lineNumber}
                shar:description #{lineItem.description}
                ns:lineType #{lineItem.lineType}
                if lineItem.quantity
                  ns:Quantity
                    shar:uom #{lineItem.quantity.uom}
                    shar:value #{lineItem.quantity.value}
                if lineItem.fobId
                  ns:fobId #{lineItem.fobId}
                shar:ToleranceDetails
                  // @review
                  shar:tolerance #{lineItem.toleranceDetails.tolerance}
                ns:allowPartialShipments #{lineItem.allowPartialShipments}
                if lineItem.unitPrice
                  ns:unitPrice #{lineItem.unitPrice}
                ns:lineItemTotal #{lineItem.lineItemTotal}
                if lineItem.requestedShipDate
                  ns:requestedShipDate #{lineItem.requestedShipDate}
                if lineItem.requestedInHands
                  ns:requestedInHands #{lineItem.requestedInHands}
                if lineItem.referenceSalesQuote
                  ns:referenceSalesQuote #{lineItem.referenceSalesQuote}
                // @todo Program
                if lineItem.endCustomerSalesOrder
                  ns:endCustomerSalesOrder #{lineItem.endCustomerSalesOrder}
                if lineItem.productId
                  ns:productId #{lineItem.productId}
                if lineItem.customerProductId
                  ns:customerProductId #{lineItem.customerProductId}
                if lineItem.lineItemGroupingId
                  ns:lineItemGroupingId #{lineItem.lineItemGroupingId}
                if parts
                  ns:PartArray
                    eact part in parts
                      if part.partGroup
                        shar:partGroup #{part.partGroup}
                      shar:partId #{part.partId}
                      if part.customerPartId
                        shar:customerPartId #{part.customerPartId}
                      shar:customerSupplied #{part.customerSupplied}
                      shar:Quantity
                        shar:uom #{part.quantity.uom}
                        shar:value #{part.quantity.value}
                      if part.locationLinkId
                        shar:locationLinkId #{part.locationLinkId}
                      if part.unitPrice
                        shar:unitPrice #{part.unitPrice}
                      if part.extendedPrice
                        shar:extendedPrice #{part.extendedPrice}
                      if shipmentLinks
                        shar:ShipmentLinkArray
                          each shipmentLink in shipmentLinks
                            shar:ShipmentLink
                              shar:shipmentId #{shipmentLink.shipmentId}
                              shar:Quantity #{shipmentLink.quantity}
                                shar:uom #{shipmentLink.quantity.uom}
                                shar:value #{shipmentLink.quantity.value}
                if lineItem.configuration
                  ns:Configuration
                    ns:referenceNumber #{lineItem.configuration.referenceNumber}
                    ns:referenceNumberType #{lineItem.configuration.referenceNumberType}
                    ns:preProductionProof #{lineItem.configuration.preProductionProof}
                    ns:ChargeArray
                      each charge in lineItem.configuration.charges
                        ns:Charge
                          ns:chargeId #{charge.chargeId}
                          if charge.chargeName
                            ns:chargeName #{charge.chargeName}
                          if charge.chargeDescription
                            ns:description #{charge.description}
                          ns:chargeType #{charge.chargeType}
                          ns:Quantity
                            shar:uom #{charge.quantity.uom}
                            shar:value #{charge.quantity.value}
                          ns:unitprice #{charge.unitprice}
                          ns:extendedPrice #{charge.extendedPrice}
                    ns:LocationArray
                      each location in lineItem.configuration.locations
                        ns:Location
                          ns:locationLinkId #{location.locationLinkId}
                          ns:locationId #{location.locationId}
                          if location.locationName
                            ns:locationName #{location.locationName}
                          ns:DecorationArray #{location.DecorationArray}
                            each decoration in location.DecorationArray
                              ns:Decoration
                                ns:decorationId #{decoration.decorationId}
                                if decoration.decorationName
                                  ns:decorationName #{decoration.decorationName}
                                  if decoration.artwork.refArtWorkId
                                  ns:Artwork
                                    ns:refArtWorkId #{decoration.artwork.refArtWorkId}
                                    ns:description #{decoration.artwork.description}
                                    ns:instructions #{decoration.artwork.instructions}
                                    ns:totalStitchCount #{decoration.artwork.totalStitchCount}
                                    ns:Dimensions
                                      ns:geometry #{decoration.artwork.dimensions.geometry}
                                      ns:useMaxLocationDimensions #{decoration.artwork.dimensions.useMaxLocationDimensions}
                                      ns:height #{decoration.artwork.dimensions.height}
                                      ns:width #{decoration.artwork.dimensions.width}
                                      ns:diameter #{decoration.artwork.dimensions.diameter}
                                      ns:uom #{decoration.artwork.dimensions.uom}
        ns:termsAndConditions #{termsAndConditions}
        // @todo salesChannel
        // @todo promoCode
        // @todo TaxInformationArray
        `
);
