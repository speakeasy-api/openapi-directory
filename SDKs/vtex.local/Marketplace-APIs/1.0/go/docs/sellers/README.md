# Sellers

## Overview

Get sellers' data

### Available Operations

* [GetListSellers](#getlistsellers) - List Sellers
* [GetRetrieveSeller](#getretrieveseller) - Get Seller data by ID
* [UpdateSeller](#updateseller) - Update Seller by Seller ID
* [UpsertSellerRequest](#upsertsellerrequest) - Configure Seller Account

## GetListSellers

This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.

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
    res, err := s.Sellers.GetListSellers(ctx, operations.GetListSellersRequest{
        Accept: "magnam",
        ContentType: "distinctio",
        AccountName: "id",
        Environment: "labore",
        From: sdk.Float64(2900.77),
        Group: sdk.String("suscipit"),
        Integration: sdk.String("natus"),
        IsActive: sdk.Bool(false),
        IsBetterScope: sdk.Bool(false),
        IsVtex: sdk.Bool(false),
        Keyword: sdk.String("nobis"),
        Sc: sdk.String("eum"),
        SellerType: sdk.Int64(878453),
        Sort: sdk.String("aspernatur"),
        To: sdk.Float64(1028.63),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRetrieveSeller

Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.

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
    res, err := s.Sellers.GetRetrieveSeller(ctx, operations.GetRetrieveSellerRequest{
        Accept: "magnam",
        ContentType: "et",
        AccountName: "excepturi",
        Environment: "ullam",
        Sc: sdk.String("provident"),
        SellerID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSeller

This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.

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
    res, err := s.Sellers.UpdateSeller(ctx, operations.UpdateSellerRequest{
        Accept: "sint",
        ContentType: "accusantium",
        RequestBody: []UpdateSellerRequestBody{
            operations.UpdateSellerRequestBody{
                Operation: "reiciendis",
                Path: "mollitia",
                Value: false,
            },
            operations.UpdateSellerRequestBody{
                Operation: "ad",
                Path: "eum",
                Value: false,
            },
            operations.UpdateSellerRequestBody{
                Operation: "dolor",
                Path: "necessitatibus",
                Value: false,
            },
        },
        AccountName: "odit",
        Environment: "nemo",
        SellerID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpsertSellerRequest

This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces. 

For marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly. 

This call includes all the information a seller needs to activate their account.

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
    res, err := s.Sellers.UpsertSellerRequest(ctx, operations.UpsertSellerRequestRequest{
        Accept: "iure",
        ContentType: "doloribus",
        UpsertSellerRequest: shared.UpsertSellerRequest{
            CSCIdentification: "debitis",
            Account: "eius",
            AllowHybridPayments: false,
            AvailableSalesChannels: []shared.AvailableSalesChannel{
                shared.AvailableSalesChannel{
                    ID: 537023,
                    IsSelected: false,
                    Name: "Dr. Arnold Bradtke",
                },
                shared.AvailableSalesChannel{
                    ID: 714242,
                    IsSelected: false,
                    Name: "Kristie Spencer",
                },
                shared.AvailableSalesChannel{
                    ID: 868126,
                    IsSelected: false,
                    Name: "Kathryn Lang",
                },
                shared.AvailableSalesChannel{
                    ID: 123820,
                    IsSelected: false,
                    Name: "Gilberto Streich",
                },
            },
            CatalogSystemEndpoint: "excepturi",
            Channel: "odit",
            DeliveryPolicy: "ea",
            Description: "accusantium",
            Email: "Willow.Predovic@gmail.com",
            ExchangeReturnPolicy: "autem",
            FulfillmentEndpoint: "nam",
            FulfillmentSellerID: "eaque",
            Groups: []shared.Groups{
                shared.Groups{
                    ID: sdk.String("5f0d30c5-fbb2-4587-8532-02c73d5fe9b9"),
                    Name: sdk.String("Robyn Cruickshank"),
                },
                shared.Groups{
                    ID: sdk.String("09b3fe49-a8d9-4cbf-8863-3323f9b77f3a"),
                    Name: sdk.String("Ms. Christine Beer"),
                },
                shared.Groups{
                    ID: sdk.String("4ebf6928-0d1b-4a77-a89e-bf737ae4203c"),
                    Name: sdk.String("Tommy Turner"),
                },
                shared.Groups{
                    ID: sdk.String("95d8a0d4-46ce-42af-ba73-cf3be453f870"),
                    Name: sdk.String("Luis Cremin"),
                },
            },
            ID: "5a73429c-db1a-4842-abb6-79d2322715bf",
            IsActive: false,
            IsBetterScope: false,
            IsVtex: false,
            Name: "Erma Rogahn PhD",
            Password: "ipsum",
            SalesChannel: "veritatis",
            Score: 7492.55,
            SecurityPrivacyPolicy: "quos",
            SellerCommissionConfiguration: map[string]interface{}{
                "cupiditate": "aperiam",
                "delectus": "dolorem",
                "dolore": "labore",
            },
            SellerType: 240829,
            TaxCode: "dolorum",
            TrustPolicy: "architecto",
            User: "quae",
        },
        AccountName: "aut",
        Environment: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
