# categories

## Overview

The categories for a budget

### Available Operations

* [getCategories](#getcategories) - List categories
* [getCategoryById](#getcategorybyid) - Single category
* [getMonthCategoryById](#getmonthcategorybyid) - Single category for a specific budget month
* [updateMonthCategory](#updatemonthcategory) - Update a category for a specific month

## getCategories

Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesRequest();
    $request->budgetId = 'deleniti';
    $request->lastKnowledgeOfServer = 944669;

    $response = $sdk->categories->getCategories($request);

    if ($response->categoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoryById

Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoryByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoryByIdRequest();
    $request->budgetId = 'optio';
    $request->categoryId = 'totam';

    $response = $sdk->categories->getCategoryById($request);

    if ($response->categoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonthCategoryById

Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMonthCategoryByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonthCategoryByIdRequest();
    $request->budgetId = 'beatae';
    $request->categoryId = 'commodi';
    $request->month = DateTime::createFromFormat('Y-m-d', '2022-09-26');

    $response = $sdk->categories->getMonthCategoryById($request);

    if ($response->categoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMonthCategory

Update a category for a specific month.  Only `budgeted` amount can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonthCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchMonthCategoryWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SaveMonthCategory;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMonthCategoryRequest();
    $request->patchMonthCategoryWrapper = new PatchMonthCategoryWrapper();
    $request->patchMonthCategoryWrapper->category = new SaveMonthCategory();
    $request->patchMonthCategoryWrapper->category->budgeted = 186332;
    $request->budgetId = 'impedit';
    $request->categoryId = 'cum';
    $request->month = DateTime::createFromFormat('Y-m-d', '2022-10-13');

    $response = $sdk->categories->updateMonthCategory($request);

    if ($response->saveCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
