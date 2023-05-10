# subscription

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [areHooksSupported](#arehookssupported) - This method can be used to determine if hooks are supported.
* [getAll4](#getall4) - Returns all subscriptions
* [subscribe](#subscribe) - Subscribe to event
* [unsubscribe](#unsubscribe) - Unsubscribe from event

## areHooksSupported

This method can be used to determine if hooks are supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->subscription->areHooksSupported();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAll4

Returns all subscriptions. Subscriptions are automatically removed if they do not work (ie. if 404 status is returned). To improve notification reliability one can use this method to check if subscription is still active and re-subscribe if necessary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->subscription->getAll4();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribe

Subscribe to event. Returns subscription Id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscriptionDTO();
    $request->embed = 'maiores';
    $request->event = 'reiciendis';
    $request->filter = 'vel';
    $request->url = 'architecto';

    $response = $sdk->subscription->subscribe($request);

    if ($response->subscribe201ApplicationVndXtrfV1PlusJsonString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribe

Unsubscribe from job status changed event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsubscribeRequest();
    $request->subscriptionId = 'fugiat';

    $response = $sdk->subscription->unsubscribe($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
