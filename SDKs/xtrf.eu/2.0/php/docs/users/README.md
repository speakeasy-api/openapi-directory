# users

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [changePassword](#changepassword) - Sets user's password to a new value.
* [getAllNamesWithIds1](#getallnameswithids1) - Returns list of simple users representations
* [getById6](#getbyid6) - Returns user details.
* [getCustomField1](#getcustomfield1) - Returns custom field of a given user.
* [getCustomFields4](#getcustomfields4) - Returns custom fields of a given user.
* [getMe](#getme) - Returns currently signed in user details.
* [getTimeZone](#gettimezone) - Returns time zone preferred by user currently signed in.
* [updateCustomField1](#updatecustomfield1) - Updates given custom field of a given user.
* [updateCustomFields2](#updatecustomfields2) - Updates custom fields of a given user.
* [update3](#update3) - Updates an existing user.

## changePassword

Sets user's password to a new value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePasswordRequest();
    $request->requestBody = new ChangePasswordRequestBody();
    $request->requestBody->newPassword = 'voluptatem';
    $request->requestBody->oldPassword = 'molestias';
    $request->userId = 737254;

    $response = $sdk->users->changePassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllNamesWithIds1

Returns list of simple users representations

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
    $response = $sdk->users->getAllNamesWithIds1();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById6

Returns user details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById6Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById6Request();
    $request->userId = 399660;

    $response = $sdk->users->getById6($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomField1

Returns custom field of a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomField1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomField1Request();
    $request->customFieldKey = 'beatae';
    $request->userId = 530860;

    $response = $sdk->users->getCustomField1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields4

Returns custom fields of a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields4Request();
    $request->userId = 606308;

    $response = $sdk->users->getCustomFields4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMe

Returns currently signed in user details.

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
    $response = $sdk->users->getMe();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimeZone

Returns time zone preferred by user currently signed in.

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
    $response = $sdk->users->getTimeZone();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomField1

Updates given custom field of a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomField1Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomField1Request();
    $request->customFieldDTO = new CustomFieldDTO();
    $request->customFieldDTO->key = 'veritatis';
    $request->customFieldDTO->name = 'Dr. Rex Nicolas';
    $request->customFieldDTO->type = CustomFieldDTOTypeEnum::TEXT;
    $request->customFieldDTO->value = [
        'pariatur' => 'debitis',
        'voluptatem' => 'alias',
        'deleniti' => 'earum',
    ];
    $request->customFieldKey = 'ex';
    $request->userId = 958308;

    $response = $sdk->users->updateCustomField1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomFields2

Updates custom fields of a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomFields2Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomFields2Request();
    $request->requestBody = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->userId = 796320;

    $response = $sdk->users->updateCustomFields2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## update3

Updates an existing user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Update3Request;
use \OpenAPI\OpenAPI\Models\Shared\UserDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Update3Request();
    $request->userDTO = new UserDTO();
    $request->userDTO->customFields = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->userDTO->email = 'Clarissa84@hotmail.com';
    $request->userDTO->firstName = 'Joshua';
    $request->userDTO->gender = 'male';
    $request->userDTO->id = 842777;
    $request->userDTO->lastName = 'Reichel';
    $request->userDTO->login = 'ipsam';
    $request->userDTO->mobilePhone = 'culpa';
    $request->userDTO->phone = '405.222.0102';
    $request->userDTO->positionName = 'fugit';
    $request->userDTO->timeZoneId = 'ab';
    $request->userDTO->userGroupName = 'laudantium';
    $request->userId = 65604;

    $response = $sdk->users->update3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
