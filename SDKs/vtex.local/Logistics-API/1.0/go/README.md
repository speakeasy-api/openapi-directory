# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Logistics-API/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Docks.ActivateDock(ctx, operations.ActivateDockRequest{
        Accept: "corrupti",
        ContentType: "provident",
        DockID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Docks](docs/docks/README.md)

* [ActivateDock](docs/docks/README.md#activatedock) - Activate dock
* [AllDocks](docs/docks/README.md#alldocks) - List all  docks
* [CreateUpdateDock](docs/docks/README.md#createupdatedock) - Create/update dock
* [DeactivateDock](docs/docks/README.md#deactivatedock) - Deactivate dock
* [Dock](docs/docks/README.md#dock) - Delete dock
* [DockByID](docs/docks/README.md#dockbyid) - List dock by ID

### [FreightValues](docs/freightvalues/README.md)

* [CreateUpdateFreightValues](docs/freightvalues/README.md#createupdatefreightvalues) - Create/update freight values
* [FreightValues](docs/freightvalues/README.md#freightvalues) - List freight values

### [Holidays](docs/holidays/README.md)

* [AllHolidays](docs/holidays/README.md#allholidays) - List all holidays
* [CreateUpdateHoliday](docs/holidays/README.md#createupdateholiday) - Create/update holiday
* [Holiday](docs/holidays/README.md#holiday) - Delete holiday
* [HolidayByID](docs/holidays/README.md#holidaybyid) - List holiday by ID

### [Inventory](docs/inventory/README.md)

* [GetSupplyLots](docs/inventory/README.md#getsupplylots) - List supply lots
* [Getinventorywithdispatchedreservations](docs/inventory/README.md#getinventorywithdispatchedreservations) - List inventory with dispatched reservations
* [InventoryBySku](docs/inventory/README.md#inventorybysku) - List inventory by SKU
* [Inventoryperdock](docs/inventory/README.md#inventoryperdock) - List inventory per dock
* [Inventoryperdockandwarehouse](docs/inventory/README.md#inventoryperdockandwarehouse) - List inventory per dock and warehouse
* [Inventoryperwarehouse](docs/inventory/README.md#inventoryperwarehouse) - List inventory per warehouse
* [SaveSupplyLot](docs/inventory/README.md#savesupplylot) - Save supply lot
* [TransferSupplyLot](docs/inventory/README.md#transfersupplylot) - Transfer supply lot
* [UpdateInventoryBySkuandWarehouse](docs/inventory/README.md#updateinventorybyskuandwarehouse) - Update inventory by SKU and warehouse

### [PickupPoints](docs/pickuppoints/README.md)

* [CreateUpdatePickupPoint](docs/pickuppoints/README.md#createupdatepickuppoint) - Create/Update Pickup Point
* [Delete](docs/pickuppoints/README.md#delete) - Delete Pickup Point
* [GetByID](docs/pickuppoints/README.md#getbyid) - List Pickup Point By ID
* [Getpaged](docs/pickuppoints/README.md#getpaged) - List paged Pickup Points
* [ListAllPickupPpoints](docs/pickuppoints/README.md#listallpickupppoints) - List all pickup points

### [Polygons](docs/polygons/README.md)

* [CreateUpdatePolygon](docs/polygons/README.md#createupdatepolygon) - Create/update polygon
* [DeletePolygon](docs/polygons/README.md#deletepolygon) - Delete polygon
* [PagedPolygons](docs/polygons/README.md#pagedpolygons) - List paged polygons
* [PolygonbyID](docs/polygons/README.md#polygonbyid) - List polygon by ID

### [Reservations](docs/reservations/README.md)

* [AcknowledgmentReservation](docs/reservations/README.md#acknowledgmentreservation) - Acknowledgment reservation
* [CancelReservation](docs/reservations/README.md#cancelreservation) - Cancel reservation
* [ConfirmReservation](docs/reservations/README.md#confirmreservation) - Confirm reservation
* [CreateReservation](docs/reservations/README.md#createreservation) - Create reservation
* [ReservationByID](docs/reservations/README.md#reservationbyid) - List reservation by ID
* [ReservationbyWarehouseandSku](docs/reservations/README.md#reservationbywarehouseandsku) - List reservation by warehouse and SKU

### [SLA](docs/sla/README.md)

* [CalculateSLA](docs/sla/README.md#calculatesla) - Calculate SLA

### [ScheduledDelivery](docs/scheduleddelivery/README.md)

* [AddBlockedDeliveryWindows](docs/scheduleddelivery/README.md#addblockeddeliverywindows) - Add blocked delivery windows
* [RemoveBlockedDeliveryWindows](docs/scheduleddelivery/README.md#removeblockeddeliverywindows) - Remove blocked delivery windows
* [RetrieveBlockedDeliveryWindows](docs/scheduleddelivery/README.md#retrieveblockeddeliverywindows) - Retrieve blocked delivery windows
* [GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFrames](docs/scheduleddelivery/README.md#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframes) - Search capacity reservations in time range
* [GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFramesWindowDayFWindowStartTimeTWindowEndTime](docs/scheduleddelivery/README.md#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframeswindowdayfwindowstarttimetwindowendtime) - Get capacity reservation usage by window

### [ShippingPolicies](docs/shippingpolicies/README.md)

* [DeleteAPILogisticsPvtShippingPoliciesID](docs/shippingpolicies/README.md#deleteapilogisticspvtshippingpoliciesid) - Delete shipping policies by ID
* [GetAPILogisticsPvtShippingPolicies](docs/shippingpolicies/README.md#getapilogisticspvtshippingpolicies) - List shipping policies
* [GetAPILogisticsPvtShippingPoliciesID](docs/shippingpolicies/README.md#getapilogisticspvtshippingpoliciesid) - Retrieve shipping policy by ID
* [PostAPILogisticsPvtShippingPolicies](docs/shippingpolicies/README.md#postapilogisticspvtshippingpolicies) - Create shipping policy
* [PutAPILogisticsPvtShippingPoliciesID](docs/shippingpolicies/README.md#putapilogisticspvtshippingpoliciesid) - Update shipping policy

### [Warehouses](docs/warehouses/README.md)

* [ActivateWarehouse](docs/warehouses/README.md#activatewarehouse) - Activate warehouse
* [AllWarehouses](docs/warehouses/README.md#allwarehouses) - List all warehouses
* [CreateUpdateWarehouse](docs/warehouses/README.md#createupdatewarehouse) - Create/update warehouse
* [DeactivateWarehouse](docs/warehouses/README.md#deactivatewarehouse) - Deactivate warehouse
* [RemoveWarehouse](docs/warehouses/README.md#removewarehouse) - Remove warehouse
* [WarehouseByID](docs/warehouses/README.md#warehousebyid) - List warehouse by ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
