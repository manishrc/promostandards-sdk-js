# PromoStandards SDK for Javascript

## Installing

`npm install promostandards-sdk-js --save`

## Example

Get Product Data from a supplier

```javascript

/**
 * PromoStandards-SDK-JS will provide a Promise/callback based
 * wrapper around promostandards specification to receive data
 * in XML or JSON.
 */

// Require module
const PromoStandards = require('promostandards-sdk-js');

// Initiallize a company and avoid repeatedly passing parameters
const HIT = new PromoStandards({
    id: 'tonystark',
    password: 'partytime',
    company_code: 'STARK'
});

// Initialize an service and avoid repeatedly passing parameters
HIT_ProductData = HIT.ProductData({
    wsVersion: '1.0.0',
    service_url: 'https://stark.com/CustomerProductDataService.svc',
    wsdl_url: 'https://stark.com/CustomerProductDataService.svc?wsdl'
}, 'json');

// Call desired functions:
HIT_ProductData.getProduct({
    localizationCountry: 'US',
    localizationLanguage: 'en',
    productId: '5790'
}).then(
    product_data => console.log(product_data);
);

HIT_ProductData.getProductDateModified({
    changeTimeStamp: '2018-01-01'
}).then(
    product_id_list => console.log(product_id_list);
);

// OR

PromoStandards.ProductData.getProduct({
    wsVersion: '1.0.0',
    id: 'tonystark',
    password: 'partytime',
    endpoint: 'https://services.starline.com/CustomerProductDataService/CustomerProductDataService.svc',
    wsdl: 'https://services.starline.com/CustomerProductDataService/CustomerProductDataService.svc?wsdl',
    localizationCountry: 'US',
    localizationLanguage: 'en',
    productId: '5790'
}, 'json');
```# promostandards-sdk-js
