# shippingPolicies

### Available Operations

* [deleteApiLogisticsPvtShippingPoliciesId](#deleteapilogisticspvtshippingpoliciesid) - Delete shipping policies by ID
* [getApiLogisticsPvtShippingPolicies](#getapilogisticspvtshippingpolicies) - List shipping policies
* [getApiLogisticsPvtShippingPoliciesId](#getapilogisticspvtshippingpoliciesid) - Retrieve shipping policy by ID
* [postApiLogisticsPvtShippingPolicies](#postapilogisticspvtshippingpolicies) - Create shipping policy
* [putApiLogisticsPvtShippingPoliciesId](#putapilogisticspvtshippingpoliciesid) - Update shipping policy

## deleteApiLogisticsPvtShippingPoliciesId

This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiLogisticsPvtShippingPoliciesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiLogisticsPvtShippingPoliciesIdRequest();
    $request->accept = 'vero';
    $request->contentType = 'aspernatur';
    $request->id = 'id';

    $response = $sdk->shippingPolicies->deleteApiLogisticsPvtShippingPoliciesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiLogisticsPvtShippingPolicies

This endpoint lists existing shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiLogisticsPvtShippingPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiLogisticsPvtShippingPoliciesRequest();
    $request->accept = 'architecto';
    $request->contentType = 'magnam';
    $request->page = 'page';
    $request->perPage = 'perPage';

    $response = $sdk->shippingPolicies->getApiLogisticsPvtShippingPolicies($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiLogisticsPvtShippingPoliciesId

This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiLogisticsPvtShippingPoliciesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiLogisticsPvtShippingPoliciesIdRequest();
    $request->accept = 'et';
    $request->contentType = 'excepturi';
    $request->id = 'id';

    $response = $sdk->shippingPolicies->getApiLogisticsPvtShippingPoliciesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiLogisticsPvtShippingPolicies

This endpoint creates new shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettings;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyCubicWeightSettings;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettings;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyMaxDimension;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyModalSettings;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyPickupPointsSettings;
use \OpenAPI\OpenAPI\Models\Operations\PostApiLogisticsPvtShippingPoliciesRequestBodyWeekendAndHolidays;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiLogisticsPvtShippingPoliciesRequest();
    $request->accept = 'ullam';
    $request->contentType = 'provident';
    $request->requestBody = new PostApiLogisticsPvtShippingPoliciesRequestBody();
    $request->requestBody->businessHourSettings = new PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettings();
    $request->requestBody->businessHourSettings->carrierBusinessHours = [
        new PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours(),
        new PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours(),
        new PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours(),
    ];
    $request->requestBody->businessHourSettings->isOpenOutsideBusinessHours = true;
    $request->requestBody->carrierSchedule = [
        new PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule(),
        new PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule(),
        new PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule(),
    ];
    $request->requestBody->cubicWeightSettings = new PostApiLogisticsPvtShippingPoliciesRequestBodyCubicWeightSettings();
    $request->requestBody->cubicWeightSettings->minimunAcceptableVolumetricWeight = 336.25;
    $request->requestBody->cubicWeightSettings->volumetricFactor = 6532.01;
    $request->requestBody->deliveryScheduleSettings = new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettings();
    $request->requestBody->deliveryScheduleSettings->dayOfWeekForDelivery = [
        new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(),
        new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(),
        new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(),
        new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(),
    ];
    $request->requestBody->deliveryScheduleSettings->maxRangeDelivery = 6521.03;
    $request->requestBody->deliveryScheduleSettings->useDeliverySchedule = true;
    $request->requestBody->id = '123';
    $request->requestBody->isActive = false;
    $request->requestBody->maxDimension = new PostApiLogisticsPvtShippingPoliciesRequestBodyMaxDimension();
    $request->requestBody->maxDimension->largestMeasure = 3209.97;
    $request->requestBody->maxDimension->maxMeasureSum = 4314.18;
    $request->requestBody->maximumValueAceptable = 2212.62;
    $request->requestBody->minimumValueAceptable = 8965.47;
    $request->requestBody->modalSettings = new PostApiLogisticsPvtShippingPoliciesRequestBodyModalSettings();
    $request->requestBody->modalSettings->modals = [
        'nemo',
    ];
    $request->requestBody->modalSettings->useOnlyItemsWithDefinedModal = false;
    $request->requestBody->name = 'Normal';
    $request->requestBody->numberOfItemsPerShipment = 5;
    $request->requestBody->pickupPointsSettings = new PostApiLogisticsPvtShippingPoliciesRequestBodyPickupPointsSettings();
    $request->requestBody->pickupPointsSettings->pickupPointIds = [
        'iure',
    ];
    $request->requestBody->pickupPointsSettings->pickupPointTags = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->requestBody->pickupPointsSettings->sellers = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->requestBody->shippingMethod = 'Normal';
    $request->requestBody->weekendAndHolidays = new PostApiLogisticsPvtShippingPoliciesRequestBodyWeekendAndHolidays();
    $request->requestBody->weekendAndHolidays->holiday = false;
    $request->requestBody->weekendAndHolidays->saturday = false;
    $request->requestBody->weekendAndHolidays->sunday = false;

    $response = $sdk->shippingPolicies->postApiLogisticsPvtShippingPolicies($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiLogisticsPvtShippingPoliciesId

This endpoint updates information on existing Shipping Policies from carriers.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutApiLogisticsPvtShippingPoliciesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutApiLogisticsPvtShippingPoliciesIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettings;
use \OpenAPI\OpenAPI\Models\Operations\PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery;
use \OpenAPI\OpenAPI\Models\Operations\PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges;
use \OpenAPI\OpenAPI\Models\Operations\PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity;
use \OpenAPI\OpenAPI\Models\Operations\PutApiLogisticsPvtShippingPoliciesIdRequestBodyMaxDimension;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiLogisticsPvtShippingPoliciesIdRequest();
    $request->accept = 'repudiandae';
    $request->contentType = 'ullam';
    $request->requestBody = new PutApiLogisticsPvtShippingPoliciesIdRequestBody();
    $request->requestBody->deliveryOnWeekends = false;
    $request->requestBody->deliveryScheduleSettings = new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettings();
    $request->requestBody->deliveryScheduleSettings->dayOfWeekForDelivery = [
        new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(),
        new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(),
        new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(),
    ];
    $request->requestBody->deliveryScheduleSettings->maxRangeDelivery = 4692.49;
    $request->requestBody->deliveryScheduleSettings->useDeliverySchedule = true;
    $request->requestBody->isActive = true;
    $request->requestBody->maxDimension = new PutApiLogisticsPvtShippingPoliciesIdRequestBodyMaxDimension();
    $request->requestBody->maxDimension->largestMeasure = 9988.48;
    $request->requestBody->maxDimension->maxMeasureSum = 8411.4;
    $request->requestBody->name = 'Correios PAC';
    $request->requestBody->shippingMethod = 'Normal';
    $request->id = 'shippingpolicyid1';

    $response = $sdk->shippingPolicies->putApiLogisticsPvtShippingPoliciesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
