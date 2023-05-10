# applications

## Overview

Applications APIs

### Available Operations

* [addApplication](#addapplication) - Create an application
* [addTier](#addtier) - Create tier in application
* [deleteApplication](#deleteapplication) - Delete an application
* [deleteTier](#deletetier) - Delete tier
* [getApplication](#getapplication) - Show application details
* [getApplicationTier](#getapplicationtier) - Show tier details
* [getTier](#gettier) - Show tier details
* [listApplicationTiers](#listapplicationtiers) - List tiers of an application
* [listApplications](#listapplications) - List applications

## addApplication

Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
application. An application name is unique and should not conflict with another application name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicationRequest();
    $request->name = 'Johnnie Stamm';

    $requestSecurity = new AddApplicationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->addApplication($request, $requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTier

Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddTierRequest;
use \OpenAPI\OpenAPI\Models\Shared\TierRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupMembershipCriteria;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressMembershipCriteria;
use \OpenAPI\OpenAPI\Models\Shared\GroupMembershipCriteriaMembershipTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchMembershipCriteria;
use \OpenAPI\OpenAPI\Models\Shared\AllEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddTierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTierRequest();
    $request->tierRequest = new TierRequest();
    $request->tierRequest->groupMembershipCriteria = [
        new GroupMembershipCriteria(),
        new GroupMembershipCriteria(),
        new GroupMembershipCriteria(),
    ];
    $request->tierRequest->name = 'Willie Gulgowski DVM';
    $request->id = '467cc879-6ed1-451a-85df-c2ddf7cc78ca';

    $requestSecurity = new AddTierSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->addTier($request, $requestSecurity);

    if ($response->tier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Deleting an application deletes all the tiers of the application along with the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->id = '1ba928fc-8167-442c-b739-205929396fea';

    $requestSecurity = new DeleteApplicationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->deleteApplication($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTier

Delete tier of an application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTierRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTierRequest();
    $request->id = '7596eb10-faaa-4235-ac59-55907aff1a3a';
    $request->tierId = 'consequuntur';

    $requestSecurity = new DeleteTierSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->deleteTier($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplication

Show application details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationRequest();
    $request->id = 'fa946773-9251-4aa5-ac3f-5ad019da1ffe';

    $requestSecurity = new GetApplicationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->getApplication($request, $requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationTier

Show tier details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationTierRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationTierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationTierRequest();
    $request->id = '78f097b0-074f-4154-b1b5-e6e13b99d488';
    $request->tierId = 'voluptates';

    $requestSecurity = new GetApplicationTierSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->getApplicationTier($request, $requestSecurity);

    if ($response->tier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTier

Show tier details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTierRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTierRequest();
    $request->authorization = 'quasi';
    $request->tierId = 'repudiandae';

    $requestSecurity = new GetTierSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->getTier($request, $requestSecurity);

    if ($response->tier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationTiers

List tiers of an application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationTiersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationTiersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationTiersRequest();
    $request->id = '91e450ad-2abd-4442-a980-2d502a94bb4f';

    $requestSecurity = new ListApplicationTiersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->listApplicationTiers($request, $requestSecurity);

    if ($response->tierListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

List applications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->cursor = 'eum';
    $request->endTime = 2487.53;
    $request->size = 7561.07;
    $request->startTime = 5761.57;

    $requestSecurity = new ListApplicationsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->applications->listApplications($request, $requestSecurity);

    if ($response->pagedListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
