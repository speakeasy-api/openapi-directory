# certificates

### Available Operations

* [certificateAdd](#certificateadd) - Adds a certificate to the specified account.
* [certificateCancelDeletion](#certificatecanceldeletion) - Cancels a failed deletion of a certificate from the specified account.
* [certificateDelete](#certificatedelete) - Deletes a certificate from the specified account.
* [certificateGet](#certificateget) - Gets information about the specified certificate.
* [certificateList](#certificatelist) - Lists all of the certificates that have been added to the specified account.

## certificateAdd

Adds a certificate to the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAddParameter;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAddParameterCertificateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateAddRequest();
    $request->certificateAddParameter = new CertificateAddParameter();
    $request->certificateAddParameter->certificateFormat = CertificateAddParameterCertificateFormatEnum::PFX;
    $request->certificateAddParameter->data = 'delectus';
    $request->certificateAddParameter->password = 'tempora';
    $request->certificateAddParameter->thumbprint = 'suscipit';
    $request->certificateAddParameter->thumbprintAlgorithm = 'molestiae';
    $request->apiVersion = 'minus';
    $request->clientRequestId = 'placeat';
    $request->ocpDate = 'voluptatum';
    $request->returnClientRequestId = false;
    $request->timeout = 479977;

    $response = $sdk->certificates->certificateAdd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateCancelDeletion

Cancels a failed deletion of a certificate from the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateCancelDeletionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateCancelDeletionRequest();
    $request->apiVersion = 'excepturi';
    $request->clientRequestId = 'nisi';
    $request->ocpDate = 'recusandae';
    $request->returnClientRequestId = false;
    $request->thumbprint = 'temporibus';
    $request->thumbprintAlgorithm = 'ab';
    $request->timeout = 337396;

    $response = $sdk->certificates->certificateCancelDeletion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateDelete

Deletes a certificate from the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateDeleteRequest();
    $request->apiVersion = 'veritatis';
    $request->clientRequestId = 'deserunt';
    $request->ocpDate = 'perferendis';
    $request->returnClientRequestId = false;
    $request->thumbprint = 'ipsam';
    $request->thumbprintAlgorithm = 'repellendus';
    $request->timeout = 957156;

    $response = $sdk->certificates->certificateDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateGet

Gets information about the specified certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateGetRequest();
    $request->dollarSelect = 'quo';
    $request->apiVersion = 'odit';
    $request->clientRequestId = 'at';
    $request->ocpDate = 'at';
    $request->returnClientRequestId = false;
    $request->thumbprint = 'maiores';
    $request->thumbprintAlgorithm = 'molestiae';
    $request->timeout = 799159;

    $response = $sdk->certificates->certificateGet($request);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateList

Lists all of the certificates that have been added to the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateListRequest();
    $request->dollarFilter = 'quod';
    $request->dollarSelect = 'esse';
    $request->apiVersion = 'totam';
    $request->clientRequestId = 'porro';
    $request->maxresults = 678880;
    $request->ocpDate = 'dicta';
    $request->returnClientRequestId = false;
    $request->timeout = 720633;

    $response = $sdk->certificates->certificateList($request);

    if ($response->certificateListResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
