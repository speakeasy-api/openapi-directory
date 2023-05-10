# appKeys

### Available Operations

* [createnewappkey](#createnewappkey) - Create new appkey
* [getappkeysfromaccount](#getappkeysfromaccount) - Get appKeys from account
* [updateappkey](#updateappkey) - Update appkey

## createnewappkey

Creates a new pair of `appKey` and `appToken`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreatenewappkeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatenewappkeyRequest();
    $request->label = 'corrupti';

    $response = $sdk->appKeys->createnewappkey($request);

    if ($response->createnewappkeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getappkeysfromaccount

Gets all application keys from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetappkeysfromaccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetappkeysfromaccountRequest();
    $request->contentType = 'application/json';

    $response = $sdk->appKeys->getappkeysfromaccount($request);

    if ($response->getappkeysfromaccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateappkey

Activates or deactivates an `appKey` by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateappkeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateappkeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateappkeyRequest();
    $request->updateappkeyRequest = new UpdateappkeyRequest();
    $request->updateappkeyRequest->isActive = false;
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';

    $response = $sdk->appKeys->updateappkey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
