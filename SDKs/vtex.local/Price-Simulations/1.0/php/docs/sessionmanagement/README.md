# sessionManagement

### Available Operations

* [postSessions](#postsessions) - Update Order Configuration

## postSessions

Updates the Order Configuration. You should use this route every time you edit a configuration value

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSessionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostSessionsRequestBodyPublic;
use \OpenAPI\OpenAPI\Models\Operations\PostSessionsRequestBodyPublicCustomSessionKeys;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSessionsRequest();
    $request->accept = 'nisi';
    $request->contentType = 'recusandae';
    $request->requestBody = new PostSessionsRequestBody();
    $request->requestBody->public = new PostSessionsRequestBodyPublic();
    $request->requestBody->public->customSessionKeys = new PostSessionsRequestBodyPublicCustomSessionKeys();
    $request->requestBody->public->customSessionKeys->value = 'temporibus';

    $response = $sdk->sessionManagement->postSessions($request);

    if ($response->postSessions200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
