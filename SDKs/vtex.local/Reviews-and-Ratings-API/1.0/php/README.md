# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductRatingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductRatingRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->productId = '1';

    $response = $sdk->rating->getProductRating($request);

    if ($response->getProductRating200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [rating](docs/rating/README.md)

* [getProductRating](docs/rating/README.md#getproductrating) - Get Product Rating

### [review](docs/review/README.md)

* [deleteMultipleReviews](docs/review/README.md#deletemultiplereviews) - Delete Multiple Reviews
* [deleteReview](docs/review/README.md#deletereview) - Delete Review
* [editReview](docs/review/README.md#editreview) - Update a Review
* [getReviewbyReviewId](docs/review/README.md#getreviewbyreviewid) - Get Review by Review ID
* [getalistofReviews](docs/review/README.md#getalistofreviews) - Get a list of Reviews
* [saveMultipleReviews](docs/review/README.md#savemultiplereviews) - Create Multiple Reviews
* [saveReview](docs/review/README.md#savereview) - Create a Review
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
