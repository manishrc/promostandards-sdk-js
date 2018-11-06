# PromoStandards SDK for Javascript

**NOTE:** This project is under early development and will have unstable API until 1.0.0

## Installing

`npm install promostandards-sdk-js --save`

## Usage
```javascript
const PS = require('promostandards-sdk-js');

PS.getProduct({
    wsVersion: '1.0.0',
    id: 'account_id',
    password: 'password',
    localizationCountry: 'US', // or `CA` for Canada
    localizationLanguage: 'en', // or `fr` for French
    productId: 'item_id'
}).then(result => { /* do something */ });
```

## TODO
#### Service API
- [ ] Product Data
    - [ ] getProduct
    - [ ] getProductDateModified
    - [ ] getProductSellable
    - [ ] getProductDateModified
- [ ] Inventory Interface Standards
    - [ ] getFilterValues
    - [ ] getInventoryLevels
- [ ] Media Content Standards
    - [ ] getMediaContent
    - [ ] getMediaDateModified
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
- [ ] Initialise a client with supplier information
- [ ] Choose JSON or XML Response
- [ ] Support Promise & callback interface
- [ ] Use Meta API responses in Service API requests