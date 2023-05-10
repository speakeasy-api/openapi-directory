# shoppingCart

### Available Operations

* [addCoupons](#addcoupons) - Add coupons to the cart
* [cartSimulation](#cartsimulation) - Cart simulation
* [createANewCart](#createanewcart) - Get current or create a new cart
* [getCartInformationById](#getcartinformationbyid) - Get cart information by ID
* [getCartInstallments](#getcartinstallments) - Cart installments
* [ignoreProfileData](#ignoreprofiledata) - Ignore profile data
* [items](#items) - Add cart items
* [itemsUpdate](#itemsupdate) - Update cart items
* [priceChange](#pricechange) - Change price
* [removeAllItems](#removeallitems) - Remove all items
* [removeallpersonaldata](#removeallpersonaldata) - Remove all personal data

## addCoupons

Use this request to add coupons to a given shopping cart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCouponsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddCouponsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCouponsRequest();
    $request->accept = 'perferendis';
    $request->contentType = 'nihil';
    $request->requestBody = new AddCouponsRequestBody();
    $request->requestBody->text = 'magnam';
    $request->orderFormId = 'distinctio';

    $response = $sdk->shoppingCart->addCoupons($request);

    if ($response->addCoupons200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cartSimulation

This endpoint is used to simulate a cart in VTEX Checkout.

It receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.

It sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.

This is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.

**Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CartSimulationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CartSimulationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CartSimulationRequestBodyItems;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CartSimulationRequest();
    $request->accept = 'id';
    $request->contentType = 'labore';
    $request->requestBody = new CartSimulationRequestBody();
    $request->requestBody->country = 'BRA';
    $request->requestBody->geoCoordinates = [
        -47.924747467041016,
        -47.924747467041016,
    ];
    $request->requestBody->items = [
        new CartSimulationRequestBodyItems(),
        new CartSimulationRequestBodyItems(),
    ];
    $request->requestBody->postalCode = '12345-000';
    $request->rnbBehavior = 618016;
    $request->sc = 1;

    $response = $sdk->shoppingCart->cartSimulation($request);

    if ($response->cartSimulation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createANewCart

You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.

**Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.

> This request has a time out of 45 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateANewCartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateANewCartRequest();
    $request->accept = 'nobis';
    $request->contentType = 'eum';
    $request->forceNewCart = false;

    $response = $sdk->shoppingCart->createANewCart($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCartInformationById

Use this request to get all information associated to a given shopping  cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCartInformationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCartInformationByIdRequest();
    $request->accept = 'vero';
    $request->contentType = 'aspernatur';
    $request->orderFormId = 'architecto';
    $request->refreshOutdatedData = false;

    $response = $sdk->shoppingCart->getCartInformationById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCartInstallments

Retrieves possible amount of installments and respective values for a given cart with a given payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

This endpoint can be used to get the installment options for only one payment method at a time.

This endpoint should be called only after the selected `orderForm` already has a `paymentData`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCartInstallmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCartInstallmentsRequest();
    $request->accept = 'magnam';
    $request->contentType = 'et';
    $request->orderFormId = 'excepturi';
    $request->paymentSystem = 354047;

    $response = $sdk->shoppingCart->getCartInstallments($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ignoreProfileData

When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

Note that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IgnoreProfileDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\IgnoreProfileDataRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IgnoreProfileDataRequest();
    $request->accept = 'provident';
    $request->contentType = 'quos';
    $request->requestBody = new IgnoreProfileDataRequestBody();
    $request->requestBody->ignoreProfileData = false;
    $request->orderFormId = 'sint';

    $response = $sdk->shoppingCart->ignoreProfileData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## items

Use this request to add a new item to the shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ItemsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ItemsRequestBodyOrderItems;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsRequest();
    $request->accept = 'accusantium';
    $request->contentType = 'mollitia';
    $request->requestBody = new ItemsRequestBody();
    $request->requestBody->orderItems = [
        new ItemsRequestBodyOrderItems(),
        new ItemsRequestBodyOrderItems(),
        new ItemsRequestBodyOrderItems(),
        new ItemsRequestBodyOrderItems(),
    ];
    $request->allowedOutdatedData = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->orderFormId = 'necessitatibus';

    $response = $sdk->shoppingCart->items($request);

    if ($response->items200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemsUpdate

You can use this request to:

1. Change the quantity of one or more items in a specific cart.
2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).

**Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ItemsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ItemsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ItemsUpdateRequestBodyOrderItems;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsUpdateRequest();
    $request->accept = 'odit';
    $request->contentType = 'nemo';
    $request->requestBody = new ItemsUpdateRequestBody();
    $request->requestBody->orderItems = [
        new ItemsUpdateRequestBodyOrderItems(),
    ];
    $request->allowedOutdatedData = [
        'doloribus',
        'debitis',
    ];
    $request->orderFormId = 'eius';

    $response = $sdk->shoppingCart->itemsUpdate($request);

    if ($response->itemsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## priceChange

This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

You need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.

You also need to pass the new price value in the body.

Remember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.

> Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PriceChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\PriceChangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PriceChangeRequest();
    $request->accept = 'maxime';
    $request->contentType = 'deleniti';
    $request->priceChangeRequest = new PriceChangeRequest();
    $request->priceChangeRequest->price = 703889;
    $request->itemIndex = 'in';
    $request->orderFormId = 'architecto';

    $response = $sdk->shoppingCart->priceChange($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAllItems

This request removes all items from a given cart, leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAllItemsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAllItemsRequest();
    $request->accept = 'architecto';
    $request->contentType = 'repudiandae';
    $request->requestBody = [
        'expedita' => 'nihil',
        'repellat' => 'quibusdam',
    ];
    $request->orderFormId = 'sed';

    $response = $sdk->shoppingCart->removeAllItems($request);

    if ($response->removeAllItems200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeallpersonaldata

This call removes all user information, making a cart anonymous while leaving the items.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.

This call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveallpersonaldataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveallpersonaldataRequest();
    $request->accept = 'saepe';
    $request->contentType = 'pariatur';
    $request->orderFormId = 'accusantium';

    $response = $sdk->shoppingCart->removeallpersonaldata($request);

    if ($response->removeallpersonaldata200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
