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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.InvoiceNotification2Request{
        PathParams: operations.InvoiceNotification2PathParams{
            OrderID: "70caf3941s6df1",
        },
        Headers: operations.InvoiceNotification2Headers{
            Accept: "application/json",
            ContentType: "application/json",
        },
        Request: shared.InvoiceNotificationRequest{
            Cfop: "6.104",
            Courier: "corrupti",
            ExtraValue: 100,
            InvoiceKey: "provident",
            InvoiceNumber: "123456789",
            InvoiceURL: "distinctio",
            InvoiceValue: "2499",
            IssuedDate: "2020-07-15",
            Items: []shared.Item1{
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
                shared.Item1{
                    ItemIndex: "67",
                    Price: 2499,
                    Quantity: 3,
                },
            },
            TrackingNumber: "unde",
            TrackingURL: "nulla",
            Type: "Output",
            Volumes: 3,
        },
    }

    ctx := context.Background()
    res, err := s.Invoice.InvoiceNotification2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceNotification2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->