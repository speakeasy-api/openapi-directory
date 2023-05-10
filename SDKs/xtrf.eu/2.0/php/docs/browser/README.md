# browser

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [browseCSV](#browsecsv) - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* [browseJSON](#browsejson) - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* [create](#create) - Creates view for given class.
* [delete](#delete) - Removes a view.
* [deleteColumn](#deletecolumn) - Deletes a single column from view.
* [get](#get) - Returns all view's information.
* [getColumnSettings](#getcolumnsettings) - Returns column's specific settings.
* [getColumns](#getcolumns) - Returns columns defined in view.
* [getCurrentViewDetails](#getcurrentviewdetails) - Returns current view's detailed information, suitable for browser.
* [getFilter](#getfilter) - Returns view's filter.
* [getLocalSettings](#getlocalsettings) - Returns view's local settings (for current user).
* [getOrder](#getorder) - Returns view's order settings.
* [getPermissions](#getpermissions) - Returns view's permissions.
* [getSettings](#getsettings) - Returns view's settings.
* [getViewDetails](#getviewdetails) - Returns view's detailed information, suitable for browser.
* [getViewsBrief](#getviewsbrief) - Returns views' brief.
* [selectViewAndGetItsDetails](#selectviewandgetitsdetails) - Selects given view as current and returns its detailed information, suitable for browser.
* [update](#update) - Updates all view's information.
* [updateColumnSettings](#updatecolumnsettings) - Updates column's specific settings.
* [updateColumns](#updatecolumns) - Updates columns in view.
* [updateFilter](#updatefilter) - Updates view's filter.
* [updateFilterProperty](#updatefilterproperty) - Updates view's filter property.
* [updateLocalSettings](#updatelocalsettings) - Updates view's local settings (for current user).
* [updateOrder](#updateorder) - Updates view's order settings.
* [updatePermissions](#updatepermissions) - Updates view's permissions.
* [updateSettings](#updatesettings) - Updates view's settings.

## browseCSV

Searches for data (ie. customer, task, etc) and returns it in a CSV form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BrowseCSVRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseCSVRequest();
    $request->additionalOrder = 'unde';
    $request->secondarySeparator = 'nulla';
    $request->separator = 'corrupti';
    $request->viewId = 847252;

    $response = $sdk->browser->browseCSV($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## browseJSON

Searches for data (ie. customer, task, etc) and returns it in a tabular form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BrowseJSONRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseJSONRequest();
    $request->additionalOrder = 'vel';
    $request->maxRows = 623564;
    $request->page = 645894;
    $request->useDeferredColumns = 'suscipit';
    $request->viewId = 437587;

    $response = $sdk->browser->browseJSON($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## create

Creates view for given class.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ViewDTO;
use \OpenAPI\OpenAPI\Models\Shared\ColumnDTO;
use \OpenAPI\OpenAPI\Models\Shared\OrderDTO;
use \OpenAPI\OpenAPI\Models\Shared\PermissionsDTO;
use \OpenAPI\OpenAPI\Models\Shared\SettingsDTO;
use \OpenAPI\OpenAPI\Models\Shared\LocalSettingsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRequest();
    $request->viewDTO = new ViewDTO();
    $request->viewDTO->columns = [
        new ColumnDTO(),
        new ColumnDTO(),
    ];
    $request->viewDTO->order = new OrderDTO();
    $request->viewDTO->order->column = 'debitis';
    $request->viewDTO->order->type = 'ipsa';
    $request->viewDTO->permissions = new PermissionsDTO();
    $request->viewDTO->permissions->sharedGroups = [
        272656,
        383441,
        477665,
        791725,
    ];
    $request->viewDTO->settings = new SettingsDTO();
    $request->viewDTO->settings->local = new LocalSettingsDTO();
    $request->viewDTO->settings->local->maxLinesInRow = 812169;
    $request->viewDTO->settings->local->maxRows = 528895;
    $request->viewDTO->settings->name = 'Miriam Huel';
    $request->className = 'ab';

    $response = $sdk->browser->create($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete

Removes a view. No content is returned upon success (204).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequest();
    $request->viewId = 337396;

    $response = $sdk->browser->delete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteColumn

Deletes a single column from view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteColumnRequest();
    $request->columnName = 'veritatis';
    $request->viewId = 648172;

    $response = $sdk->browser->deleteColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## get

Returns all view's information (ie. name, columns, filters, etc).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->viewId = 20218;

    $response = $sdk->browser->get($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getColumnSettings

Returns column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetColumnSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetColumnSettingsRequest();
    $request->columnName = 'ipsam';
    $request->viewId = 832620;

    $response = $sdk->browser->getColumnSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getColumns

Returns columns defined in view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetColumnsRequest();
    $request->viewId = 957156;

    $response = $sdk->browser->getColumns($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCurrentViewDetails

Returns current view's detailed information, suitable for browser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCurrentViewDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCurrentViewDetailsRequest();
    $request->className = 'quo';
    $request->placeName = 'odit';

    $response = $sdk->browser->getCurrentViewDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilter

Returns view's filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilterRequest();
    $request->viewId = 870013;

    $response = $sdk->browser->getFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocalSettings

Returns view's local settings (for current user).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLocalSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocalSettingsRequest();
    $request->viewId = 870088;

    $response = $sdk->browser->getLocalSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrder

Returns view's order settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderRequest();
    $request->viewId = 978619;

    $response = $sdk->browser->getOrder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissions

Returns view's permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionsRequest();
    $request->viewId = 473608;

    $response = $sdk->browser->getPermissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettings

Returns view's settings (ie. name).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsRequest();
    $request->viewId = 799159;

    $response = $sdk->browser->getSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getViewDetails

Returns view's detailed information, suitable for browser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetViewDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetViewDetailsRequest();
    $request->className = 'quod';
    $request->placeName = 'esse';
    $request->viewId = 520478;

    $response = $sdk->browser->getViewDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getViewsBrief

Returns views' brief.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetViewsBriefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetViewsBriefRequest();
    $request->className = 'porro';
    $request->placeName = 'dolorum';

    $response = $sdk->browser->getViewsBrief($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## selectViewAndGetItsDetails

Selects given view as current and returns its detailed information, suitable for browser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SelectViewAndGetItsDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SelectViewAndGetItsDetailsRequest();
    $request->className = 'dicta';
    $request->placeNameDenotesSpecificPlaceInSystemWithTheTable = 'nam';
    $request->viewId = 639921;

    $response = $sdk->browser->selectViewAndGetItsDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## update

Updates all view's information (ie. name, columns, filters, etc).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ViewDTO;
use \OpenAPI\OpenAPI\Models\Shared\ColumnDTO;
use \OpenAPI\OpenAPI\Models\Shared\OrderDTO;
use \OpenAPI\OpenAPI\Models\Shared\PermissionsDTO;
use \OpenAPI\OpenAPI\Models\Shared\SettingsDTO;
use \OpenAPI\OpenAPI\Models\Shared\LocalSettingsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRequest();
    $request->viewDTO = new ViewDTO();
    $request->viewDTO->columns = [
        new ColumnDTO(),
        new ColumnDTO(),
        new ColumnDTO(),
    ];
    $request->viewDTO->order = new OrderDTO();
    $request->viewDTO->order->column = 'fugit';
    $request->viewDTO->order->type = 'deleniti';
    $request->viewDTO->permissions = new PermissionsDTO();
    $request->viewDTO->permissions->sharedGroups = [
        758616,
        521848,
        105907,
        414662,
    ];
    $request->viewDTO->settings = new SettingsDTO();
    $request->viewDTO->settings->local = new LocalSettingsDTO();
    $request->viewDTO->settings->local->maxLinesInRow = 473600;
    $request->viewDTO->settings->local->maxRows = 264555;
    $request->viewDTO->settings->name = 'Krista Rippin';
    $request->viewId = 568434;

    $response = $sdk->browser->update($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateColumnSettings

Updates column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateColumnSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateColumnSettingsRequest();
    $request->requestBody = [
        'perferendis' => 'ad',
    ];
    $request->columnName = 'natus';
    $request->viewId = 149675;

    $response = $sdk->browser->updateColumnSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateColumns

Updates columns in view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateColumnsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ColumnDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateColumnsRequest();
    $request->requestBody = [
        new ColumnDTO(),
        new ColumnDTO(),
        new ColumnDTO(),
    ];
    $request->viewId = 222321;

    $response = $sdk->browser->updateColumns($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFilter

Updates view's filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterPropertyDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFilterRequest();
    $request->requestBody = [
        new FilterPropertyDTO(),
        new FilterPropertyDTO(),
        new FilterPropertyDTO(),
    ];
    $request->viewId = 386489;

    $response = $sdk->browser->updateFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFilterProperty

Updates view's filter property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilterPropertyRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterPropertyDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFilterPropertyRequest();
    $request->filterPropertyDTO = new FilterPropertyDTO();
    $request->filterPropertyDTO->name = 'Elias Parker';
    $request->filterPropertyDTO->settings = [
        'iure' => 'saepe',
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
    ];
    $request->filterPropertyDTO->settingsPresent = false;
    $request->filterPropertyDTO->type = 'est';
    $request->filterProperty = 'mollitia';
    $request->viewId = 670638;

    $response = $sdk->browser->updateFilterProperty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocalSettings

Updates view's local settings (for current user).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocalSettingsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocalSettingsRequest();
    $request->localSettingsDTO = new LocalSettingsDTO();
    $request->localSettingsDTO->maxLinesInRow = 170909;
    $request->localSettingsDTO->maxRows = 210382;
    $request->viewId = 358152;

    $response = $sdk->browser->updateLocalSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrder

Updates view's order settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrderRequest();
    $request->orderDTO = new OrderDTO();
    $request->orderDTO->column = 'explicabo';
    $request->orderDTO->type = 'nobis';
    $request->viewId = 315428;

    $response = $sdk->browser->updateOrder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePermissions

Updates view's permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePermissionsRequest();
    $request->permissionsDTO = new PermissionsDTO();
    $request->permissionsDTO->sharedGroups = [
        363711,
        325047,
        570197,
    ];
    $request->viewId = 38425;

    $response = $sdk->browser->updatePermissions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSettings

Updates view's settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettingsDTO;
use \OpenAPI\OpenAPI\Models\Shared\LocalSettingsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSettingsRequest();
    $request->settingsDTO = new SettingsDTO();
    $request->settingsDTO->local = new LocalSettingsDTO();
    $request->settingsDTO->local->maxLinesInRow = 438601;
    $request->settingsDTO->local->maxRows = 634274;
    $request->settingsDTO->name = 'Darrin Brakus';
    $request->viewId = 635059;

    $response = $sdk->browser->updateSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
