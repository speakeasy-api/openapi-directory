# writeCreateUpdateDelete

### Available Operations

* [getRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [getSaveCurationTag](#getsavecurationtag) - saveCurationTag
* [getSaveOntologyTag](#getsaveontologytag) - saveOntologyTag
* [getUpdatePathway](#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [postCreatePathway](#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

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
    $request->auth = 'laborum';
    $request->format = GetRemoveOntologyTagFormatEnum::PDF;
    $request->pwId = 'non';
    $request->termId = 'occaecati';
    $request->user = 'enim';

    $response = $sdk->writeCreateUpdateDelete->getRemoveOntologyTag($request);

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
    $request->auth = 'accusamus';
    $request->format = GetSaveCurationTagFormatEnum::PDF;
    $request->pwId = 'quidem';
    $request->revision = 588465;
    $request->tagName = 'nam';
    $request->text = 'id';
    $request->username = 'Jewell.Lesch64';

    $response = $sdk->writeCreateUpdateDelete->getSaveCurationTag($request);

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
    $request->auth = 'nisi';
    $request->format = GetSaveOntologyTagFormatEnum::HTML;
    $request->pwId = 'natus';
    $request->term = 'omnis';
    $request->termId = 'molestiae';
    $request->user = 'perferendis';

    $response = $sdk->writeCreateUpdateDelete->getSaveOntologyTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdatePathway

updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatePathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatePathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUpdatePathwayRequest();
    $request->auth = 'nihil';
    $request->description = 'magnam';
    $request->format = GetUpdatePathwayFormatEnum::JPG;
    $request->gpml = 'id';
    $request->pwId = 'labore';
    $request->revision = 290077;
    $request->username = 'Geraldine.Mosciski87';

    $response = $sdk->writeCreateUpdateDelete->getUpdatePathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreatePathway

createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCreatePathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCreatePathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCreatePathwayRequest();
    $request->auth = 'aspernatur';
    $request->format = PostCreatePathwayFormatEnum::JSON;
    $request->gpml = 'magnam';
    $request->username = 'Audrey_Marks';

    $response = $sdk->writeCreateUpdateDelete->postCreatePathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
