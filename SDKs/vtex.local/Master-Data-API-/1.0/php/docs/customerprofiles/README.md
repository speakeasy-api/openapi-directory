# customerProfiles

### Available Operations

* [createNewCustomerProfilev2](#createnewcustomerprofilev2) - Create new customer profile
* [deleteCustomerProfile](#deletecustomerprofile) - Delete customer profile
* [updateCustomerProfile](#updatecustomerprofile) - Update customer profile

## createNewCustomerProfilev2

Creates new customer profile.

> You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewCustomerProfilev2Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdateProfileRequests;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNewCustomerProfilev2Request();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->schema = 'schema';
    $request->createUpdateProfileRequests = new CreateUpdateProfileRequests();
    $request->createUpdateProfileRequests->document = '12345678900';
    $request->createUpdateProfileRequests->documentType = 'CPF';
    $request->createUpdateProfileRequests->email = 'clark.kent@examplemail.com';
    $request->createUpdateProfileRequests->firstName = 'Clark';
    $request->createUpdateProfileRequests->isCorporate = false;
    $request->createUpdateProfileRequests->isNewsletterOptIn = false;
    $request->createUpdateProfileRequests->lastName = 'Kent';
    $request->createUpdateProfileRequests->localeDefault = 'en-US';
    $request->createUpdateProfileRequests->phone = '+12025550195';

    $response = $sdk->customerProfiles->createNewCustomerProfilev2($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerProfile

Deletes a customer profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerProfileRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->customerProfiles->deleteCustomerProfile($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomerProfile

Partially updates a customer profile.

> You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomerProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdateProfileRequests;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomerProfileRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->schema = 'schema';
    $request->createUpdateProfileRequests = new CreateUpdateProfileRequests();
    $request->createUpdateProfileRequests->document = '12345678900';
    $request->createUpdateProfileRequests->documentType = 'CPF';
    $request->createUpdateProfileRequests->email = 'clark.kent@examplemail.com';
    $request->createUpdateProfileRequests->firstName = 'Clark';
    $request->createUpdateProfileRequests->isCorporate = false;
    $request->createUpdateProfileRequests->isNewsletterOptIn = false;
    $request->createUpdateProfileRequests->lastName = 'Kent';
    $request->createUpdateProfileRequests->localeDefault = 'en-US';
    $request->createUpdateProfileRequests->phone = '+12025550195';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->customerProfiles->updateCustomerProfile($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
