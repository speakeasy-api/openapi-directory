# profiles

### Available Operations

* [createClientProfile](#createclientprofile) - Create client profile
* [deleteClientProfile](#deleteclientprofile) - Delete client profile
* [getProfile](#getprofile) - Get profile
* [getProfileByVersion](#getprofilebyversion) - Get profile by version
* [getUnmaskedProfile](#getunmaskedprofile) - Get unmasked profile
* [getUnmaskedProfileByVersion](#getunmaskedprofilebyversion) - Get unmasked profile by version
* [updateClientProfile](#updateclientprofile) - Updates client profile

## createClientProfile

Creates new client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClientProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\Profile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClientProfileRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->profile = new Profile();
    $request->profile->birthDate = '1925-11-17';
    $request->profile->document = '12345678900';
    $request->profile->documentType = 'CPF';
    $request->profile->email = 'john.doe@example.com';
    $request->profile->firstName = 'John';
    $request->profile->lastName = 'Doe';
    $request->ttl = 365;

    $response = $sdk->profiles->createClientProfile($request);

    if ($response->createClientProfile201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClientProfile

Deletes a client profile by `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClientProfileRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->profiles->deleteClientProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfile

Retrieves the information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->profiles->getProfile($request);

    if ($response->getProfile200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfileByVersion

Retrieves the information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile by version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileByVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileByVersionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->profileVersionId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->profiles->getProfileByVersion($request);

    if ($response->getProfileByVersion200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnmaskedProfile

Retrieves unmasked information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnmaskedProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnmaskedProfileRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->reason = 'data-validation';

    $response = $sdk->profiles->getUnmaskedProfile($request);

    if ($response->getUnmaskedProfile200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnmaskedProfileByVersion

Retrieves unmasked information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnmaskedProfileByVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnmaskedProfileByVersionRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->profileVersionId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->reason = 'data-validation';

    $response = $sdk->profiles->getUnmaskedProfileByVersion($request);

    if ($response->getUnmaskedProfileByVersion200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClientProfile

Updates one or more fields of an existing client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientProfileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientProfileRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = new UpdateClientProfileRequestBody();
    $request->requestBody->birthDate = '1925-11-17';
    $request->requestBody->document = '12345678900';
    $request->requestBody->documentType = 'CPF';
    $request->requestBody->email = 'john.doe@example.com';
    $request->requestBody->firstName = 'John';
    $request->requestBody->lastName = 'Doe';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';
    $request->ttl = 365;

    $response = $sdk->profiles->updateClientProfile($request);

    if ($response->updateClientProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
