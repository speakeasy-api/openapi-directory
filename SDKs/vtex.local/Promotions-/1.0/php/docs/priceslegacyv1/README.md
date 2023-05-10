# pricesLegacyV1

### Available Operations

* [deletebyskuId](#deletebyskuid) - Delete Price by SKU Id
* [getallpaged](#getallpaged) - Get all paged prices
* [pricebycontext](#pricebycontext) - Get Price by context
* [pricebyskuId](#pricebyskuid) - Get Price by SKU ID
* [pricebyskuIdandtradePolicy](#pricebyskuidandtradepolicy) - Get Price by SKU ID and Trade Policy
* [saveprice](#saveprice) - Save Price

## deletebyskuId

Delete all prices from an SKU. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletebyskuIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletebyskuIdRequest();
    $request->accept = 'occaecati';
    $request->contentType = 'fugit';
    $request->an = '{{accountName}}';
    $request->skuId = 'deleniti';

    $response = $sdk->pricesLegacyV1->deletebyskuId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getallpaged

Get all paged prices. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetallpagedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetallpagedRequest();
    $request->accept = 'hic';
    $request->contentType = 'optio';
    $request->an = '{{accountName}}';
    $request->page = 'totam';
    $request->pageSize = 'beatae';

    $response = $sdk->pricesLegacyV1->getallpaged($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pricebycontext

Get price by context. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PricebycontextRequest;
use \OpenAPI\OpenAPI\Models\Shared\PricebycontextRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PricebycontextRequest();
    $request->accept = 'commodi';
    $request->contentType = 'molestiae';
    $request->pricebycontextRequest = new PricebycontextRequest();
    $request->pricebycontextRequest->id = 264555;
    $request->pricebycontextRequest->itemId = 186332;
    $request->pricebycontextRequest->salesChannel = 774234;
    $request->pricebycontextRequest->sellerId = 'cum';
    $request->pricebycontextRequest->validFrom = 'esse';
    $request->pricebycontextRequest->validTo = 'ipsum';
    $request->an = '{{accountName}}';

    $response = $sdk->pricesLegacyV1->pricebycontext($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pricebyskuId

Price by SKU ID              
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://developers.vtex.com/docs/api-reference/pricing-api)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PricebyskuIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PricebyskuIdRequest();
    $request->accept = 'excepturi';
    $request->contentType = 'aspernatur';
    $request->an = '{{accountName}}';
    $request->skuId = 'perferendis';

    $response = $sdk->pricesLegacyV1->pricebyskuId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pricebyskuIdandtradePolicy

Retrieve price by SKU ID and Trade Policy. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PricebyskuIdandtradePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PricebyskuIdandtradePolicyRequest();
    $request->accept = 'ad';
    $request->contentType = 'natus';
    $request->an = '{{accountName}}';
    $request->skuId = 'sed';
    $request->tradePolicy = 'iste';

    $response = $sdk->pricesLegacyV1->pricebyskuIdandtradePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveprice

Save price. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SavepriceRequest;
use \OpenAPI\OpenAPI\Models\Shared\SavepriceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SavepriceRequest();
    $request->accept = 'dolor';
    $request->contentType = 'natus';
    $request->requestBody = [
        new SavepriceRequest(),
        new SavepriceRequest(),
    ];
    $request->an = '{{accountName}}';

    $response = $sdk->pricesLegacyV1->saveprice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
