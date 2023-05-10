# bankFeeds

### Available Operations

* [createFeedConnections](#createfeedconnections) - Create one or more new feed connection
* [createStatements](#createstatements) - Creates one or more new statements
* [deleteFeedConnections](#deletefeedconnections) - Delete an existing feed connection
* [getFeedConnection](#getfeedconnection) - Retrieve single feed connection based on a unique id provided
* [getFeedConnections](#getfeedconnections) - Searches for feed connections
* [getStatement](#getstatement) - Retrieve single statement based on unique id provided
* [getStatements](#getstatements) - Retrieve all statements

## createFeedConnections

By passing in the FeedConnections array object in the body, you can create one or more new feed connections

### Example Usage

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
    $request->xeroTenantId = 'quibusdam';

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

## createStatements

Creates one or more new statements

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateStatementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Statements;
use \OpenAPI\OpenAPI\Models\Shared\Statement;
use \OpenAPI\OpenAPI\Models\Shared\EndBalance;
use \OpenAPI\OpenAPI\Models\Shared\CreditDebitIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartBalance;
use \OpenAPI\OpenAPI\Models\Shared\StatementLine;
use \OpenAPI\OpenAPI\Models\Shared\StatementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Pagination;
use \OpenAPI\OpenAPI\Models\Operations\CreateStatementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStatementsRequest();
    $request->statements = new Statements();
    $request->statements->items = [
        new Statement(),
        new Statement(),
        new Statement(),
    ];
    $request->statements->pagination = new Pagination();
    $request->statements->pagination->itemCount = 2;
    $request->statements->pagination->page = 1;
    $request->statements->pagination->pageCount = 1;
    $request->statements->pagination->pageSize = 10;
    $request->xeroTenantId = 'nulla';

    $requestSecurity = new CreateStatementsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankFeeds->createStatements($request, $requestSecurity);

    if ($response->statements !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFeedConnections

By passing in FeedConnections array object in the body, you can delete a feed connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFeedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnections;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnection;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnectionAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeedConnectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Pagination;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFeedConnectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFeedConnectionsRequest();
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
    $request->xeroTenantId = 'illum';

    $requestSecurity = new DeleteFeedConnectionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankFeeds->deleteFeedConnections($request, $requestSecurity);

    if ($response->feedConnections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeedConnection

By passing in a FeedConnection Id options, you can search for matching feed connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedConnectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeedConnectionRequest();
    $request->xeroTenantId = 'vel';
    $request->id = '9a674e0f-467c-4c87-96ed-151a05dfc2dd';

    $requestSecurity = new GetFeedConnectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankFeeds->getFeedConnection($request, $requestSecurity);

    if ($response->feedConnection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeedConnections

By passing in the appropriate options, you can search for available feed connections in the system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedConnectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeedConnectionsRequest();
    $request->xeroTenantId = 'maiores';
    $request->page = 1;
    $request->pageSize = 100;

    $requestSecurity = new GetFeedConnectionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankFeeds->getFeedConnections($request, $requestSecurity);

    if ($response->feedConnections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatement

By passing in a statement id, you can search for matching statements

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatementRequest();
    $request->xeroTenantId = 'molestiae';
    $request->statementIDPathParameter = 'quod';
    $request->statementIdQueryParameter = 'c78ca1ba-928f-4c81-a742-cb7392059293';

    $requestSecurity = new GetStatementSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankFeeds->getStatement($request, $requestSecurity);

    if ($response->statement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatements

By passing in parameters, you can search for matching statements

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatementsRequest();
    $request->xeroApplicationId = 'natus';
    $request->xeroTenantId = 'laboriosam';
    $request->xeroUserId = 'hic';
    $request->page = 902599;
    $request->pageSize = 681820;

    $requestSecurity = new GetStatementsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankFeeds->getStatements($request, $requestSecurity);

    if ($response->statements !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
