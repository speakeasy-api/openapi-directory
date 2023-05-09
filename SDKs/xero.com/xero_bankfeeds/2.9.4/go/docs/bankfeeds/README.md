# BankFeeds

### Available Operations

* [CreateFeedConnections](#createfeedconnections) - Create one or more new feed connection
* [CreateStatements](#createstatements) - Creates one or more new statements
* [DeleteFeedConnections](#deletefeedconnections) - Delete an existing feed connection
* [GetFeedConnection](#getfeedconnection) - Retrieve single feed connection based on a unique id provided
* [GetFeedConnections](#getfeedconnections) - Searches for feed connections
* [GetStatement](#getstatement) - Retrieve single statement based on unique id provided
* [GetStatements](#getstatements) - Retrieve all statements

## CreateFeedConnections

By passing in the FeedConnections array object in the body, you can create one or more new feed connections

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
        XeroTenantID: "quibusdam",
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

## CreateStatements

Creates one or more new statements

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BankFeeds.CreateStatements(ctx, operations.CreateStatementsRequest{
        Statements: &shared.Statements{
            Items: []shared.Statement{
                shared.Statement{
                    EndBalance: &shared.EndBalance{
                        Amount: sdk.Float64(10.1340),
                        CreditDebitIndicator: shared.CreditDebitIndicatorEnumDebit.ToPointer(),
                    },
                    EndDate: types.MustDateFromString("2018-07-27"),
                    Errors: []shared.Error{
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                    },
                    FeedConnectionID: sdk.String("87cb0dc8-fa32-409c-b622-19f8de8dcc83"),
                    ID: sdk.String("ba4f3127-5e46-427d-80ea-dea2fcd26afe"),
                    StartBalance: &shared.StartBalance{
                        Amount: sdk.Float64(9.0000),
                        CreditDebitIndicator: shared.CreditDebitIndicatorEnumDebit.ToPointer(),
                    },
                    StartDate: types.MustDateFromString("2018-07-27"),
                    StatementLineCount: sdk.Int64(1),
                    StatementLines: []shared.StatementLine{
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumDebit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumDebit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                    },
                    Status: shared.StatementStatusEnumPending.ToPointer(),
                },
                shared.Statement{
                    EndBalance: &shared.EndBalance{
                        Amount: sdk.Float64(10.1340),
                        CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                    },
                    EndDate: types.MustDateFromString("2018-07-27"),
                    Errors: []shared.Error{
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                    },
                    FeedConnectionID: sdk.String("87cb0dc8-fa32-409c-b622-19f8de8dcc83"),
                    ID: sdk.String("ba4f3127-5e46-427d-80ea-dea2fcd26afe"),
                    StartBalance: &shared.StartBalance{
                        Amount: sdk.Float64(9.0000),
                        CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                    },
                    StartDate: types.MustDateFromString("2018-07-27"),
                    StatementLineCount: sdk.Int64(1),
                    StatementLines: []shared.StatementLine{
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumDebit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                    },
                    Status: shared.StatementStatusEnumPending.ToPointer(),
                },
                shared.Statement{
                    EndBalance: &shared.EndBalance{
                        Amount: sdk.Float64(10.1340),
                        CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                    },
                    EndDate: types.MustDateFromString("2018-07-27"),
                    Errors: []shared.Error{
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                        shared.Error{
                            Detail: sdk.String("The application has not been configured to use these API endpoints."),
                            Status: sdk.Int64(403),
                            Title: sdk.String("Invalid Application"),
                            Type: shared.ErrorTypeEnumInvalidApplication.ToPointer(),
                        },
                    },
                    FeedConnectionID: sdk.String("87cb0dc8-fa32-409c-b622-19f8de8dcc83"),
                    ID: sdk.String("ba4f3127-5e46-427d-80ea-dea2fcd26afe"),
                    StartBalance: &shared.StartBalance{
                        Amount: sdk.Float64(9.0000),
                        CreditDebitIndicator: shared.CreditDebitIndicatorEnumDebit.ToPointer(),
                    },
                    StartDate: types.MustDateFromString("2018-07-27"),
                    StatementLineCount: sdk.Int64(1),
                    StatementLines: []shared.StatementLine{
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumDebit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                        shared.StatementLine{
                            Amount: sdk.Float64(5.00),
                            ChequeNumber: sdk.String("021"),
                            CreditDebitIndicator: shared.CreditDebitIndicatorEnumCredit.ToPointer(),
                            Description: sdk.String("Description for statement line 2"),
                            PayeeName: sdk.String("Payee name for statement line 2"),
                            PostedDate: types.MustDateFromString("2018-06-10"),
                            Reference: sdk.String("Reference for statement line 2"),
                            TransactionID: sdk.String("transaction-id-2"),
                        },
                    },
                    Status: shared.StatementStatusEnumPending.ToPointer(),
                },
            },
            Pagination: &shared.Pagination{
                ItemCount: sdk.Int64(2),
                Page: sdk.Int64(1),
                PageCount: sdk.Int64(1),
                PageSize: sdk.Int64(10),
            },
        },
        XeroTenantID: "recusandae",
    }, operations.CreateStatementsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statements != nil {
        // handle response
    }
}
```

## DeleteFeedConnections

By passing in FeedConnections array object in the body, you can delete a feed connection.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BankFeeds.DeleteFeedConnections(ctx, operations.DeleteFeedConnectionsRequest{
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
        XeroTenantID: "ab",
    }, operations.DeleteFeedConnectionsSecurity{
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

## GetFeedConnection

By passing in a FeedConnection Id options, you can search for matching feed connections

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
    res, err := s.BankFeeds.GetFeedConnection(ctx, operations.GetFeedConnectionRequest{
        XeroTenantID: "quis",
        ID: "1a05dfc2-ddf7-4cc7-8ca1-ba928fc81674",
    }, operations.GetFeedConnectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeedConnection != nil {
        // handle response
    }
}
```

## GetFeedConnections

By passing in the appropriate options, you can search for available feed connections in the system.

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
    res, err := s.BankFeeds.GetFeedConnections(ctx, operations.GetFeedConnectionsRequest{
        XeroTenantID: "qui",
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(100),
    }, operations.GetFeedConnectionsSecurity{
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

## GetStatement

By passing in a statement id, you can search for matching statements

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
    res, err := s.BankFeeds.GetStatement(ctx, operations.GetStatementRequest{
        XeroTenantID: "impedit",
        StatementIDPathParameter: "cum",
        StatementIDQueryParameter: "73920592-9396-4fea-b596-eb10faaa2352",
    }, operations.GetStatementSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statement != nil {
        // handle response
    }
}
```

## GetStatements

By passing in parameters, you can search for matching statements

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
    res, err := s.BankFeeds.GetStatements(ctx, operations.GetStatementsRequest{
        XeroApplicationID: sdk.String("nobis"),
        XeroTenantID: "enim",
        XeroUserID: sdk.String("omnis"),
        Page: sdk.Int(363711),
        PageSize: sdk.Int(325047),
    }, operations.GetStatementsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statements != nil {
        // handle response
    }
}
```
