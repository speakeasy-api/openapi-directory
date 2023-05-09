# CartAttachments

### Available Operations

* [AddClientPreferences](#addclientpreferences) - Add client preferences
* [AddClientProfile](#addclientprofile) - Add client profile
* [AddMarketingData](#addmarketingdata) - Add marketing data
* [AddMerchantContextData](#addmerchantcontextdata) - Add merchant context data
* [AddPaymentData](#addpaymentdata) - Add payment data
* [AddShippingAddress](#addshippingaddress) - Add shipping address and select delivery option
* [GetClientProfileByEmail](#getclientprofilebyemail) - Get client profile by email

## AddClientPreferences

Use this request to include client preferences information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

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
    res, err := s.CartAttachments.AddClientPreferences(ctx, operations.AddClientPreferencesRequest{
        Accept: "unde",
        ContentType: "nulla",
        RequestBody: operations.AddClientPreferencesRequestBody{
            Locale: sdk.String("corrupti"),
            OptinNewsLetter: sdk.Bool(false),
        },
        OrderFormID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddClientPreferences200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## AddClientProfile

Use this request to include client profile information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

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
    res, err := s.CartAttachments.AddClientProfile(ctx, operations.AddClientProfileRequest{
        Accept: "vel",
        ContentType: "error",
        RequestBody: operations.AddClientProfileRequestBody{
            CorporateDocument: sdk.String("deserunt"),
            CorporateName: sdk.String("suscipit"),
            CorporatePhone: sdk.String("iure"),
            Document: "magnam",
            DocumentType: "debitis",
            Email: "Vincenzo.Goldner@gmail.com",
            FirstName: "Paxton",
            IsCorporate: sdk.Bool(false),
            LastName: "Schulist",
            Phone: sdk.String("553-980-3060 x3897"),
            StateInscription: sdk.String("odit"),
            TradeName: sdk.String("at"),
        },
        OrderFormID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddMarketingData

Use this request to include marketing information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

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
    res, err := s.CartAttachments.AddMarketingData(ctx, operations.AddMarketingDataRequest{
        Accept: "maiores",
        ContentType: "molestiae",
        RequestBody: operations.AddMarketingDataRequestBody{
            Coupon: sdk.String("quod"),
            MarketingTags: []string{
                "esse",
                "totam",
                "porro",
                "dolorum",
            },
            UtmCampaign: sdk.String("dicta"),
            UtmMedium: sdk.String("nam"),
            UtmSource: sdk.String("officia"),
            UtmiCampaign: sdk.String("occaecati"),
            UtmiPage: sdk.String("fugit"),
            UtmiPart: sdk.String("deleniti"),
        },
        OrderFormID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddMerchantContextData

This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

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
    res, err := s.CartAttachments.AddMerchantContextData(ctx, operations.AddMerchantContextDataRequest{
        Accept: "optio",
        ContentType: "totam",
        RequestBody: operations.AddMerchantContextDataRequestBody{
            SalesAssociateData: operations.AddMerchantContextDataRequestBodySalesAssociateData{
                SalesAssociateID: sdk.String("beatae"),
            },
        },
        OrderFormID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddMerchantContextData200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AddPaymentData

Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

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
    res, err := s.CartAttachments.AddPaymentData(ctx, operations.AddPaymentDataRequest{
        Accept: "molestiae",
        ContentType: "modi",
        RequestBody: operations.AddPaymentDataRequestBody{
            Payments: []AddPaymentDataRequestBodyPayments{
                operations.AddPaymentDataRequestBodyPayments{
                    Group: sdk.String("impedit"),
                    HasDefaultBillingAddress: sdk.Bool(false),
                    Installments: sdk.Int64(736918),
                    InstallmentsInterestRate: sdk.Float64(4561.5),
                    InstallmentsValue: sdk.Int64(216550),
                    PaymentSystem: sdk.Int64(568434),
                    PaymentSystemName: sdk.String("aspernatur"),
                    ReferenceValue: sdk.Int64(18789),
                    Value: sdk.Int64(324141),
                },
            },
        },
        OrderFormID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddShippingAddress

Use this request to include shipping information and/or selected delivery option to a given shopping cart.

To add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

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
    res, err := s.CartAttachments.AddShippingAddress(ctx, operations.AddShippingAddressRequest{
        Accept: "sed",
        ContentType: "iste",
        RequestBody: operations.AddShippingAddressRequestBody{
            ClearAddressIfPostalCodeNotFound: sdk.Bool(false),
            LogisticsInfo: []AddShippingAddressRequestBodyLogisticsInfo{
                operations.AddShippingAddressRequestBodyLogisticsInfo{
                    ItemIndex: sdk.Int64(616934),
                    SelectedDeliveryChannel: sdk.String("laboriosam"),
                    SelectedSLA: sdk.String("hic"),
                },
            },
            SelectedAddresses: []AddShippingAddressRequestBodySelectedAddresses{
                operations.AddShippingAddressRequestBodySelectedAddresses{
                    AddressType: sdk.String("residential"),
                    City: sdk.String("Rio de Janeiro"),
                    Complement: sdk.String("3rd floor"),
                    Country: sdk.String("BRA"),
                    GeoCoordinates: []float64{
                        -47.924747467041016,
                        -47.924747467041016,
                        -47.924747467041016,
                    },
                    Neighborhood: sdk.String("Botafogo"),
                    Number: sdk.String("300"),
                    PostalCode: sdk.String("12345-000"),
                    ReceiverName: sdk.String("receiver-name"),
                    Reference: sdk.String("Grey building"),
                    State: sdk.String("RJ"),
                    Street: sdk.String("Praia de Botafogo"),
                },
                operations.AddShippingAddressRequestBodySelectedAddresses{
                    AddressType: sdk.String("residential"),
                    City: sdk.String("Rio de Janeiro"),
                    Complement: sdk.String("3rd floor"),
                    Country: sdk.String("BRA"),
                    GeoCoordinates: []float64{
                        -47.924747467041016,
                        -47.924747467041016,
                    },
                    Neighborhood: sdk.String("Botafogo"),
                    Number: sdk.String("300"),
                    PostalCode: sdk.String("12345-000"),
                    ReceiverName: sdk.String("receiver-name"),
                    Reference: sdk.String("Grey building"),
                    State: sdk.String("RJ"),
                    Street: sdk.String("Praia de Botafogo"),
                },
                operations.AddShippingAddressRequestBodySelectedAddresses{
                    AddressType: sdk.String("residential"),
                    City: sdk.String("Rio de Janeiro"),
                    Complement: sdk.String("3rd floor"),
                    Country: sdk.String("BRA"),
                    GeoCoordinates: []float64{
                        -47.924747467041016,
                        -47.924747467041016,
                    },
                    Neighborhood: sdk.String("Botafogo"),
                    Number: sdk.String("300"),
                    PostalCode: sdk.String("12345-000"),
                    ReceiverName: sdk.String("receiver-name"),
                    Reference: sdk.String("Grey building"),
                    State: sdk.String("RJ"),
                    Street: sdk.String("Praia de Botafogo"),
                },
                operations.AddShippingAddressRequestBodySelectedAddresses{
                    AddressType: sdk.String("residential"),
                    City: sdk.String("Rio de Janeiro"),
                    Complement: sdk.String("3rd floor"),
                    Country: sdk.String("BRA"),
                    GeoCoordinates: []float64{
                        -47.924747467041016,
                        -47.924747467041016,
                        -47.924747467041016,
                    },
                    Neighborhood: sdk.String("Botafogo"),
                    Number: sdk.String("300"),
                    PostalCode: sdk.String("12345-000"),
                    ReceiverName: sdk.String("receiver-name"),
                    Reference: sdk.String("Grey building"),
                    State: sdk.String("RJ"),
                    Street: sdk.String("Praia de Botafogo"),
                },
            },
        },
        OrderFormID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetClientProfileByEmail

Retrieve a client's profile information by providing an email address.

If the response body fields are empty, the following situations may have occurred:

1. There is no client registered with the email address provided in your store, or;
2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

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
    res, err := s.CartAttachments.GetClientProfileByEmail(ctx, operations.GetClientProfileByEmailRequest{
        Accept: "saepe",
        ContentType: "quidem",
        Email: "Andy_Wisozk67@gmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClientProfileByEmail200ApplicationJSONObject != nil {
        // handle response
    }
}
```
