# prices

### Available Operations

* [createStrategy](#createstrategy) - Create Repricer Strategy
* [deleteStrategy](#deletestrategy) - Delete Repricer Strategy
* [getRepricerFeed](#getrepricerfeed) - Assign/Unassign items to/from Repricer Strategy
* [getStrategies](#getstrategies) - List of Repricer Strategies
* [optCapProgramInPrice](#optcapprograminprice) - Set up CAP SKU All
* [priceBulkUploads](#pricebulkuploads) - Update bulk prices (Multiple)
* [updatePrice](#updateprice) - Update a price
* [updateStrategy](#updatestrategy) - Update Repricer Strategy

## createStrategy

Creates a new strategy for the seller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStrategyRequest;
import org.openapis.openapi.models.operations.CreateStrategyRequestBody;
import org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategies;
import org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum;
import org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategiesStrategyTypeEnum;
import org.openapis.openapi.models.operations.CreateStrategyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateStrategyRequest req = new CreateStrategyRequest(                new CreateStrategyRequestBody() {{
                                enableRepricerForPromotion = true;
                                enabled = true;
                                repricerStrategy = "Buy Box Strategy For testing";
                                strategies = new org.openapis.openapi.models.operations.CreateStrategyRequestBodyStrategies[]{{
                                    add(new CreateStrategyRequestBodyStrategies() {{
                                        adjustmentType = CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum.UNIT;
                                        adjustmentValue = 1.2;
                                        strategyType = CreateStrategyRequestBodyStrategiesStrategyTypeEnum.BUY_BOX_PRICE;
                                    }}),
                                    add(new CreateStrategyRequestBodyStrategies() {{
                                        adjustmentType = CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum.PERCENTAGE;
                                        adjustmentValue = 1.2;
                                        strategyType = CreateStrategyRequestBodyStrategiesStrategyTypeEnum.BUY_BOX_PRICE;
                                    }}),
                                }};
                            }};, "delectus", "tempora", "suscipit") {{
                wmConsumerChannelType = "molestiae";
            }};            

            CreateStrategyResponse res = sdk.prices.createStrategy(req);

            if (res.createStrategy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStrategy

Deletes the strategy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStrategyRequest;
import org.openapis.openapi.models.operations.DeleteStrategyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteStrategyRequest req = new DeleteStrategyRequest("minus", "placeat", "voluptatum", "iusto") {{
                wmConsumerChannelType = "excepturi";
            }};            

            DeleteStrategyResponse res = sdk.prices.deleteStrategy(req);

            if (res.deleteStrategy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepricerFeed

Add/Remove one or more items from a strategy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepricerFeedRequest;
import org.openapis.openapi.models.operations.GetRepricerFeedRequestBody;
import org.openapis.openapi.models.operations.GetRepricerFeedRequestBodyItem;
import org.openapis.openapi.models.operations.GetRepricerFeedRequestBodyItemFeedHeader;
import org.openapis.openapi.models.operations.GetRepricerFeedRequestBodyItemStrategy;
import org.openapis.openapi.models.operations.GetRepricerFeedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepricerFeedRequest req = new GetRepricerFeedRequest(                new GetRepricerFeedRequestBody() {{
                                item = new org.openapis.openapi.models.operations.GetRepricerFeedRequestBodyItem[]{{
                                    add(new GetRepricerFeedRequestBodyItem() {{
                                        strategy = new GetRepricerFeedRequestBodyItemStrategy() {{
                                            maximumSellerAllowedPrice = 8;
                                            minimumSellerAllowedPrice = 7.2;
                                            repricerStrategy = "Match Competitive Price";
                                            sku = "06068064605122shoe";
                                        }};
                                    }}),
                                    add(new GetRepricerFeedRequestBodyItem() {{
                                        strategy = new GetRepricerFeedRequestBodyItemStrategy() {{
                                            maximumSellerAllowedPrice = 8;
                                            minimumSellerAllowedPrice = 7.2;
                                            repricerStrategy = "Match Competitive Price";
                                            sku = "06068064605122shoe";
                                        }};
                                    }}),
                                }};
                                itemFeedHeader = new GetRepricerFeedRequestBodyItemFeedHeader() {{
                                    locale = "en";
                                    mart = "WALMART_US";
                                    processMode = "REPLACE";
                                    sellingChannel = "repricerstrategy";
                                    subset = "EXTERNAL";
                                    version = "1.0";
                                }};;
                            }};, "recusandae", "temporibus", "ab") {{
                wmConsumerChannelType = "quis";
            }};            

            GetRepricerFeedResponse res = sdk.prices.getRepricerFeed(req);

            if (res.getRepricerFeed200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStrategies

Get the list of strategies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStrategiesRequest;
import org.openapis.openapi.models.operations.GetStrategiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStrategiesRequest req = new GetStrategiesRequest("veritatis", "deserunt", "perferendis") {{
                wmConsumerChannelType = "ipsam";
            }};            

            GetStrategiesResponse res = sdk.prices.getStrategies(req);

            if (res.getStrategies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optCapProgramInPrice

This API helps Sellers to completely opt-in or opt-out from CAP program.

If the subsidyEnrolled value = "true", the Seller enrolls in the CAP program. All eligible SKUs (current and future) are by default opt-in. Seller should use the SKU opt-in/opt-out API to opt-out individual items.

If the subsidyEnrolled value = "false", the Seller stops participating in the CAP program and all eligible SKUs (current and future) are opt-out of the CAP program.

View Guide
</doc/us/mp/us-mp-price/#1290>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptCapProgramInPriceRequest;
import org.openapis.openapi.models.operations.OptCapProgramInPriceRequestBody;
import org.openapis.openapi.models.operations.OptCapProgramInPriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptCapProgramInPriceRequest req = new OptCapProgramInPriceRequest(                new OptCapProgramInPriceRequestBody() {{
                                subsidyEnrolled = false;
                                subsidyPreference = false;
                            }};, "repellendus", "sapiente", "quo") {{
                wmConsumerChannelType = "odit";
            }};            

            OptCapProgramInPriceResponse res = sdk.prices.optCapProgramInPrice(req);

            if (res.optCapProgramInPrice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## priceBulkUploads

Updates prices in bulk.

In one Feed you can update up to 10,000 items in bulk. To ensure optimal Feed processing time, we recommend sending no more than 1000 items in one Feed and keeping the Feed sizes below 10 MB.

The price sequence guarantee is observed by the bulk price update functionality, subject to the following rules:

The timestamp used to determine precedence is passed in the request headers. All price updates in the feed are considered to have the same timestamp. The timestamp in the XML file is used only for auditing.
You can send a single SKU multiple times in one Feed. If a SKU is repeated in a Feed, the price will be set for that SKU on Walmart.com, but there is no guarantee as to which SKU's price within that feed will be used.
This API should be used in preference to the update a price. It should be called no sooner than 24 hours after a new item is set up and a wpid (Walmart Part ID) is available. Thereafter, the bulk price update has an service level agreement (SLA) of 15 minutes.

After the update is submitted, wait for at least five minutes before verifying whether the bulk price update was successful. Individual SKU price update success or failure is only available after the entire feed is processed.

If a SKU's price update fails (for example, multiple price updates were sent for the same SKU in a single feed), an error will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PriceBulkUploadsFeedTypeEnum;
import org.openapis.openapi.models.operations.PriceBulkUploadsRequest;
import org.openapis.openapi.models.operations.PriceBulkUploadsRequestBody;
import org.openapis.openapi.models.operations.PriceBulkUploadsRequestBodyFile;
import org.openapis.openapi.models.operations.PriceBulkUploadsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PriceBulkUploadsRequest req = new PriceBulkUploadsRequest(                new PriceBulkUploadsRequestBody(                new PriceBulkUploadsRequestBodyFile("at".getBytes(), "at"););, "maiores", "molestiae", "quod", PriceBulkUploadsFeedTypeEnum.CPT_SELLER_ELIGIBILITY) {{
                wmConsumerChannelType = "esse";
            }};            

            PriceBulkUploadsResponse res = sdk.prices.priceBulkUploads(req);

            if (res.priceBulkUploads200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePrice

Updates the regular price for a given item.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePriceRequest;
import org.openapis.openapi.models.operations.UpdatePriceRequestBody;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricing;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingComparisonPrice;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingComparisonPriceTypeEnum;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingCurrentPrice;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingCurrentPriceTypeEnum;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingPriceDisplayCodesEnum;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricingProcessModeEnum;
import org.openapis.openapi.models.operations.UpdatePriceRequestBodyReplaceAllEnum;
import org.openapis.openapi.models.operations.UpdatePriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePriceRequest req = new UpdatePriceRequest(                new UpdatePriceRequestBody(                new org.openapis.openapi.models.operations.UpdatePriceRequestBodyPricing[]{{
                                                add(new UpdatePriceRequestBodyPricing(                new UpdatePriceRequestBodyPricingCurrentPrice() {{
                                                                    amount = 4146.62;
                                                                    currency = UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum.USD;
                                                                }};, UpdatePriceRequestBodyPricingCurrentPriceTypeEnum.BASE) {{
                                                    comparisonPrice = new UpdatePriceRequestBodyPricingComparisonPrice() {{
                                                        amount = 7805.29;
                                                        currency = UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum.CAD;
                                                    }};
                                                    comparisonPriceType = UpdatePriceRequestBodyPricingComparisonPriceTypeEnum.BASE;
                                                    currentPrice = new UpdatePriceRequestBodyPricingCurrentPrice() {{
                                                        amount = 1182.74;
                                                        currency = UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum.CAD;
                                                    }};
                                                    currentPriceType = UpdatePriceRequestBodyPricingCurrentPriceTypeEnum.REDUCED;
                                                    effectiveDate = OffsetDateTime.parse("2022-09-18T08:27:00.721Z");
                                                    expirationDate = OffsetDateTime.parse("2021-02-10T09:24:01.909Z");
                                                    priceDisplayCodes = UpdatePriceRequestBodyPricingPriceDisplayCodesEnum.CHECKOUT;
                                                    processMode = UpdatePriceRequestBodyPricingProcessModeEnum.DELETE;
                                                    promoId = "beatae";
                                                }}),
                                                add(new UpdatePriceRequestBodyPricing(                new UpdatePriceRequestBodyPricingCurrentPrice() {{
                                                                    amount = 2223.21;
                                                                    currency = UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum.CAD;
                                                                }};, UpdatePriceRequestBodyPricingCurrentPriceTypeEnum.REDUCED) {{
                                                    comparisonPrice = new UpdatePriceRequestBodyPricingComparisonPrice() {{
                                                        amount = 1863.32;
                                                        currency = UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum.CAD;
                                                    }};
                                                    comparisonPriceType = UpdatePriceRequestBodyPricingComparisonPriceTypeEnum.BASE;
                                                    currentPrice = new UpdatePriceRequestBodyPricingCurrentPrice() {{
                                                        amount = 7369.18;
                                                        currency = UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum.USD;
                                                    }};
                                                    currentPriceType = UpdatePriceRequestBodyPricingCurrentPriceTypeEnum.BASE;
                                                    effectiveDate = OffsetDateTime.parse("2022-09-24T06:58:38.511Z");
                                                    expirationDate = OffsetDateTime.parse("2022-09-04T16:31:28.618Z");
                                                    priceDisplayCodes = UpdatePriceRequestBodyPricingPriceDisplayCodesEnum.CHECKOUT;
                                                    processMode = UpdatePriceRequestBodyPricingProcessModeEnum.UPSERT;
                                                    promoId = "iste";
                                                }}),
                                                add(new UpdatePriceRequestBodyPricing(                new UpdatePriceRequestBodyPricingCurrentPrice() {{
                                                                    amount = 6667.67;
                                                                    currency = UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum.CAD;
                                                                }};, UpdatePriceRequestBodyPricingCurrentPriceTypeEnum.CLEARANCE) {{
                                                    comparisonPrice = new UpdatePriceRequestBodyPricingComparisonPrice() {{
                                                        amount = 9437.49;
                                                        currency = UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum.CAD;
                                                    }};
                                                    comparisonPriceType = UpdatePriceRequestBodyPricingComparisonPriceTypeEnum.BASE;
                                                    currentPrice = new UpdatePriceRequestBodyPricingCurrentPrice() {{
                                                        amount = 6818.2;
                                                        currency = UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum.USD;
                                                    }};
                                                    currentPriceType = UpdatePriceRequestBodyPricingCurrentPriceTypeEnum.REDUCED;
                                                    effectiveDate = OffsetDateTime.parse("2022-02-15T23:12:00.119Z");
                                                    expirationDate = OffsetDateTime.parse("2020-11-28T02:15:07.561Z");
                                                    priceDisplayCodes = UpdatePriceRequestBodyPricingPriceDisplayCodesEnum.CART;
                                                    processMode = UpdatePriceRequestBodyPricingProcessModeEnum.UPSERT;
                                                    promoId = "reiciendis";
                                                }}),
                                            }}, "dolores") {{
                                definitions = new java.util.HashMap<String, Object>() {{
                                    put("corporis", "explicabo");
                                }};
                                offerId = "nobis";
                                replaceAll = UpdatePriceRequestBodyReplaceAllEnum.TRUE;
                            }};, "omnis", "nemo", "minima") {{
                wmConsumerChannelType = "excepturi";
            }};            

            UpdatePriceResponse res = sdk.prices.updatePrice(req);

            if (res.updatePrice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStrategy

Updates the existing strategy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStrategyRequest;
import org.openapis.openapi.models.operations.UpdateStrategyRequestBody;
import org.openapis.openapi.models.operations.UpdateStrategyRequestBodyStrategies;
import org.openapis.openapi.models.operations.UpdateStrategyRequestBodyStrategiesAdjustmentTypeEnum;
import org.openapis.openapi.models.operations.UpdateStrategyRequestBodyStrategiesStrategyTypeEnum;
import org.openapis.openapi.models.operations.UpdateStrategyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateStrategyRequest req = new UpdateStrategyRequest(                new UpdateStrategyRequestBody() {{
                                enableRepricerForPromotion = true;
                                enabled = true;
                                repricerStrategy = "Buy Box Strategy For testing";
                                strategies = new org.openapis.openapi.models.operations.UpdateStrategyRequestBodyStrategies[]{{
                                    add(new UpdateStrategyRequestBodyStrategies() {{
                                        adjustmentType = UpdateStrategyRequestBodyStrategiesAdjustmentTypeEnum.UNIT;
                                        adjustmentValue = 1.2;
                                        strategyType = UpdateStrategyRequestBodyStrategiesStrategyTypeEnum.EXTERNAL_PRICE;
                                    }}),
                                }};
                            }};, "doloribus", "sapiente", "architecto", "mollitia") {{
                wmConsumerChannelType = "dolorem";
            }};            

            UpdateStrategyResponse res = sdk.prices.updateStrategy(req);

            if (res.updateStrategy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
