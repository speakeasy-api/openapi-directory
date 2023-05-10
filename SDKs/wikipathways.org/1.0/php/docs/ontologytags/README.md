# ontologyTags

### Available Operations

* [getGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [getSaveOntologyTag](#getsaveontologytag) - saveOntologyTag

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
    $request->format = GetGetPathwaysByOntologyTermFormatEnum::DUMP;
    $request->term = 'excepturi';

    $response = $sdk->ontologyTags->getGetPathwaysByOntologyTerm($request);

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
    $request->format = GetGetPathwaysByParentOntologyTermFormatEnum::PDF;
    $request->term = 'modi';

    $response = $sdk->ontologyTags->getGetPathwaysByParentOntologyTerm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveOntologyTag

removeOntologyTag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveOntologyTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveOntologyTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoveOntologyTagRequest();
    $request->auth = 'praesentium';
    $request->format = GetRemoveOntologyTagFormatEnum::DUMP;
    $request->pwId = 'voluptates';
    $request->termId = 'quasi';
    $request->user = 'repudiandae';

    $response = $sdk->ontologyTags->getRemoveOntologyTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSaveOntologyTag

saveOntologyTag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveOntologyTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveOntologyTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSaveOntologyTagRequest();
    $request->auth = 'sint';
    $request->format = GetSaveOntologyTagFormatEnum::JSON;
    $request->pwId = 'itaque';
    $request->term = 'incidunt';
    $request->termId = 'enim';
    $request->user = 'consequatur';

    $response = $sdk->ontologyTags->getSaveOntologyTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
