<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGiftCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGiftCardRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->createGiftCardRequest = new CreateGiftCardRequest();
    $request->createGiftCardRequest->caption = 'rewards program';
    $request->createGiftCardRequest->expiringDate = '2020-09-01T13:15:30Z';
    $request->createGiftCardRequest->multipleCredits = false;
    $request->createGiftCardRequest->multipleRedemptions = false;
    $request->createGiftCardRequest->profileId = '1234';
    $request->createGiftCardRequest->relationName = 'insert example here';
    $request->createGiftCardRequest->restrictedToOwner = false;
    $request->xVTEXAPIAppKey = 'distinctio';
    $request->xVTEXAPIAppToken = 'quibusdam';

    $response = $sdk->giftCard->createGiftCard($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->