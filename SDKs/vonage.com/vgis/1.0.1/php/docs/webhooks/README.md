# webhooks

## Overview

Webhooks are external URLs which subscribe to receive events via HTTP POST for a specified set of events.

### Available Operations

* [createWebhook](#createwebhook) - Create a new webhook subscription
* [destroyWebhook](#destroywebhook) - Remove a web hook
* [listWebhooks](#listwebhooks) - List web hooks
* [renewWebhook](#renewwebhook) - Renews a web hook
* [viewWebhook](#viewwebhook) - Get web hook details

## createWebhook

Create a new webhook subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WebhookCreate;
use \OpenAPI\OpenAPI\Models\Shared\WebhookCreateEventsEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookCreateMetadataPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookCreateSigningAlgoEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhookCreate();
    $request->events = [
        WebhookCreateEventsEnum::CALL,
        WebhookCreateEventsEnum::CALL,
        WebhookCreateEventsEnum::CALL,
    ];
    $request->metadataPolicy = WebhookCreateMetadataPolicyEnum::NONE;
    $request->signingAlgo = WebhookCreateSigningAlgoEnum::HMAC_SHA256;
    $request->signingKey = 'reiciendis';
    $request->url = 'https://www.example.com';

    $response = $sdk->webhooks->createWebhook($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destroyWebhook

Remove a web hook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DestroyWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestroyWebhookRequest();
    $request->id = 'a563e251-6fe4-4c8b-b11e-5b7fd2ed0289';

    $response = $sdk->webhooks->destroyWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebhooks

List web hooks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->webhooks->listWebhooks();

    if ($response->webhooks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renewWebhook

Renews a web hook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenewWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenewWebhookRequest();
    $request->id = '21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb';

    $response = $sdk->webhooks->renewWebhook($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## viewWebhook

Get web hook details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ViewWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ViewWebhookRequest();
    $request->id = '25870532-02c7-43d5-be9b-90c28909b3fe';

    $response = $sdk->webhooks->viewWebhook($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
