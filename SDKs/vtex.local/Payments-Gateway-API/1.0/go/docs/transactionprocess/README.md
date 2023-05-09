# TransactionProcess

## Overview

This is meant to explain the requests that are necessary to complete a transaction using PCI Gateway.

### Available Operations

* [OneCreateanewtransaction](#onecreateanewtransaction) - 1. Starts a new transaction
* [TwoSendPaymentsPublic](#twosendpaymentspublic) - 2.1 Send Payments Information Public
* [TwoSendPaymentsWithSavedCreditCard](#twosendpaymentswithsavedcreditcard) - 2.2 Send Payments With Saved Credit Card
* [ThreeSendAdditionalData](#threesendadditionaldata) - 3. Send Additional Data
* [FourDoauthorization](#fourdoauthorization) - Do authorization
* [PaymentDetails](#paymentdetails) - Payment Details
* [TransactionDetails](#transactiondetails) - Transaction Details
* [TransactionSettlementDetails](#transactionsettlementdetails) - Transaction Settlement  Details

## OneCreateanewtransaction

This request is the first step to create a new transaction.

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
    res, err := s.TransactionProcess.OneCreateanewtransaction(ctx, operations.OneCreateanewtransactionRequest{
        OneCreateanewtransactionRequest: shared.OneCreateanewtransactionRequest{
            Channel: "modi",
            ReferenceID: "iste",
            SalesChannel: "dolorum",
            Urn: sdk.String("deleniti"),
            Value: 864282,
        },
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTransactionResponse != nil {
        // handle response
    }
}
```

## TwoSendPaymentsPublic

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card. 

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
    res, err := s.TransactionProcess.TwoSendPaymentsPublic(ctx, operations.TwoSendPaymentsPublicRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: []shared.TwoSendPaymentsPublicRequest{
            shared.TwoSendPaymentsPublicRequest{
                CurrencyCode: "nobis",
                Fields: shared.Fields{
                    AccountID: "libero",
                    Address: "353 Cornelius Extensions",
                    CallbackURL: "qui",
                    CardNumber: "ipsum",
                    Document: "hic",
                    DueDate: "excepturi",
                    HolderName: "cum",
                    ValidationCode: "voluptate",
                },
                Installments: 490459,
                InstallmentsInterestRate: 970237,
                InstallmentsValue: 227414,
                PaymentSystem: 680545,
                ReferenceValue: 254356,
                Transaction: shared.Transaction{
                    ID: "100674eb-f692-480d-9ba7-7a89ebf737ae",
                    MerchantName: "eius",
                },
                Value: 137220,
            },
            shared.TwoSendPaymentsPublicRequest{
                CurrencyCode: "perferendis",
                Fields: shared.Fields{
                    AccountID: "amet",
                    Address: "839 Luna Oval",
                    CallbackURL: "minima",
                    CardNumber: "repellendus",
                    Document: "totam",
                    DueDate: "similique",
                    HolderName: "alias",
                    ValidationCode: "at",
                },
                Installments: 311860,
                InstallmentsInterestRate: 273542,
                InstallmentsValue: 425451,
                PaymentSystem: 798047,
                ReferenceValue: 885338,
                Transaction: shared.Transaction{
                    ID: "2af7a73c-f3be-4453-b870-b326b5a73429",
                    MerchantName: "maxime",
                },
                Value: 863856,
            },
            shared.TwoSendPaymentsPublicRequest{
                CurrencyCode: "soluta",
                Fields: shared.Fields{
                    AccountID: "dicta",
                    Address: "521 Mikayla Ranch",
                    CallbackURL: "aliquid",
                    CardNumber: "quam",
                    Document: "molestias",
                    DueDate: "temporibus",
                    HolderName: "qui",
                    ValidationCode: "neque",
                },
                Installments: 144847,
                InstallmentsInterestRate: 164959,
                InstallmentsValue: 488056,
                PaymentSystem: 124833,
                ReferenceValue: 355613,
                Transaction: shared.Transaction{
                    ID: "bf0cbb1e-31b8-4b90-b344-3a1108e0adcf",
                    MerchantName: "ut",
                },
                Value: 703495,
            },
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        OrderID: "{{orderId}}",
        TransactionID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TwoSendPaymentsWithSavedCreditCard

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.

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
    res, err := s.TransactionProcess.TwoSendPaymentsWithSavedCreditCard(ctx, operations.TwoSendPaymentsWithSavedCreditCardRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: []shared.TwoSendPaymentsWithSavedCreditCardRequest{
            shared.TwoSendPaymentsWithSavedCreditCardRequest{
                CurrencyCode: "quae",
                Fields: shared.Fields3{
                    AccountID: "laudantium",
                    Address: "5978 Hauck Extension",
                    CallbackURL: "delectus",
                    FirstDigits: "voluptate",
                    ValidationCode: "consectetur",
                },
                Installments: 878870,
                InstallmentsInterestRate: 949319,
                InstallmentsValue: 492268,
                PaymentSystem: 941378,
                ReferenceValue: 715561,
                Transaction: shared.Transaction{
                    ID: "c7abd74d-d39c-40f5-92cf-f7c70a45626d",
                    MerchantName: "magnam",
                },
                Value: 189848,
            },
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ThreeSendAdditionalData

The third step to create a new transaction. It will send the additional related data to the transaction, like billig and shipping adress.

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
    res, err := s.TransactionProcess.ThreeSendAdditionalData(ctx, operations.ThreeSendAdditionalDataRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: [][]interface{}{
            []interface{}{
                "dolor",
            },
            []interface{}{
                "quasi",
                "ex",
                "nulla",
                "excepturi",
            },
            []interface{}{
                "nostrum",
                "sapiente",
                "quisquam",
                "saepe",
            },
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FourDoauthorization

The fouth and last step to create a new transaction. It will authorized the new transction creation acorrdint to the data previously informed in the latests requests.

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
    res, err := s.TransactionProcess.FourDoauthorization(ctx, operations.FourDoauthorizationRequest{
        FourDoauthorizationRequest: shared.FourDoauthorizationRequest{
            PrepareForRecurrency: false,
            SoftDescriptor: "impedit",
            TransactionID: "corporis",
        },
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PaymentDetails

Returns associated information details for the specified payment id.

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
    res, err := s.TransactionProcess.PaymentDetails(ctx, operations.PaymentDetailsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        PaymentID: "aliquid",
        TransactionID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentDetailsResponse != nil {
        // handle response
    }
}
```

## TransactionDetails

Returns associated data for the specified transaction id, like value and status, for exemple.

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
    res, err := s.TransactionProcess.TransactionDetails(ctx, operations.TransactionDetailsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionDetailsResponse != nil {
        // handle response
    }
}
```

## TransactionSettlementDetails

Returns associated settlements data for the specified transaction id.

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
    res, err := s.TransactionProcess.TransactionSettlementDetails(ctx, operations.TransactionSettlementDetailsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        TransactionID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionSettlementDetails != nil {
        // handle response
    }
}
```
