# scheduledDelivery

### Available Operations

* [addBlockedDeliveryWindows](#addblockeddeliverywindows) - Add blocked delivery windows
* [removeBlockedDeliveryWindows](#removeblockeddeliverywindows) - Remove blocked delivery windows
* [retrieveBlockedDeliveryWindows](#retrieveblockeddeliverywindows) - Retrieve blocked delivery windows
* [getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames](#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframes) - Search capacity reservations in time range
* [getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime](#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframeswindowdayfwindowstarttimetwindowendtime) - Get capacity reservation usage by window

## addBlockedDeliveryWindows

Adds blocked delivery windows for your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddBlockedDeliveryWindowsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddBlockedDeliveryWindowsRequest();
    $request->accept = 'perferendis';
    $request->contentType = 'nihil';
    $request->requestBody = '"2016-08-09T08:00:00"';
    $request->carrierId = 'magnam';

    $response = $sdk->scheduledDelivery->addBlockedDeliveryWindows($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeBlockedDeliveryWindows

Removes the blocked delivery windows set to your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveBlockedDeliveryWindowsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveBlockedDeliveryWindowsRequest();
    $request->accept = 'distinctio';
    $request->contentType = 'id';
    $request->requestBody = '"2016-08-09T08:00:00"';
    $request->carrierId = 'labore';

    $response = $sdk->scheduledDelivery->removeBlockedDeliveryWindows($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveBlockedDeliveryWindows

Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveBlockedDeliveryWindowsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveBlockedDeliveryWindowsRequest();
    $request->accept = 'labore';
    $request->contentType = 'suscipit';
    $request->carrierId = 'natus';

    $response = $sdk->scheduledDelivery->retrieveBlockedDeliveryWindows($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames

Get information on all capacity reservations made to scheduled delivery windows in a given time range.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesRequest();
    $request->accept = 'application/vnd.vtex.availability.v1+json';
    $request->contentType = 'nobis';
    $request->capacityType = '{{capacityType}}';
    $request->rangeEnd = 'yyyy-mm-dd';
    $request->rangeStart = 'yyyy-mm-dd';
    $request->shippingPolicyId = '{{shippingPolicyId}}';

    $response = $sdk->scheduledDelivery->getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime

Retrieves capacity usage of a specific scheduled delivery reservation window.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest();
    $request->accept = 'application/vnd.vtex.availability.v1+json';
    $request->contentType = 'eum';
    $request->capacityType = '{{capacityType}}';
    $request->shippingPolicyId = '{{shippingPolicyId}}';
    $request->windowDay = 'yyyy-mm-dd';
    $request->windowEndTime = 'hhmm';
    $request->windowStartTime = 'hhmm';

    $response = $sdk->scheduledDelivery->getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
