# review

### Available Operations

* [deleteMultipleReviews](#deletemultiplereviews) - Delete Multiple Reviews
* [deleteReview](#deletereview) - Delete Review
* [editReview](#editreview) - Update a Review
* [getReviewbyReviewId](#getreviewbyreviewid) - Get Review by Review ID
* [getalistofReviews](#getalistofreviews) - Get a list of Reviews
* [saveMultipleReviews](#savemultiplereviews) - Create Multiple Reviews
* [saveReview](#savereview) - Create a Review

## deleteMultipleReviews

Deletes multiple reviews at once.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMultipleReviewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMultipleReviewsRequest();
    $request->accept = 'unde';
    $request->contentType = 'nulla';
    $request->requestBody = [
        'illum',
        'vel',
        'error',
    ];

    $response = $sdk->review->deleteMultipleReviews($request);

    if ($response->deleteMultipleReviews200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReview

Deletes an existing review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReviewRequest();
    $request->accept = 'deserunt';
    $request->contentType = 'suscipit';
    $request->reviewId = '1';

    $response = $sdk->review->deleteReview($request);

    if ($response->deleteReview200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## editReview

Updates the information of a review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EditReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\EditReviewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditReviewRequest();
    $request->accept = 'iure';
    $request->contentType = 'magnam';
    $request->requestBody = new EditReviewRequestBody();
    $request->requestBody->locale = 'debitis';
    $request->requestBody->productId = 'ipsa';
    $request->requestBody->rating = 9636.63;
    $request->requestBody->reviewerName = 'tempora';
    $request->requestBody->shopperId = 'suscipit';
    $request->requestBody->text = 'molestiae';
    $request->requestBody->title = 'Miss';
    $request->requestBody->verifiedPurchaser = false;
    $request->reviewId = '5323fdaa-c012-11ec-835d-0ebee58edbb3';

    $response = $sdk->review->editReview($request);

    if ($response->editReview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReviewbyReviewId

Retrieves information of a product review by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewbyReviewIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReviewbyReviewIdRequest();
    $request->accept = 'placeat';
    $request->contentType = 'voluptatum';
    $request->reviewId = '1';

    $response = $sdk->review->getReviewbyReviewId($request);

    if ($response->getReviewbyReviewId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getalistofReviews

Retrieves a list of reviews.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetalistofReviewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetalistofReviewsRequest();
    $request->accept = 'iusto';
    $request->contentType = 'excepturi';
    $request->from = '0';
    $request->orderBy = ':asc';
    $request->productId = '1';
    $request->searchTerm = 'search_term';
    $request->status = true;
    $request->to = '3';

    $response = $sdk->review->getalistofReviews($request);

    if ($response->getalistofReviews200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveMultipleReviews

Creates multiple reviews.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveMultipleReviewsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveMultipleReviewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveMultipleReviewsRequest();
    $request->accept = 'nisi';
    $request->contentType = 'recusandae';
    $request->requestBody = [
        new SaveMultipleReviewsRequest(),
        new SaveMultipleReviewsRequest(),
        new SaveMultipleReviewsRequest(),
        new SaveMultipleReviewsRequest(),
    ];

    $response = $sdk->review->saveMultipleReviews($request);

    if ($response->saveMultipleReviews200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveReview

Creates a single review

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveReviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveReviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveReviewRequest();
    $request->accept = 'ab';
    $request->contentType = 'quis';
    $request->saveReviewRequest = new SaveReviewRequest();
    $request->saveReviewRequest->productId = 'veritatis';
    $request->saveReviewRequest->rating = 648172;
    $request->saveReviewRequest->reviewerName = 'perferendis';
    $request->saveReviewRequest->text = 'ipsam';
    $request->saveReviewRequest->title = 'Dr.';

    $response = $sdk->review->saveReview($request);

    if ($response->saveReview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
