# promotionsAndTaxes

### Available Operations

* [archivePromotion](#archivepromotion) - Archive Promotion or Tax
* [createOrUpdateCalculatorConfiguration](#createorupdatecalculatorconfiguration) - Create or Update Promotion or Tax
* [getAllBenefits](#getallbenefits) - Get All Promotions
* [getAllTaxes](#getalltaxes) - Get All Taxes
* [getArchivedPromotions](#getarchivedpromotions) - List Archived Promotions
* [getArchivedTaxes](#getarchivedtaxes) - List Archived Taxes
* [getCalculatorConfigurationById](#getcalculatorconfigurationbyid) - Get Promotion or Tax by ID
* [unarchivePromotion](#unarchivepromotion) - Unarchive Promotion or Tax
* [postApiRnbPvtImportCalculatorConfiguration](#postapirnbpvtimportcalculatorconfiguration) - Create Multiple SKU Promotion
* [putApiRnbPvtImportCalculatorConfigurationPromotionId](#putapirnbpvtimportcalculatorconfigurationpromotionid) - Update Multiple SKU Promotion

## archivePromotion

Archives a Promotion or Tax by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArchivePromotionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchivePromotionRequest();
    $request->accept = 'hic';
    $request->contentType = 'saepe';
    $request->idCalculatorConfiguration = 'd8a1cd2e-b667-4054-b3ae-b79124c7218e';

    $response = $sdk->promotionsAndTaxes->archivePromotion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrUpdateCalculatorConfiguration

Creates or updates a specific Promotion by its Promotion ID or a specific Tax by its Tax ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodyBrands;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodyCategories;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodyCollections;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodyProducts;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodySkus;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodySkusGift;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrUpdateCalculatorConfigurationRequest();
    $request->accept = 'fuga';
    $request->contentType = 'in';
    $request->requestBody = new CreateOrUpdateCalculatorConfigurationRequestBody();
    $request->requestBody->absoluteShippingDiscountValue = 3595.08;
    $request->requestBody->accumulateWithManualPrice = false;
    $request->requestBody->activateGiftsMultiplier = false;
    $request->requestBody->activeDaysOfWeek = [
        'Monday',
        'Monday',
        'Monday',
    ];
    $request->requestBody->affiliates = [
        new CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates(),
        new CreateOrUpdateCalculatorConfigurationRequestBodyAffiliates(),
    ];
    $request->requestBody->applyToAllShippings = false;
    $request->requestBody->areSalesChannelIdsExclusive = false;
    $request->requestBody->beginDateUtc = '2020-05-01T18:47:15.89Z';
    $request->requestBody->brands = [
        new CreateOrUpdateCalculatorConfigurationRequestBodyBrands(),
        new CreateOrUpdateCalculatorConfigurationRequestBodyBrands(),
        new CreateOrUpdateCalculatorConfigurationRequestBodyBrands(),
        new CreateOrUpdateCalculatorConfigurationRequestBodyBrands(),
    ];
    $request->requestBody->brandsAreInclusive = true;
    $request->requestBody->campaigns = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->requestBody->cardIssuers = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->requestBody->categories = [
        new CreateOrUpdateCalculatorConfigurationRequestBodyCategories(),
    ];
    $request->requestBody->categoriesAreInclusive = true;
    $request->requestBody->clusterExpressions = [
        'birthday=true',
        'birthday=true',
    ];
    $request->requestBody->collections = [
        new CreateOrUpdateCalculatorConfigurationRequestBodyCollections(),
    ];
    $request->requestBody->collections1BuyTogether = [
        '1',
        '1',
        '1',
        '1',
    ];
    $request->requestBody->collections2BuyTogether = [
        'omnis',
        'nemo',
    ];
    $request->requestBody->collectionsIsInclusive = false;
    $request->requestBody->compareListPriceAndPrice = false;
    $request->requestBody->conditionsIds = [
        '1',
        '1',
    ];
    $request->requestBody->coupon = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->requestBody->cumulative = false;
    $request->requestBody->daysAgoOfPurchases = 988374;
    $request->requestBody->description = 'Description of the promotion.';
    $request->requestBody->disableDeal = false;
    $request->requestBody->discountType = 'percentual';
    $request->requestBody->enableBuyTogetherPerSku = false;
    $request->requestBody->endDateUtc = '2020-05-01T18:47:15.89Z';
    $request->requestBody->firstBuyIsProfileOptimistic = false;
    $request->requestBody->giftListTypes = [
        'Gift SKU',
        'Gift SKU',
        'Gift SKU',
        'Gift SKU',
    ];
    $request->requestBody->idCalculatorConfiguration = 'ba087fa9-8587-44b3-8ef1-ade8d053e9e9';
    $request->requestBody->idSeller = '1';
    $request->requestBody->idSellerIsInclusive = false;
    $request->requestBody->idsSalesChannel = [
        'Principal',
    ];
    $request->requestBody->installment = 652790;
    $request->requestBody->isActive = true;
    $request->requestBody->isArchived = false;
    $request->requestBody->isDifferentListPriceAndPrice = false;
    $request->requestBody->isFeatured = true;
    $request->requestBody->isFirstBuy = false;
    $request->requestBody->isMinMaxInstallments = false;
    $request->requestBody->isSlaSelected = false;
    $request->requestBody->itemMaxPrice = 2088.76;
    $request->requestBody->itemMinPrice = 6350.59;
    $request->requestBody->lastModified = '2021-02-23T20:58:38.7963862Z';
    $request->requestBody->listSku1BuyTogether = [
        'repellat',
    ];
    $request->requestBody->listSku2BuyTogether = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->requestBody->marketingTags = [
        'MKT1',
        'MKT1',
    ];
    $request->requestBody->marketingTagsAreNotInclusive = false;
    $request->requestBody->maxInstallment = 474697;
    $request->requestBody->maxNumberOfAffectedItems = 244425;
    $request->requestBody->maxNumberOfAffectedItemsGroupKey = 'perCart';
    $request->requestBody->maxPricesPerItems = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->requestBody->maxUsage = 674752;
    $request->requestBody->maxUsagePerClient = 656330;
    $request->requestBody->maximumUnitPriceDiscount = 3172.02;
    $request->requestBody->merchants = [
        'quo',
    ];
    $request->requestBody->minInstallment = 196582;
    $request->requestBody->minimumQuantityBuyTogether = 949572;
    $request->requestBody->multipleUsePerClient = false;
    $request->requestBody->name = 'Promoção Social Seller';
    $request->requestBody->newOffset = -3;
    $request->requestBody->nominalDiscountValue = 3687.25;
    $request->requestBody->nominalRewardValue = 6625.27;
    $request->requestBody->nominalShippingDiscountValue = 8209.94;
    $request->requestBody->nominalTax = 135.71;
    $request->requestBody->offset = -3;
    $request->requestBody->orderStatusRewardValue = 'invoiced';
    $request->requestBody->origin = 'marketplace';
    $request->requestBody->paymentsMethods = [
        new CreateOrUpdateCalculatorConfigurationRequestBodyPaymentsMethods(),
    ];
    $request->requestBody->paymentsRules = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->requestBody->percentualDiscountValue = 10;
    $request->requestBody->percentualDiscountValueList = [
        10,
        10,
        10,
        10,
    ];
    $request->requestBody->percentualDiscountValueList1 = 9764.6;
    $request->requestBody->percentualDiscountValueList2 = 8781.94;
    $request->requestBody->percentualRewardValue = 4686.51;
    $request->requestBody->percentualShippingDiscountValue = 5096.24;
    $request->requestBody->percentualTax = 9767.62;
    $request->requestBody->products = [
        new CreateOrUpdateCalculatorConfigurationRequestBodyProducts(),
    ];
    $request->requestBody->productsAreInclusive = true;
    $request->requestBody->productsSpecifications = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->requestBody->quantityToAffectBuyTogether = 39187;
    $request->requestBody->rebatePercentualDiscountValue = 4417.11;
    $request->requestBody->restrictionsBins = [
        '1234',
        '1234',
    ];
    $request->requestBody->shippingPercentualTax = 9795.87;
    $request->requestBody->shouldDistributeDiscountAmongMatchedItems = false;
    $request->requestBody->skus = [
        new CreateOrUpdateCalculatorConfigurationRequestBodySkus(),
    ];
    $request->requestBody->skusAreInclusive = true;
    $request->requestBody->skusGift = new CreateOrUpdateCalculatorConfigurationRequestBodySkusGift();
    $request->requestBody->skusGift->gifts = [
        'dolore',
        'iusto',
    ];
    $request->requestBody->skusGift->quantitySelectable = 118727;
    $request->requestBody->slasIds = [
        'Express',
        'Express',
        'Express',
    ];
    $request->requestBody->stores = [
        'accusamus',
        'commodi',
    ];
    $request->requestBody->storesAreInclusive = false;
    $request->requestBody->totalValueCeling = 9182.36;
    $request->requestBody->totalValueFloor = 641.47;
    $request->requestBody->totalValueIncludeAllItems = false;
    $request->requestBody->totalValueMode = 'IncludeMatchedItems';
    $request->requestBody->totalValuePurchase = 2168.22;
    $request->requestBody->type = 'regular';
    $request->requestBody->useNewProgressiveAlgorithm = false;
    $request->requestBody->utmCampaign = 'testSource';
    $request->requestBody->utmSource = 'testSource';
    $request->requestBody->zipCodeRanges = [
        new CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges(),
        new CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges(),
        new CreateOrUpdateCalculatorConfigurationRequestBodyZipCodeRanges(),
    ];

    $response = $sdk->promotionsAndTaxes->createOrUpdateCalculatorConfiguration($request);

    if ($response->createOrUpdateCalculatorConfiguration200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllBenefits

Retrieves all promotions from an account. 

> 📘 Onboarding guide 
>
> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllBenefitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllBenefitsRequest();
    $request->accept = 'molestias';
    $request->contentType = 'excepturi';

    $response = $sdk->promotionsAndTaxes->getAllBenefits($request);

    if ($response->getAllBenefits200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllTaxes

Retrieves all taxes from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllTaxesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllTaxesRequest();
    $request->accept = 'pariatur';
    $request->contentType = 'modi';

    $response = $sdk->promotionsAndTaxes->getAllTaxes($request);

    if ($response->getAllTaxes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArchivedPromotions

Lists all archived promotions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetArchivedPromotionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArchivedPromotionsRequest();
    $request->accept = 'praesentium';
    $request->contentType = 'rem';

    $response = $sdk->promotionsAndTaxes->getArchivedPromotions($request);

    if ($response->getArchivedPromotions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArchivedTaxes

Lists all archived taxes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetArchivedTaxesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArchivedTaxesRequest();
    $request->accept = 'voluptates';
    $request->contentType = 'quasi';

    $response = $sdk->promotionsAndTaxes->getArchivedTaxes($request);

    if ($response->getArchivedTaxes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalculatorConfigurationById

Retrieves a specific promotion by its Promotion ID or a specific tax by its Tax ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalculatorConfigurationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalculatorConfigurationByIdRequest();
    $request->accept = 'repudiandae';
    $request->contentType = 'sint';
    $request->idCalculatorConfiguration = 'd8a1cd2e-b667-4054-b3ae-b79124c7218e';

    $response = $sdk->promotionsAndTaxes->getCalculatorConfigurationById($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unarchivePromotion

Unarchives a Promotion or Tax by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnarchivePromotionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnarchivePromotionRequest();
    $request->accept = 'veritatis';
    $request->contentType = 'itaque';
    $request->idCalculatorConfiguration = 'd8a1cd2e-b667-4054-b3ae-b79124c7218e';

    $response = $sdk->promotionsAndTaxes->unarchivePromotion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiRnbPvtImportCalculatorConfiguration

Creates a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect. 
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostApiRnbPvtImportCalculatorConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiRnbPvtImportCalculatorConfigurationRequest();
    $request->accept = 'incidunt';
    $request->contentType = 'text/csv';
    $request->requestBody = 'enim';
    $request->xVTEXAccumulateWithManualPrices = false;
    $request->xVTEXCalculatorName = 'Test';
    $request->xVTEXClusterExpression = 'cluster_name=true';
    $request->xVTEXClusterOperator = 'any';
    $request->xVTEXCumulative = false;
    $request->xVTEXEndDate = '2020-08-18T16:30:00+3:00';
    $request->xVTEXStartDate = '2020-08-18T16:00:00+3:00';

    $response = $sdk->promotionsAndTaxes->postApiRnbPvtImportCalculatorConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiRnbPvtImportCalculatorConfigurationPromotionId

Updates information from a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect.  
> ⚠️ 
>
> The limit of SKUs on a Multiple Effects promotion is 400.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutApiRnbPvtImportCalculatorConfigurationPromotionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiRnbPvtImportCalculatorConfigurationPromotionIdRequest();
    $request->accept = 'consequatur';
    $request->contentType = 'text/csv';
    $request->requestBody = 'est';
    $request->xVTEXAccumulateWithManualPrices = false;
    $request->xVTEXCalculatorName = 'Test';
    $request->xVTEXClusterExpression = 'cluster_name=true';
    $request->xVTEXClusterOperator = 'any';
    $request->xVTEXCumulative = false;
    $request->xVTEXEndDate = '2020-08-18T16:30:00+3:00';
    $request->xVTEXStartDate = '2020-08-18T16:00:00+3:00';
    $request->promotionId = 'dc6b6f59-ec2b-4a13-8490-0d1e0c53ddf9';

    $response = $sdk->promotionsAndTaxes->putApiRnbPvtImportCalculatorConfigurationPromotionId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
