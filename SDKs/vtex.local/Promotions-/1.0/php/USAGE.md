<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CalculatediscountsandtaxesBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalculatediscountsandtaxesBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\Param;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculatediscountsandtaxesBundlesRequest();
    $request->accept = 'corrupti';
    $request->calculatediscountsandtaxesBundlesRequest = new CalculatediscountsandtaxesBundlesRequest();
    $request->calculatediscountsandtaxesBundlesRequest->isShoppingCart = false;
    $request->calculatediscountsandtaxesBundlesRequest->items = [
        new Item(),
        new Item(),
        new Item(),
    ];
    $request->calculatediscountsandtaxesBundlesRequest->origin = 'distinctio';
    $request->calculatediscountsandtaxesBundlesRequest->params = [
        new Param(),
        new Param(),
        new Param(),
        new Param(),
    ];
    $request->calculatediscountsandtaxesBundlesRequest->profileId = 'unde';
    $request->calculatediscountsandtaxesBundlesRequest->salesChannel = 'nulla';
    $request->contentType = 'corrupti';

    $response = $sdk->bundles->calculatediscountsandtaxesBundles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->