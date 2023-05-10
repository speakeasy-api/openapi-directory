# holidays

### Available Operations

* [allHolidays](#allholidays) - List all holidays
* [createUpdateHoliday](#createupdateholiday) - Create/update holiday
* [holiday](#holiday) - Delete holiday
* [holidayById](#holidaybyid) - List holiday by ID

## allHolidays

Lists information of all holidays.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllHolidaysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllHolidaysRequest();
    $request->accept = 'quam';
    $request->contentType = 'molestiae';

    $response = $sdk->holidays->allHolidays($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUpdateHoliday

Creates or updates holidays through holiday ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateHolidayRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdateHolidayCreateUpdateHolidayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdateHolidayRequest();
    $request->accept = 'velit';
    $request->contentType = 'error';
    $request->requestBody = new CreateUpdateHolidayCreateUpdateHolidayRequest();
    $request->requestBody->name = 'Beatrice Brown';
    $request->requestBody->startDate = 'enim';
    $request->holidayId = 'odit';

    $response = $sdk->holidays->createUpdateHoliday($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## holiday

Deletes given holidays set up in your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HolidayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HolidayRequest();
    $request->accept = 'quo';
    $request->contentType = 'sequi';
    $request->holidayId = 'tenetur';

    $response = $sdk->holidays->holiday($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## holidayById

Lists holiday's information by holiday ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HolidayByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HolidayByIdRequest();
    $request->accept = 'ipsam';
    $request->contentType = 'id';
    $request->holidayId = 'possimus';

    $response = $sdk->holidays->holidayById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
