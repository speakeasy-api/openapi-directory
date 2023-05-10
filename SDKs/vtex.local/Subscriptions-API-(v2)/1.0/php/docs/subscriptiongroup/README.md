# subscriptionGroup

### Available Operations

* [additemsubscriptionGroupId](#additemsubscriptiongroupid) - Add Subscription item by groupId
* [cancelSubscriptionbygroupId](#cancelsubscriptionbygroupid) - Cancel Subscription by groupId
* [getAllsubscriptiongroup](#getallsubscriptiongroup) - List All subscription groups
* [getConfigsubscriptionsgroup](#getconfigsubscriptionsgroup) - List Subscription group's Configuration
* [getConversationMessagebygroupId](#getconversationmessagebygroupid) - Get Conversation Message by groupId
* [getNextpurchase](#getnextpurchase) - Get Next purchase
* [getSimulatebysubscriptionGroup](#getsimulatebysubscriptiongroup) - Get Simulation by subscription-group
* [getSubscriptionbygroupId](#getsubscriptionbygroupid) - Get Subscription by groupId
* [getaddressesbygroupId](#getaddressesbygroupid) - Get addresses by groupId
* [getfrequencyoptionsbygroupId](#getfrequencyoptionsbygroupid) - Get frequency options by groupId
* [getpaymentSystembygroupId](#getpaymentsystembygroupid) - Get payment System by groupId
* [getsubscriptiongrouplist](#getsubscriptiongrouplist) - Get subscription group list
* [getwillcreatebygroupId](#getwillcreatebygroupid) - List 'Will create' by groupId
* [insertAddressesbygroupId](#insertaddressesbygroupid) - Insert Addresses by groupId
* [retrysubscriptionbygroupId](#retrysubscriptionbygroupid) - Retry subscription by groupId
* [updateSubscriptionbygroupId](#updatesubscriptionbygroupid) - Update Subscription by groupId

## additemsubscriptionGroupId

Adds an SKU to a given Subscription, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdditemsubscriptionGroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditemsubscriptionGroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Sku;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdditemsubscriptionGroupIdRequest();
    $request->accept = 'placeat';
    $request->additemsubscriptionGroupIdRequest = new AdditemsubscriptionGroupIdRequest();
    $request->additemsubscriptionGroupIdRequest->endpoint = 'voluptatum';
    $request->additemsubscriptionGroupIdRequest->priceAtSubscriptionDate = 479977;
    $request->additemsubscriptionGroupIdRequest->quantity = 568045;
    $request->additemsubscriptionGroupIdRequest->sellingPrice = 392785;
    $request->additemsubscriptionGroupIdRequest->sku = new Sku();
    $request->additemsubscriptionGroupIdRequest->sku->detailUrl = 'recusandae';
    $request->additemsubscriptionGroupIdRequest->sku->id = 'd151a05d-fc2d-4df7-8c78-ca1ba928fc81';
    $request->additemsubscriptionGroupIdRequest->sku->imageUrl = 'commodi';
    $request->additemsubscriptionGroupIdRequest->sku->name = 'Pauline Dibbert';
    $request->additemsubscriptionGroupIdRequest->sku->nameComplete = 'esse';
    $request->additemsubscriptionGroupIdRequest->sku->productName = 'ipsum';
    $request->contentType = 'excepturi';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->additemsubscriptionGroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelSubscriptionbygroupId

Cancels Subscription by `groupId`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelSubscriptionbygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelSubscriptionbygroupIdRequest();
    $request->accept = 'aspernatur';
    $request->contentType = 'perferendis';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->cancelSubscriptionbygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllsubscriptiongroup

Retrieves all subscription groups in your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllsubscriptiongroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllsubscriptiongroupRequest();
    $request->accept = 'ad';
    $request->contentType = 'natus';

    $response = $sdk->subscriptionGroup->getAllsubscriptiongroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigsubscriptionsgroup

Retrieves details about a given subscription group's configuration, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigsubscriptionsgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigsubscriptionsgroupRequest();
    $request->accept = 'sed';
    $request->contentType = 'iste';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->getConfigsubscriptionsgroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConversationMessagebygroupId

Retrieves the conversation of a given Subscription group, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConversationMessagebygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConversationMessagebygroupIdRequest();
    $request->accept = 'dolor';
    $request->contentType = 'natus';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->getConversationMessagebygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNextpurchase

Lists details of a given subscription group's next purchase, filtering by dateStr.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNextpurchaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNextpurchaseRequest();
    $request->accept = 'laboriosam';
    $request->contentType = 'hic';
    $request->dateStr = 'saepe';

    $response = $sdk->subscriptionGroup->getNextpurchase($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSimulatebysubscriptionGroup

Retrieves Subscription simulations, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSimulatebysubscriptionGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimulatebysubscriptionGroupRequest();
    $request->accept = 'fuga';
    $request->contentType = 'in';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->getSimulatebysubscriptionGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionbygroupId

Lists Subscription details, filtering by `groupId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionbygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionbygroupIdRequest();
    $request->accept = 'corporis';
    $request->contentType = 'iste';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->getSubscriptionbygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getaddressesbygroupId

Lists addresses linked to a given Subscription group, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetaddressesbygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetaddressesbygroupIdRequest();
    $request->accept = 'iure';
    $request->contentType = 'saepe';
    $request->groupId = 'quidem';

    $response = $sdk->subscriptionGroup->getaddressesbygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getfrequencyoptionsbygroupId

Lists frequency options of a given Subscription group, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetfrequencyoptionsbygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetfrequencyoptionsbygroupIdRequest();
    $request->accept = 'architecto';
    $request->contentType = 'ipsa';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->getfrequencyoptionsbygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpaymentSystembygroupId

Retrieves payment system's information of a given Subscription group, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetpaymentSystembygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpaymentSystembygroupIdRequest();
    $request->accept = 'reiciendis';
    $request->contentType = 'est';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->getpaymentSystembygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getsubscriptiongrouplist

Retrieves a list of Subscription groups in your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetsubscriptiongrouplistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetsubscriptiongrouplistRequest();
    $request->accept = 'mollitia';
    $request->contentType = 'laborum';

    $response = $sdk->subscriptionGroup->getsubscriptiongrouplist($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getwillcreatebygroupId

Retrieves Subscription groups listed as 'will create', filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetwillcreatebygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetwillcreatebygroupIdRequest();
    $request->accept = 'dolores';
    $request->contentType = 'dolorem';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->getwillcreatebygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insertAddressesbygroupId

Insert address information of a given Subscription group, filtering by groupId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InsertAddressesbygroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertAddressesbygroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalComponent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsertAddressesbygroupIdRequest();
    $request->accept = 'corporis';
    $request->contentType = 'explicabo';
    $request->insertAddressesbygroupIdRequest = new InsertAddressesbygroupIdRequest();
    $request->insertAddressesbygroupIdRequest->additionalComponents = [
        new AdditionalComponent(),
        new AdditionalComponent(),
        new AdditionalComponent(),
        new AdditionalComponent(),
    ];
    $request->insertAddressesbygroupIdRequest->addressId = 'enim';
    $request->insertAddressesbygroupIdRequest->addressName = 'omnis';
    $request->insertAddressesbygroupIdRequest->addressType = 'nemo';
    $request->insertAddressesbygroupIdRequest->city = 'New Alisa';
    $request->insertAddressesbygroupIdRequest->complement = 'iure';
    $request->insertAddressesbygroupIdRequest->country = 'New Caledonia';
    $request->insertAddressesbygroupIdRequest->formattedAddress = 'doloribus';
    $request->insertAddressesbygroupIdRequest->geoCoordinate = [
        102044,
        652790,
        208876,
        635059,
    ];
    $request->insertAddressesbygroupIdRequest->neighborhood = 'consequuntur';
    $request->insertAddressesbygroupIdRequest->number = 'repellat';
    $request->insertAddressesbygroupIdRequest->postalCode = '52444-2613';
    $request->insertAddressesbygroupIdRequest->receiverName = 'vitae';
    $request->insertAddressesbygroupIdRequest->reference = 'laborum';
    $request->insertAddressesbygroupIdRequest->state = 'animi';
    $request->insertAddressesbygroupIdRequest->street = '17193 Schuster Branch';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->insertAddressesbygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrysubscriptionbygroupId

Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrysubscriptionbygroupIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrysubscriptionbygroupIdRequest();
    $request->accept = 'quasi';
    $request->contentType = 'error';
    $request->groupid = '1';
    $request->instanceId = 'temporibus';

    $response = $sdk->subscriptionGroup->retrysubscriptionbygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriptionbygroupId

Updates a Subscription by `groupId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionbygroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubscriptionbygroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Item1;
use \OpenAPI\OpenAPI\Models\Shared\Metadatum;
use \OpenAPI\OpenAPI\Models\Shared\Properties;
use \OpenAPI\OpenAPI\Models\Shared\Sku;
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
    $request = new UpdateSubscriptionbygroupIdRequest();
    $request->updateSubscriptionbygroupIdRequest = new UpdateSubscriptionbygroupIdRequest();
    $request->updateSubscriptionbygroupIdRequest->isSkipped = false;
    $request->updateSubscriptionbygroupIdRequest->item = [
        new Item1(),
        new Item1(),
        new Item1(),
    ];
    $request->updateSubscriptionbygroupIdRequest->metadata = [
        new Metadatum(),
    ];
    $request->updateSubscriptionbygroupIdRequest->plan = new Plan();
    $request->updateSubscriptionbygroupIdRequest->plan->frequency = new Frequency();
    $request->updateSubscriptionbygroupIdRequest->plan->frequency->interval = 971945;
    $request->updateSubscriptionbygroupIdRequest->plan->frequency->periodicity = 'voluptatibus';
    $request->updateSubscriptionbygroupIdRequest->plan->type = 'vero';
    $request->updateSubscriptionbygroupIdRequest->plan->validity = new Validity();
    $request->updateSubscriptionbygroupIdRequest->plan->validity->begin = 'nihil';
    $request->updateSubscriptionbygroupIdRequest->plan->validity->end = 'praesentium';
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings = new PurchaseSettings();
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->currencyCode = 'voluptatibus';
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->paymentMethod = new PaymentMethod();
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->paymentMethod->paymentAccountId = 'ipsa';
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->paymentMethod->paymentSystem = 'omnis';
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->purchaseDay = 'voluptate';
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->salesChannel = 'cum';
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->selectedSla = 'perferendis';
    $request->updateSubscriptionbygroupIdRequest->purchaseSettings->seller = 'doloremque';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress = new ShippingAddress();
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->additionalComponents = [
        new AdditionalComponent(),
        new AdditionalComponent(),
    ];
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->addressId = 'ut';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->addressName = 'maiores';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->addressType = 'dicta';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->city = 'West Jayden';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->complement = 'dicta';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->country = 'Papua New Guinea';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->formattedAddress = 'enim';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->geoCoordinate = [
        414263,
        918236,
        64147,
        216822,
    ];
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->neighborhood = 'quidem';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->number = 'molestias';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->postalCode = '82559-0950';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->receiverName = 'itaque';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->reference = 'incidunt';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->state = 'enim';
    $request->updateSubscriptionbygroupIdRequest->shippingAddress->street = '68167 Green Ford';
    $request->updateSubscriptionbygroupIdRequest->status = 'qui';
    $request->groupId = '1';

    $response = $sdk->subscriptionGroup->updateSubscriptionbygroupId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
