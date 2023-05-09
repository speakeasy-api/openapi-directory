# PriceAssociation

### Available Operations

* [DeleteVCustomPricesRulesPriceAssociationID](#deletevcustompricesrulespriceassociationid) - Disassociate price association by ID
* [GetVCustomPricesRulesPriceAssociationID](#getvcustompricesrulespriceassociationid) - Get price association by ID
* [PostVCustomPricesRules](#postvcustompricesrules) - Create price association
* [PutVCustomPricesRulesPriceAssociationID](#putvcustompricesrulespriceassociationid) - Update price association by ID

## DeleteVCustomPricesRulesPriceAssociationID

Disassociates a price association from a shopping scenario by its ID

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
    res, err := s.PriceAssociation.DeleteVCustomPricesRulesPriceAssociationID(ctx, operations.DeleteVCustomPricesRulesPriceAssociationIDRequest{
        Accept: "nisi",
        ContentType: "recusandae",
        PriceAssociationID: 836079,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVCustomPricesRulesPriceAssociationID200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetVCustomPricesRulesPriceAssociationID

Retrieves price association for a shopping scenario by its ID

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
    res, err := s.PriceAssociation.GetVCustomPricesRulesPriceAssociationID(ctx, operations.GetVCustomPricesRulesPriceAssociationIDRequest{
        Accept: "ab",
        ContentType: "quis",
        PriceAssociationID: 87129,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVCustomPricesRulesPriceAssociationID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostVCustomPricesRules

Creates a new price association for a shopping scenario

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
    res, err := s.PriceAssociation.PostVCustomPricesRules(ctx, operations.PostVCustomPricesRulesRequest{
        Accept: "deserunt",
        ContentType: "perferendis",
        RequestBody: &operations.PostVCustomPricesRulesRequestBody{
            Email: sdk.String("ipsam"),
            OrderType: sdk.String("repellendus"),
            Pricetable: "sapiente",
            State: sdk.String("quo"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostVCustomPricesRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutVCustomPricesRulesPriceAssociationID

Updates a price association for a shopping scenario by its ID

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
    res, err := s.PriceAssociation.PutVCustomPricesRulesPriceAssociationID(ctx, operations.PutVCustomPricesRulesPriceAssociationIDRequest{
        Accept: "odit",
        ContentType: "at",
        RequestBody: &operations.PutVCustomPricesRulesPriceAssociationIDRequestBody{
            OrderType: "at",
            Pricetable: "maiores",
            State: "molestiae",
        },
        PriceAssociationID: 799159,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutVCustomPricesRulesPriceAssociationID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
