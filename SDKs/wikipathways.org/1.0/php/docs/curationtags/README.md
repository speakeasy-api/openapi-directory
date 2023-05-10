# curationTags

### Available Operations

* [getGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [getGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getSaveCurationTag](#getsavecurationtag) - saveCurationTag

## getGetCurationTagHistory

getCurationTagHistory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagHistoryFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetCurationTagHistoryRequest();
    $request->format = GetGetCurationTagHistoryFormatEnum::DUMP;
    $request->pwId = 'quia';
    $request->timestamp = 'quis';

    $response = $sdk->curationTags->getGetCurationTagHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetCurationTags

getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetCurationTagsRequest();
    $request->format = GetGetCurationTagsFormatEnum::JSON;
    $request->pwId = 'laborum';

    $response = $sdk->curationTags->getGetCurationTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetCurationTagsByName

getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsByNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsByNameFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetCurationTagsByNameRequest();
    $request->format = GetGetCurationTagsByNameFormatEnum::DUMP;
    $request->tagName = 'enim';

    $response = $sdk->curationTags->getGetCurationTagsByName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetOntologyTermsByPathway

getOntologyTermsByPathway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetOntologyTermsByPathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetOntologyTermsByPathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetOntologyTermsByPathwayRequest();
    $request->format = GetGetOntologyTermsByPathwayFormatEnum::JSON;
    $request->pwId = 'quo';

    $response = $sdk->curationTags->getGetOntologyTermsByPathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSaveCurationTag

saveCurationTag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveCurationTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveCurationTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSaveCurationTagRequest();
    $request->auth = 'sequi';
    $request->format = GetSaveCurationTagFormatEnum::PDF;
    $request->pwId = 'ipsam';
    $request->revision = 662527;
    $request->tagName = 'possimus';
    $request->text = 'aut';
    $request->username = 'Avery_Mueller9';

    $response = $sdk->curationTags->getSaveCurationTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
