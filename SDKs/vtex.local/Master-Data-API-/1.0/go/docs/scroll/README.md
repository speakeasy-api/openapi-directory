# Scroll

## Overview

The new `` scroll `` API has been developed to meet external integration scenarios. If you need to query the entire VTEX Master Data database, or your collection is over 10.000 documents, use this feature.

### Available Operations

* [Scrolldocuments](#scrolldocuments) - Scroll documents

## Scrolldocuments

In the first request, the `X-VTEX-MD-TOKEN` token will be returned in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.

After the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.

## Request examples

First request:
```
/dataentities/Client/scroll?isCluster=true&_size=250&_fields=email,firstName
```

Retrieve the token in the header `X-VTEX-MD-TOKEN` from the first request's response and use it to make the next requests.

Subsequent requests:
```
/dataentities/Client/scroll?_token={tokenValueExample}
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
    res, err := s.Scroll.Scrolldocuments(ctx, operations.ScrolldocumentsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RESTRange: "resources=0-10",
        Fields: sdk.String("cum"),
        Keyword: sdk.String("String to search"),
        Schema: sdk.String("schema"),
        Sort: sdk.String("esse"),
        Token: sdk.String("ipsum"),
        Where: sdk.String("firstName is not null."),
        DataEntityName: "Client",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
