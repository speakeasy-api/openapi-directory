# Orders

### Available Operations

* [AddLog](#addlog) - Add log in orders
* [CancelOrder](#cancelorder) - Cancel order
* [GetOrder](#getorder) - Get order
* [ListOrders](#listorders) - List orders
* [RegisterChange](#registerchange) - Register change on order
* [StartHandling](#starthandling) - Start handling order

## AddLog

Add a Log in Interactions Order Array.

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
    res, err := s.Orders.AddLog(ctx, operations.AddLogRequest{
        Accept: "repudiandae",
        AddLogRequest: shared.AddLogRequest{
            Message: "sint",
            Source: "veritatis",
        },
        ContentType: "itaque",
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelOrder

You should use this endpoint to cancel an order by its order identification number (the `orderId`).

A common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.

You should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.

Be aware that if the order status is already `Invoiced`, the order can only be canceled if—before using this request—you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).

> The `Cancel order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

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
    res, err := s.Orders.CancelOrder(ctx, operations.CancelOrderRequest{
        Accept: "incidunt",
        ContentType: "enim",
        RequestBody: &operations.CancelOrderRequestBody{
            Reason: sdk.String("consequatur"),
        },
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrder

This endpoint retrieves order details by searching a specific order ID or sequence number.

> The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.

## Response body example

```json
{
    "orderId": "1244730712239-01",
    "sequence": "502790",
    "marketplaceOrderId": "",
    "marketplaceServicesEndpoint": null,
    "sellerOrderId": "SLR-1244730712239-01",
    "origin": "Marketplace",
    "affiliateId": "",
    "salesChannel": "1",
    "merchantName": null,
    "status": "payment-approved",
    "statusDescription": "Pagamento Aprovado",
    "value": 2012,
    "creationDate": "2022-07-06T09:11:51.4597231+00:00",
    "lastChange": "2022-07-06T09:12:00.2849749+00:00",
    "orderGroup": "1244730712239",
    "totals": [
        {
            "id": "Items",
            "name": "Total dos Itens",
            "value": 2265
        },
        {
            "id": "Discounts",
            "name": "Total dos Descontos",
            "value": -453
        },
        {
            "id": "Shipping",
            "name": "Total do Frete",
            "value": 200
        },
        {
            "id": "Tax",
            "name": "Total da Taxa",
            "value": 0
        }
    ],
    "items": [
        {
            "uniqueId": "A14AD652AC5D40FBB0137D3ADA3CB800",
            "id": "12",
            "productId": "8",
            "ean": null,
            "lockId": null,
            "itemAttachment": {
                "content": {},
                "name": null
            },
            "attachments": [],
            "quantity": 1,
            "seller": "ppxpssp",
            "name": "Camiseta P Azul",
            "refId": "COP01_P-A",
            "price": 2265,
            "listPrice": 2265,
            "manualPrice": null,
            "priceTags": [
                {
                    "name": "discount@price-d0231eb3-e9a4-47b2-9c74-bc346df11ce4#e9bb430d-30b3-4461-a86e-f66f35b2915d",
                    "value": -453,
                    "isPercentual": false,
                    "identifier": "d0231eb3-e9a4-47b2-9c74-bc346df11ce4",
                    "rawValue": -4.53,
                    "rate": null,
                    "jurisCode": null,
                    "jurisType": null,
                    "jurisName": null
                }
            ],
            "imageUrl": "https://ppxps.vteximg.com.br/arquivos/ids/155407-55-55/EE803C74-37A5-4804-B1A6-9F12D22EA505.png?v=637559269453730000",
            "detailUrl": "/camiseta/p",
            "components": [],
            "bundleItems": [],
            "params": [],
            "offerings": [],
            "sellerSku": "12",
            "priceValidUntil": "2023-07-06T09:11:04.0000000+00:00",
            "commission": 0,
            "tax": 0,
            "preSaleDate": null,
            "additionalInfo": {
                "brandName": "Marca TOP",
                "brandId": "2000001",
                "categoriesIds": "/7/",
                "categories": [
                    {
                        "id": 7,
                        "name": "Roupas"
                    }
                ],
                "productClusterId": "",
                "commercialConditionId": "1",
                "dimension": {
                    "cubicweight": 1.0000,
                    "height": 6.0000,
                    "length": 10.0000,
                    "weight": 4.0000,
                    "width": 8.0000
                },
                "offeringInfo": null,
                "offeringType": null,
                "offeringTypeId": null
            },
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "sellingPrice": 1812,
            "isGift": false,
            "shippingPrice": null,
            "rewardValue": 0,
            "freightCommission": 0,
            "priceDefinition": {
                "sellingPrices": [
                    {
                        "value": 1812,
                        "quantity": 1
                    }
                ],
                "calculatedSellingPrice": 1812,
                "total": 1812
            },
            "taxCode": "1122",
            "parentItemIndex": null,
            "parentAssemblyBinding": null,
            "callCenterOperator": null,
            "serialNumbers": null,
            "assemblies": [],
            "costPrice": null
        }
    ],
    "marketplaceItems": [],
    "clientProfileData": {
        "id": "clientProfileData",
        "email": "0bf94cbf23ff410aaaf7c707dd8a808c@ct.vtex.com.br",
        "firstName": "Paulo",
        "lastName": "Filho",
        "documentType": "cpf",
        "document": "11156703794",
        "phone": "+5521971126360",
        "corporateName": null,
        "tradeName": null,
        "corporateDocument": null,
        "stateInscription": null,
        "corporatePhone": null,
        "isCorporate": false,
        "userProfileId": "ca0695a8-df34-4076-8663-725041930c75",
        "customerClass": null
    },
    "giftRegistryData": null,
    "marketingData": {
        "id": "marketingData",
        "utmSource": null,
        "utmPartner": null,
        "utmMedium": null,
        "utmCampaign": null,
        "coupon": null,
        "utmiCampaign": null,
        "utmipage": null,
        "utmiPart": null,
        "marketingTags": [
            "vtex-subscription"
        ]
    },
    "ratesAndBenefitsData": {
        "id": "ratesAndBenefitsData",
        "rateAndBenefitsIdentifiers": [
            {
                "description": "Desconto de 20% no pedido para assinatura",
                "featured": true,
                "id": "d0231eb3-e9a4-47b2-9c74-bc346df11ce4",
                "name": "Desconto 20% assinante",
                "matchedParameters": {},
                "additionalInfo": null
            }
        ]
    },
    "shippingData": {
        "id": "shippingData",
        "address": {
            "addressType": "residential",
            "receiverName": "Paulo Filho",
            "addressId": "1651158093975",
            "postalCode": "21341-270",
            "city": "Rio de Janeiro",
            "state": "RJ",
            "country": "BRA",
            "street": "Rua Pinto Teles",
            "number": "1",
            "neighborhood": "Praça Seca",
            "complement": null,
            "reference": null,
            "geoCoordinates": [
                -43.350608825683594,
                -22.886520385742188
            ]
        },
        "logisticsInfo": [
            {
                "itemIndex": 0,
                "selectedSla": "Normal",
                "lockTTL": "12d",
                "price": 200,
                "listPrice": 200,
                "sellingPrice": 200,
                "deliveryWindow": null,
                "deliveryCompany": "Transportadora",
                "shippingEstimate": "2bd",
                "shippingEstimateDate": "2022-07-08T09:11:57.8421126+00:00",
                "slas": [
                    {
                        "id": "Normal",
                        "name": "Normal",
                        "shippingEstimate": "2bd",
                        "deliveryWindow": null,
                        "price": 200,
                        "deliveryChannel": "delivery",
                        "pickupStoreInfo": {
                            "additionalInfo": null,
                            "address": null,
                            "dockId": null,
                            "friendlyName": null,
                            "isPickupStore": false
                        },
                        "polygonName": "",
                        "lockTTL": "12d",
                        "pickupPointId": null,
                        "transitTime": "2bd"
                    }
                ],
                "shipsTo": [
                    "BRA"
                ],
                "deliveryIds": [
                    {
                        "courierId": "1",
                        "courierName": "Transportadora",
                        "dockId": "169fe66",
                        "quantity": 1,
                        "warehouseId": "166cb0c",
                        "accountCarrierName": null
                    }
                ],
                "deliveryChannel": "delivery",
                "pickupStoreInfo": {
                    "additionalInfo": null,
                    "address": null,
                    "dockId": null,
                    "friendlyName": null,
                    "isPickupStore": false
                },
                "addressId": "1651158093975",
                "polygonName": "",
                "pickupPointId": null,
                "transitTime": "2bd"
            }
        ],
        "trackingHints": null,
        "selectedAddresses": [
            {
                "addressId": "1651158093975",
                "addressType": "residential",
                "receiverName": "Paulo Filho",
                "street": "Rua Pinto Teles",
                "number": "1",
                "complement": null,
                "neighborhood": "Praça Seca",
                "postalCode": "21341-270",
                "city": "Rio de Janeiro",
                "state": "RJ",
                "country": "BRA",
                "reference": null,
                "geoCoordinates": [
                    -43.350608825683594,
                    -22.886520385742188
                ]
            }
        ]
    },
    "paymentData": {
        "giftCards": [],
        "transactions": [
            {
                "isActive": true,
                "transactionId": "A5BF0F884F314F788F4778B464EE1648",
                "merchantName": "PPXPS",
                "payments": [
                    {
                        "id": "06D8D76D4BD549EF9CC209D969ACBA84",
                        "paymentSystem": "47",
                        "paymentSystemName": "Cash",
                        "value": 2012,
                        "installments": 1,
                        "referenceValue": 2012,
                        "cardHolder": null,
                        "cardNumber": null,
                        "firstDigits": null,
                        "lastDigits": null,
                        "cvv2": null,
                        "expireMonth": null,
                        "expireYear": null,
                        "url": null,
                        "giftCardId": null,
                        "giftCardName": null,
                        "giftCardCaption": null,
                        "redemptionCode": null,
                        "group": "cash",
                        "tid": null,
                        "dueDate": null,
                        "connectorResponses": {},
                        "giftCardProvider": null,
                        "giftCardAsDiscount": null,
                        "koinUrl": null,
                        "accountId": null,
                        "parentAccountId": null,
                        "bankIssuedInvoiceIdentificationNumber": null,
                        "bankIssuedInvoiceIdentificationNumberFormatted": null,
                        "bankIssuedInvoiceBarCodeNumber": null,
                        "bankIssuedInvoiceBarCodeType": null,
                        "billingAddress": null
                    }
                ]
            }
        ]
    },
    "packageAttachment": {
        "packages": []
    },
    "sellers": [
        {
            "id": "ppxpssp",
            "name": "ppxpssp",
            "logo": "",
            "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=ppxpssp&affiliateId=SLR&sc=1"
        }
    ],
    "callCenterOperatorData": null,
    "followUpEmail": "0a902f64ba1443c3b26ab5cb0b2aad9e@ct.vtex.com.br",
    "lastMessage": null,
    "hostname": "ppxps",
    "invoiceData": null,
    "changesAttachment": null,
    "openTextField": {
        "value": "Order Created By VTEX Subscription System"
    },
    "roundingError": 0,
    "orderFormId": "3d59650b4e9a447d80ecfac4830926d9",
    "commercialConditionData": null,
    "isCompleted": true,
    "customData": null,
    "storePreferencesData": {
        "countryCode": "BRA",
        "currencyCode": "BRL",
        "currencyFormatInfo": {
            "CurrencyDecimalDigits": 2,
            "CurrencyDecimalSeparator": ",",
            "CurrencyGroupSeparator": ".",
            "CurrencyGroupSize": 3,
            "StartsWithCurrencySymbol": true
        },
        "currencyLocale": 1046,
        "currencySymbol": "R$",
        "timeZone": "E. South America Standard Time"
    },
    "allowCancellation": true,
    "allowEdition": false,
    "isCheckedIn": false,
    "marketplace": null,
    "authorizedDate": "2022-07-06T09:11:56.0006230+00:00",
    "invoicedDate": null,
    "cancelReason": null,
    "itemMetadata": {
        "Items": [
            {
                "Id": "12",
                "Seller": "1",
                "Name": "Camiseta P Azul",
                "SkuName": "P Azul",
                "ProductId": "8",
                "RefId": "COP01_P-A",
                "Ean": null,
                "ImageUrl": "http://ppxps.vteximg.com.br/arquivos/ids/155407-55-55/EE803C74-37A5-4804-B1A6-9F12D22EA505.png?v=637559269453730000",
                "DetailUrl": "/camiseta/p",
                "AssemblyOptions": []
            }
        ]
    },
    "subscriptionData": {
        "SubscriptionGroupId": "C191822AF072C7508F9BBBC655FE8E60",
        "Subscriptions": [
            {
                "ExecutionCount": 274,
                "PriceAtSubscriptionDate": 2265.0,
                "ItemIndex": 0,
                "Plan": {
                    "type": "RECURRING_PAYMENT",
                    "frequency": {
                        "periodicity": "DAILY",
                        "interval": 1
                    },
                    "validity": {
                        "begin": "2021-10-05T00:00:00.0000000+00:00",
                        "end": null
                    }
                }
            }
        ]
    },
    "taxData": null,
    "checkedInPickupPointId": null,
    "cancellationData": null
}
```

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
    res, err := s.Orders.GetOrder(ctx, operations.GetOrderRequest{
        Accept: "est",
        ContentType: "quibusdam",
        OrderID: "1172452900788-01 or seq501456",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListOrders

Retrieves a list of orders according to the filters described below. 

The limit of information retrieval is 30 pages, the default number of orders per page is 15 and it is possible to configure it up to 100 using the  `per_page` parameter. 

 Be aware that as of October 3rd, 2018, this endpoint will not return the `items` property. 

> This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed) for this purpose.

This endpoint returns only orders that already have been indexed, which takes approximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up-to-date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



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
    res, err := s.Orders.ListOrders(ctx, operations.ListOrdersRequest{
        Accept: "explicabo",
        ContentType: "deserunt",
        FRnB: sdk.String("distinctio"),
        FUtmSource: sdk.String("quibusdam"),
        FAffiliateID: sdk.String("labore"),
        FAuthorizedDate: sdk.String("modi"),
        FCallCenterOperatorName: sdk.String("qui"),
        FCreationDate: "aliquid",
        FHasInputInvoice: sdk.Bool(false),
        FInvoicedDate: sdk.String("cupiditate"),
        FIsInstore: sdk.Bool(false),
        FPaymentNames: sdk.String("quos"),
        FSalesChannel: sdk.String("perferendis"),
        FSellerNames: sdk.String("magni"),
        FShippingEstimate: sdk.String("assumenda"),
        FStatus: sdk.String("ipsam"),
        IncompleteOrders: sdk.Bool(false),
        OrderBy: sdk.String("alias"),
        Page: sdk.Int(146441),
        PerPage: sdk.Int(677817),
        Q: sdk.String("excepturi"),
        SalesChannelID: sdk.String("tempora"),
        SearchField: sdk.String("facilis"),
        Utc: sdk.Int(735194),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrders != nil {
        // handle response
    }
}
```

## RegisterChange


> Timeout settings
>
> This is a synchronous API, which means the application requests data and waits until a value is returned. This behavior can cause timeout errors; to avoid them, we recommend setting the timeout in 20 seconds.

 This request allows [changing an order](https://help.vtex.com/en/tutorial/changing-items-from-a-completed-order--tutorials_190) by:
- Adding items to an order
- Removing items from an order
- Applying discounts to the total value of the order
- Incrementing the total value of the order. 

In those scenarios of order changes, it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a partial invoice scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic. 

This action can only be done for orders in these status:
- `handling`
- `waiting-for-fulfillment` 

> The `Change order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

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
    res, err := s.Orders.RegisterChange(ctx, operations.RegisterChangeRequest{
        Accept: "labore",
        ContentType: "delectus",
        RegisterChangeRequest: shared.RegisterChangeRequest{
            DiscountValue: 433288,
            IncrementValue: 248753,
            ItemsAdded: []shared.RegisterChangeRequestItemsAdded{
                shared.RegisterChangeRequestItemsAdded{
                    ID: "969e9a3e-fa77-4dfb-94cd-66ae395efb9b",
                    Price: 659669,
                    Quantity: 501324,
                },
                shared.RegisterChangeRequestItemsAdded{
                    ID: "8f3a6699-7074-4ba4-869b-6e2141959890",
                    Price: 653201,
                    Quantity: 968962,
                },
                shared.RegisterChangeRequestItemsAdded{
                    ID: "a563e251-6fe4-4c8b-b11e-5b7fd2ed0289",
                    Price: 166847,
                    Quantity: 123820,
                },
                shared.RegisterChangeRequestItemsAdded{
                    ID: "cddc6926-01fb-4576-b0d5-f0d30c5fbb25",
                    Price: 521037,
                    Quantity: 489549,
                },
            },
            ItemsRemoved: []shared.RegisterChangeRequestItemsRemoved{
                shared.RegisterChangeRequestItemsRemoved{
                    ID: "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
                    Price: 589910,
                    Quantity: 750844,
                },
            },
            Reason: "libero",
            RequestID: "delectus",
        },
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterChange != nil {
        // handle response
    }
}
```

## StartHandling

Changes the status of an order to indicate that it is in `handling`.

> Expect a `status 204` response with no content in case of a successful request. The store must validate this response to retry the call if the response differs from the `204` code, making this flow the store's responsibility. This endpoint can also respond with `status 500`. 

> The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

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
    res, err := s.Orders.StartHandling(ctx, operations.StartHandlingRequest{
        Accept: "quaerat",
        ContentType: "quos",
        OrderID: "1172452900788-01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
