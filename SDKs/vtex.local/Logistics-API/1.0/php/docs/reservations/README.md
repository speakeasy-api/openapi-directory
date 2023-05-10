# reservations

### Available Operations

* [acknowledgmentReservation](#acknowledgmentreservation) - Acknowledgment reservation
* [cancelReservation](#cancelreservation) - Cancel reservation
* [confirmReservation](#confirmreservation) - Confirm reservation
* [createReservation](#createreservation) - Create reservation
* [reservationById](#reservationbyid) - List reservation by ID
* [reservationbyWarehouseandSku](#reservationbywarehouseandsku) - List reservation by warehouse and SKU

## acknowledgmentReservation

Acknowledges reservations made by reservation ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgmentReservationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcknowledgmentReservationRequest();
    $request->accept = 'cumque';
    $request->contentType = 'facere';
    $request->reservationId = 'ea';

    $response = $sdk->reservations->acknowledgmentReservation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelReservation

Cancels reservation by reservation ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelReservationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelReservationRequest();
    $request->accept = 'aliquid';
    $request->contentType = 'laborum';
    $request->reservationId = 'accusamus';

    $response = $sdk->reservations->cancelReservation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmReservation

Confirms reservation by reservation ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmReservationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmReservationRequest();
    $request->accept = 'non';
    $request->contentType = 'occaecati';
    $request->reservationId = 'enim';

    $response = $sdk->reservations->confirmReservation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReservation

Creates [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReservationCreateReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReservationCreateReservationRequestDeliveryItemOption;
use \OpenAPI\OpenAPI\Models\Operations\CreateReservationCreateReservationRequestDeliveryItemOptionItem;
use \OpenAPI\OpenAPI\Models\Operations\CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension;
use \OpenAPI\OpenAPI\Models\Operations\CreateReservationCreateReservationRequestDeliveryItemOptionLocation;
use \OpenAPI\OpenAPI\Models\Operations\CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReservationRequest();
    $request->accept = 'accusamus';
    $request->contentType = 'delectus';
    $request->requestBody = new CreateReservationCreateReservationRequest();
    $request->requestBody->autorizationExpirationTTL = 'quidem';
    $request->requestBody->deliveryItemOptions = [
        new CreateReservationCreateReservationRequestDeliveryItemOption(),
        new CreateReservationCreateReservationRequestDeliveryItemOption(),
        new CreateReservationCreateReservationRequestDeliveryItemOption(),
    ];
    $request->requestBody->lockId = 'nam';
    $request->requestBody->salesChannel = 'id';

    $response = $sdk->reservations->createReservation($request);

    if ($response->createReservation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reservationById

Lists reservation's information by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReservationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReservationByIdRequest();
    $request->accept = 'blanditiis';
    $request->contentType = 'deleniti';
    $request->reservationId = 'sapiente';

    $response = $sdk->reservations->reservationById($request);

    if ($response->reservationById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reservationbyWarehouseandSku

Lists reservations in your store, by searching through warehouse and SKU.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReservationbyWarehouseandSkuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReservationbyWarehouseandSkuRequest();
    $request->accept = 'amet';
    $request->contentType = 'deserunt';
    $request->skuId = 'nisi';
    $request->warehouseId = 'vel';

    $response = $sdk->reservations->reservationbyWarehouseandSku($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
