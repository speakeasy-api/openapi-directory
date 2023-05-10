# budgets

### Available Operations

* [getBudgetById](#getbudgetbyid) - Single budget
* [getBudgetSettingsById](#getbudgetsettingsbyid) - Budget Settings
* [getBudgets](#getbudgets) - List budgets

## getBudgetById

Returns a single budget with all related entities.  This resource is effectively a full budget export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBudgetByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBudgetByIdRequest();
    $request->budgetId = 'officia';
    $request->lastKnowledgeOfServer = 582020;

    $response = $sdk->budgets->getBudgetById($request);

    if ($response->budgetDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBudgetSettingsById

Returns settings for a budget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBudgetSettingsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBudgetSettingsByIdRequest();
    $request->budgetId = 'fugit';

    $response = $sdk->budgets->getBudgetSettingsById($request);

    if ($response->budgetSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBudgets

Returns budgets list with summary information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBudgetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBudgetsRequest();
    $request->includeAccounts = false;

    $response = $sdk->budgets->getBudgets($request);

    if ($response->budgetSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
