# pickupPoints

### Available Operations

* [createUpdatePickupPoint](#createupdatepickuppoint) - Create/Update Pickup Point
* [delete](#delete) - Delete Pickup Point
* [getById](#getbyid) - List Pickup Point By ID
* [getpaged](#getpaged) - List paged Pickup Points
* [listAllPickupPpoints](#listallpickupppoints) - List all pickup points

## createUpdatePickupPoint

Creates or updates [pickup points](https://help.vtex.com/en/subcategory/pickup-points--1c5Btie9ou2Gg2iUo0ggqM#) in your store by Pickup Point ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePickupPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePickupPointRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePickupPointRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePickupPointRequestBodyAddressCountry;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePickupPointRequestBodyAddressLocation;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatePickupPointRequestBodyBusinessHour;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdatePickupPointRequest();
    $request->accept = 'voluptates';
    $request->contentType = 'quasi';
    $request->requestBody = new CreateUpdatePickupPointRequestBody();
    $request->requestBody->address = new CreateUpdatePickupPointRequestBodyAddress();
    $request->requestBody->address->city = 'Rio de Janeiro';
    $request->requestBody->address->complement = '3rd floor';
    $request->requestBody->address->country = new CreateUpdatePickupPointRequestBodyAddressCountry();
    $request->requestBody->address->country->acronym = 'BRA';
    $request->requestBody->address->country->name = 'Brasil';
    $request->requestBody->address->location = new CreateUpdatePickupPointRequestBodyAddressLocation();
    $request->requestBody->address->location->latitude = -22.974477767944336;
    $request->requestBody->address->location->longitude = -43.18672561645508;
    $request->requestBody->address->neighborhood = 'Botafogo';
    $request->requestBody->address->number = '200';
    $request->requestBody->address->postalCode = '50923-0681';
    $request->requestBody->address->reference = 'Grey building';
    $request->requestBody->address->state = 'RJ';
    $request->requestBody->address->street = 'Praia de botafogo.';
    $request->requestBody->businessHours = [
        new CreateUpdatePickupPointRequestBodyBusinessHour(),
        new CreateUpdatePickupPointRequestBodyBusinessHour(),
        new CreateUpdatePickupPointRequestBodyBusinessHour(),
    ];
    $request->requestBody->description = 'Pickup your items in our store.';
    $request->requestBody->formattedAddress = 'distinctio';
    $request->requestBody->id = '123456789';
    $request->requestBody->instructions = 'Bring your ID in order to pickup your order.';
    $request->requestBody->isActive = false;
    $request->requestBody->isThirdPartyPickup = false;
    $request->requestBody->name = 'Pickup store.';
    $request->requestBody->tagsLabel = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->pickupPointId = '123456789';

    $response = $sdk->pickupPoints->createUpdatePickupPoint($request);

    if ($response->createUpdate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete

Deletes a given pickup point for your store, by pickup point ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequest();
    $request->accept = 'cupiditate';
    $request->contentType = 'quos';
    $request->pickupPointId = 'perferendis';

    $response = $sdk->pickupPoints->delete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById

Lists your store's pickup points while searching by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetByIdRequest();
    $request->accept = 'magni';
    $request->contentType = 'assumenda';
    $request->pickupPointId = 'ipsam';

    $response = $sdk->pickupPoints->getById($request);

    if ($response->getById !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpaged

Lists paged pickup points in your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetpagedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpagedRequest();
    $request->accept = 'alias';
    $request->contentType = 'fugit';
    $request->keyword = 'dolorum';
    $request->page = '{{pageNumber}}';
    $request->pageSize = '{{pageSize}}';

    $response = $sdk->pickupPoints->getpaged($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllPickupPpoints

Lists all of your store's pickup points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAllPickupPpointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAllPickupPpointsRequest();
    $request->accept = 'excepturi';
    $request->contentType = 'tempora';

    $response = $sdk->pickupPoints->listAllPickupPpoints($request);

    if ($response->listAllPickupPpoints200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
