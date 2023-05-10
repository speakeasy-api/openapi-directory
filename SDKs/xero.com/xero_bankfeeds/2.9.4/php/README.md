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
use \OpenAPI\OpenAPI\Models\Operations\CreateFeedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnections;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnection;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnectionAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Pagination;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeedConnectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFeedConnectionsRequest();
    $request->feedConnections = new FeedConnections();
    $request->feedConnections->items = [
        new FeedConnection(),
        new FeedConnection(),
        new FeedConnection(),
    ];
    $request->feedConnections->pagination = new Pagination();
    $request->feedConnections->pagination->itemCount = 2;
    $request->feedConnections->pagination->page = 1;
    $request->feedConnections->pagination->pageCount = 1;
    $request->feedConnections->pagination->pageSize = 10;
    $request->xeroTenantId = 'provident';

    $requestSecurity = new CreateFeedConnectionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankFeeds->createFeedConnections($request, $requestSecurity);

    if ($response->feedConnections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bankFeeds](docs/bankfeeds/README.md)

* [createFeedConnections](docs/bankfeeds/README.md#createfeedconnections) - Create one or more new feed connection
* [createStatements](docs/bankfeeds/README.md#createstatements) - Creates one or more new statements
* [deleteFeedConnections](docs/bankfeeds/README.md#deletefeedconnections) - Delete an existing feed connection
* [getFeedConnection](docs/bankfeeds/README.md#getfeedconnection) - Retrieve single feed connection based on a unique id provided
* [getFeedConnections](docs/bankfeeds/README.md#getfeedconnections) - Searches for feed connections
* [getStatement](docs/bankfeeds/README.md#getstatement) - Retrieve single statement based on unique id provided
* [getStatements](docs/bankfeeds/README.md#getstatements) - Retrieve all statements
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
