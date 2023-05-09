# Reports

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [Delete11](#delete11) - Removes a report.
* [Duplicate1](#duplicate1) - Duplicates a report.
* [ExportToXML](#exporttoxml) - Exports reports definition to XML.
* [GenerateCSV](#generatecsv) - Generates CSV content for a report.
* [GeneratePrinterFriendly](#generateprinterfriendly) - Generates printer friendly content for a report.
* [ImportFromXML](#importfromxml) - Imports reports definition from XML.
* [SetPreferred](#setpreferred) - Marks report as preferred or not.

## Delete11

Removes a report.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.Delete11(ctx, operations.Delete11Request{
        ReportID: 41179,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Duplicate1

Duplicates a report.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.Duplicate1(ctx, operations.Duplicate1Request{
        ReportID: 31574,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportToXML

Exports reports definition to XML.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.ExportToXML(ctx, shared.ExportRequestDTO{
        Ids: []int64{
            901008,
            807564,
            9375,
            51007,
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

## GenerateCSV

Generates CSV content for a report.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.GenerateCSV(ctx, operations.GenerateCSVRequest{
        ReportID: 102390,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GeneratePrinterFriendly

Generates printer friendly content for a report.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.GeneratePrinterFriendly(ctx, operations.GeneratePrinterFriendlyRequest{
        ReportID: 627161,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ImportFromXML

Imports a report definition from an XML using a file token. To obtain the token, you first need to upload a temporary XML file, as specified in the Files section. Note that the name of the imported report must be unique.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.ImportFromXML(ctx, shared.ImportRequestDTO{
        FileToken: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetPreferred

Marks report as preferred or not.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.SetPreferred(ctx, operations.SetPreferredRequest{
        PreferredRequestDTO: shared.PreferredRequestDTO{
            Preferred: sdk.Bool(false),
        },
        ReportID: 502453,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
