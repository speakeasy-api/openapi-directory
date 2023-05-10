# SDK

## Overview

A simple API to get the current time based on a request with a timezone.

### Available Operations

* [getIp](#getip) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpTxt](#getiptxt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpIpv4](#getipipv4) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpIpv4Txt](#getipipv4txt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getTimezone](#gettimezone) - a listing of all timezones.
* [getTimezoneTxt](#gettimezonetxt) - a listing of all timezones.
* [getTimezoneArea](#gettimezonearea) - a listing of all timezones available for that area.
* [getTimezoneAreaTxt](#gettimezoneareatxt) - a listing of all timezones available for that area.
* [getTimezoneAreaLocation](#gettimezonearealocation) - request the current time for a timezone.
* [getTimezoneAreaLocationTxt](#gettimezonearealocationtxt) - request the current time for a timezone.
* [getTimezoneAreaLocationRegion](#gettimezonearealocationregion) - request the current time for a timezone.
* [getTimezoneAreaLocationRegionTxt](#gettimezonearealocationregiontxt) - request the current time for a timezone.

## getIp

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getIp();

    if ($response->dateTimeJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIpTxt

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getIpTxt();

    if ($response->dateTimeTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIpIpv4

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIpIpv4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIpIpv4Request();
    $request->ipv4 = '140.151.183.216';

    $response = $sdk->sdk->getIpIpv4($request);

    if ($response->dateTimeJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIpIpv4Txt

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIpIpv4TxtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIpIpv4TxtRequest();
    $request->ipv4 = '154.219.139.216';

    $response = $sdk->sdk->getIpIpv4Txt($request);

    if ($response->dateTimeTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezone

a listing of all timezones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getTimezone();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezoneTxt

a listing of all timezones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getTimezoneTxt();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezoneArea

a listing of all timezones available for that area.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimezoneAreaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimezoneAreaRequest();
    $request->area = 'vel';

    $response = $sdk->sdk->getTimezoneArea($request);

    if ($response->listJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezoneAreaTxt

a listing of all timezones available for that area.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimezoneAreaTxtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimezoneAreaTxtRequest();
    $request->area = 'error';

    $response = $sdk->sdk->getTimezoneAreaTxt($request);

    if ($response->listTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezoneAreaLocation

request the current time for a timezone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimezoneAreaLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimezoneAreaLocationRequest();
    $request->area = 'deserunt';
    $request->location = 'suscipit';

    $response = $sdk->sdk->getTimezoneAreaLocation($request);

    if ($response->dateTimeJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezoneAreaLocationTxt

request the current time for a timezone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimezoneAreaLocationTxtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimezoneAreaLocationTxtRequest();
    $request->area = 'iure';
    $request->location = 'magnam';

    $response = $sdk->sdk->getTimezoneAreaLocationTxt($request);

    if ($response->dateTimeTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezoneAreaLocationRegion

request the current time for a timezone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimezoneAreaLocationRegionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimezoneAreaLocationRegionRequest();
    $request->area = 'debitis';
    $request->location = 'ipsa';
    $request->region = 'delectus';

    $response = $sdk->sdk->getTimezoneAreaLocationRegion($request);

    if ($response->dateTimeJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimezoneAreaLocationRegionTxt

request the current time for a timezone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimezoneAreaLocationRegionTxtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimezoneAreaLocationRegionTxtRequest();
    $request->area = 'tempora';
    $request->location = 'suscipit';
    $request->region = 'molestiae';

    $response = $sdk->sdk->getTimezoneAreaLocationRegionTxt($request);

    if ($response->dateTimeTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
