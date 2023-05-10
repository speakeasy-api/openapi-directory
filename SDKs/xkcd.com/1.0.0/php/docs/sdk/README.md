# SDK

## Overview

Webcomic of romance, sarcasm, math, and language.

<https://xkcd.com/json.html>
### Available Operations

* [getInfo0Json](#getinfo0json) - Fetch current comic and metadata.

* [getComicIdInfo0Json](#getcomicidinfo0json) - Fetch comics and metadata  by comic id.


## getInfo0Json

Fetch current comic and metadata.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getInfo0Json();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComicIdInfo0Json

Fetch comics and metadata  by comic id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetComicIdInfo0JsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComicIdInfo0JsonRequest();
    $request->comicId = 5488.14;

    $response = $sdk->sdk->getComicIdInfo0Json($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
