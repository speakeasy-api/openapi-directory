# pathwayInformation

### Available Operations

* [getGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getGetPathway](#getgetpathway) - getPathway
* [getGetPathwayInfo](#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

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
    $request->format = GetGetCurationTagsFormatEnum::PDF;
    $request->pwId = 'explicabo';

    $response = $sdk->pathwayInformation->getGetCurationTags($request);

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
    $request->format = GetGetOntologyTermsByPathwayFormatEnum::DUMP;
    $request->pwId = 'distinctio';

    $response = $sdk->pathwayInformation->getGetOntologyTermsByPathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathway

getPathway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayRequest();
    $request->format = GetGetPathwayFormatEnum::PDF;
    $request->pwId = 'labore';
    $request->revision = 264730;

    $response = $sdk->pathwayInformation->getGetPathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwayInfo

getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayInfoFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayInfoRequest();
    $request->format = GetGetPathwayInfoFormatEnum::XML;
    $request->pwId = 'aliquid';

    $response = $sdk->pathwayInformation->getGetPathwayInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
