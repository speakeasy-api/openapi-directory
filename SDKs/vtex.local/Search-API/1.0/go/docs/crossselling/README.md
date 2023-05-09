# CrossSelling

### Available Operations

* [ProductSearchAccessories](#productsearchaccessories) - Get Product Search of Accessories
* [ProductSearchShowTogether](#productsearchshowtogether) - Get Product Search of Show Together
* [ProductSearchSimilars](#productsearchsimilars) - Get Product Search of Similars
* [ProductSearchSuggestions](#productsearchsuggestions) - Get Product Search of Suggestions
* [ProductSearchWhoBoughtAlsoBought](#productsearchwhoboughtalsobought) - Get Product Search of Who Bought Also Bought
* [ProductSearchWhoSawAlsoBought](#productsearchwhosawalsobought) - Get Product Search of Who Saw Also Bought
* [ProductSearchWhoSawAlsoSaw](#productsearchwhosawalsosaw) - Get Product Search of Who Saw Also Saw

## ProductSearchAccessories

Retrieves general information about the product's accessories.

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
    res, err := s.CrossSelling.ProductSearchAccessories(ctx, operations.ProductSearchAccessoriesRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductSearchShowTogether

Retrieves general information about the products that are show together with the product in question.

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
    res, err := s.CrossSelling.ProductSearchShowTogether(ctx, operations.ProductSearchShowTogetherRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductSearchSimilars

Retrieves general information about related product searches.

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
    res, err := s.CrossSelling.ProductSearchSimilars(ctx, operations.ProductSearchSimilarsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductSearchSuggestions

Retrieves general information about other product suggestions related to the product.

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
    res, err := s.CrossSelling.ProductSearchSuggestions(ctx, operations.ProductSearchSuggestionsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductSearchWhoBoughtAlsoBought

Retrieves general information about other related products that the user also bought.

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
    res, err := s.CrossSelling.ProductSearchWhoBoughtAlsoBought(ctx, operations.ProductSearchWhoBoughtAlsoBoughtRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSearchWhoBoughtAlsoBought200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ProductSearchWhoSawAlsoBought

Retrieves general information about other related products that the users saw and also bought.

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
    res, err := s.CrossSelling.ProductSearchWhoSawAlsoBought(ctx, operations.ProductSearchWhoSawAlsoBoughtRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSearchWhoSawAlsoBought200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ProductSearchWhoSawAlsoSaw

Retrieves general information about other related products that the users also saw.

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
    res, err := s.CrossSelling.ProductSearchWhoSawAlsoSaw(ctx, operations.ProductSearchWhoSawAlsoSawRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProductID: 1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSearchWhoSawAlsoSaw200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
