# vendors

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [delete10](#delete10) - Removes a provider.
* [delete8](#delete8) - Removes a person.
* [delete9](#delete9) - Removes a provider price list.
* [getAddress1](#getaddress1) - Returns address of a given provider.
* [getAllIds4](#getallids4) - Returns persons' internal identifiers.
* [getAllIds5](#getallids5) - Returns providers' internal identifiers.
* [getById4](#getbyid4) - Returns person details.
* [getById5](#getbyid5) - Returns provider details.
* [getCompetencies](#getcompetencies) - Returns competencies of a given provider.
* [getContact2](#getcontact2) - Returns contact of a given person.
* [getContact3](#getcontact3) - Returns contact of a given provider.
* [getCorrespondenceAddress1](#getcorrespondenceaddress1) - Returns correspondence address of a given provider.
* [getCustomFields2](#getcustomfields2) - Returns custom fields of a given person.
* [getCustomFields3](#getcustomfields3) - Returns custom fields of a given provider.
* [sendInvitations](#sendinvitations) - Sends invitation to Vendor Portal.
* [sendInvitations1](#sendinvitations1) - Sends invitations to Vendor Portal.

## delete10

Removes a provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete10Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete10Request();
    $request->providerId = 349440;

    $response = $sdk->vendors->delete10($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete8

Removes a person.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete8Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete8Request();
    $request->personId = 70410;

    $response = $sdk->vendors->delete8($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete9

Removes a provider price list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete9Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete9Request();
    $request->priceListId = 781480;

    $response = $sdk->vendors->delete9($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddress1

Returns address of a given provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddress1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddress1Request();
    $request->providerId = 421844;

    $response = $sdk->vendors->getAddress1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds4

Returns persons' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIds4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIds4Request();
    $request->updatedSince = 751022;

    $response = $sdk->vendors->getAllIds4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds5

Returns providers' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIds5Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIds5Request();
    $request->updatedSince = 388319;

    $response = $sdk->vendors->getAllIds5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById4

Returns person details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById4Request();
    $request->personId = 927212;

    $response = $sdk->vendors->getById4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById5

Returns provider details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById5Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById5Request();
    $request->embed = 'consequuntur';
    $request->providerId = 28952;

    $response = $sdk->vendors->getById5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompetencies

Returns competencies of a given provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCompetenciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompetenciesRequest();
    $request->providerId = 350207;

    $response = $sdk->vendors->getCompetencies($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContact2

Returns contact of a given person.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContact2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContact2Request();
    $request->personId = 895692;

    $response = $sdk->vendors->getContact2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContact3

Returns contact of a given provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContact3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContact3Request();
    $request->providerId = 95619;

    $response = $sdk->vendors->getContact3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorrespondenceAddress1

Returns correspondence address of a given provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCorrespondenceAddress1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorrespondenceAddress1Request();
    $request->providerId = 392569;

    $response = $sdk->vendors->getCorrespondenceAddress1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields2

Returns custom fields of a given person.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields2Request();
    $request->personId = 871103;

    $response = $sdk->vendors->getCustomFields2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields3

Returns custom fields of a given provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields3Request();
    $request->providerId = 878373;

    $response = $sdk->vendors->getCustomFields3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendInvitations

Sends invitation to Vendor Portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendInvitationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendInvitationsRequest();
    $request->personId = 667593;

    $response = $sdk->vendors->sendInvitations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendInvitations1

Sends invitations to Vendor Portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendInvitations1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendInvitations1Request();
    $request->providerId = 690785;

    $response = $sdk->vendors->sendInvitations1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
