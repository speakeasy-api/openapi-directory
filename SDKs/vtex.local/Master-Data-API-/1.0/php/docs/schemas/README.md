# schemas

### Available Operations

* [deleteschemabyname](#deleteschemabyname) - Delete schema by name
* [getschemabyname](#getschemabyname) - Get schema by name
* [getschemas](#getschemas) - Get schemas
* [saveschemabyname](#saveschemabyname) - Save schema by name

## deleteschemabyname

Deletes an existing schema for a given data entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteschemabynameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteschemabynameRequest();
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->schemaName = '{{schema}}';

    $response = $sdk->schemas->deleteschemabyname($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getschemabyname

Returns an existing schema for a given data entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetschemabynameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetschemabynameRequest();
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->schemaName = '{{schema}}';

    $response = $sdk->schemas->getschemabyname($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getschemas

Return the schemas saved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetschemasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetschemasRequest();
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';

    $response = $sdk->schemas->getschemas($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveschemabyname

Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)

> Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.

This request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveschemabynameRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveschemabynameRequest;
use \OpenAPI\OpenAPI\Models\Shared\Properties;
use \OpenAPI\OpenAPI\Models\Shared\Name;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveschemabynameRequest();
    $request->saveschemabynameRequest = new SaveschemabynameRequest();
    $request->saveschemabynameRequest->properties = new Properties();
    $request->saveschemabynameRequest->properties->name = new Name();
    $request->saveschemabynameRequest->properties->name->type = 'impedit';
    $request->dataEntityName = 'Client';
    $request->schemaName = '{{schema}}';

    $response = $sdk->schemas->saveschemabyname($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
