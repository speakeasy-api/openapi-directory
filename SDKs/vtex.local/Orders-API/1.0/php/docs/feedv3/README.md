# feedV3

### Available Operations

* [commititemfeedorderstatus](#commititemfeedorderstatus) - Commit feed items
* [feedConfiguration](#feedconfiguration) - Create or update feed configuration
* [feedConfigurationDelete](#feedconfigurationdelete) - Delete feed configuration
* [getFeedConfiguration](#getfeedconfiguration) - Get feed configuration
* [getfeedorderstatus1](#getfeedorderstatus1) - Retrieve feed items
* [testJSONataExpression](#testjsonataexpression) - Test JSONata expression

## commititemfeedorderstatus

Commit items in the [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CommititemfeedorderstatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommititemfeedorderstatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommititemfeedorderstatusRequest();
    $request->accept = 'delectus';
    $request->commititemfeedorderstatusRequest = new CommititemfeedorderstatusRequest();
    $request->commititemfeedorderstatusRequest->handles = [
        'suscipit',
        'molestiae',
    ];
    $request->contentType = 'minus';

    $response = $sdk->feedV3->commititemfeedorderstatus($request);

    if ($response->commititemfeedorderstatus200TextPlainObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## feedConfiguration

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)

There are two types of filtering that can be used. The `FromWorkflow` type filters orders by status, whereas the `FromOrders` type uses JSONata expressions to filter orders according to any property in the orders JSON document. This enables stores to filter delivered orders and orders in which products have been added or removed, for example. To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [Test JSONata expression](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FeedConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedFilter;
use \OpenAPI\OpenAPI\Models\Shared\Queue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FeedConfigurationRequest();
    $request->accept = 'placeat';
    $request->contentType = 'voluptatum';
    $request->feedConfigurationRequest = new FeedConfigurationRequest();
    $request->feedConfigurationRequest->filter = new FeedFilter();
    $request->feedConfigurationRequest->filter->disableSingleFire = false;
    $request->feedConfigurationRequest->filter->expression = 'iusto';
    $request->feedConfigurationRequest->filter->status = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->feedConfigurationRequest->filter->type = 'ab';
    $request->feedConfigurationRequest->queue = new Queue();
    $request->feedConfigurationRequest->queue->messageRetentionPeriodInSeconds = 3456000;
    $request->feedConfigurationRequest->queue->visibilityTimeoutInSeconds = 250;

    $response = $sdk->feedV3->feedConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## feedConfigurationDelete

Deletes the configuration set up in [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FeedConfigurationDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FeedConfigurationDeleteRequest();
    $request->accept = 'quis';
    $request->contentType = 'veritatis';

    $response = $sdk->feedV3->feedConfigurationDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeedConfiguration

The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeedConfigurationRequest();
    $request->accept = 'deserunt';
    $request->contentType = 'perferendis';

    $response = $sdk->feedV3->getFeedConfiguration($request);

    if ($response->getFeedConfiguration200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getfeedorderstatus1

Retrieve items from [feed](https://developers.vtex.com/docs/guides/orders-feed) queue. 

The event will be removed if the message `send retry` is equal to, or greater than the maximum retention period.

> This API will return `404 Not Found` if there is no [Feed Configuration](https://developers.vtex.com/docs/guides/orders-feed) available for the given X-VTEX-API-AppKey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Getfeedorderstatus1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getfeedorderstatus1Request();
    $request->accept = 'ipsam';
    $request->contentType = 'repellendus';
    $request->maxlot = 'sapiente';

    $response = $sdk->feedV3->getfeedorderstatus1($request);

    if ($response->getfeedorderstatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testJSONataExpression

This endpoint allows you to test a JSON document with a JSONata expression, returning `true` if the document meets the criteria posed in the expression, or `false` if it does not.

Since JSONata expressions can be used to filter order updates in the [Orders API feed and hook](https://developers.vtex.com/docs/guides/orders-feed), this endpoint can be used to test an expression's results before configuring the [feed or hook](https://developers.vtex.com/docs/guides/orders-feed).

Learn more about how to use JSONata expressions, in the [JSONata documentation](https://docs.jsonata.org/overview.html).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestJSONataExpressionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestJSONataExpression;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestJSONataExpressionRequest();
    $request->accept = 'quo';
    $request->contentType = 'odit';
    $request->testJSONataExpression = new TestJSONataExpression();
    $request->testJSONataExpression->document = 'at';
    $request->testJSONataExpression->expression = 'at';

    $response = $sdk->feedV3->testJSONataExpression($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
