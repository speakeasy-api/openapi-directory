# SellerCommissions

## Overview

Get sellers' data

### Available Operations

* [BulkUpsertSellerCommissions](#bulkupsertsellercommissions) - Upsert Seller Commissions in Bulk
* [ListSellerCommissions](#listsellercommissions) - List Seller Commissions by seller ID
* [RemoveSellerCommissions](#removesellercommissions) - Remove Seller Commissions by Category ID
* [RetrieveSellerCommissions](#retrievesellercommissions) - Get Seller Commissions by Category ID
* [UpsertSellerCommissions](#upsertsellercommissions) - Upsert Seller Commissions by Category ID

## BulkUpsertSellerCommissions

This endpoint is used by marketplace operators to define comissions for multiple categories.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerCommissions.BulkUpsertSellerCommissions(ctx, operations.BulkUpsertSellerCommissionsRequest{
        Accept: "optio",
        ContentType: "totam",
        RequestBody: []shared.BulkUpsertSellerCommissionsRequest{
            shared.BulkUpsertSellerCommissionsRequest{
                CategoryFullPath: "commodi",
                CategoryID: "molestiae",
                FreightCommissionPercentage: 2645.55,
                ProductCommissionPercentage: 1863.32,
            },
        },
        AccountName: "impedit",
        Environment: "cum",
        SellerID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListSellerCommissions

This endpoint retrieves all comissions configured for a specific seller.

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
    res, err := s.SellerCommissions.ListSellerCommissions(ctx, operations.ListSellerCommissionsRequest{
        Accept: "ipsum",
        ContentType: "excepturi",
        AccountName: "aspernatur",
        Environment: "perferendis",
        SellerID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveSellerCommissions

This endpoint removes a seller comission on the selected category.

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
    res, err := s.SellerCommissions.RemoveSellerCommissions(ctx, operations.RemoveSellerCommissionsRequest{
        Accept: "natus",
        ContentType: "sed",
        AccountName: "iste",
        CategoryID: "dolor",
        Environment: "natus",
        SellerID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RetrieveSellerCommissions

This endpoint retrieves seller comissions applied to the selected category.

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
    res, err := s.SellerCommissions.RetrieveSellerCommissions(ctx, operations.RetrieveSellerCommissionsRequest{
        Accept: "hic",
        ContentType: "saepe",
        AccountName: "fuga",
        CategoryID: "in",
        Environment: "corporis",
        SellerID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpsertSellerCommissions

This endpoint is used by marketplace operators to define comissions for a single category, by ID.

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
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerCommissions.UpsertSellerCommissions(ctx, operations.UpsertSellerCommissionsRequest{
        Accept: "iure",
        ContentType: "saepe",
        UpsertSellerCommissionsRequest: shared.UpsertSellerCommissionsRequest{
            CategoryFullPath: "quidem",
            CategoryID: "architecto",
            FreightCommissionPercentage: 602.25,
            ProductCommissionPercentage: 9698.1,
        },
        AccountName: "est",
        CategoryID: "mollitia",
        Environment: "laborum",
        SellerID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
