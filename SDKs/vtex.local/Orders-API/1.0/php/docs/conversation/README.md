# conversation

### Available Operations

* [getConversation](#getconversation) - Retrieve order conversation

## getConversation

List all order conversations of an order by its order ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConversationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConversationRequest();
    $request->accept = 'illum';
    $request->contentType = 'vel';
    $request->orderId = '1172452900788-01';
    $request->reason = 'data-validation';

    $response = $sdk->conversation->getConversation($request);

    if ($response->getConversations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
