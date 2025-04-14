# PromoStandards SDK for Javascript

[![Maintainability](https://api.codeclimate.com/v1/badges/30f7421ca372f94a0eb5/maintainability)](https://codeclimate.com/github/manishrc/promostandards-sdk-js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/30f7421ca372f94a0eb5/test_coverage)](https://codeclimate.com/github/manishrc/promostandards-sdk-js/test_coverage)
[![Test](https://github.com/manishrc/promostandards-sdk-js/actions/workflows/test.yml/badge.svg)](https://github.com/manishrc/promostandards-sdk-js/actions/workflows/test.yml)
[![npm (scoped)](https://img.shields.io/npm/v/promostandards-sdk-js.svg)](https://www.npmjs.com/package/promostandards-sdk-js)

**NOTE:** This project is under development and will have unstable API until 1.0.0

## Installing

`npm install promostandards-sdk-js --save`

## Usage

```javascript
// const { PromoStandards } = require("promostandards-sdk-js");
import { PromoStandards } from 'promostandards-sdk-js';

(async function main() {
  const supplier = new PromoStandards.Client({
    id: 'account_id',
    password: 'password',
    endpoints: [
      {
        type: 'ProductData',
        version: '2.0.0',
        url: 'https://supplier.com/productData',
      },
      {
        type: 'MediaContent',
        version: '1.1.0',
        url: 'https://supplier.com/productMedia',
      },
      {
        type: 'Inventory',
        version: '2.0.0',
        url: 'https://supplier.com/inventory',
      },
      {
        type: 'ProductPricingAndConfiguration',
        version: '1.0.0',
        url: 'https://supplier.com/pricingAndConfiguration',
      },
    ],
  });

  // Product Data
  // https://tools.promostandards.org/product-data-2-0-0
  const productData = await supplier.productData.getProduct({
    productId: 'item_id', // Product ID
    localizationCountry: 'US', // or `CA` for Canada
    localizationLanguage: 'en', // or `fr` for French
  });

  // Media Content
  // https://tools.promostandards.org/media-content-1-1-0
  const mediaContentData = await supplier.mediaContent.getMediaContent({
    mediaType: 'Image',
    productId: 'item_id',
    classType: 1006,
  });

  // Inventory
  // https://tools.promostandards.org/inventory-2-0-0
  const inventoryData = await supplier.inventory.getInventoryLevels({
    productId: 'item_id',
  });

  // Product Pricing and Configuration
  // https://tools.promostandards.org/product-pricing-and-configuration-1-0-0
  const productPricingAndConfigurationData =
    await supplier.productPricingAndConfiguration.getConfigurationAndPricing({
      productId: 'item_id',
      currency: 'USD',
      priceType: 'Customer',
      fobId: 1,
    });

  console.log(
    JSON.stringify(
      {
        productData,
        mediaContentData,
        inventoryData,
        productPricingAndConfigurationData,
      },
      null,
      2
    )
  );
})();
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
