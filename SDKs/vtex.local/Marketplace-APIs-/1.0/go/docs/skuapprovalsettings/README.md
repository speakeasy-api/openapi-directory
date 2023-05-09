# SKUApprovalSettings

### Available Operations

* [Getaccountconfig](#getaccountconfig) - Get Account's Approval Settings
* [GetautoApprovevaluefromconfig](#getautoapprovevaluefromconfig) - Get autoApprove Status in Account Settings
* [Getselleraccountconfig](#getselleraccountconfig) - Get Seller's Approval Settings
* [Putselleraccountconfig](#putselleraccountconfig) - Save Seller's Approval Settings
* [Saveaccountconfig](#saveaccountconfig) - Save Account's Approval Settings
* [Saveautoapproveforaccount](#saveautoapproveforaccount) - Activate autoApprove in Marketplace's Account
* [Saveautoapproveforaccountseller](#saveautoapproveforaccountseller) - Activate autoApprove Setting for a Seller

## Getaccountconfig

This endpoint retrieves the current approval settings of a marketplace's Received SKUs module. Its response includes: 

- `Score`: Matcher scores for approving and rejecting SKUs received from sellers. 

- `Matchers`: All Matchers configured on the marketplace, and their respective details. 

- `SpecificationsMapping`: Mapping of product and SKU specifications, per seller. 

- `MatchFlux`: This field determines the type of approval configuration applied to SKUs received from a seller. 

The possible values include: 

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI, or Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of their Matcher Score.

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
    res, err := s.SKUApprovalSettings.Getaccountconfig(ctx, operations.GetaccountconfigRequest{
        Accept: "vero",
        ContentType: "nihil",
        AccountName: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getaccountconfig200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetautoApprovevaluefromconfig

This endpoint can be used to check whether the autoapprove setting is active or not, for a specific seller. 

If the response is `true`, the autoapprove setting is active. If the response is `false`, it is inactive.

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
    res, err := s.SKUApprovalSettings.GetautoApprovevaluefromconfig(ctx, operations.GetautoApprovevaluefromconfigRequest{
        Accept: "voluptatibus",
        ContentType: "ipsa",
        AccountName: "omnis",
        SellerID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetautoApprovevaluefromconfig200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getselleraccountconfig

This endpoint retrieves the current Received SKUs approval settings applied to a specific seller. Its response includes: 

- `sellerId`: A string that identifies the seller in the marketplace. 

- `accountId`: Marketplace’s account ID. 

- `accountName`: Marketplace’s account name. 

- `mapping`: Mapping of SKU and product Specifications. 

- `matchFlux`: This field determines the type of approval configuration applied to SKUs received  from a seller. 

The possible values include:  

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI and Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.

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
    res, err := s.SKUApprovalSettings.Getselleraccountconfig(ctx, operations.GetselleraccountconfigRequest{
        Accept: "cum",
        ContentType: "perferendis",
        AccountName: "doloremque",
        SellerID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Putselleraccountconfig

Marketplaces use this endpoint to create or update approval settings to a specific seller, on the Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

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
    res, err := s.SKUApprovalSettings.Putselleraccountconfig(ctx, operations.PutselleraccountconfigRequest{
        Accept: "ut",
        ContentType: "maiores",
        PutselleraccountconfigRequest: shared.PutselleraccountconfigRequest{
            Mapping: map[string]interface{}{
                "corporis": "dolore",
            },
            MatchFlux: "iusto",
            SellerID: "dicta",
        },
        AccountName: "harum",
        SellerID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Saveaccountconfig

Marketplaces use this endpoint to create or update approval settings on their Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

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
    res, err := s.SKUApprovalSettings.Saveaccountconfig(ctx, operations.SaveaccountconfigRequest{
        Accept: "accusamus",
        ContentType: "commodi",
        SaveaccountconfigRequest: shared.SaveaccountconfigRequest{
            MatchFlux: "repudiandae",
            Matchers: []shared.Matcher{
                shared.Matcher{
                    Description: sdk.String("ipsum"),
                    IsActive: false,
                    MatcherID: "quidem",
                    UpdatesNotificationEndpoint: "molestias",
                    HookBaseAddress: "excepturi",
                },
            },
            Score: shared.Score{
                Approve: 865103,
                Reject: 265389,
            },
            SpecificationsMapping: []string{
                "rem",
                "voluptates",
                "quasi",
            },
        },
        AccountName: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Saveaccountconfig200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Saveautoapproveforaccount

This endpoint enables the autoapprove rule to a marketplace's whole Received SKUs module. Once enabling the rule, received SKUs will be automatically approved on your store, regardless of the seller. 

 For the autoapprove rule to work as expected, the approval [Matcher score](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) should be set up as 80 (default value), but you can configure a different number through the field `Score` in [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).

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
    res, err := s.SKUApprovalSettings.Saveautoapproveforaccount(ctx, operations.SaveautoapproveforaccountRequest{
        Accept: "sint",
        ContentType: "veritatis",
        SaveautoapproveforaccountRequest: shared.SaveautoapproveforaccountRequest{
            Enabled: false,
        },
        AccountName: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Saveautoapproveforaccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Saveautoapproveforaccountseller

This endpoint enables the auto approve setting to received SKUs from a specific seller. Be aware that once enabling the rule through this request, all received SKUs from that seller will be automatically approved on your store, regardless of the Matcher Score.

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
    res, err := s.SKUApprovalSettings.Saveautoapproveforaccountseller(ctx, operations.SaveautoapproveforaccountsellerRequest{
        Accept: "incidunt",
        ContentType: "enim",
        SaveautoapproveforaccountsellerRequest: shared.SaveautoapproveforaccountsellerRequest{
            Enabled: false,
        },
        AccountName: "consequatur",
        SellerID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
