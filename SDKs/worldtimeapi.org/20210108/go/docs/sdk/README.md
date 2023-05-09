# SDK

## Overview

A simple API to get the current time based on a request with a timezone.

### Available Operations

* [GetIP](#getip) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetIPTxt](#getiptxt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetIPIpv4](#getipipv4) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetIPIpv4Txt](#getipipv4txt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetTimezone](#gettimezone) - a listing of all timezones.
* [GetTimezoneTxt](#gettimezonetxt) - a listing of all timezones.
* [GetTimezoneArea](#gettimezonearea) - a listing of all timezones available for that area.
* [GetTimezoneAreaTxt](#gettimezoneareatxt) - a listing of all timezones available for that area.
* [GetTimezoneAreaLocation](#gettimezonearealocation) - request the current time for a timezone.
* [GetTimezoneAreaLocationTxt](#gettimezonearealocationtxt) - request the current time for a timezone.
* [GetTimezoneAreaLocationRegion](#gettimezonearealocationregion) - request the current time for a timezone.
* [GetTimezoneAreaLocationRegionTxt](#gettimezonearealocationregiontxt) - request the current time for a timezone.

## GetIP

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetIP(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeJSONResponse != nil {
        // handle response
    }
}
```

## GetIPTxt

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetIPTxt(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeTextResponse != nil {
        // handle response
    }
}
```

## GetIPIpv4

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetIPIpv4(ctx, operations.GetIPIpv4Request{
        Ipv4: "140.151.183.216",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeJSONResponse != nil {
        // handle response
    }
}
```

## GetIPIpv4Txt

request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetIPIpv4Txt(ctx, operations.GetIPIpv4TxtRequest{
        Ipv4: "154.219.139.216",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeTextResponse != nil {
        // handle response
    }
}
```

## GetTimezone

a listing of all timezones.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezone(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTimezoneTxt

a listing of all timezones.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezoneTxt(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTimezoneArea

a listing of all timezones available for that area.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezoneArea(ctx, operations.GetTimezoneAreaRequest{
        Area: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJSONResponse != nil {
        // handle response
    }
}
```

## GetTimezoneAreaTxt

a listing of all timezones available for that area.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezoneAreaTxt(ctx, operations.GetTimezoneAreaTxtRequest{
        Area: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTextResponse != nil {
        // handle response
    }
}
```

## GetTimezoneAreaLocation

request the current time for a timezone.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezoneAreaLocation(ctx, operations.GetTimezoneAreaLocationRequest{
        Area: "deserunt",
        Location: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeJSONResponse != nil {
        // handle response
    }
}
```

## GetTimezoneAreaLocationTxt

request the current time for a timezone.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezoneAreaLocationTxt(ctx, operations.GetTimezoneAreaLocationTxtRequest{
        Area: "iure",
        Location: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeTextResponse != nil {
        // handle response
    }
}
```

## GetTimezoneAreaLocationRegion

request the current time for a timezone.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezoneAreaLocationRegion(ctx, operations.GetTimezoneAreaLocationRegionRequest{
        Area: "debitis",
        Location: "ipsa",
        Region: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeJSONResponse != nil {
        // handle response
    }
}
```

## GetTimezoneAreaLocationRegionTxt

request the current time for a timezone.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTimezoneAreaLocationRegionTxt(ctx, operations.GetTimezoneAreaLocationRegionTxtRequest{
        Area: "tempora",
        Location: "suscipit",
        Region: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeTextResponse != nil {
        // handle response
    }
}
```
