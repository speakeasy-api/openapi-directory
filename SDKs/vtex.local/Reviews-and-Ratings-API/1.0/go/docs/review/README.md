# Review

### Available Operations

* [DeleteMultipleReviews](#deletemultiplereviews) - Delete Multiple Reviews
* [DeleteReview](#deletereview) - Delete Review
* [EditReview](#editreview) - Update a Review
* [GetReviewbyReviewID](#getreviewbyreviewid) - Get Review by Review ID
* [GetalistofReviews](#getalistofreviews) - Get a list of Reviews
* [SaveMultipleReviews](#savemultiplereviews) - Create Multiple Reviews
* [SaveReview](#savereview) - Create a Review

## DeleteMultipleReviews

Deletes multiple reviews at once.

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
    res, err := s.Review.DeleteMultipleReviews(ctx, operations.DeleteMultipleReviewsRequest{
        Accept: "unde",
        ContentType: "nulla",
        RequestBody: []string{
            "illum",
            "vel",
            "error",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMultipleReviews200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## DeleteReview

Deletes an existing review.

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
    res, err := s.Review.DeleteReview(ctx, operations.DeleteReviewRequest{
        Accept: "deserunt",
        ContentType: "suscipit",
        ReviewID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReview200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## EditReview

Updates the information of a review.

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
    res, err := s.Review.EditReview(ctx, operations.EditReviewRequest{
        Accept: "iure",
        ContentType: "magnam",
        RequestBody: operations.EditReviewRequestBody{
            Locale: sdk.String("debitis"),
            ProductID: "ipsa",
            Rating: 9636.63,
            ReviewerName: "tempora",
            ShopperID: sdk.String("suscipit"),
            Text: "molestiae",
            Title: "Miss",
            VerifiedPurchaser: sdk.Bool(false),
        },
        ReviewID: "5323fdaa-c012-11ec-835d-0ebee58edbb3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditReview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetReviewbyReviewID

Retrieves information of a product review by its ID.

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
    res, err := s.Review.GetReviewbyReviewID(ctx, operations.GetReviewbyReviewIDRequest{
        Accept: "placeat",
        ContentType: "voluptatum",
        ReviewID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReviewbyReviewID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetalistofReviews

Retrieves a list of reviews.

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
    res, err := s.Review.GetalistofReviews(ctx, operations.GetalistofReviewsRequest{
        Accept: "iusto",
        ContentType: "excepturi",
        From: "0",
        OrderBy: ":asc",
        ProductID: "1",
        SearchTerm: "search_term",
        Status: true,
        To: "3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetalistofReviews200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SaveMultipleReviews

Creates multiple reviews.

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
    res, err := s.Review.SaveMultipleReviews(ctx, operations.SaveMultipleReviewsRequest{
        Accept: "nisi",
        ContentType: "recusandae",
        RequestBody: []shared.SaveMultipleReviewsRequest{
            shared.SaveMultipleReviewsRequest{
                Approved: false,
                ID: sdk.String("151a05df-c2dd-4f7c-878c-a1ba928fc816"),
                ProductID: "molestiae",
                Rating: 2645.55,
                ReviewerName: "qui",
                Text: "impedit",
                Title: "Miss",
                VerifiedPurchaser: false,
            },
            shared.SaveMultipleReviewsRequest{
                Approved: false,
                ID: sdk.String("73920592-9396-4fea-b596-eb10faaa2352"),
                ProductID: "nobis",
                Rating: 3154.28,
                ReviewerName: "omnis",
                Text: "nemo",
                Title: "Mrs.",
                VerifiedPurchaser: false,
            },
            shared.SaveMultipleReviewsRequest{
                Approved: false,
                ID: sdk.String("907aff1a-3a2f-4a94-a773-9251aa52c3f5"),
                ProductID: "id",
                Rating: 8209.94,
                ReviewerName: "aut",
                Text: "quasi",
                Title: "Miss",
                VerifiedPurchaser: false,
            },
            shared.SaveMultipleReviewsRequest{
                Approved: false,
                ID: sdk.String("da1ffe78-f097-4b00-b4f1-5471b5e6e13b"),
                ProductID: "molestias",
                Rating: 5666.02,
                ReviewerName: "pariatur",
                Text: "modi",
                Title: "Ms.",
                VerifiedPurchaser: false,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaveMultipleReviews200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## SaveReview

Creates a single review

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
    res, err := s.Review.SaveReview(ctx, operations.SaveReviewRequest{
        Accept: "rem",
        ContentType: "voluptates",
        SaveReviewRequest: shared.SaveReviewRequest{
            ProductID: "quasi",
            Rating: 921158,
            ReviewerName: "sint",
            Text: "veritatis",
            Title: "Dr.",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaveReview200ApplicationJSONObject != nil {
        // handle response
    }
}
```
