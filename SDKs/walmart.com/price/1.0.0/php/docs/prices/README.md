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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategies;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategiesAdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStrategyRequestBodyStrategiesStrategyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStrategyRequest();
    $request->requestBody = new CreateStrategyRequestBody();
    $request->requestBody->enableRepricerForPromotion = true;
    $request->requestBody->enabled = true;
    $request->requestBody->repricerStrategy = 'Buy Box Strategy For testing';
    $request->requestBody->strategies = [
        new CreateStrategyRequestBodyStrategies(),
        new CreateStrategyRequestBodyStrategies(),
        new CreateStrategyRequestBodyStrategies(),
        new CreateStrategyRequestBodyStrategies(),
    ];
    $request->wmConsumerChannelType = 'corrupti';
    $request->wmQosCorrelationId = 'illum';
    $request->wmSecAccessToken = 'vel';
    $request->wmSvcName = 'error';

    $response = $sdk->prices->createStrategy($request);

    if ($response->createStrategy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStrategy

Deletes the strategy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStrategyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStrategyRequest();
    $request->wmConsumerChannelType = 'deserunt';
    $request->wmQosCorrelationId = 'suscipit';
    $request->wmSecAccessToken = 'iure';
    $request->wmSvcName = 'magnam';
    $request->strategyCollectionId = 'debitis';

    $response = $sdk->prices->deleteStrategy($request);

    if ($response->deleteStrategy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepricerFeed

Add/Remove one or more items from a strategy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepricerFeedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepricerFeedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetRepricerFeedRequestBodyItem;
use \OpenAPI\OpenAPI\Models\Operations\GetRepricerFeedRequestBodyItemStrategy;
use \OpenAPI\OpenAPI\Models\Operations\GetRepricerFeedRequestBodyItemFeedHeader;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepricerFeedRequest();
    $request->requestBody = new GetRepricerFeedRequestBody();
    $request->requestBody->item = [
        new GetRepricerFeedRequestBodyItem(),
    ];
    $request->requestBody->itemFeedHeader = new GetRepricerFeedRequestBodyItemFeedHeader();
    $request->requestBody->itemFeedHeader->locale = 'en';
    $request->requestBody->itemFeedHeader->mart = 'WALMART_US';
    $request->requestBody->itemFeedHeader->processMode = 'REPLACE';
    $request->requestBody->itemFeedHeader->sellingChannel = 'repricerstrategy';
    $request->requestBody->itemFeedHeader->subset = 'EXTERNAL';
    $request->requestBody->itemFeedHeader->version = '1.0';
    $request->wmConsumerChannelType = 'delectus';
    $request->wmQosCorrelationId = 'tempora';
    $request->wmSecAccessToken = 'suscipit';
    $request->wmSvcName = 'molestiae';

    $response = $sdk->prices->getRepricerFeed($request);

    if ($response->getRepricerFeed200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStrategies

Get the list of strategies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStrategiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStrategiesRequest();
    $request->wmConsumerChannelType = 'minus';
    $request->wmQosCorrelationId = 'placeat';
    $request->wmSecAccessToken = 'voluptatum';
    $request->wmSvcName = 'iusto';

    $response = $sdk->prices->getStrategies($request);

    if ($response->getStrategies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optCapProgramInPrice

This API helps Sellers to completely opt-in or opt-out from CAP program.

If the subsidyEnrolled value = "true", the Seller enrolls in the CAP program. All eligible SKUs (current and future) are by default opt-in. Seller should use the SKU opt-in/opt-out API to opt-out individual items.

If the subsidyEnrolled value = "false", the Seller stops participating in the CAP program and all eligible SKUs (current and future) are opt-out of the CAP program.

View Guide
</doc/us/mp/us-mp-price/#1290>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptCapProgramInPriceRequest;
use \OpenAPI\OpenAPI\Models\Operations\OptCapProgramInPriceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptCapProgramInPriceRequest();
    $request->requestBody = new OptCapProgramInPriceRequestBody();
    $request->requestBody->subsidyEnrolled = false;
    $request->requestBody->subsidyPreference = false;
    $request->wmConsumerChannelType = 'excepturi';
    $request->wmQosCorrelationId = 'nisi';
    $request->wmSecAccessToken = 'recusandae';
    $request->wmSvcName = 'temporibus';

    $response = $sdk->prices->optCapProgramInPrice($request);

    if ($response->optCapProgramInPrice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PriceBulkUploadsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PriceBulkUploadsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PriceBulkUploadsRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\PriceBulkUploadsFeedTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PriceBulkUploadsRequest();
    $request->requestBody = new PriceBulkUploadsRequestBody();
    $request->requestBody->file = new PriceBulkUploadsRequestBodyFile();
    $request->requestBody->file->content = 'ab';
    $request->requestBody->file->file = 'quis';
    $request->wmConsumerChannelType = 'veritatis';
    $request->wmQosCorrelationId = 'deserunt';
    $request->wmSecAccessToken = 'perferendis';
    $request->wmSvcName = 'ipsam';
    $request->feedType = PriceBulkUploadsFeedTypeEnum::CPT_SELLER_ELIGIBILITY;

    $response = $sdk->prices->priceBulkUploads($request);

    if ($response->priceBulkUploads200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePrice

Updates the regular price for a given item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricing;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingComparisonPrice;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingComparisonPriceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingCurrentPrice;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingCurrentPriceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingPriceDisplayCodesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyPricingProcessModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePriceRequestBodyReplaceAllEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePriceRequest();
    $request->requestBody = new UpdatePriceRequestBody();
    $request->requestBody->definitions = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->requestBody->offerId = 'esse';
    $request->requestBody->pricing = [
        new UpdatePriceRequestBodyPricing(),
        new UpdatePriceRequestBodyPricing(),
        new UpdatePriceRequestBodyPricing(),
    ];
    $request->requestBody->replaceAll = UpdatePriceRequestBodyReplaceAllEnum::FALSE;
    $request->requestBody->sku = 'dolorum';
    $request->wmConsumerChannelType = 'dicta';
    $request->wmQosCorrelationId = 'nam';
    $request->wmSecAccessToken = 'officia';
    $request->wmSvcName = 'occaecati';

    $response = $sdk->prices->updatePrice($request);

    if ($response->updatePrice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStrategy

Updates the existing strategy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStrategyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStrategyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStrategyRequestBodyStrategies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStrategyRequestBodyStrategiesAdjustmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStrategyRequestBodyStrategiesStrategyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStrategyRequest();
    $request->requestBody = new UpdateStrategyRequestBody();
    $request->requestBody->enableRepricerForPromotion = true;
    $request->requestBody->enabled = true;
    $request->requestBody->repricerStrategy = 'Buy Box Strategy For testing';
    $request->requestBody->strategies = [
        new UpdateStrategyRequestBodyStrategies(),
    ];
    $request->wmConsumerChannelType = 'deleniti';
    $request->wmQosCorrelationId = 'hic';
    $request->wmSecAccessToken = 'optio';
    $request->wmSvcName = 'totam';
    $request->strategyCollectionId = 'beatae';

    $response = $sdk->prices->updateStrategy($request);

    if ($response->updateStrategy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
