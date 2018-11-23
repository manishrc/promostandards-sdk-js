# PromoStandards SDK for Javascript

[![Maintainability](https://api.codeclimate.com/v1/badges/30f7421ca372f94a0eb5/maintainability)](https://codeclimate.com/github/manishrc/promostandards-sdk-js/maintainability)
[![codecov](https://codecov.io/gh/manishrc/promostandards-sdk-js/branch/master/graph/badge.svg)](https://codecov.io/gh/manishrc/promostandards-sdk-js)
[![npm (scoped)](https://img.shields.io/npm/v/promostandards-sdk-js.svg)](https://www.npmjs.com/package/promostandards-sdk-js)
[![Build Status](https://travis-ci.org/manishrc/promostandards-sdk-js.svg?branch=master)](https://travis-ci.org/manishrc/promostandards-sdk-js)

**NOTE:** This project is under early development and will have unstable API until 1.0.0

## Installing

`npm install promostandards-sdk-js --save`

## Usage
```javascript
const { PromoStandards } = require('promostandards-sdk-js');

// Initialize client with supplier infomation
const supplier = new PromoStandards.Client({
    id: 'account_id',
    password: 'password',
    endpoints: [
        {
            type: 'ProductData',
            version: '1.0.0',
            url: 'supplier.com/product-data.svc'
        }
    ]
});

// Get product data for item_id
supplier.productData.getProduct({
    productId: 'item_id', // Product ID
    localizationCountry: 'US', // or `CA` for Canada
    localizationLanguage: 'en', // or `fr` for French
}).then(result => console.log(result));

```

## TODO
#### Service API
- [x] Product Data
    - [x] getProduct
    - [x] getProductDateModified
    - [x] getProductSellable
    - [x] getProductDateModified
- [ ] Inventory Interface Standards
    - [ ] getFilterValues
    - [ ] getInventoryLevels
- [x] Media Content Standards
    - [x] getMediaContent
    - [x] getMediaDateModified
- [ ] Order Shipment Notification
    - [ ] getOrderShipmentNotification
- [ ] Product Configuration, Decoration, and Pricing
    - [ ] getAvailableLocations
    - [ ] getDecorationColors
    - [ ] getFobPoints
    - [ ] getAvailableCharges
    - [ ] GetConfigurationAndPricing
- [ ] Order Status Standards
    - [ ] getOrderStatusDetails
    - [ ] getOrderStatusTypes
- [ ] Purchase Order
    - [ ] sendPO
    - [ ] getSupportedOrderTypes

#### Meta API
- [ ] Get List of Companies
- [ ] Get List of Service Types
- [ ] Get List of Services
- [ ] Get Endpoint:
    - [ ] Get List of Endpoints by Company
    - [ ] Get Endpoint by Company and Service Type
    - [ ] Get Endpoint by Version, Company and Service Type
- [ ] Get Stats

#### Other features
- [x] Initialise a client with supplier information
- [x] Choose JSON or XML Response
- [ ] Support Promise & callback interface
- [ ] Use Meta API responses in Service API requests