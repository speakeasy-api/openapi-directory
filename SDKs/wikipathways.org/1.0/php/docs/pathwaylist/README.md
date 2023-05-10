# pathwayList

### Available Operations

* [getGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getListPathways](#getlistpathways) - listPathways

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
    $request->tagName = 'quos';

    $response = $sdk->pathwayList->getGetCurationTagsByName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwaysByOntologyTerm

getPathwaysByOntologyTerm

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByOntologyTermRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByOntologyTermFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwaysByOntologyTermRequest();
    $request->format = GetGetPathwaysByOntologyTermFormatEnum::JSON;
    $request->term = 'magni';

    $response = $sdk->pathwayList->getGetPathwaysByOntologyTerm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwaysByParentOntologyTerm

getPathwaysByParentOntologyTerm

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByParentOntologyTermRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByParentOntologyTermFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwaysByParentOntologyTermRequest();
    $request->format = GetGetPathwaysByParentOntologyTermFormatEnum::JPG;
    $request->term = 'ipsam';

    $response = $sdk->pathwayList->getGetPathwaysByParentOntologyTerm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListPathways

listPathways

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListPathwaysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetListPathwaysFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListPathwaysRequest();
    $request->format = GetListPathwaysFormatEnum::JSON;
    $request->organism = 'fugit';

    $response = $sdk->pathwayList->getListPathways($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
