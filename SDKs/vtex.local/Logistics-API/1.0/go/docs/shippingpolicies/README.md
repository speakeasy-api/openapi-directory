# ShippingPolicies

### Available Operations

* [DeleteAPILogisticsPvtShippingPoliciesID](#deleteapilogisticspvtshippingpoliciesid) - Delete shipping policies by ID
* [GetAPILogisticsPvtShippingPolicies](#getapilogisticspvtshippingpolicies) - List shipping policies
* [GetAPILogisticsPvtShippingPoliciesID](#getapilogisticspvtshippingpoliciesid) - Retrieve shipping policy by ID
* [PostAPILogisticsPvtShippingPolicies](#postapilogisticspvtshippingpolicies) - Create shipping policy
* [PutAPILogisticsPvtShippingPoliciesID](#putapilogisticspvtshippingpoliciesid) - Update shipping policy

## DeleteAPILogisticsPvtShippingPoliciesID

This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.

### Example Usage

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
    res, err := s.ShippingPolicies.DeleteAPILogisticsPvtShippingPoliciesID(ctx, operations.DeleteAPILogisticsPvtShippingPoliciesIDRequest{
        Accept: "at",
        ContentType: "labore",
        ID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPILogisticsPvtShippingPolicies

This endpoint lists existing shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

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
    res, err := s.ShippingPolicies.GetAPILogisticsPvtShippingPolicies(ctx, operations.GetAPILogisticsPvtShippingPoliciesRequest{
        Accept: "minus",
        ContentType: "esse",
        Page: "page",
        PerPage: "perPage",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPILogisticsPvtShippingPoliciesID

This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

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
    res, err := s.ShippingPolicies.GetAPILogisticsPvtShippingPoliciesID(ctx, operations.GetAPILogisticsPvtShippingPoliciesIDRequest{
        Accept: "voluptatem",
        ContentType: "perferendis",
        ID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPILogisticsPvtShippingPolicies

This endpoint creates new shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

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
    res, err := s.ShippingPolicies.PostAPILogisticsPvtShippingPolicies(ctx, operations.PostAPILogisticsPvtShippingPoliciesRequest{
        Accept: "rerum",
        ContentType: "ea",
        RequestBody: &operations.PostAPILogisticsPvtShippingPoliciesRequestBody{
            BusinessHourSettings: operations.PostAPILogisticsPvtShippingPoliciesRequestBodyBusinessHourSettings{
                CarrierBusinessHours: []PostAPILogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours{
                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours{
                        ClosingTime: "23:59:59",
                        DayOfWeek: 1,
                        OpeningTime: "00:00:00",
                    },
                },
                IsOpenOutsideBusinessHours: true,
            },
            CarrierSchedule: []PostAPILogisticsPvtShippingPoliciesRequestBodyCarrierSchedule{
                operations.PostAPILogisticsPvtShippingPoliciesRequestBodyCarrierSchedule{
                    DayOfWeek: sdk.Int64(998026),
                    TimeLimit: sdk.String("time_limit"),
                },
                operations.PostAPILogisticsPvtShippingPoliciesRequestBodyCarrierSchedule{
                    DayOfWeek: sdk.Int64(243678),
                    TimeLimit: sdk.String("time_limit"),
                },
            },
            CubicWeightSettings: operations.PostAPILogisticsPvtShippingPoliciesRequestBodyCubicWeightSettings{
                MinimunAcceptableVolumetricWeight: 7841.15,
                VolumetricFactor: 5886.39,
            },
            DeliveryScheduleSettings: operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettings{
                DayOfWeekForDelivery: []PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery{
                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery{
                        DayOfWeek: 2,
                        DeliveryRanges: []PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                            operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 2358.34,
                                    },
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 7441.01,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 6205,
                                StartTime: "11:00:00",
                            },
                            operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 6396.22,
                                    },
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 2288.57,
                                    },
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 9485.41,
                                    },
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 1339.49,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 7782.76,
                                StartTime: "11:00:00",
                            },
                            operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 8483.46,
                                    },
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 6707.62,
                                    },
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 4904.2,
                                    },
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 8762.85,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 1853.48,
                                StartTime: "11:00:00",
                            },
                            operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PostAPILogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 9958.16,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 1286.96,
                                StartTime: "11:00:00",
                            },
                        },
                    },
                },
                MaxRangeDelivery: 1293.55,
                UseDeliverySchedule: true,
            },
            ID: "123",
            IsActive: false,
            MaxDimension: operations.PostAPILogisticsPvtShippingPoliciesRequestBodyMaxDimension{
                LargestMeasure: 3503.25,
                MaxMeasureSum: 4714.57,
            },
            MaximumValueAceptable: 2527,
            MinimumValueAceptable: 680.93,
            ModalSettings: operations.PostAPILogisticsPvtShippingPoliciesRequestBodyModalSettings{
                Modals: []interface{}{
                    "hic",
                },
                UseOnlyItemsWithDefinedModal: false,
            },
            Name: "Normal",
            NumberOfItemsPerShipment: 5,
            PickupPointsSettings: operations.PostAPILogisticsPvtShippingPoliciesRequestBodyPickupPointsSettings{
                PickupPointIds: []interface{}{
                    "delectus",
                    "non",
                    "distinctio",
                },
                PickupPointTags: []interface{}{
                    "exercitationem",
                    "labore",
                },
                Sellers: []interface{}{
                    "repudiandae",
                    "modi",
                },
            },
            ShippingMethod: "Normal",
            WeekendAndHolidays: operations.PostAPILogisticsPvtShippingPoliciesRequestBodyWeekendAndHolidays{
                Holiday: false,
                Saturday: false,
                Sunday: false,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAPILogisticsPvtShippingPoliciesID

This endpoint updates information on existing Shipping Policies from carriers.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

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
    res, err := s.ShippingPolicies.PutAPILogisticsPvtShippingPoliciesID(ctx, operations.PutAPILogisticsPvtShippingPoliciesIDRequest{
        Accept: "in",
        ContentType: "explicabo",
        RequestBody: &operations.PutAPILogisticsPvtShippingPoliciesIDRequestBody{
            DeliveryOnWeekends: false,
            DeliveryScheduleSettings: &operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettings{
                DayOfWeekForDelivery: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery{
                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery{
                        DayOfWeek: 2,
                        DeliveryRanges: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 1418.17,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 5358.02,
                                StartTime: "11:00:00",
                            },
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 4527.3,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 6267.07,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 3261.18,
                                StartTime: "11:00:00",
                            },
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 3001.89,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 242.72,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 2667.88,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 4301.16,
                                StartTime: "11:00:00",
                            },
                        },
                    },
                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery{
                        DayOfWeek: 2,
                        DeliveryRanges: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 4926.32,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 8532.46,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 3451.38,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 4753.25,
                                StartTime: "11:00:00",
                            },
                        },
                    },
                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery{
                        DayOfWeek: 2,
                        DeliveryRanges: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 662.07,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 2656.32,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 138.65,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 135.08,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 9116.57,
                                StartTime: "11:00:00",
                            },
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 4137.58,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 2561.14,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 6770.45,
                                StartTime: "11:00:00",
                            },
                        },
                    },
                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery{
                        DayOfWeek: 2,
                        DeliveryRanges: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 2327.72,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 2006.37,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 3106.29,
                                StartTime: "11:00:00",
                            },
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 7912.28,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 1226.62,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 7151.43,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 4813.75,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 5580.51,
                                StartTime: "11:00:00",
                            },
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 7049.48,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 2292.76,
                                StartTime: "11:00:00",
                            },
                            operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges{
                                DeliveryCapacity: []PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 6854.15,
                                    },
                                    operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity{
                                        CapacityType: "ORDERS_QUANTITY",
                                        MaxValue: 53.1,
                                    },
                                },
                                EndTime: "12:30:00",
                                ListPrice: 5264.13,
                                StartTime: "11:00:00",
                            },
                        },
                    },
                },
                MaxRangeDelivery: 113.55,
                UseDeliverySchedule: true,
            },
            IsActive: true,
            MaxDimension: operations.PutAPILogisticsPvtShippingPoliciesIDRequestBodyMaxDimension{
                LargestMeasure: 5500.55,
                MaxMeasureSum: 5112.22,
            },
            Name: "Correios PAC",
            ShippingMethod: "Normal",
        },
        ID: "shippingpolicyid1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
