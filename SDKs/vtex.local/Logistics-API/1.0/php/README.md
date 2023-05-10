# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateDockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateDockRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->dockId = 'distinctio';

    $response = $sdk->docks->activateDock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [docks](docs/docks/README.md)

* [activateDock](docs/docks/README.md#activatedock) - Activate dock
* [allDocks](docs/docks/README.md#alldocks) - List all  docks
* [createUpdateDock](docs/docks/README.md#createupdatedock) - Create/update dock
* [deactivateDock](docs/docks/README.md#deactivatedock) - Deactivate dock
* [dock](docs/docks/README.md#dock) - Delete dock
* [dockById](docs/docks/README.md#dockbyid) - List dock by ID

### [freightValues](docs/freightvalues/README.md)

* [createUpdateFreightValues](docs/freightvalues/README.md#createupdatefreightvalues) - Create/update freight values
* [freightValues](docs/freightvalues/README.md#freightvalues) - List freight values

### [holidays](docs/holidays/README.md)

* [allHolidays](docs/holidays/README.md#allholidays) - List all holidays
* [createUpdateHoliday](docs/holidays/README.md#createupdateholiday) - Create/update holiday
* [holiday](docs/holidays/README.md#holiday) - Delete holiday
* [holidayById](docs/holidays/README.md#holidaybyid) - List holiday by ID

### [inventory](docs/inventory/README.md)

* [getSupplyLots](docs/inventory/README.md#getsupplylots) - List supply lots
* [getinventorywithdispatchedreservations](docs/inventory/README.md#getinventorywithdispatchedreservations) - List inventory with dispatched reservations
* [inventoryBySku](docs/inventory/README.md#inventorybysku) - List inventory by SKU
* [inventoryperdock](docs/inventory/README.md#inventoryperdock) - List inventory per dock
* [inventoryperdockandwarehouse](docs/inventory/README.md#inventoryperdockandwarehouse) - List inventory per dock and warehouse
* [inventoryperwarehouse](docs/inventory/README.md#inventoryperwarehouse) - List inventory per warehouse
* [saveSupplyLot](docs/inventory/README.md#savesupplylot) - Save supply lot
* [transferSupplyLot](docs/inventory/README.md#transfersupplylot) - Transfer supply lot
* [updateInventoryBySkuandWarehouse](docs/inventory/README.md#updateinventorybyskuandwarehouse) - Update inventory by SKU and warehouse

### [pickupPoints](docs/pickuppoints/README.md)

* [createUpdatePickupPoint](docs/pickuppoints/README.md#createupdatepickuppoint) - Create/Update Pickup Point
* [delete](docs/pickuppoints/README.md#delete) - Delete Pickup Point
* [getById](docs/pickuppoints/README.md#getbyid) - List Pickup Point By ID
* [getpaged](docs/pickuppoints/README.md#getpaged) - List paged Pickup Points
* [listAllPickupPpoints](docs/pickuppoints/README.md#listallpickupppoints) - List all pickup points

### [polygons](docs/polygons/README.md)

* [createUpdatePolygon](docs/polygons/README.md#createupdatepolygon) - Create/update polygon
* [deletePolygon](docs/polygons/README.md#deletepolygon) - Delete polygon
* [pagedPolygons](docs/polygons/README.md#pagedpolygons) - List paged polygons
* [polygonbyId](docs/polygons/README.md#polygonbyid) - List polygon by ID

### [reservations](docs/reservations/README.md)

* [acknowledgmentReservation](docs/reservations/README.md#acknowledgmentreservation) - Acknowledgment reservation
* [cancelReservation](docs/reservations/README.md#cancelreservation) - Cancel reservation
* [confirmReservation](docs/reservations/README.md#confirmreservation) - Confirm reservation
* [createReservation](docs/reservations/README.md#createreservation) - Create reservation
* [reservationById](docs/reservations/README.md#reservationbyid) - List reservation by ID
* [reservationbyWarehouseandSku](docs/reservations/README.md#reservationbywarehouseandsku) - List reservation by warehouse and SKU

### [sla](docs/sla/README.md)

* [calculateSLA](docs/sla/README.md#calculatesla) - Calculate SLA

### [scheduledDelivery](docs/scheduleddelivery/README.md)

* [addBlockedDeliveryWindows](docs/scheduleddelivery/README.md#addblockeddeliverywindows) - Add blocked delivery windows
* [removeBlockedDeliveryWindows](docs/scheduleddelivery/README.md#removeblockeddeliverywindows) - Remove blocked delivery windows
* [retrieveBlockedDeliveryWindows](docs/scheduleddelivery/README.md#retrieveblockeddeliverywindows) - Retrieve blocked delivery windows
* [getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames](docs/scheduleddelivery/README.md#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframes) - Search capacity reservations in time range
* [getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime](docs/scheduleddelivery/README.md#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframeswindowdayfwindowstarttimetwindowendtime) - Get capacity reservation usage by window

### [shippingPolicies](docs/shippingpolicies/README.md)

* [deleteApiLogisticsPvtShippingPoliciesId](docs/shippingpolicies/README.md#deleteapilogisticspvtshippingpoliciesid) - Delete shipping policies by ID
* [getApiLogisticsPvtShippingPolicies](docs/shippingpolicies/README.md#getapilogisticspvtshippingpolicies) - List shipping policies
* [getApiLogisticsPvtShippingPoliciesId](docs/shippingpolicies/README.md#getapilogisticspvtshippingpoliciesid) - Retrieve shipping policy by ID
* [postApiLogisticsPvtShippingPolicies](docs/shippingpolicies/README.md#postapilogisticspvtshippingpolicies) - Create shipping policy
* [putApiLogisticsPvtShippingPoliciesId](docs/shippingpolicies/README.md#putapilogisticspvtshippingpoliciesid) - Update shipping policy

### [warehouses](docs/warehouses/README.md)

* [activateWarehouse](docs/warehouses/README.md#activatewarehouse) - Activate warehouse
* [allWarehouses](docs/warehouses/README.md#allwarehouses) - List all warehouses
* [createUpdateWarehouse](docs/warehouses/README.md#createupdatewarehouse) - Create/update warehouse
* [deactivateWarehouse](docs/warehouses/README.md#deactivatewarehouse) - Deactivate warehouse
* [removeWarehouse](docs/warehouses/README.md#removewarehouse) - Remove warehouse
* [warehouseById](docs/warehouses/README.md#warehousebyid) - List warehouse by ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
