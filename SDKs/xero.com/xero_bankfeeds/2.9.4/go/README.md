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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BankFeeds.CreateFeedConnections(ctx, operations.CreateFeedConnectionsRequest{
        FeedConnections: shared.FeedConnections{
            Items: []shared.FeedConnection{
                shared.FeedConnection{
                    AccountID: sdk.String("079a88ea-276d-41fb-a1f1-366ef3e22921"),
                    AccountName: sdk.String("Joe's Savings Account"),
                    AccountNumber: sdk.String("3809087654321500"),
                    AccountToken: sdk.String("10000123"),
                    AccountType: shared.FeedConnectionAccountTypeEnumBank.ToPointer(),
                    Country: shared.CountryCodeEnumGb.ToPointer(),
                    Currency: shared.CurrencyCodeEnumAud.ToPointer(),
                    Error: &shared.Error{
                        Detail: sdk.String("The application has not been configured to use these API endpoints."),
                        Status: sdk.Int64(403),
                        Title: sdk.String("Invalid Application"),
                        Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                    },
                    ID: sdk.String("0d3cf8d-95dc-4466-8dc0-47e6d1197e28"),
                    Status: shared.FeedConnectionStatusEnumRejected.ToPointer(),
                },
                shared.FeedConnection{
                    AccountID: sdk.String("079a88ea-276d-41fb-a1f1-366ef3e22921"),
                    AccountName: sdk.String("Joe's Savings Account"),
                    AccountNumber: sdk.String("3809087654321500"),
                    AccountToken: sdk.String("10000123"),
                    AccountType: shared.FeedConnectionAccountTypeEnumBank.ToPointer(),
                    Country: shared.CountryCodeEnumGb.ToPointer(),
                    Currency: shared.CurrencyCodeEnumAud.ToPointer(),
                    Error: &shared.Error{
                        Detail: sdk.String("The application has not been configured to use these API endpoints."),
                        Status: sdk.Int64(403),
                        Title: sdk.String("Invalid Application"),
                        Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                    },
                    ID: sdk.String("0d3cf8d-95dc-4466-8dc0-47e6d1197e28"),
                    Status: shared.FeedConnectionStatusEnumRejected.ToPointer(),
                },
                shared.FeedConnection{
                    AccountID: sdk.String("079a88ea-276d-41fb-a1f1-366ef3e22921"),
                    AccountName: sdk.String("Joe's Savings Account"),
                    AccountNumber: sdk.String("3809087654321500"),
                    AccountToken: sdk.String("10000123"),
                    AccountType: shared.FeedConnectionAccountTypeEnumBank.ToPointer(),
                    Country: shared.CountryCodeEnumGb.ToPointer(),
                    Currency: shared.CurrencyCodeEnumAud.ToPointer(),
                    Error: &shared.Error{
                        Detail: sdk.String("The application has not been configured to use these API endpoints."),
                        Status: sdk.Int64(403),
                        Title: sdk.String("Invalid Application"),
                        Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                    },
                    ID: sdk.String("0d3cf8d-95dc-4466-8dc0-47e6d1197e28"),
                    Status: shared.FeedConnectionStatusEnumRejected.ToPointer(),
                },
            },
            Pagination: &shared.Pagination{
                ItemCount: sdk.Int64(2),
                Page: sdk.Int64(1),
                PageCount: sdk.Int64(1),
                PageSize: sdk.Int64(10),
            },
        },
        XeroTenantID: "provident",
    }, operations.CreateFeedConnectionsSecurity{
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


### [BankFeeds](docs/bankfeeds/README.md)

* [CreateFeedConnections](docs/bankfeeds/README.md#createfeedconnections) - Create one or more new feed connection
* [CreateStatements](docs/bankfeeds/README.md#createstatements) - Creates one or more new statements
* [DeleteFeedConnections](docs/bankfeeds/README.md#deletefeedconnections) - Delete an existing feed connection
* [GetFeedConnection](docs/bankfeeds/README.md#getfeedconnection) - Retrieve single feed connection based on a unique id provided
* [GetFeedConnections](docs/bankfeeds/README.md#getfeedconnections) - Searches for feed connections
* [GetStatement](docs/bankfeeds/README.md#getstatement) - Retrieve single statement based on unique id provided
* [GetStatements](docs/bankfeeds/README.md#getstatements) - Retrieve all statements
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
