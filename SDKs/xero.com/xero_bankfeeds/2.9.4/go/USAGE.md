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