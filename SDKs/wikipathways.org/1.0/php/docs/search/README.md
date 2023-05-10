# search

### Available Operations

* [getFindInteractions](#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [getFindPathwaysByLiterature](#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [getFindPathwaysByText](#getfindpathwaysbytext) - findPathwaysByText
* [getFindPathwaysByXref](#getfindpathwaysbyxref) - findPathwaysByXref
* [getRemoveCurationTag](#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.

## getFindInteractions

findInteractionsFind interactions defined in WikiPathways pathways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindInteractionsRequest();
    $request->format = GetFindInteractionsFormatEnum::JPG;
    $request->query = 'excepturi';

    $response = $sdk->search->getFindInteractions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindPathwaysByLiterature

findPathwaysByLiterature

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByLiteratureRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByLiteratureFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindPathwaysByLiteratureRequest();
    $request->format = GetFindPathwaysByLiteratureFormatEnum::XML;
    $request->query = 'facilis';

    $response = $sdk->search->getFindPathwaysByLiterature($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindPathwaysByText

findPathwaysByText

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByTextFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindPathwaysByTextRequest();
    $request->format = GetFindPathwaysByTextFormatEnum::JPG;
    $request->query = 'labore';
    $request->species = 'delectus';

    $response = $sdk->search->getFindPathwaysByText($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindPathwaysByXref

findPathwaysByXref

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByXrefRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByXrefFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindPathwaysByXrefRequest();
    $request->codes = [
        'non',
        'eligendi',
    ];
    $request->format = GetFindPathwaysByXrefFormatEnum::DUMP;
    $request->ids = [
        'provident',
        'necessitatibus',
    ];

    $response = $sdk->search->getFindPathwaysByXref($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveCurationTag

removeCurationTagRemove a curation tag from a pathway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveCurationTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveCurationTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoveCurationTagRequest();
    $request->auth = 'sint';
    $request->format = GetRemoveCurationTagFormatEnum::DUMP;
    $request->pwId = 'dolor';
    $request->tagName = 'debitis';
    $request->username = 'Veda.Parisian';

    $response = $sdk->search->getRemoveCurationTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
