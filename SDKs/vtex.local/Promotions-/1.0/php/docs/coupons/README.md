# coupons

### Available Operations

* [archivebycouponcode](#archivebycouponcode) - Archive coupon by coupon code
* [getall](#getall) - Get all coupons
* [getarchivedbycouponcode](#getarchivedbycouponcode) - Get archived coupon by coupon code
* [getbycouponcode](#getbycouponcode) - Get coupon by coupon code
* [getusage](#getusage) - Get coupon usage
* [massiveGeneration](#massivegeneration) - Coupon Massive Generation
* [unarchivebycouponcode](#unarchivebycouponcode) - Unarchive coupon by coupon code
* [update](#update) - Update coupon
* [postApiRnbPvtCoupon](#postapirnbpvtcoupon) - Create coupon
* [postApiRnbPvtMultipleCoupons](#postapirnbpvtmultiplecoupons) - Create multiple coupons

## archivebycouponcode

Archives a specifc coupon by its coupon code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArchivebycouponcodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchivebycouponcodeRequest();
    $request->accept = 'minus';
    $request->contentType = 'placeat';
    $request->couponCode = 'test';

    $response = $sdk->coupons->archivebycouponcode($request);

    if ($response->couponCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getall


> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.

 Retrieves all coupons from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetallRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetallRequest();
    $request->accept = 'voluptatum';
    $request->contentType = 'iusto';

    $response = $sdk->coupons->getall($request);

    if ($response->getall200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getarchivedbycouponcode

Retrieves a specific archived coupon by its coupon code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetarchivedbycouponcodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetarchivedbycouponcodeRequest();
    $request->accept = 'excepturi';
    $request->contentType = 'nisi';
    $request->couponCode = 'promo10';

    $response = $sdk->coupons->getarchivedbycouponcode($request);

    if ($response->getarchivedbycouponcode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getbycouponcode

Retrieves a specific coupon by its coupon code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetbycouponcodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetbycouponcodeRequest();
    $request->accept = 'recusandae';
    $request->contentType = 'temporibus';
    $request->couponCode = 'promo10';

    $response = $sdk->coupons->getbycouponcode($request);

    if ($response->getbycouponcode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getusage

Retrieves information about the coupon usage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetusageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetusageRequest();
    $request->accept = 'ab';
    $request->contentType = 'quis';
    $request->couponCode = 'test';

    $response = $sdk->coupons->getusage($request);

    if ($response->getusage200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## massiveGeneration

Generates a massive amount of coupons

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MassiveGenerationRequest;
use \OpenAPI\OpenAPI\Models\Operations\MassiveGenerationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MassiveGenerationRequest();
    $request->accept = 'veritatis';
    $request->contentType = 'deserunt';
    $request->requestBody = new MassiveGenerationRequestBody();
    $request->requestBody->couponCode = 'ctest';
    $request->requestBody->expirationIntervalPerUse = '00:00:00';
    $request->requestBody->maxItemsPerClient = 1;
    $request->requestBody->utmCampaign = 'cupom3';
    $request->requestBody->utmSource = 'cupom3';
    $request->quantity = 10;

    $response = $sdk->coupons->massiveGeneration($request);

    if ($response->couponCodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unarchivebycouponcode

Unarchives a specifc coupon by its coupon code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnarchivebycouponcodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnarchivebycouponcodeRequest();
    $request->accept = 'perferendis';
    $request->contentType = 'ipsam';
    $request->couponCode = 'test';

    $response = $sdk->coupons->unarchivebycouponcode($request);

    if ($response->couponCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## update

Updates information of a specific coupon.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRequest();
    $request->accept = 'repellendus';
    $request->contentType = 'sapiente';
    $request->requestBody = new UpdateRequestBody();
    $request->requestBody->couponCode = 'test';
    $request->requestBody->expirationIntervalPerUse = '00:00:00';
    $request->requestBody->isArchived = false;
    $request->requestBody->maxItemsPerClient = 10;
    $request->requestBody->utmCampaign = 'coupon3';
    $request->requestBody->utmSource = 'coupon3';

    $response = $sdk->coupons->update($request);

    if ($response->update200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiRnbPvtCoupon

Creates a single new coupon.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostApiRnbPvtCouponRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiRnbPvtCouponRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiRnbPvtCouponRequest();
    $request->accept = 'quo';
    $request->contentType = 'odit';
    $request->requestBody = new PostApiRnbPvtCouponRequestBody();
    $request->requestBody->couponCode = 'summersale10';
    $request->requestBody->expirationIntervalPerUse = '00:00:00';
    $request->requestBody->maxItemsPerClient = 10;
    $request->requestBody->utmCampaign = 'summer';
    $request->requestBody->utmSource = 'email';

    $response = $sdk->coupons->postApiRnbPvtCoupon($request);

    if ($response->postApiRnbPvtCoupon201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiRnbPvtMultipleCoupons

Creates multiple coupons with different coupon codes. This endpoint has a throttling of 60 requests per minute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostApiRnbPvtMultipleCouponsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiRnbPvtMultipleCouponsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiRnbPvtMultipleCouponsRequest();
    $request->accept = 'at';
    $request->contentType = 'at';
    $request->requestBody = [
        new PostApiRnbPvtMultipleCouponsRequestBody(),
        new PostApiRnbPvtMultipleCouponsRequestBody(),
        new PostApiRnbPvtMultipleCouponsRequestBody(),
        new PostApiRnbPvtMultipleCouponsRequestBody(),
    ];

    $response = $sdk->coupons->postApiRnbPvtMultipleCoupons($request);

    if ($response->items !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
