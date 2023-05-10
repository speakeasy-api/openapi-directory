# settings

### Available Operations

* [editSettings](#editsettings) - Edit Subscriptions settings
* [getSettings](#getsettings) - Get Subscriptions Settings

## editSettings

Edits Subscriptions settings in your store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EditSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Settings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditSettingsRequest();
    $request->accept = 'delectus';
    $request->contentType = 'tempora';
    $request->settings = new Settings();
    $request->settings->defaultSla = 'null';
    $request->settings->deliveryChannels = [
        'delivery',
        'delivery',
    ];
    $request->settings->executionHourInUtc = 9;
    $request->settings->isMultipleInstallmentsEnabledOnCreation = false;
    $request->settings->isMultipleInstallmentsEnabledOnUpdate = false;
    $request->settings->isUsingV3 = true;
    $request->settings->manualPriceAllowed = false;
    $request->settings->onMigrationProcess = false;
    $request->settings->orderCustomDataAppId = 'null';
    $request->settings->postponeExpiration = false;
    $request->settings->randomIdGeneration = false;
    $request->settings->slaOption = 'NONE';
    $request->settings->useItemPriceFromOriginalOrder = false;
    $request->settings->workflowVersion = '1.1';

    $response = $sdk->settings->editSettings($request);

    if ($response->settings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettings

Lists the current Subscriptions settings in your store.

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
    $request->accept = 'molestiae';
    $request->contentType = 'minus';

    $response = $sdk->settings->getSettings($request);

    if ($response->settings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
