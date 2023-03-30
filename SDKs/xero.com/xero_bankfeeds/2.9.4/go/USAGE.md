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
        Security: operations.CreateFeedConnectionsSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateFeedConnectionsHeaders{
            XeroTenantID: "corrupti",
        },
        Request: shared.FeedConnections{
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
    }

    ctx := context.Background()
    res, err := s.BankFeeds.CreateFeedConnections(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FeedConnections != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->