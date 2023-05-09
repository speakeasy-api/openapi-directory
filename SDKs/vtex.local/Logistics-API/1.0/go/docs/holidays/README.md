# Holidays

### Available Operations

* [AllHolidays](#allholidays) - List all holidays
* [CreateUpdateHoliday](#createupdateholiday) - Create/update holiday
* [Holiday](#holiday) - Delete holiday
* [HolidayByID](#holidaybyid) - List holiday by ID

## AllHolidays

Lists information of all holidays.

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
    res, err := s.Holidays.AllHolidays(ctx, operations.AllHolidaysRequest{
        Accept: "error",
        ContentType: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateUpdateHoliday

Creates or updates holidays through holiday ID.

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
    res, err := s.Holidays.CreateUpdateHoliday(ctx, operations.CreateUpdateHolidayRequest{
        Accept: "quis",
        ContentType: "vitae",
        RequestBody: operations.CreateUpdateHolidayCreateUpdateHolidayRequest{
            Name: "Matt Hamill",
            StartDate: "sequi",
        },
        HolidayID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Holiday

Deletes given holidays set up in your store.

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
    res, err := s.Holidays.Holiday(ctx, operations.HolidayRequest{
        Accept: "ipsam",
        ContentType: "id",
        HolidayID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HolidayByID

Lists holiday's information by holiday ID.

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
    res, err := s.Holidays.HolidayByID(ctx, operations.HolidayByIDRequest{
        Accept: "aut",
        ContentType: "quasi",
        HolidayID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
