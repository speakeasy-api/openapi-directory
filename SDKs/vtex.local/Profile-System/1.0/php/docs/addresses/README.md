# addresses

### Available Operations

* [createClientAddress](#createclientaddress) - Create client address
* [deleteAddress](#deleteaddress) - Delete address
* [getAddress](#getaddress) - Get address
* [getAddressByVersion](#getaddressbyversion) - Get address by version
* [getClientAddresses](#getclientaddresses) - Get client addresses
* [getUnmaskedAddress](#getunmaskedaddress) - Get unmasked address
* [getUnmaskedAddressByVersion](#getunmaskedaddressbyversion) - Get unmasked address by version
* [getUnmaskedClientAddresses](#getunmaskedclientaddresses) - Get unmasked client addresses
* [updateClientAddress](#updateclientaddress) - Update client address

## createClientAddress

Creates new address for a given client profile.

> The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClientAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClientAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->address = new Address();
    $request->address->administrativeAreaLevel1 = 'RJ';
    $request->address->countryCode = 'BR';
    $request->address->countryName = 'Brasil';
    $request->address->locality = 'Locality';
    $request->address->localityAreaLevel1 = 'Locality area';
    $request->address->postalCode = '20200-000';
    $request->address->route = '51';
    $request->address->streetNumber = '999';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->createClientAddress($request);

    if ($response->createClientAddress201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAddress

Deletes a client's address by `profileId` and `addressId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->addressId = 'bf82180e-cf9e-4089-9af6-ae1518555992';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->deleteAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddress

Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked address.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->addressId = 'bf82180e-cf9e-4089-9af6-ae1518555992';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->getAddress($request);

    if ($response->getAddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddressByVersion

Retrieves information of a specific version address of a given client.

> For security and privacy reasons, this request returns masked address data by version. For unmasked information, see Get unmasked address by version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressByVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressByVersionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->addressId = 'bf82180e-cf9e-4089-9af6-ae1518555992';
    $request->addressVersionId = '86dfae79-1d23-43f2-a643-2fc8f1839461';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->reason = 'data-validation';

    $response = $sdk->addresses->getAddressByVersion($request);

    if ($response->getAddressByVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClientAddresses

Retrieves information of all addresses of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked client addresses.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClientAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientAddressesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->getClientAddresses($request);

    if ($response->getClientAddresses200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnmaskedAddress

Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnmaskedAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnmaskedAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->addressId = 'bf82180e-cf9e-4089-9af6-ae1518555992';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->reason = 'data-validation';

    $response = $sdk->addresses->getUnmaskedAddress($request);

    if ($response->getUnmaskedAddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnmaskedAddressByVersion

Retrieves unmasked information of a specific address version of a given client.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnmaskedAddressByVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnmaskedAddressByVersionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->addressId = 'bf82180e-cf9e-4089-9af6-ae1518555992';
    $request->addressVersionId = '86dfae79-1d23-43f2-a643-2fc8f1839461';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->reason = 'data-validation';

    $response = $sdk->addresses->getUnmaskedAddressByVersion($request);

    if ($response->getUnmaskedAddressByVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnmaskedClientAddresses

Retrieves unmasked information of all addresses of a given client, by its `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnmaskedClientAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnmaskedClientAddressesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->getUnmaskedClientAddresses($request);

    if ($response->getUnmaskedClientAddresses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientAddress

Updates one or more fields of an existing address for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientAddressRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = new UpdateClientAddressRequestBody();
    $request->requestBody->administrativeAreaLevel1 = 'RJ';
    $request->requestBody->countryCode = 'BR';
    $request->requestBody->countryName = 'Brasil';
    $request->requestBody->locality = 'Locality';
    $request->requestBody->localityAreaLevel1 = 'Locality area';
    $request->requestBody->postalCode = '20200-000';
    $request->requestBody->route = 'Brasil';
    $request->requestBody->streetNumber = 'Brasil';
    $request->addressId = 'bf82180e-cf9e-4089-9af6-ae1518555992';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->updateClientAddress($request);

    if ($response->updateClientAddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
