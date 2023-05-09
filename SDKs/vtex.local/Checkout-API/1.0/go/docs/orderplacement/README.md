# OrderPlacement

### Available Operations

* [PlaceOrder](#placeorder) - Place order
* [PlaceOrderFromExistingOrderForm](#placeorderfromexistingorderform) - Place order from an existing cart
* [ProcessOrder](#processorder) - Process order

## PlaceOrder

Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.

>⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).

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
    res, err := s.OrderPlacement.PlaceOrder(ctx, operations.PlaceOrderRequest{
        Accept: "accusamus",
        ContentType: "commodi",
        RequestBody: &operations.PlaceOrderRequestBody{
            ClientProfileData: operations.PlaceOrderRequestBodyClientProfileData{
                CorporateDocument: sdk.String("repudiandae"),
                CorporateName: sdk.String("quae"),
                CorporatePhone: sdk.String("ipsum"),
                Document: sdk.String("quidem"),
                DocumentType: sdk.String("molestias"),
                Email: "Samantha_Gleason@yahoo.com",
                FirstName: sdk.String("Terence"),
                IsCorporate: sdk.Bool(false),
                LastName: sdk.String("Botsford"),
                Phone: sdk.String("1-609-430-6816 x78221"),
                StateInscription: sdk.String("aliquid"),
                TradeName: sdk.String("cupiditate"),
            },
            Items: []PlaceOrderRequestBodyItems{
                operations.PlaceOrderRequestBodyItems{
                    Attachments: []string{
                        "magni",
                    },
                    BundleItems: []PlaceOrderRequestBodyItemsBundleItems{
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                    },
                    Commission: sdk.Int64(10),
                    FreightCommission: sdk.Int64(10),
                    ID: "123",
                    IsGift: sdk.Bool(false),
                    ItemAttachment: &operations.PlaceOrderRequestBodyItemsItemAttachment{
                        Content: sdk.String("content-example"),
                        Name: sdk.String("name-example"),
                    },
                    MeasurementUnit: sdk.String("ipsam"),
                    Price: sdk.Int64(2499),
                    PriceTags: []PlaceOrderRequestBodyItemsPriceTags{
                        operations.PlaceOrderRequestBodyItemsPriceTags{
                            Identifier: sdk.String("fugit"),
                            IsPercentual: sdk.Bool(false),
                            Name: sdk.String("Marshall Glover"),
                            RawValue: sdk.Int64(288476),
                            Value: sdk.Int64(962189),
                        },
                    },
                    Quantity: 1,
                    Seller: "1",
                    UnitMultiplier: sdk.Int64(433288),
                },
                operations.PlaceOrderRequestBodyItems{
                    Attachments: []string{
                        "eligendi",
                    },
                    BundleItems: []PlaceOrderRequestBodyItemsBundleItems{
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                    },
                    Commission: sdk.Int64(10),
                    FreightCommission: sdk.Int64(10),
                    ID: "123",
                    IsGift: sdk.Bool(false),
                    ItemAttachment: &operations.PlaceOrderRequestBodyItemsItemAttachment{
                        Content: sdk.String("content-example"),
                        Name: sdk.String("name-example"),
                    },
                    MeasurementUnit: sdk.String("aliquid"),
                    Price: sdk.Int64(2499),
                    PriceTags: []PlaceOrderRequestBodyItemsPriceTags{
                        operations.PlaceOrderRequestBodyItemsPriceTags{
                            Identifier: sdk.String("necessitatibus"),
                            IsPercentual: sdk.Bool(false),
                            Name: sdk.String("Luke Fadel"),
                            RawValue: sdk.Int64(680056),
                            Value: sdk.Int64(447125),
                        },
                        operations.PlaceOrderRequestBodyItemsPriceTags{
                            Identifier: sdk.String("in"),
                            IsPercentual: sdk.Bool(false),
                            Name: sdk.String("Mrs. Emilio Price"),
                            RawValue: sdk.Int64(813798),
                            Value: sdk.Int64(411820),
                        },
                        operations.PlaceOrderRequestBodyItemsPriceTags{
                            Identifier: sdk.String("aliquid"),
                            IsPercentual: sdk.Bool(false),
                            Name: sdk.String("Tomas Friesen"),
                            RawValue: sdk.Int64(881736),
                            Value: sdk.Int64(965417),
                        },
                    },
                    Quantity: 1,
                    Seller: "1",
                    UnitMultiplier: sdk.Int64(692532),
                },
                operations.PlaceOrderRequestBodyItems{
                    Attachments: []string{
                        "nam",
                        "id",
                        "blanditiis",
                    },
                    BundleItems: []PlaceOrderRequestBodyItemsBundleItems{
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                        operations.PlaceOrderRequestBodyItemsBundleItems{
                            ID: sdk.String("id-example"),
                            Name: sdk.String("name-example"),
                            Price: sdk.Int64(199),
                            Type: sdk.String("type-example"),
                        },
                    },
                    Commission: sdk.Int64(10),
                    FreightCommission: sdk.Int64(10),
                    ID: "123",
                    IsGift: sdk.Bool(false),
                    ItemAttachment: &operations.PlaceOrderRequestBodyItemsItemAttachment{
                        Content: sdk.String("content-example"),
                        Name: sdk.String("name-example"),
                    },
                    MeasurementUnit: sdk.String("sapiente"),
                    Price: sdk.Int64(2499),
                    PriceTags: []PlaceOrderRequestBodyItemsPriceTags{
                        operations.PlaceOrderRequestBodyItemsPriceTags{
                            Identifier: sdk.String("deserunt"),
                            IsPercentual: sdk.Bool(false),
                            Name: sdk.String("Wilma Mosciski"),
                            RawValue: sdk.Int64(19193),
                            Value: sdk.Int64(470132),
                        },
                    },
                    Quantity: 1,
                    Seller: "1",
                    UnitMultiplier: sdk.Int64(301575),
                },
            },
            MarketingData: &operations.PlaceOrderRequestBodyMarketingData{
                Coupon: sdk.String("distinctio"),
                UtmCampaign: sdk.String("id"),
                UtmMedium: sdk.String("labore"),
                UtmSource: sdk.String("labore"),
                UtmiCampaign: sdk.String("suscipit"),
                UtmiPage: sdk.String("natus"),
                UtmiPart: sdk.String("nobis"),
            },
            OpenTextField: sdk.String("eum"),
            PaymentData: operations.PlaceOrderRequestBodyPaymentData{
                GiftCardMessages: []interface{}{
                    "aspernatur",
                    "architecto",
                    "magnam",
                    "et",
                },
                GiftCards: []PlaceOrderRequestBodyPaymentDataGiftCards{
                    operations.PlaceOrderRequestBodyPaymentDataGiftCards{
                        Balance: sdk.Int64(500),
                        ID: sdk.String("1390324156495k195pmab4rall3di"),
                        InUse: sdk.Bool(true),
                        IsSpecialCard: sdk.Bool(false),
                        Name: sdk.String("name-example"),
                        RedemptionCode: "HYUO-TEZZ-QFFT-HTFR",
                        Value: 500,
                    },
                    operations.PlaceOrderRequestBodyPaymentDataGiftCards{
                        Balance: sdk.Int64(500),
                        ID: sdk.String("1390324156495k195pmab4rall3di"),
                        InUse: sdk.Bool(true),
                        IsSpecialCard: sdk.Bool(false),
                        Name: sdk.String("name-example"),
                        RedemptionCode: "HYUO-TEZZ-QFFT-HTFR",
                        Value: 500,
                    },
                    operations.PlaceOrderRequestBodyPaymentDataGiftCards{
                        Balance: sdk.Int64(500),
                        ID: sdk.String("1390324156495k195pmab4rall3di"),
                        InUse: sdk.Bool(true),
                        IsSpecialCard: sdk.Bool(false),
                        Name: sdk.String("name-example"),
                        RedemptionCode: "HYUO-TEZZ-QFFT-HTFR",
                        Value: 500,
                    },
                },
                PaymentSystems: []PlaceOrderRequestBodyPaymentDataPaymentSystems{
                    operations.PlaceOrderRequestBodyPaymentDataPaymentSystems{
                        Description: sdk.String("provident"),
                        GroupName: sdk.String("creditCardPaymentGroup"),
                        ID: sdk.Int64(2),
                        IsCustom: sdk.Bool(false),
                        Name: sdk.String("Visa"),
                        RequiresDocument: sdk.Bool(false),
                        Selected: sdk.Bool(false),
                        StringID: sdk.String("quos"),
                        Template: sdk.String("sint"),
                        Validator: &operations.PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator{
                            CardCodeMask: sdk.String("999"),
                            CardCodeRegex: sdk.String("[^0-9]"),
                            Mask: sdk.String("9999 9999 9999 9999"),
                            Regex: sdk.String("^4"),
                            Weights: []int64{
                                653201,
                            },
                        },
                    },
                    operations.PlaceOrderRequestBodyPaymentDataPaymentSystems{
                        Description: sdk.String("reiciendis"),
                        GroupName: sdk.String("creditCardPaymentGroup"),
                        ID: sdk.Int64(2),
                        IsCustom: sdk.Bool(false),
                        Name: sdk.String("Visa"),
                        RequiresDocument: sdk.Bool(false),
                        Selected: sdk.Bool(false),
                        StringID: sdk.String("mollitia"),
                        Template: sdk.String("ad"),
                        Validator: &operations.PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator{
                            CardCodeMask: sdk.String("999"),
                            CardCodeRegex: sdk.String("[^0-9]"),
                            Mask: sdk.String("9999 9999 9999 9999"),
                            Regex: sdk.String("^4"),
                            Weights: []int64{
                                221262,
                                896547,
                            },
                        },
                    },
                },
                Payments: []PlaceOrderRequestBodyPaymentDataPayments{
                    operations.PlaceOrderRequestBodyPaymentDataPayments{
                        AccountID: sdk.String("nemo"),
                        Bin: sdk.String("quasi"),
                        Installments: 435865,
                        PaymentSystem: "doloribus",
                        ReferenceValue: 891924,
                        Value: 260341,
                    },
                },
                UpdateStatus: sdk.String("maxime"),
            },
            SalesAssociateData: &operations.PlaceOrderRequestBodySalesAssociateData{
                SalesAssociateID: sdk.String("deleniti"),
            },
            ShippingData: operations.PlaceOrderRequestBodyShippingData{
                Address: &operations.PlaceOrderRequestBodyShippingDataAddress{
                    AddressID: sdk.String("facilis"),
                    AddressType: sdk.String("residential"),
                    City: sdk.String("Barbaraland"),
                    Complement: sdk.String("repudiandae"),
                    Country: sdk.String("Guam"),
                    GeoCoordinates: []float64{
                        -47.924747467041016,
                        -47.924747467041016,
                        -47.924747467041016,
                    },
                    Neighborhood: sdk.String("nihil"),
                    Number: sdk.String("repellat"),
                    PostalCode: sdk.String("19801-5611"),
                    ReceiverName: sdk.String("quo"),
                    Reference: sdk.String("illum"),
                    State: sdk.String("pariatur"),
                    Street: sdk.String("451 Alexanne Center"),
                },
                LogisticsInfo: []PlaceOrderRequestBodyShippingDataLogisticsInfo{
                    operations.PlaceOrderRequestBodyShippingDataLogisticsInfo{
                        DeliveryWindow: &operations.PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow{
                            EndDateUtc: sdk.String("quidem"),
                            LisPrice: sdk.Int64(373291),
                            Price: sdk.Int64(453543),
                            StartDateUtc: sdk.String("autem"),
                            Tax: sdk.Int64(722056),
                        },
                        ItemIndex: 50588,
                        LockTTL: sdk.String("pariatur"),
                        Price: 365496,
                        SelectedSLA: "voluptatibus",
                        ShippingEstimate: sdk.String("perferendis"),
                    },
                    operations.PlaceOrderRequestBodyShippingDataLogisticsInfo{
                        DeliveryWindow: &operations.PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow{
                            EndDateUtc: sdk.String("fugiat"),
                            LisPrice: sdk.Int64(230742),
                            Price: sdk.Int64(11714),
                            StartDateUtc: sdk.String("cumque"),
                            Tax: sdk.Int64(359978),
                        },
                        ItemIndex: 944124,
                        LockTTL: sdk.String("libero"),
                        Price: 749999,
                        SelectedSLA: "dolores",
                        ShippingEstimate: sdk.String("quis"),
                    },
                    operations.PlaceOrderRequestBodyShippingDataLogisticsInfo{
                        DeliveryWindow: &operations.PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow{
                            EndDateUtc: sdk.String("totam"),
                            LisPrice: sdk.Int64(489549),
                            Price: sdk.Int64(54338),
                            StartDateUtc: sdk.String("quis"),
                            Tax: sdk.Int64(199996),
                        },
                        ItemIndex: 179490,
                        LockTTL: sdk.String("perferendis"),
                        Price: 170986,
                        SelectedSLA: "minus",
                        ShippingEstimate: sdk.String("quam"),
                    },
                    operations.PlaceOrderRequestBodyShippingDataLogisticsInfo{
                        DeliveryWindow: &operations.PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow{
                            EndDateUtc: sdk.String("dolor"),
                            LisPrice: sdk.Int64(874573),
                            Price: sdk.Int64(345352),
                            StartDateUtc: sdk.String("hic"),
                            Tax: sdk.Int64(928082),
                        },
                        ItemIndex: 608253,
                        LockTTL: sdk.String("facilis"),
                        Price: 596656,
                        SelectedSLA: "voluptatem",
                        ShippingEstimate: sdk.String("porro"),
                    },
                },
                UpdateStatus: sdk.String("consequuntur"),
            },
        },
        Sc: sdk.Int64(1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PlaceOrderFromExistingOrderForm

This endpoint places an order from an existing `orderForm` object, meaning an existing cart.

After the creation of an order with this request, you have five minutes to send payment information and then request payment processing.

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
    res, err := s.OrderPlacement.PlaceOrderFromExistingOrderForm(ctx, operations.PlaceOrderFromExistingOrderFormRequest{
        Accept: "blanditiis",
        ContentType: "error",
        RequestBody: &operations.PlaceOrderFromExistingOrderFormRequestBody{
            InterestValue: 50370,
            OptinNewsLetter: sdk.Bool(false),
            ReferenceID: "occaecati",
            ReferenceValue: 699098,
            SavePersonalData: sdk.Bool(false),
            Value: 237893,
        },
        OrderFormID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceOrderFromExistingOrderForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProcessOrder

Order processing callback request, which is made after an order's payment is approved.

> This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.

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
    res, err := s.OrderPlacement.ProcessOrder(ctx, operations.ProcessOrderRequest{
        Accept: "earum",
        ContentType: "modi",
        Cookie: "iste",
        OrderGroup: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
