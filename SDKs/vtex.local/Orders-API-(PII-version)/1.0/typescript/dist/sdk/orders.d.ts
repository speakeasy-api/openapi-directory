import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel order
     *
     * @remarks
     * You should use this endpoint to cancel an order by its `orderId`.
     *
     * A common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.
     *
     * You should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.
     *
     * Be aware that if the order status is already `Invoiced`, the order can only be canceled if - before using this request - you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).
     *
     *
  > The `Cancel order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
     */
    cancelOrder2(req: operations.CancelOrder2Request, config?: AxiosRequestConfig): Promise<operations.CancelOrder2Response>;
    /**
     * Get order
     *
     * @remarks
     * Retrieves order details by searching a specific order ID.
     *
     *
  >If you wish to retrieve unmasked data, use the `reason` parameter.
     *
     *
  > The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
     *
     *
  > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
     *
     *
  > Throttling: Each account can make up to 5000 requests per minute.
     *
     *
  ## Request object has the following properties:
     *
     * | Attribute    | Type        | Description |
     * | --------------- |:---------:| --------------------------------------:|
     * | `orderId` | string | Order Id |
     *
     *
     * ## Response object has the following properties:
     *
     *
     * | Attribute    | Type        | Description |
     * | --------------- |:---------:| --------------------------------------:|
     * | `affiliateId` | string | Seller Name who was responsible for the order |
     * | `allowCancellation` | boolean | If Cancellation is allowed |
     * | `allowEdition` | boolean | If Order Edition is allowed |
     * | `approvedBy` | string | User who approved the order |
     * | `authorizedDate` | string | Authorized Order Date |
     * | `callCenterOperatorData` | string | Call Center Operator responsible for the order |
     * | `cancelReason` | string | Cancel Reason |
     * | `cancelledBy` | string | User who Cancelled the order |
     * | `changesAttachment` | object | Change details object |
     * | `changesData` | object | Array with each change |
     * | `discountValue` | integer | Change Discount Value |
     * | `incrementValue` | integer | Change Increment Value |
     * | `itemsAdded` | object | Added items details |
     * | `itemsRemoved` | object | Removed items details |
     * | `id` | integer | Changed SKU ID |
     * | `name` | string | Changed SKU Name |
     * | `price` | integer | Changed SKU Price |
     * | `quantity` | integer | Changed SKU Quantity |
     * | `unitMultiplier` | integer | Changed SKU Unit Multiplier |
     * | `reason` | string | Change Reason |
     * | `receipt` | object | Change receipt details object |
     * | `date` | string | Change receipt date |
     * | `orderId` | string | Change receipt order Id |
     * | `receipt` | object | Change receipt ID |
     * | `id` | string | Object Id, expect value "changeAttachment" |
     * | `clientProfileData` | object | Object with all Cliente Profile Data |
     * | `corporateDocument` | string | Client Corporate Document |
     * | `corporateName` | string | Client Corporate Name |
     * | `corporatePhone` | string | Cliente Corporate Telephone |
     * | `customerClass` | string | Customer class |
     * | `document` | string | Client Document |
     * | `documentType` | string | Client Document Type |
     * | `email` | string | Client e-mail |
     * | `firstName` | string | Client First Name |
     * | `id` | string | Object ID, expected value "clientProfileData" |
     * | `isCorporate` | string | If the Client is a Corporate Client |
     * | `lastName` | string | Client Last Name|
     * | `phone` | string | Client Telephone |
     * | `stateInscription` | string | Client Corporate Inscription |
     * | `tradeName` | string | Client Corporate Trade Name |
     * | `userProfileId` | string | Client User Profile ID |
     * | `commercialConditionData` | object | Commercial condition information, including `"Id"`, `"parentOrderId"`, and `"reason"` |
     * | `creationDate` | string | Order Creation Date |
     * | `customData` | object | Custom Data Object |
     * | `customApps` | object | Custom apps details object |
     * | `fields` | object | Custom app fields |
     * | `id` | string | Custom App ID |
     * | `major` | integer | Major |
     * | `emailTracked` | string | Client Conversation Tracker email  |
     * | `followUpEmail` | string | Responsible store e-mail |
     * | `giftRegistryData` | object | Gift registry list information, including `"addressId"` (object), `"description"` (string), and `"giftRegistryId"` (string) |
     * | `hostname` | string | Account hostname registered in License Manager |
     * | `invoiceData` | object | Information pertinent to the order's invoice |
     * | `invoicedDate` | string | Invoice Date |
     * | `isCheckedIn` | boolean | True if order is from inStore |
     * | `isCompleted` | boolean | True if the order is completed |
     * | `items` | object | Order items object |
     * | `additionalInfo` | string | Order item additional info |
     * | `brandId` | string | Brand ID |
     * | `brandName` | string | Brand name |
     * | `categoriesIds` | string | Item category ID |
     * | `commercialConditionId` | string | Invoice date |
     * | `dimension` | object | Item dimension object |
     * | `cubicweight` | number | Item cubic weight |
     * | `height` | number | Item height |
     * | `length` | number | Item length |
     * | `weight` | number | Item weight |
     * | `width` | number | Item width |
     * | `offeringInfo` | string | Extra information on offering |
     * | `offeringType` | string | Offering type |
     * | `offeringTypeId` | string | ID of offering type |
     * | `productClusterId` | string | All releated product clusters |
     * | `attachments` | object | Attachents Array |
     * | `content` | object | Attachment Content Custom Field |
     * | `name` | string | Attachment Name |
     * | `bundleItems` | object | Invoice date |
     * | `commission` | string | Comission value registered to Seller |
     * | `components` | object | If item is a kit, contains components information |
     * | `detailUrl` | string | Product Slug URL |
     * | `ean` | string | SKU EAN |
     * | `freightCommission` | integer | Comission value registered to seller |
     * | `id` | string | SKU Id |
     * | `imageUrl` | string | SKU Image URL |
     * | `isGift` | string | If this item is a gift in order context |
     * | `itemAttachment` | object | Attachment Object |
     * | `content` | object | Attachment Content Array |
     * | `name` | string | Attachment Name |
     * | `listPrice` | integer | Item List Price |
     * | `lockId` | string | Reservation ID |
     * | `manualPrice` | string | Manually inserted price, if there is one. |
     * | `measurementUnit` | string | Item measurement unit |
     * | `name` | string | Item name |
     * | `offerings` | object | Offerings information |
     * | `params` | object | "ContextParameter" hashset with `"name"` and `"value"` |
     * | `preSaleDate` | string | Item pre sale date |
     * | `price` | integer | Item Price |
     * | `items[].priceDefinition`                        | Object   | Price information for all units of a specific item.                                                                                                                  |
     * | `items[].priceDefinition.total`                  | Integer  | Total value for all units of the item in cents.                                                                                                                      |
     * | `items[].priceDefinition.calculatedSellingPrice` | Integer  | Item's calculated unitary selling price in cents.                                                                                                                    |
     * | `items[].priceDefinition.sellingPrices`          | Array    | Array of objects, each containing `value` (in cents) and `quantity` for the different rounding instances that can be combined to form the correctly rounded `total`. |
     * | `priceTags` | object | Object with all price modifiers |
     * | `identifier` | string | Price Tag ID |
     * | `isPercentual` | boolean | Indicates whether the price tag is a percentual modifier |
     * | `name` | string | Price tag name |
     * | `rawValue` | string | Price tag raw value |
     * | `value` | string | Price tag value |
     * | `priceValidUntil` | string | Price expiration date |
     * | `productId` | string | Item product ID |
     * | `quantity` | integer | Item quantity |
     * | `refId` | string | Item reference ID |
     * | `rewardValue` | integer | Item reward value |
     * | `seller` | string | Item seller |
     * | `sellerSku` | string | Invoice Date |
     * | `sellingPrice` | integer | Item selling price. For more accurate information, see the `priceDefinition` field |
     * | `shippingPrice` | string | Item Shipping Price |
     * | `tax` | integer | Item Tax |
     * | `taxCode` | string | Item Tax Code |
     * | `uniqueId` | string | Item Order Unique ID |
     * | `unitMultiplier` | integer | Item Unit Multipler |
     * | `lastChange` | string | Order Last Change Date |
     * | `lastMessage` | string | initial excerpt from last message sent to the customer |
     * | `marketingData` | string | Marketing Data Object |
     * | `coupon` | string | Order Disccount Coupon |
     * | `id` | string |  Object ID, expected value "marketingData" |
     * | `marketingTags` | object | Marketing Tags Array |
     * | `utmCampaign` | string | UTM Campaign Parameters |
     * | `utmMedium` | string | UTM Medium Parameters |
     * | `utmPartner` | string | UTM Source Parameters |
     * | `utmSource` | string | UTM Source Parameters|
     * | `utmiCampaign` | string | UTMI Campaign Internal Parameters |
     * | `utmiPart` | string | UTMI Part Internal Parameters |
     * | `utmipage` | string | UTMI Page Internal Parameters |
     * | `marketplace` | object | Marketplace Details Object |
     * | `baseURL` | string | Marketplace Base URL |
     * | `isCertified` | string | If is a Certified Marketplace |
     * | `name` | string | Marketplace Name |
     * | `marketplaceItems` | object | Marketplace Details Object |
     * | `marketplaceOrderId` | string | Marketplace Order Id |
     * | `marketplaceServicesEndpoint` | string | Marketplace Services Endpoint |
     * | `merchantName` | string | Merchant Name |
     * | `openTextField` | object | Open Text Field Object |
     * | `value` | string | Open Text Field Value |
     * | `orderFormId` | string | Order Form Id |
     * | `orderGroup` | string | Order Group Id |
     * | `orderId` | string | Order Id |
     * | `origin` | string | Order Origin: "Marketplace", "Fulfillment", or "Chain" (for the third level in a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4?&utm_source=autocomplete#) purchase). |
     * | `packageAttachment` | object | Package Object |
     * | `packages` | object | Packages Details Object, populated after order invoiced |
     * | `cfop` | string | Fiscal code for operations and installments |
     * | `courier` | string | Package selected Courier |
     * | `courierStatus` | string | Package Tracking Status |
     * | `data` | object | Package Tracking Timeline |
     * | `finished` | string | If the delivery are finished |
     * | `status` | string | Courier Status |
     * | `embeddedInvoice` | string | XML of the invoice |
     * | `invoiceKey` | string | Invoice Credencial Key |
     * | `invoiceNumber` | string | Package Invoice Number |
     * | `invoiceUrl` | string | Package Invoice URL |
     * | `invoiceValue` | string | Package Invoice Value |
     * | `issuanceDate` | string | Package Issuance Date |
     * | `items` | string | Items Package Array |
     * | `description` | string | Item Desciprtion |
     * | `itemIndex` | string | Item Index |
     * | `price` | string | Item Price |
     * | `quantity` | string | Item Quantity |
     * | `unitMultiplier` | string | Unit Multiplier |
     * | `trackingNumber` | string | Package Tracking Number |
     * | `trackingUrl` | string | Tracking Order URL |
     * | `type` | string | Invoice Type, expected values "Output" and "Input" |
     * | `paymentData` | object | Payment Object |
     * | `transactions` | object | Transactions Object |
     * | `isActive` | boolean | If the payment is Active |
     * | `merchantName` | string | Merchant Name|
     * | `payments` | object | Payment Object |
     * | `cardHolder` | string | Payment Card Holder |
     * | `connectorResponses` | object | Connector Responses Object |
     * | `billingAddress` | object | Billing Address information |
     * | `Message` | string | Connector Responses Message |
     * | `ReturnCode` | string | Connector Return Code |
     * | `Tid` | string | Connector Transaction ID |
     * | `acquirer` | string | Connector acquirer |
     * | `authId` | string | Connector authorization ID |
     * | `dueDate` | string | Payment due date |
     * | `firstDigits` | string | Payment card first digits |
     * | `giftCardCaption` | string | Gift card caption |
     * | `giftCardId` | string | Gift card ID |
     * | `giftCardName` | string | Gift card name |
     * | `group` | string | Payment group |
     * | `id` | string | Payment ID |
     * | `installments` | string | Payment installments quantity |
     * | `lastDigits` | string | Payment card last digits |
     * | `paymentSystem` | string | Payment system type ID |
     * | `paymentSystemName` | string | Payment system name |
     * | `redemptionCode` | string | Gift card redemption code |
     * | `referenceValue` | string | Payment reference value |
     * | `tid` | string | Payment transaction ID |
     * | `url` | string | Payment URL |
     * | `value` | string | Payment value with interest if it applies |
     * | `transactionId` | string | Transaction Id |
     * | `ratesAndBenefitsData` | string | Rates and Benefits Data Object |
     * | `id` | string |  Object ID, expected value "ratesAndBenefitsData" |
     * | `rateAndBenefitsIdentifiers` | object | Rates and Benefits Details Object |
     * | `additionalInfo` | string |  Rates and Benefits Additional Info |
     * | `description` | string | Rates and Benefits Description |
     * | `featured` | string |  If is allowed to acumulate the Rates and Benefits |
     * | `matchedParameters` | object | March Parameters Array |
     * | `name` | string |  Rates and Benefits Name |
     * | `roundingError` | integer | Rounding Error Total Amount  |
     * | `salesChannel` | string | Order Sales Channel Id |
     * | `sellerOrderId` | string | Order Seller Id |
     * | `sellers` | object | Sellers Array |
     * | `id` | string | Seller Id |
     * | `logo` | string | URL Seller Logo |
     * | `name` | string | Seller Name |
     * | `sequence` | string | Order Sequence ID |
     * | `shippingData` | object | Shipping Data Object |
     * | `address` | object | Shipping Address |
     * | `addressId` | string | Shipping Address Id |
     * | `addressType` | string | Shipping Address Type |
     * | `city` | string | Shipping City |
     * | `complement` | string | Shipping Complement |
     * | `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
     * | `geoCoordinates` | object | Shipping Geo Coordinates Array |
     * | `neighborhood` | string | Shipping Neighborhood |
     * | `number` | string | Shipping Number |
     * | `postalCode` | string | Shipping Postal Code |
     * | `receiverName` | string | Shipping Receiver Name |
     * | `reference` | string | Shipping Reference |
     * | `state` | string | Shipping State |
     * | `street` | string | Shipping Street |
     * | `id` | string | Object ID, expected value "shippingData"|
     * | `logisticsInfo` | object | Logistics Info Object |
     * | `addressId` | string | Adress Id |
     * | `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
     * | `deliveryCompany` | string | Courier Company Name |
     * | `deliveryIds` | object | Delivery Ids Object |
     * | `courierId` | string | Courier Id |
     * | `courierName` | string | Courier Name |
     * | `dockId` | string | Releated Dock Id |
     * | `quantity` | integer | Items Quantity |
     * | `warehouseId` | string | Releated Warehouse Id |
     * | `deliveryWindow` | object | Delivery Window Object |
     * | `endDateUtc` | string | Delivery Date End in UTC  |
     * | `price` | string | Delivery Window Cost |
     * | `startDateUtc` | string | Delivery Date Starts in UTC |
     * | `itemIndex` | integer | Logistic Info Item Index |
     * | `listPrice` | integer | Logistic Info Item List Price |
     * | `lockTTL` | string | Stock reservation waiting period |
     * | `pickupStoreInfo` | object | Pickup Store Info Object |
     * | `additionalInfo` | string | Pickup Store Additional Info |
     * | `address` | string | Pickup Store Address |
     * | `dockId` | string | Pickup Store Releated Dock Id |
     * | `friendlyName` | string | Pickup Store Friendly Name |
     * | `isPickupStore` | boolean | If is a Pickup Store |
     * | `polygonName` | string | Releated Polygom Name |
     * | `price` | integer | Logistic Info Item Price |
     * | `selectedSla` | string | Selected SLA |
     * | `sellingPrice` | integer | Logistic Info Item Selling Price |
     * | `shippingEstimate` | string | Estimate Shipping Duration |
     * | `shippingEstimateDate` | string | Estimate Shipping Date |
     * | `shipsTo` | object | Shipping Country in ISO 3166 ALPHA-3 abbreviation |
     * | `slas` | object | SLAs Object |
     * | `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
     * | `deliveryWindow` | object | Delivery Window Object |
     * | `endDateUtc` | string | Delivery Date End in UTC  |
     * | `price` | string | Delivery Window Cost |
     * | `startDateUtc` | string | Delivery Date Starts in UTC |
     * | `id` | string | SLA Id |
     * | `pickupStoreInfo` | object | Pickup Store Details Object |
     * | `additionalInfo` | string | Pickup Store Additional Info |
     * | `address` | string | Pickup Store Address |
     * | `dockId` | string | Pickup Store releated Dock Id  |
     * | `friendlyName` | string | Pickup Store Friendly Name |
     * | `isPickupStore` | boolean | If is a Pickup Store |
     * | `polygonName` | string | Releated Polygon Name |
     * | `price` | integer | SLA Price |
     * | `shippingEstimate` | string | SLA Shipping Estimate |
     * | `selectedAddresses` | object | Selected Address Details Object |
     * | `addressId` | string | Shipping Address Id |
     * | `addressType` | string | Shipping Address Type |
     * | `city` | string | Shipping City |
     * | `complement` | string | Shipping Complement |
     * | `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
     * | `geoCoordinates` | object | Shipping Geo Coordinates Array |
     * | `neighborhood` | string | Shipping Neighborhood |
     * | `number` | string | Shipping Number |
     * | `postalCode` | string | Shipping Postal Code |
     * | `receiverName` | string | Shipping Receiver Name |
     * | `reference` | string | Shipping Reference |
     * | `state` | string | Shipping State |
     * | `street` | string | Shipping Street |
     * | `trackingHints` | array | Array of tracking hint objects, containing `"courierName"`, `"trackingId"`, `"trackingLabel"`, and `"trackingUrl"` |
     * | `status` | string | Order Status |
     * | `statusDescription` | string | Status Description |
     * | `storePreferencesData` | object | Store Preferences Data Object |
     * | `countryCode` | string | Country Code in ISO 3166 ALPHA-3 abbreviation |
     * | `currencyCode` | string | Currency Code in ISO 4217  |
     * | `currencyFormatInfo` | object | Currency Format Info Object |
     * | `CurrencyDecimalDigits` | integer | Currency Decimal Digits |
     * | `CurrencyDecimalSeparator` | string | Currency Decimal Separator |
     * | `CurrencyGroupSeparator` | string | Currency Group Separator |
     * | `CurrencyGroupSize` | integer | Currency Group Size |
     * | `StartsWithCurrencySymbol` | boolean | If Starts With Currency Symbol |
     * | `currencyLocale` | integer | LCID Decimal |
     * | `currencySymbol` | string | Currency Symbol |
     * | `timeZone` | string | Order Time Zone |
     * | `totals` | object | Totals Object |
     * | `id` | string | Totals Ids, expected values: "Items", "Discounts", "Shipping" and "Tax" |
     * | `name` | string | Totals ID Description |
     * | `value` | integer | Totals Value |
     * | `value` | integer | Order Value |
     *
     */
    getOrder2(req: operations.GetOrder2Request, config?: AxiosRequestConfig): Promise<operations.GetOrder2Response>;
    /**
     * List orders
     *
     * @remarks
     * Retrieves a list of orders according to the filters described below.
     *
     *
  > This endpoint returns masked order data.
     *
     *
  > This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) for this purpose.
     *
     *
  This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
     *
     *
  > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
     *
     *
  ## Do not use request for integrations
     *
  > This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies or become unavailable in periods of peak order volume. In other words, **order integrations built with the List orders endpoint are not reliable** and **will not be supported**. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
     *
     *
  ## Throtling
     *
  Each account can make up to 5000 requests per minute.
     *
     *
  ## Request parameters allowed
     *
     *
  | Attribute    | Type        | Description |
     * | --------------- |:---------:| -------------------------------------------------------------------------------------------:|
     * | `orderBy` | string | Order Field and Order Type concatenated `orderBy={{OrderField}},{{OrderType}}`  |
     * | `OrderField` | string | Order Field expected values: `creationDate`,`orderId`,`items`,`totalValue` and `origin` |
     * | `OrderType` | string | Order Type expected values: `asc` and `desc`  |
     *
     *
     * ## Sorting Examples
     *
     *
     * CreationDate:
     *
     *     `/api/oms/pvt/orders?orderBy=creationDate,desc`
     *
     *
     * OrderID:
     *
     *     `/api/oms/pvt/orders?orderBy=orderId,desc`
     *
     *
     * Items:
     *
     *     `/api/oms/pvt/orders?orderBy=items,asc`
     *
     *
     * TotalValue:
     *
     *     `/api/oms/pvt/orders?orderBy=totalValue,desc`
     *
     *
     * Origin:
     *
     *     `/api/oms/pvt/orders?orderBy=origin,asc`
     *
     *
     *
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `page` | integer | Page Number  |
     *
     * ## Pagination Examples:
     *
     *     `/api/oms/pvt/orders?page=3`
     *
     *
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `per_page` | integer | Quantity orders per page  |
     *
     * Quantity per Page Examples:
     *
     *     `/api/oms/pvt/orders?per_page=15`
     *
     *
     *
     *
     *
     * <div class="alert alert-info">Pagination Limit: The limit of pages that can be requested is 30.
     * </div>
     *
     *
     *
     * ## Time zone query
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `utc` | integer | Time Zone. By including this parameter alone in your query, the call will not convert the UTC nor show the number of orders set for that UTC. To filter orders with the desired UTC, you must also modify date and time in the `f_creationDate=creationDate:` parameter.  |
     *
     * Time Zone Example:
     *
     *     `/api/oms/pvt/orders?utc=-0200`
     *
     *
     *
     *
     * ## Request filters
     *
     *
     * ## Fulltext
     *
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `q` | string | Fulltext accepts Order Ids, Client E-mail, Client Document and Client Name  |
     *
     * > The `+` caracter isn't allowed in Fulltext Search
     *
     *
     * Fulltext filter Examples:
     *
     * OrderID:
     *
     *     `/api/oms/pvt/orders?q=v212333lux-02`
     *
     *
     * Email:
     *
     *     `/api/oms/pvt/orders?q=rodrigo.cunha@vtex.com`
     *
     *
     * Document:
     *
     *     `/api/oms/pvt/orders?q=21133355524`
     *
     *
     * ClientName:
     *
     *     `/api/oms/pvt/orders?q=Cunha`
     *
     *
     *
     *
     * ## Shipping Estimate
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_shippingEstimate` | string | Concatened value of quantity days and sufix `.days`  |
     *
     *
     *
     *
     * Shipping Estimate filter Examples:
     *
     *
     * Next 7 days:
     *
     *     `/api/oms/pvt/orders?f_shippingEstimate=7.days`
     *
     *
     * Tomorrow:
     *
     *     `/api/oms/pvt/orders?f_shippingEstimate=1.days`
     *
     *
     * Today:
     *
     *     `/api/oms/pvt/orders?f_shippingEstimate=0.days`
     *
     *
     * Late:
     *
     *     `/api/oms/pvt/orders?f_shippingEstimate=-1.days`
     *
     *
     *
     *
     * ## Invoiced Date
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_invoicedDate` | string | Concatened value sufix `invoicedDate` and range date in Timestamp format  |
     *
     *
     *
     * Invoiced Date filter Examples:
     *
     * 1 Day:
     *
     *     `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
     *
     *
     * 1 Month:
     *
     *     `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
     *
     *
     * 1 Year:
     *
     *     `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
     *
     *
     *
     * ## Order Date
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_creationDate` | string | Concatened value suffix `creationDate` and range date in Timestamp format  |
     *
     *
     *
     * Order Date filter Examples:
     *
     * 1 Day:
     *
     *     `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
     *
     *
     * 1 Month:
     *
     *     `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
     *
     *
     * 1 Year:
     *
     *     `/api/oms/pvt/orders?f_creationDate=creationDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
     *
     *
     *
     *
     * ## Authorized Date
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_authorizedDate` | string | Concatened value suffix `authorizedDate` and range date in Timestamp format  |
     *
     *
     *
     * Authorized Date filter Examples:
     *
     * 1 Day:
     *
     *     `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
     *
     *
     * 1 Month:
     *
     *     `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
     *
     *
     * 1 Year:
     *
     *     `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
     *
     *
     *
     *
     * ## UTMs
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_UtmSource` | string | UTM Source value  |
     *
     *
     *
     * Channels filter Examples:
     *
     *     `/api/oms/pvt/orders?f_UtmSource=buscape_campaign`
     *
     *
     *
     *
     * ## Seller
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_sellerNames` | string | Seller Name value  |
     *
     *
     *
     * Seller filter Examples:
     *
     *     `/api/oms/pvt/orders?f_sellerNames=Fast+Shop`
     *
     *
     *
     *
     * ## Call Center Operator
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_callCenterOperatorName` | string | Call Center Operator Value  |
     *
     *
     *
     * Call Center Operator filter Examples:
     *
     *     `/api/oms/pvt/orders?f_callCenterOperatorName=Operator%20Name`
     *
     *
     *
     *
     * ## Sales Channel Name
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_salesChannel` | string | Sales Channel Name Value  |
     *
     *
     *
     * Sales Channel Name filter Examples:
     *
     *     `/api/oms/pvt/orders?f_salesChannel=Main`
     *
     *
     *
     *
     *
     * ## Sales Channel ID
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `salesChannelId` | string | Sales Channel ID Value  |
     *
     *
     *
     * Sales Channel ID filter Examples:
     *
     *     `/api/oms/pvt/orders?salesChannelId=1`
     *
     *
     *
     *
     *
     * ## Affiliate ID
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_affiliateId` | string | Affiliate ID Value  |
     *
     *
     *
     * Affiliate ID filter Examples:
     *
     *     `/api/oms/pvt/orders?f_affiliateId=WLM`
     *
     *
     *
     *
     * ## Order Status
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_status` | string | Order Status Value  |
     *
     *
     *
     * | Order Status avaible to filter    |
     * | --------------------- |
     * | `waiting-for-sellers-confirmation` |
     * | `payment-pending` |
     * | `payment-approved` |
     * | `ready-for-handling` |
     * | `handling` |
     * | `invoiced` |
     * | `canceled` |
     *
     *
     * Order Status filter Examples:
     *
     *     `/api/oms/pvt/orders?f_status=ready-for-handling`
     *
     *
     *
     *
     * ## Order Status Description
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_statusDescription` | string | Order Status Description Value  |
     *
     *
     *
     *
     *
     * | Order Status Description avaible to filter |
     * | --------------------- |
     * | `Aguardando+autorização+para+despachar` |
     * | `Pagamento+Pendente` |
     * | `Pagamento+Aprovado` |
     * | `Pronto+para+o+manuseio` |
     * | `Preparando+Entrega` |
     * | `Faturado` |
     * | `Cancelado` |
     *
     * Order Status Description filter Examples:
     *
     *     `/api/oms/pvt/orders?f_statusDescription=Pronto+para+o+manuseio`
     *
     *
     *
     *
     *
     * ## Order Situation
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `incompleteOrders` | boolean | If is a Incomplete Order  |
     *
     *
     * > know more about [Incomplete Orders in VTEX Help](https://help.vtex.com/en/tutorial/understanding-incomplete-orders)
     *
     * Order Situation filter Examples:
     *
     *     `/api/oms/pvt/orders?incompleteOrders=true`
     *
     *
     *
     *
     *
     * ## Error Situation
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `incompleteOrders` | boolean | Error Situation Type  |
     *
     *
     *
     * | Error Situation Values avaible to filter |
     * | ------- |
     * | `all` |
     * | `perm` |
     * | `temp` |
     *
     *
     * Error Situation filter Examples:
     *
     *     `/api/oms/pvt/orders?filterError=all`
     *
     *
     *
     *
     *
     *
     * ## Payment Type Name
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_paymentNames` | string | Payment Type Value  |
     *
     *
     *
     * Payment Type Name filter Examples:
     *
     *     `/api/oms/pvt/orders?f_paymentNames=Visa`
     *
     *
     *
     *
     *
     * ## Rates and Benefits Name
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `f_RnB` | string | Rates and Benefits Name  |
     *
     *
     *
     * Rates and Benefits filter Examples:
     *
     *     `/api/oms/pvt/orders?f_RnB="Free+Shipping"`
     *
     *
     *
     *
     * ## Search Field
     *
     * | Attribute    | Type      | Description |
     * | ------------ |:---------:| -----------:|
     * | `searchField` | string | Affiliate ID Value  |
     * | `sku_Ids&sku_Ids` | integer | SKU ID  |
     * | `listId&listId` | integer | Gift List ID  |
     * | `tid&tid` | integer | Transaction ID (TID)  |
     * | `pci_tid&pci_tid` | integer | PCI Connector's Transaction ID (TID)  |
     * | `paymentId&paymentId` | integer | Payment ID (PID)  |
     * | `nsu&nsu` | integer | Connector's NSU  |
     *
     *
     *
     * Search Field filter Examples:
     *
     * SKU ID:
     *
     *     `/api/oms/pvt/orders?searchField=sku_Ids&sku_Ids=11223`
     *
     *
     *
     * Gift List ID:
     *
     *     `/api/oms/pvt/orders?searchField=listId&listId=11223`
     *
     *
     *
     * Transaction ID (TID):
     *
     *     `/api/oms/pvt/orders?searchField=tid&tid=54546300238810034995829230012`
     *
     *
     *
     * PCI Connector's Transaction ID (TID):
     *
     *     `/api/oms/pvt/orders?searchField=pci_tid&pci_tid=7032909234899834298423209`
     *
     *
     *
     * Payment ID (PID):
     *
     *     `/api/oms/pvt/orders?searchField=paymentId&paymentId=2`
     *
     *
     *
     * Connector's NSU:
     *
     *     `/api/oms/pvt/orders?searchField=nsu&nsu=2437281`
     * \n\r\n\r## Response objects\n\r\n\r,
     * **Response object has the following properties:**
     *
     *
     * | Attribute    | Type        | Description |
     * | --------------- |:---------:| --------------------------------------:|
     * | `list` | object | Order List Object |
     * | `shippingEstimateDate` | string | Estimate Shipping Date |
     * | `affiliateId` | string | Seller Name who was responsible for the order |
     * | `authorizedDate` | string | Authorized Order Date |
     * | `callCenterOperatorData` | string | Call Center Operator responsible for the order |
     * | `name` | string | Client Name|
     * | `creationDate` | string | Order Creation Date |
     * | `currencyCode` | string | Currency Code in ISO 4217  |
     * | `items` | object | Obsolete Field  |
     * | `lastMessageUnread` | string | Last sent transactional message  |
     * | `listId` | string | Releated Gift List Id |
     * | `listType` | string | Releated Gift List Type |
     * | `marketplaceOrderId` | string | Marketplace Order Id |
     * | `orderId` | string | Change receipt order Id |
     * | `orderIsComplete` | boolean | If is a Order Completed |
     * | `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
     * | `paymentNames` | string | Payment System Name |
     * | `salesChannel` | string | Order Sales Channel Id |
     * | `sequence` | string | Order Sequence ID |
     * | `status` | string | Order Status |
     * | `statusDescription` | string | Status Description |
     * | `totalItems` | integer | Total Order Items |
     * | `totalValue` | integer | Total Value Amount |
     * | `workflowInErrorState` | boolean | If is a Work Flow Error |
     * | `workflowInRetry` | boolean | If is in a Work Flow Retry |
     * | `paging` | object | Paging Details Object |
     * | `pages` | integer | Paging Total Pages |
     * | `perPage` | integer | Paging total per Page |
     * | `total` | integer | Total Result |
     * | `stats` | object | Results segmented by `totalItems` and `totalValue` |
     * | `totalItems` | integer | Total Order Items segmeted by `currencyCode` and `origin`|
     * | `totalValue` | integer | Total Value Amount segmeted by `currencyCode` and `origin`|
     * | `currencyCode` | string | Currency Code in ISO 4217  |
     * | `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
     * | `Count` | integer | Orders Count |
     * | `Facets` | object | Grouping Object |
     * | `Max` | object | Paging Details Object |
     * | `Mean` | object | Paging Details Object |
     * | `Min` | object | Paging Details Object |
     * | `Missing` | object | Paging Details Object |
     * | `StdDev` | object | Paging Details Object |
     * | `Sum` | object | Paging Details Object |
     * | `SumOfSquares` | object | Paging Details Object |
     */
    listOrders2(req: operations.ListOrders2Request, config?: AxiosRequestConfig): Promise<operations.ListOrders2Response>;
    /**
     * Start handling order
     *
     * @remarks
     * Change the status of an order to indicate that is is in `handling`.
     *
     *
  > Expect a `status 204` response with no content in case of a successful request.
     *
     *
  > The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
     */
    startHandling2(req: operations.StartHandling2Request, config?: AxiosRequestConfig): Promise<operations.StartHandling2Response>;
}
