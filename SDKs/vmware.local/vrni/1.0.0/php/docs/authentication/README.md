# authentication

## Overview

Authentication APIs

### Available Operations

* [create](#create) - Create an auth token
* [delete](#delete) - Delete an auth token.

## create

<html><body> vRealize Network Insight supports token based authentication.Tokens are non-modifiable identifiers returned by the system when the user has successfully authenticated using valid credentials. Token expires after expiry time returned in the response. All API requests must provide the auth token in Authorization header in following format.<br> Authorization &#58; NetworkInsight {token} <br> If a token is invalid or expired, 401-Unauthorized error gets returned in the response of the API request. </body></html>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UserCredential;
use \OpenAPI\OpenAPI\Models\Shared\Domain;
use \OpenAPI\OpenAPI\Models\Shared\DomainDomainTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserCredential();
    $request->domain = new Domain();
    $request->domain->domainType = DomainDomainTypeEnum::LDAP;
    $request->domain->value = 'example.com';
    $request->password = 'password';
    $request->username = 'admin@vrni.com';

    $response = $sdk->authentication->create($request);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete

Deletes the auth token provided in Authorization header.
Deleting an expired or invalid token will result in 401 Unauthorized error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DeleteSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->delete($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
