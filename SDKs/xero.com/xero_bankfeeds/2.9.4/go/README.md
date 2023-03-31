# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/xero.com/xero_bankfeeds/2.9.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateFeedConnectionsRequest{
        FeedConnections: shared.FeedConnections{
            Items: []shared.FeedConnection{
                shared.FeedConnection{
                    AccountID: "079a88ea-276d-41fb-a1f1-366ef3e22921",
                    AccountName: "Joe's Savings Account",
                    AccountNumber: "3809087654321500",
                    AccountToken: "10000123",
                    AccountType: "BANK",
                    Country: "GB",
                    Currency: "AUD",
                    Error: &shared.Error{
                        Detail: "The application has not been configured to use these API endpoints.",
                        Status: 403,
                        Title: "Invalid Application",
                        Type: "invalid-application",
                    },
                    ID: "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
                    Status: "REJECTED",
                },
                shared.FeedConnection{
                    AccountID: "079a88ea-276d-41fb-a1f1-366ef3e22921",
                    AccountName: "Joe's Savings Account",
                    AccountNumber: "3809087654321500",
                    AccountToken: "10000123",
                    AccountType: "BANK",
                    Country: "GB",
                    Currency: "AUD",
                    Error: &shared.Error{
                        Detail: "The application has not been configured to use these API endpoints.",
                        Status: 403,
                        Title: "Invalid Application",
                        Type: "invalid-application",
                    },
                    ID: "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
                    Status: "REJECTED",
                },
                shared.FeedConnection{
                    AccountID: "079a88ea-276d-41fb-a1f1-366ef3e22921",
                    AccountName: "Joe's Savings Account",
                    AccountNumber: "3809087654321500",
                    AccountToken: "10000123",
                    AccountType: "BANK",
                    Country: "GB",
                    Currency: "AUD",
                    Error: &shared.Error{
                        Detail: "The application has not been configured to use these API endpoints.",
                        Status: 403,
                        Title: "Invalid Application",
                        Type: "invalid-application",
                    },
                    ID: "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
                    Status: "REJECTED",
                },
            },
            Pagination: &shared.Pagination{
                ItemCount: 2,
                Page: 1,
                PageCount: 1,
                PageSize: 10,
            },
        },
        XeroTenantID: "provident",
    }

    ctx := context.Background()
    res, err := s.BankFeeds.CreateFeedConnections(ctx, req, operations.CreateFeedConnectionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeedConnections != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BankFeeds

* `CreateFeedConnections` - Create one or more new feed connection
* `CreateStatements` - Creates one or more new statements
* `DeleteFeedConnections` - Delete an existing feed connection
* `GetFeedConnection` - Retrieve single feed connection based on a unique id provided
* `GetFeedConnections` - Searches for feed connections
* `GetStatement` - Retrieve single statement based on unique id provided
* `GetStatements` - Retrieve all statements
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
