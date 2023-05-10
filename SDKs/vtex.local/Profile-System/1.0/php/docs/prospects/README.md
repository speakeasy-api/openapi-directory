# prospects

### Available Operations

* [createProspect](#createprospect) - Create prospect
* [deleteProspect](#deleteprospect) - Delete prospect
* [getProspect](#getprospect) - Get prospect
* [getUnmaskedProspect](#getunmaskedprospect) - Get unmasked prospect
* [updateProspect](#updateprospect) - Update prospect

## createProspect

Creates new prospect.

> The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProspectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProspectRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = 'corrupti';

    $response = $sdk->prospects->createProspect($request);

    if ($response->createProspect201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProspect

Deletes a prospect by `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProspectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProspectRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->prospectId = '51clk394-8534-447e-a0ca-1803p669c987';

    $response = $sdk->prospects->deleteProspect($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProspect

Retrieves the information of a specific prospect, by its `prospectId`.

> For security and privacy reasons, this request returns masked prospect data. For unmasked information, see Get unmasked prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProspectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProspectRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->prospectId = '51clk394-8534-447e-a0ca-1803p669c987';

    $response = $sdk->prospects->getProspect($request);

    if ($response->getProspect200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnmaskedProspect

Retrieves unmasked information of a specific prospect, by its `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnmaskedProspectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnmaskedProspectRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->prospectId = '51clk394-8534-447e-a0ca-1803p669c987';
    $request->reason = 'data-validation';

    $response = $sdk->prospects->getUnmaskedProspect($request);

    if ($response->getUnmaskedProspect200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProspect

Updates one or more fields of an existing prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProspectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProspectRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = 'provident';
    $request->prospectId = '51clk394-8534-447e-a0ca-1803p669c987';

    $response = $sdk->prospects->updateProspect($request);

    if ($response->updateProspect200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
