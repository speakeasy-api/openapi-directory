# reports

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [delete11](#delete11) - Removes a report.
* [duplicate1](#duplicate1) - Duplicates a report.
* [exportToXML](#exporttoxml) - Exports reports definition to XML.
* [generateCSV](#generatecsv) - Generates CSV content for a report.
* [generatePrinterFriendly](#generateprinterfriendly) - Generates printer friendly content for a report.
* [importFromXML](#importfromxml) - Imports reports definition from XML.
* [setPreferred](#setpreferred) - Marks report as preferred or not.

## delete11

Removes a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete11Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete11Request();
    $request->reportId = 984934;

    $response = $sdk->reports->delete11($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## duplicate1

Duplicates a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Duplicate1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Duplicate1Request();
    $request->reportId = 859581;

    $response = $sdk->reports->duplicate1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportToXML

Exports reports definition to XML.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ExportRequestDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportRequestDTO();
    $request->ids = [
        58534,
        271113,
        470621,
        473190,
    ];

    $response = $sdk->reports->exportToXML($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateCSV

Generates CSV content for a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateCSVRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateCSVRequest();
    $request->reportId = 115834;

    $response = $sdk->reports->generateCSV($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generatePrinterFriendly

Generates printer friendly content for a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GeneratePrinterFriendlyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeneratePrinterFriendlyRequest();
    $request->reportId = 479754;

    $response = $sdk->reports->generatePrinterFriendly($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importFromXML

Imports a report definition from an XML using a file token. To obtain the token, you first need to upload a temporary XML file, as specified in the Files section. Note that the name of the imported report must be unique.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ImportRequestDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportRequestDTO();
    $request->fileToken = 'esse';

    $response = $sdk->reports->importFromXML($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPreferred

Marks report as preferred or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPreferredRequest;
use \OpenAPI\OpenAPI\Models\Shared\PreferredRequestDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPreferredRequest();
    $request->preferredRequestDTO = new PreferredRequestDTO();
    $request->preferredRequestDTO->preferred = false;
    $request->reportId = 508390;

    $response = $sdk->reports->setPreferred($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
