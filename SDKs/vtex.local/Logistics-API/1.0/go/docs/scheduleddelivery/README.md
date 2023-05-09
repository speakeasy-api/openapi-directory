# ScheduledDelivery

### Available Operations

* [AddBlockedDeliveryWindows](#addblockeddeliverywindows) - Add blocked delivery windows
* [RemoveBlockedDeliveryWindows](#removeblockeddeliverywindows) - Remove blocked delivery windows
* [RetrieveBlockedDeliveryWindows](#retrieveblockeddeliverywindows) - Retrieve blocked delivery windows
* [GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFrames](#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframes) - Search capacity reservations in time range
* [GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFramesWindowDayFWindowStartTimeTWindowEndTime](#getapilogisticscapacityresourcescarrieratcapacitytypeatshippingpolicyidtimeframeswindowdayfwindowstarttimetwindowendtime) - Get capacity reservation usage by window

## AddBlockedDeliveryWindows

Adds blocked delivery windows for your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

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
    res, err := s.ScheduledDelivery.AddBlockedDeliveryWindows(ctx, operations.AddBlockedDeliveryWindowsRequest{
        Accept: "totam",
        ContentType: "dicta",
        RequestBody: ""2016-08-09T08:00:00"",
        CarrierID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveBlockedDeliveryWindows

Removes the blocked delivery windows set to your store's shipping policies.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

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
    res, err := s.ScheduledDelivery.RemoveBlockedDeliveryWindows(ctx, operations.RemoveBlockedDeliveryWindowsRequest{
        Accept: "velit",
        ContentType: "dolor",
        RequestBody: ""2016-08-09T08:00:00"",
        CarrierID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RetrieveBlockedDeliveryWindows

Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.

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
    res, err := s.ScheduledDelivery.RetrieveBlockedDeliveryWindows(ctx, operations.RetrieveBlockedDeliveryWindowsRequest{
        Accept: "a",
        ContentType: "dolor",
        CarrierID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFrames

Get information on all capacity reservations made to scheduled delivery windows in a given time range.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

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
    res, err := s.ScheduledDelivery.GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFrames(ctx, operations.GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFramesRequest{
        Accept: "application/vnd.vtex.availability.v1+json",
        ContentType: "atque",
        CapacityType: "{{capacityType}}",
        RangeEnd: "yyyy-mm-dd",
        RangeStart: "yyyy-mm-dd",
        ShippingPolicyID: "{{shippingPolicyId}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFramesWindowDayFWindowStartTimeTWindowEndTime

Retrieves capacity usage of a specific scheduled delivery reservation window.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.

> Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.

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
    res, err := s.ScheduledDelivery.GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFramesWindowDayFWindowStartTimeTWindowEndTime(ctx, operations.GetAPILogisticsCapacityResourcesCarrierAtCapacityTypeAtShippingPolicyIDTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRequest{
        Accept: "application/vnd.vtex.availability.v1+json",
        ContentType: "beatae",
        CapacityType: "{{capacityType}}",
        ShippingPolicyID: "{{shippingPolicyId}}",
        WindowDay: "yyyy-mm-dd",
        WindowEndTime: "hhmm",
        WindowStartTime: "hhmm",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
