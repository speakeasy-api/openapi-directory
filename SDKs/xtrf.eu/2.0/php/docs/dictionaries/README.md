# dictionaries

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [getActive](#getactive) - Returns active dictionary entities for all types.
* [getActiveByType](#getactivebytype) - Returns active values from a given dictionary.
* [getAllActive](#getallactive) - Returns active services list
* [getAllByType](#getallbytype) - Returns all values (both active and not active) from a given dictionary.
* [getAll1](#getall1) - Returns dictionary entities for all types. Both active and not active ones.
* [getAll3](#getall3) - Returns services list
* [getByTypeAndId](#getbytypeandid) - Returns specific value from a given dictionary.

## getActive

Returns active dictionary entities for all types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->dictionaries->getActive();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActiveByType

Returns active values from a given dictionary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActiveByTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActiveByTypeRequest();
    $request->nameEquals = 'aliquid';
    $request->type = 'quam';

    $response = $sdk->dictionaries->getActiveByType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllActive

Returns active workflows list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllActiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllActiveRequest();
    $request->nameEquals = 'molestias';

    $response = $sdk->dictionaries->getAllActive($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllByType

Returns all values (both active and not active) from a given dictionary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllByTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllByTypeRequest();
    $request->nameEquals = 'temporibus';
    $request->type = 'qui';

    $response = $sdk->dictionaries->getAllByType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAll1

<div>
  <p>
    XTRF holds many user-defined dictionaries (ie. countries).
    Each dictionary contains a set of values (ie. Poland or Germany).
    A default value may be defined for a dictionary.
  </p>
  <p>
    Dictionary values are identified using internal identifier which is constant and unique among other values from the same dictionary.
    Please note that name used in dictionary values is presented in the locale of the current identity.
    The same dictionary value can have different names, ie. "Poland" for one user, "Polska" for another one.
  </p>
  <p>
    Possible dictionary types with short explanation:
    <ul>
      <li>calculationUnit - predefined values of how to calculate the volume of work into the price</li>
      <li>category - labels to organize data on the platform</li>
      <li>country - list of countries used on the platform</li>
      <li>currency - currencies used in financial operations in the system</li>
      <li>industry - industry sectors which clients specialize in</li>
      <li>jobType - services offered by a company used in customized workflows</li>
      <li>language - list of languages and its values used on the platform</li>
      <li>leadSource - lead/recruitment places where new clients and vendors may be found</li>
      <li>personDepartment - departments in which contact person may be assigned to</li>
      <li>personPosition - positions in which user may be associated with</li>
      <li>province - states and provinces used in various documents on the platform</li>
      <li>specialization - list of specific qualifications required to perform a specific job in the task, for ex. medical, military</li>
    </ul>
  </p>
</div>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->dictionaries->getAll1();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAll3

Returns workflows list. Both active and not active ones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAll3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAll3Request();
    $request->nameEquals = 'neque';

    $response = $sdk->dictionaries->getAll3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getByTypeAndId

Returns specific value from a given dictionary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetByTypeAndIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetByTypeAndIdRequest();
    $request->id = 144847;
    $request->type = 'magni';

    $response = $sdk->dictionaries->getByTypeAndId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
