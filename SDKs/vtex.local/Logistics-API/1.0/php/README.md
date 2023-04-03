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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### docks

* `activateDock` - Activate dock
* `allDocks` - List all  docks
* `createUpdateDock` - Create/update dock
* `deactivateDock` - Deactivate dock
* `dock` - Delete dock
* `dockById` - List dock by ID

### freightValues

* `createUpdateFreightValues` - Create/update freight values
* `freightValues` - List freight values

### holidays

* `allHolidays` - List all holidays
* `createUpdateHoliday` - Create/update holiday
* `holiday` - Delete holiday
* `holidayById` - List holiday by ID

### inventory

* `getSupplyLots` - List supply lots
* `getinventorywithdispatchedreservations` - List inventory with dispatched reservations
* `inventoryBySku` - List inventory by SKU
* `inventoryperdock` - List inventory per dock
* `inventoryperdockandwarehouse` - List inventory per dock and warehouse
* `inventoryperwarehouse` - List inventory per warehouse
* `saveSupplyLot` - Save supply lot
* `transferSupplyLot` - Transfer supply lot
* `updateInventoryBySkuandWarehouse` - Update inventory by SKU and warehouse

### pickupPoints

* `createUpdatePickupPoint` - Create/Update Pickup Point
* `delete` - Delete Pickup Point
* `getById` - List Pickup Point By ID
* `getpaged` - List paged Pickup Points
* `listAllPickupPpoints` - List all pickup points

### polygons

* `createUpdatePolygon` - Create/update polygon
* `deletePolygon` - Delete polygon
* `pagedPolygons` - List paged polygons
* `polygonbyId` - List polygon by ID

### reservations

* `acknowledgmentReservation` - Acknowledgment reservation
* `cancelReservation` - Cancel reservation
* `confirmReservation` - Confirm reservation
* `createReservation` - Create reservation
* `reservationById` - List reservation by ID
* `reservationbyWarehouseandSku` - List reservation by warehouse and SKU

### sla

* `calculateSLA` - Calculate SLA

### scheduledDelivery

* `addBlockedDeliveryWindows` - Add blocked delivery windows
* `removeBlockedDeliveryWindows` - Remove blocked delivery windows
* `retrieveBlockedDeliveryWindows` - Retrieve blocked delivery windows
* `getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFrames` - Search capacity reservations in time range
* `getApiLogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime` - Get capacity reservation usage by window

### shippingPolicies

* `deleteApiLogisticsPvtShippingPoliciesId` - Delete shipping policies by ID
* `getApiLogisticsPvtShippingPolicies` - List shipping policies
* `getApiLogisticsPvtShippingPoliciesId` - Retrieve shipping policy by ID
* `postApiLogisticsPvtShippingPolicies` - Create shipping policy
* `putApiLogisticsPvtShippingPoliciesId` - Update shipping policy

### warehouses

* `activateWarehouse` - Activate warehouse
* `allWarehouses` - List all warehouses
* `createUpdateWarehouse` - Create/update warehouse
* `deactivateWarehouse` - Deactivate warehouse
* `removeWarehouse` - Remove warehouse
* `warehouseById` - List warehouse by ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
