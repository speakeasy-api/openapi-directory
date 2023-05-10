# giftCard

### Available Operations

* [createGiftCard](#creategiftcard) - Create GiftCard
* [getGiftCardbyID](#getgiftcardbyid) - Get GiftCard by ID
* [getGiftCardusingJSON](#getgiftcardusingjson) - Get GiftCard using JSON

## createGiftCard

Creates a GiftCard for a specific user

### Example Usage

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
    $request->accept = 'unde';
    $request->contentType = 'nulla';
    $request->createGiftCardRequest = new CreateGiftCardRequest();
    $request->createGiftCardRequest->caption = 'rewards program';
    $request->createGiftCardRequest->expiringDate = '2020-09-01T13:15:30Z';
    $request->createGiftCardRequest->multipleCredits = false;
    $request->createGiftCardRequest->multipleRedemptions = false;
    $request->createGiftCardRequest->profileId = '1234';
    $request->createGiftCardRequest->relationName = 'insert example here';
    $request->createGiftCardRequest->restrictedToOwner = false;
    $request->xVTEXAPIAppKey = 'corrupti';
    $request->xVTEXAPIAppToken = 'illum';

    $response = $sdk->giftCard->createGiftCard($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGiftCardbyID

Returns associated data for a specified giftcardId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGiftCardbyIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGiftCardbyIDRequest();
    $request->accept = 'vel';
    $request->contentType = 'error';
    $request->giftCardID = 'deserunt';

    $response = $sdk->giftCard->getGiftCardbyID($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGiftCardusingJSON

Returns the giftcards based on the cart data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGiftCardusingJSONRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetGiftCardusingJSONRequest;
use \OpenAPI\OpenAPI\Models\Shared\Cart;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\Client;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGiftCardusingJSONRequest();
    $request->accept = 'suscipit';
    $request->contentType = 'iure';
    $request->getGiftCardusingJSONRequest = new GetGiftCardusingJSONRequest();
    $request->getGiftCardusingJSONRequest->cart = new Cart();
    $request->getGiftCardusingJSONRequest->cart->discounts = 297534;
    $request->getGiftCardusingJSONRequest->cart->grandTotal = 8917.73;
    $request->getGiftCardusingJSONRequest->cart->items = [
        new Item(),
    ];
    $request->getGiftCardusingJSONRequest->cart->itemsTotal = 963663;
    $request->getGiftCardusingJSONRequest->cart->redemptionCode = 'tempora';
    $request->getGiftCardusingJSONRequest->cart->relationName = 'suscipit';
    $request->getGiftCardusingJSONRequest->cart->shipping = 477665;
    $request->getGiftCardusingJSONRequest->cart->taxes = 791725;
    $request->getGiftCardusingJSONRequest->client = new Client();
    $request->getGiftCardusingJSONRequest->client->document = 'placeat';
    $request->getGiftCardusingJSONRequest->client->email = 'Jaycee_Mante@yahoo.com';
    $request->getGiftCardusingJSONRequest->client->id = 'd151a05d-fc2d-4df7-8c78-ca1ba928fc81';
    $request->restRange = 'commodi';

    $response = $sdk->giftCard->getGiftCardusingJSON($request);

    if ($response->response2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
