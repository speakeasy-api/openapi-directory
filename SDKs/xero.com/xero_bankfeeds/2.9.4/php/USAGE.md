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