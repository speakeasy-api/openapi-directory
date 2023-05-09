# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Reviews-and-Ratings-API/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Rating.GetProductRating(ctx, operations.GetProductRatingRequest{
        Accept: "corrupti",
        ContentType: "provident",
        ProductID: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductRating200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Rating](docs/rating/README.md)

* [GetProductRating](docs/rating/README.md#getproductrating) - Get Product Rating

### [Review](docs/review/README.md)

* [DeleteMultipleReviews](docs/review/README.md#deletemultiplereviews) - Delete Multiple Reviews
* [DeleteReview](docs/review/README.md#deletereview) - Delete Review
* [EditReview](docs/review/README.md#editreview) - Update a Review
* [GetReviewbyReviewID](docs/review/README.md#getreviewbyreviewid) - Get Review by Review ID
* [GetalistofReviews](docs/review/README.md#getalistofreviews) - Get a list of Reviews
* [SaveMultipleReviews](docs/review/README.md#savemultiplereviews) - Create Multiple Reviews
* [SaveReview](docs/review/README.md#savereview) - Create a Review
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
