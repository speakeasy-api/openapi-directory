# docks

### Available Operations

* [activateDock](#activatedock) - Activate dock
* [allDocks](#alldocks) - List all  docks
* [createUpdateDock](#createupdatedock) - Create/update dock
* [deactivateDock](#deactivatedock) - Deactivate dock
* [dock](#dock) - Delete dock
* [dockById](#dockbyid) - List dock by ID

## activateDock

Activates dock through dock ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateDockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateDockRequest();
    $request->accept = 'quibusdam';
    $request->contentType = 'unde';
    $request->dockId = 'nulla';

    $response = $sdk->docks->activateDock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allDocks

Informs a list of all docks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllDocksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllDocksRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'illum';

    $response = $sdk->docks->allDocks($request);

    if ($response->allDocks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUpdateDock

Creates or updates docks to be used in your logistic operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateDockRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateDockCreateUpdateDockRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateDockCreateUpdateDockRequestAddress1;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateDockCreateUpdateDockRequestAddress1Country;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdateDockRequest();
    $request->accept = 'vel';
    $request->contentType = 'error';
    $request->requestBody = new CreateUpdateDockCreateUpdateDockRequest();
    $request->requestBody->address = new CreateUpdateDockCreateUpdateDockRequestAddress1();
    $request->requestBody->address->city = 'Hoppeport';
    $request->requestBody->address->complement = 'magnam';
    $request->requestBody->address->coordinates = [
        [
            9636.63,
        ],
        [
            3834.41,
            4776.65,
        ],
        [
            8121.69,
            5288.95,
            4799.77,
            5680.45,
        ],
        [
            9255.97,
            8360.79,
        ],
    ];
    $request->requestBody->address->country = new CreateUpdateDockCreateUpdateDockRequestAddress1Country();
    $request->requestBody->address->country->acronym = 'ab';
    $request->requestBody->address->country->name = 'Mrs. Marie O'Connell';
    $request->requestBody->address->neighborhood = 'sapiente';
    $request->requestBody->address->number = 'quo';
    $request->requestBody->address->postalCode = '88947';
    $request->requestBody->address->state = 'quod';
    $request->requestBody->address->street = '5761 Nikolaus Orchard';
    $request->requestBody->dockTimeFake = 'fugit';
    $request->requestBody->freightTableIds = [
        'hic',
        'optio',
        'totam',
    ];
    $request->requestBody->id = '16742cb7-3920-4592-9396-fea7596eb10f';
    $request->requestBody->name = 'Shaun Osinski';
    $request->requestBody->priority = 358152;
    $request->requestBody->salesChannel = 'explicabo';
    $request->requestBody->salesChannels = [
        'enim',
        'omnis',
        'nemo',
        'minima',
    ];
    $request->requestBody->timeFakeOverhead = 'excepturi';
    $request->requestBody->wmsEndPoint = 'accusantium';

    $response = $sdk->docks->createUpdateDock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateDock

Deactivate dock by dock ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateDockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateDockRequest();
    $request->accept = 'iure';
    $request->contentType = 'culpa';
    $request->dockId = 'doloribus';

    $response = $sdk->docks->deactivateDock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dock

Deletes dock by dock ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DockRequest();
    $request->accept = 'sapiente';
    $request->contentType = 'architecto';
    $request->dockId = 'mollitia';

    $response = $sdk->docks->dock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dockById

Informs a given dock's information, searching by dock ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DockByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DockByIdRequest();
    $request->accept = 'dolorem';
    $request->contentType = 'culpa';
    $request->dockId = 'consequuntur';

    $response = $sdk->docks->dockById($request);

    if ($response->dockById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
