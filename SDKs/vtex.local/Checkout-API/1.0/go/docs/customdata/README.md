# CustomData

### Available Operations

* [Removesinglecustomfieldvalue](#removesinglecustomfieldvalue) - Remove single custom field value
* [SetMultipleCustomFieldValues](#setmultiplecustomfieldvalues) - Set multiple custom field values
* [SetSingleCustomFieldValue](#setsinglecustomfieldvalue) - Set single custom field value

## Removesinglecustomfieldvalue

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

You also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.

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
    res, err := s.CustomData.Removesinglecustomfieldvalue(ctx, operations.RemovesinglecustomfieldvalueRequest{
        Accept: "velit",
        ContentType: "error",
        AppFieldName: "quia",
        AppID: "quis",
        OrderFormID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetMultipleCustomFieldValues

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.

To do that, you need to inform the ID of the app you created with the configuration API (`appId`).

In the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

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
    res, err := s.CustomData.SetMultipleCustomFieldValues(ctx, operations.SetMultipleCustomFieldValuesRequest{
        Accept: "laborum",
        ContentType: "animi",
        RequestBody: map[string]interface{}{
            "odit": "quo",
            "sequi": "tenetur",
        },
        AppID: "ipsam",
        OrderFormID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetMultipleCustomFieldValues200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## SetSingleCustomFieldValue

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

In the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

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
    res, err := s.CustomData.SetSingleCustomFieldValue(ctx, operations.SetSingleCustomFieldValueRequest{
        Accept: "possimus",
        ContentType: "aut",
        SetsinglecustomfieldvalueRequest: shared.SetsinglecustomfieldvalueRequest{
            Value: "quasi",
        },
        AppFieldName: "error",
        AppID: "temporibus",
        OrderFormID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
