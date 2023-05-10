# userManagement

### Available Operations

* [getGetUserByOrcid](#getgetuserbyorcid) - getUserByOrcid
* [getLogin](#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

## getGetUserByOrcid

getUserByOrcid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetUserByOrcidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetUserByOrcidFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetUserByOrcidRequest();
    $request->format = GetGetUserByOrcidFormatEnum::PDF;
    $request->orcid = 'maiores';

    $response = $sdk->userManagement->getGetUserByOrcid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogin

loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoginRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoginFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoginRequest();
    $request->format = GetLoginFormatEnum::JPG;
    $request->name = 'Valerie Runolfsson';
    $request->pass = 'aliquid';

    $response = $sdk->userManagement->getLogin($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
