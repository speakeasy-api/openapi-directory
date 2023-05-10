# subscriptions

### Available Operations

* [cancelSubscriptionsbySubscriptionId](#cancelsubscriptionsbysubscriptionid) - Cancel Subscriptions by SubscriptionId
* [getSubscriptionList](#getsubscriptionlist) - Get Subscription List
* [getfrequencyoptionsbysubscriptionId](#getfrequencyoptionsbysubscriptionid) - Get frequency options by subscriptionId
* [getsubscriptionbyId](#getsubscriptionbyid) - Retrieve subscription by ID
* [getsubscriptionstocustomer](#getsubscriptionstocustomer) - Retrieve customer's subscriptions
* [insertAddressesforSubscription](#insertaddressesforsubscription) - Insert Addresses for Subscription
* [updateSubscriptionsbySubscriptionId](#updatesubscriptionsbysubscriptionid) - Update Subscriptions by SubscriptionId

## cancelSubscriptionsbySubscriptionId

Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelSubscriptionsbySubscriptionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelSubscriptionsbySubscriptionIdRequest();
    $request->accept = 'aliquid';
    $request->contentType = 'cupiditate';
    $request->subscriptionId = '1';

    $response = $sdk->subscriptions->cancelSubscriptionsbySubscriptionId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionList

Retrieves a list of Subscriptions linked to your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionListRequest();
    $request->accept = 'quos';
    $request->contentType = 'perferendis';

    $response = $sdk->subscriptions->getSubscriptionList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getfrequencyoptionsbysubscriptionId

Lists frequency options for the Subscription, filtering by `subscriptionId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetfrequencyoptionsbysubscriptionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetfrequencyoptionsbysubscriptionIdRequest();
    $request->accept = 'magni';
    $request->contentType = 'assumenda';
    $request->subscriptionId = '1';

    $response = $sdk->subscriptions->getfrequencyoptionsbysubscriptionId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getsubscriptionbyId

Lists Subscription's details, searching by `subscriptionId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetsubscriptionbyIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsubscriptionbyIdRequest();
    $request->accept = 'ipsam';
    $request->contentType = 'alias';
    $request->subscriptionId = '1';

    $response = $sdk->subscriptions->getsubscriptionbyId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getsubscriptionstocustomer

Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetsubscriptionstocustomerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsubscriptionstocustomerRequest();
    $request->accept = 'fugit';
    $request->contentType = 'dolorum';
    $request->customerId = 'user@vtex.com.br';

    $response = $sdk->subscriptions->getsubscriptionstocustomer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insertAddressesforSubscription

Inserts address's information to complement the Subscription details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InsertAddressesforSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertAddressesforSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsertAddressesforSubscriptionRequest();
    $request->accept = 'excepturi';
    $request->contentType = 'tempora';
    $request->requestBody = [
        new InsertAddressesforSubscriptionRequest(),
        new InsertAddressesforSubscriptionRequest(),
        new InsertAddressesforSubscriptionRequest(),
    ];
    $request->subscriptionId = '1';

    $response = $sdk->subscriptions->insertAddressesforSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriptionsbySubscriptionId

Update, add or alter information of a given Subscription, filtering by `subscriptionId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionsbySubscriptionIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubscriptionsbySubscriptionIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\Sku;
use \OpenAPI\OpenAPI\Models\Shared\Metadatum;
use \OpenAPI\OpenAPI\Models\Shared\Properties;
use \OpenAPI\OpenAPI\Models\Shared\Plan;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;
use \OpenAPI\OpenAPI\Models\Shared\Validity;
use \OpenAPI\OpenAPI\Models\Shared\PurchaseSettings;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethod;
use \OpenAPI\OpenAPI\Models\Shared\ShippingAddress;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalComponent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionsbySubscriptionIdRequest();
    $request->accept = 'tempore';
    $request->contentType = 'labore';
    $request->updateSubscriptionsbySubscriptionIdRequest = new UpdateSubscriptionsbySubscriptionIdRequest();
    $request->updateSubscriptionsbySubscriptionIdRequest->isSkipped = false;
    $request->updateSubscriptionsbySubscriptionIdRequest->item = new Item();
    $request->updateSubscriptionsbySubscriptionIdRequest->item->endpoint = 'delectus';
    $request->updateSubscriptionsbySubscriptionIdRequest->item->priceAtSubscriptionDate = 433288;
    $request->updateSubscriptionsbySubscriptionIdRequest->item->quantity = 248753;
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sellingPrice = 756107;
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sku = new Sku();
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sku->detailUrl = 'sint';
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sku->id = '69e9a3ef-a77d-4fb1-8cd6-6ae395efb9ba';
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sku->imageUrl = 'blanditiis';
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sku->name = 'Timmy Feeney';
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sku->nameComplete = 'vel';
    $request->updateSubscriptionsbySubscriptionIdRequest->item->sku->productName = 'natus';
    $request->updateSubscriptionsbySubscriptionIdRequest->metadata = [
        new Metadatum(),
        new Metadatum(),
        new Metadatum(),
    ];
    $request->updateSubscriptionsbySubscriptionIdRequest->plan = new Plan();
    $request->updateSubscriptionsbySubscriptionIdRequest->plan->frequency = new Frequency();
    $request->updateSubscriptionsbySubscriptionIdRequest->plan->frequency->interval = 474867;
    $request->updateSubscriptionsbySubscriptionIdRequest->plan->frequency->periodicity = 'perferendis';
    $request->updateSubscriptionsbySubscriptionIdRequest->plan->type = 'nihil';
    $request->updateSubscriptionsbySubscriptionIdRequest->plan->validity = new Validity();
    $request->updateSubscriptionsbySubscriptionIdRequest->plan->validity->begin = 'magnam';
    $request->updateSubscriptionsbySubscriptionIdRequest->plan->validity->end = 'distinctio';
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings = new PurchaseSettings();
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->currencyCode = 'id';
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->paymentMethod = new PaymentMethod();
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->paymentMethod->paymentAccountId = 'labore';
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->paymentMethod->paymentSystem = 'labore';
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->purchaseDay = 'suscipit';
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->salesChannel = 'natus';
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->selectedSla = 'nobis';
    $request->updateSubscriptionsbySubscriptionIdRequest->purchaseSettings->seller = 'eum';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress = new ShippingAddress();
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->additionalComponents = [
        new AdditionalComponent(),
        new AdditionalComponent(),
        new AdditionalComponent(),
        new AdditionalComponent(),
    ];
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->addressId = 'aspernatur';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->addressName = 'architecto';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->addressType = 'magnam';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->city = 'New Fernestead';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->complement = 'quos';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->country = 'Micronesia';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->formattedAddress = 'accusantium';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->geoCoordinate = [
        968962,
        652103,
        320997,
    ];
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->neighborhood = 'eum';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->number = 'dolor';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->postalCode = '13049-8285';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->receiverName = 'facilis';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->reference = 'in';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->state = 'architecto';
    $request->updateSubscriptionsbySubscriptionIdRequest->shippingAddress->street = '93749 Cormier Union';
    $request->updateSubscriptionsbySubscriptionIdRequest->status = 'pariatur';
    $request->subscriptionId = '1';

    $response = $sdk->subscriptions->updateSubscriptionsbySubscriptionId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
