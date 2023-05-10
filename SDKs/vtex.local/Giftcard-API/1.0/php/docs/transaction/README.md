# transaction

### Available Operations

* [cancelGiftCardTransaction](#cancelgiftcardtransaction) - Cancel GiftCard Transaction
* [createGiftCardTransaction](#creategiftcardtransaction) - Create GiftCard Transaction
* [getGiftCardTransactionbyID](#getgiftcardtransactionbyid) - Get GiftCard Transaction by ID
* [getGiftCardTransactions](#getgiftcardtransactions) - Get GiftCard Transactions
* [getTransactionAuthorizations](#gettransactionauthorizations) - Get Transaction Authorizations
* [getTransactionCancellations](#gettransactioncancellations) - Get Transaction Cancellations
* [getTransactionSettlements](#gettransactionsettlements) - Get Transaction Settlements
* [settleGiftCardTransaction](#settlegiftcardtransaction) - Settle GiftCard Transaction

## cancelGiftCardTransaction

Creates a cancellation in the transaction. Cancel a item reservation or create a refund.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelGiftCardTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelGiftCardTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelGiftCardTransactionRequest();
    $request->accept = 'molestiae';
    $request->cancelGiftCardTransactionRequest = new CancelGiftCardTransactionRequest();
    $request->cancelGiftCardTransactionRequest->requestId = 'modi';
    $request->cancelGiftCardTransactionRequest->value = 1863.32;
    $request->contentType = 'impedit';
    $request->giftCardID = 'cum';
    $request->transactionID = 'esse';

    $response = $sdk->transaction->cancelGiftCardTransaction($request);

    if ($response->response6 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGiftCardTransaction

Register a new giftcard transaction and authorize the item reservation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGiftCardTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGiftCardTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderInfo;
use \OpenAPI\OpenAPI\Models\Shared\Cart1;
use \OpenAPI\OpenAPI\Models\Shared\Item2;
use \OpenAPI\OpenAPI\Models\Shared\PriceTag;
use \OpenAPI\OpenAPI\Models\Shared\ClientProfile;
use \OpenAPI\OpenAPI\Models\Shared\Shipping;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGiftCardTransactionRequest();
    $request->accept = 'ipsum';
    $request->contentType = 'excepturi';
    $request->createGiftCardTransactionRequest = new CreateGiftCardTransactionRequest();
    $request->createGiftCardTransactionRequest->description = 'aspernatur';
    $request->createGiftCardTransactionRequest->operation = 'perferendis';
    $request->createGiftCardTransactionRequest->orderInfo = new OrderInfo();
    $request->createGiftCardTransactionRequest->orderInfo->cart = new Cart1();
    $request->createGiftCardTransactionRequest->orderInfo->cart->discounts = 3241.41;
    $request->createGiftCardTransactionRequest->orderInfo->cart->grandTotal = 617636;
    $request->createGiftCardTransactionRequest->orderInfo->cart->items = [
        new Item2(),
    ];
    $request->createGiftCardTransactionRequest->orderInfo->cart->itemsTotal = 6120.96;
    $request->createGiftCardTransactionRequest->orderInfo->cart->shipping = 2223.21;
    $request->createGiftCardTransactionRequest->orderInfo->cart->taxes = 616934;
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile = new ClientProfile();
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile->birthDate = 'laboriosam';
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile->document = 'hic';
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile->email = 'Marisa_Kirlin@hotmail.com';
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile->firstName = 'Humberto';
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile->isCorporate = false;
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile->lastName = 'Turcotte';
    $request->createGiftCardTransactionRequest->orderInfo->clientProfile->phone = '209.766.1231 x7363';
    $request->createGiftCardTransactionRequest->orderInfo->orderId = 'minima';
    $request->createGiftCardTransactionRequest->orderInfo->sequence = 570197;
    $request->createGiftCardTransactionRequest->orderInfo->shipping = new Shipping();
    $request->createGiftCardTransactionRequest->orderInfo->shipping->city = 'South Lorenzaworth';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->complement = 'sapiente';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->country = 'Bhutan';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->neighborhood = 'mollitia';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->number = 'dolorem';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->postalCode = '19652-4442';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->receiverName = 'error';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->reference = 'quia';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->state = 'quis';
    $request->createGiftCardTransactionRequest->orderInfo->shipping->street = '66317 Vada Haven';
    $request->createGiftCardTransactionRequest->redemptionCode = 'id';
    $request->createGiftCardTransactionRequest->redemptionToken = 'possimus';
    $request->createGiftCardTransactionRequest->requestId = 'aut';
    $request->createGiftCardTransactionRequest->value = 971.01;
    $request->giftCardID = 'error';

    $response = $sdk->transaction->createGiftCardTransaction($request);

    if ($response->response3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGiftCardTransactionbyID

Get GiftCard Transaction by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGiftCardTransactionbyIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGiftCardTransactionbyIDRequest();
    $request->accept = 'temporibus';
    $request->contentType = 'laborum';
    $request->giftCardID = 'quasi';
    $request->transactionID = 'reiciendis';

    $response = $sdk->transaction->getGiftCardTransactionbyID($request);

    if ($response->response5 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGiftCardTransactions

Returns all transaction of a giftcard.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGiftCardTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGiftCardTransactionsRequest();
    $request->accept = 'voluptatibus';
    $request->contentType = 'vero';
    $request->giftCardID = 'nihil';

    $response = $sdk->transaction->getGiftCardTransactions($request);

    if ($response->response3s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionAuthorizations

Returns the giftcard transaction authorizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionAuthorizationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionAuthorizationsRequest();
    $request->accept = 'praesentium';
    $request->contentType = 'voluptatibus';
    $request->giftCardID = 'ipsa';
    $request->transactionID = 'omnis';

    $response = $sdk->transaction->getTransactionAuthorizations($request);

    if ($response->response6 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionCancellations

Returns the giftcard transaction cancellations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionCancellationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionCancellationsRequest();
    $request->accept = 'voluptate';
    $request->contentType = 'cum';
    $request->giftCardID = 'perferendis';
    $request->transactionID = 'doloremque';

    $response = $sdk->transaction->getTransactionCancellations($request);

    if ($response->response7s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionSettlements

Returns the giftcard transaction settlements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionSettlementsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionSettlementsRequest();
    $request->accept = 'reprehenderit';
    $request->contentType = 'ut';
    $request->giftCardID = 'maiores';
    $request->transactionID = 'dicta';

    $response = $sdk->transaction->getTransactionSettlements($request);

    if ($response->response6s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## settleGiftCardTransaction

Creates a giftcard transaction settlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SettleGiftCardTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettleGiftCardTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SettleGiftCardTransactionRequest();
    $request->accept = 'corporis';
    $request->contentType = 'dolore';
    $request->settleGiftCardTransactionRequest = new SettleGiftCardTransactionRequest();
    $request->settleGiftCardTransactionRequest->requestId = 'iusto';
    $request->settleGiftCardTransactionRequest->value = 1187.27;
    $request->giftCardID = 'harum';
    $request->transactionID = 'enim';

    $response = $sdk->transaction->settleGiftCardTransaction($request);

    if ($response->response6 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
