const pug = require('pug');

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
        shar:colorName #{colorName}
  `,
);

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
      shar:productId #{productId}
      if partId
        shar:partId #{partId}
      shar:isSellable #{isSellable}
  `,
);

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
      shar:changeTimeStamp #{changeTimeStamp}
  `,
);

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
        shar:password #{password}
  `,
);

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
        ns:classType #{classType}
      `,
);

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
        shar:changeTimeStamp #{changeTimeStamp}
      `,
);
