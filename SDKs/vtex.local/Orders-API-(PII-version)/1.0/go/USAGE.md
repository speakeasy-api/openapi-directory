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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Invoice.InvoiceNotification2(ctx, operations.InvoiceNotification2Request{
        Accept: "application/json",
        ContentType: "application/json",
        InvoiceNotificationRequest: shared.InvoiceNotificationRequest{
            Cfop: sdk.String("6.104"),
            Courier: sdk.String("corrupti"),
            ExtraValue: sdk.Int64(100),
            InvoiceKey: sdk.String("provident"),
            InvoiceNumber: "123456789",
            InvoiceURL: sdk.String("distinctio"),
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
            TrackingNumber: sdk.String("unde"),
            TrackingURL: sdk.String("nulla"),
            Type: "Output",
            Volumes: sdk.Int64(3),
        },
        OrderID: "70caf3941s6df1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvoiceNotification2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->