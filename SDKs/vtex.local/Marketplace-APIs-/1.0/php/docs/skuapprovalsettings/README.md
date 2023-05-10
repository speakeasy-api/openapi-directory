# skuApprovalSettings

### Available Operations

* [getaccountconfig](#getaccountconfig) - Get Account's Approval Settings
* [getautoApprovevaluefromconfig](#getautoapprovevaluefromconfig) - Get autoApprove Status in Account Settings
* [getselleraccountconfig](#getselleraccountconfig) - Get Seller's Approval Settings
* [putselleraccountconfig](#putselleraccountconfig) - Save Seller's Approval Settings
* [saveaccountconfig](#saveaccountconfig) - Save Account's Approval Settings
* [saveautoapproveforaccount](#saveautoapproveforaccount) - Activate autoApprove in Marketplace's Account
* [saveautoapproveforaccountseller](#saveautoapproveforaccountseller) - Activate autoApprove Setting for a Seller

## getaccountconfig

This endpoint retrieves the current approval settings of a marketplace's Received SKUs module. Its response includes: 

- `Score`: Matcher scores for approving and rejecting SKUs received from sellers. 

- `Matchers`: All Matchers configured on the marketplace, and their respective details. 

- `SpecificationsMapping`: Mapping of product and SKU specifications, per seller. 

- `MatchFlux`: This field determines the type of approval configuration applied to SKUs received from a seller. 

The possible values include: 

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI, or Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of their Matcher Score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetaccountconfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetaccountconfigRequest();
    $request->accept = 'velit';
    $request->contentType = 'error';
    $request->accountName = 'quia';

    $response = $sdk->skuApprovalSettings->getaccountconfig($request);

    if ($response->getaccountconfig200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getautoApprovevaluefromconfig

This endpoint can be used to check whether the autoapprove setting is active or not, for a specific seller. 

If the response is `true`, the autoapprove setting is active. If the response is `false`, it is inactive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetautoApprovevaluefromconfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetautoApprovevaluefromconfigRequest();
    $request->accept = 'quis';
    $request->contentType = 'vitae';
    $request->accountName = 'laborum';
    $request->sellerId = 'animi';

    $response = $sdk->skuApprovalSettings->getautoApprovevaluefromconfig($request);

    if ($response->getautoApprovevaluefromconfig200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getselleraccountconfig

This endpoint retrieves the current Received SKUs approval settings applied to a specific seller. Its response includes: 

- `sellerId`: A string that identifies the seller in the marketplace. 

- `accountId`: Marketplace’s account ID. 

- `accountName`: Marketplace’s account name. 

- `mapping`: Mapping of SKU and product Specifications. 

- `matchFlux`: This field determines the type of approval configuration applied to SKUs received  from a seller. 

The possible values include:  

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI and Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetselleraccountconfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetselleraccountconfigRequest();
    $request->accept = 'enim';
    $request->contentType = 'odit';
    $request->accountName = 'quo';
    $request->sellerId = 'sequi';

    $response = $sdk->skuApprovalSettings->getselleraccountconfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putselleraccountconfig

Marketplaces use this endpoint to create or update approval settings to a specific seller, on the Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutselleraccountconfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutselleraccountconfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutselleraccountconfigRequest();
    $request->accept = 'tenetur';
    $request->contentType = 'ipsam';
    $request->putselleraccountconfigRequest = new PutselleraccountconfigRequest();
    $request->putselleraccountconfigRequest->mapping = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->putselleraccountconfigRequest->matchFlux = 'quasi';
    $request->putselleraccountconfigRequest->sellerId = 'reiciendis';
    $request->accountName = 'voluptatibus';
    $request->sellerId = 'vero';

    $response = $sdk->skuApprovalSettings->putselleraccountconfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveaccountconfig

Marketplaces use this endpoint to create or update approval settings on their Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveaccountconfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveaccountconfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\Matcher;
use \OpenAPI\OpenAPI\Models\Shared\Score;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveaccountconfigRequest();
    $request->accept = 'nihil';
    $request->contentType = 'praesentium';
    $request->saveaccountconfigRequest = new SaveaccountconfigRequest();
    $request->saveaccountconfigRequest->matchFlux = 'voluptatibus';
    $request->saveaccountconfigRequest->matchers = [
        new Matcher(),
    ];
    $request->saveaccountconfigRequest->score = new Score();
    $request->saveaccountconfigRequest->score->approve = 604846;
    $request->saveaccountconfigRequest->score->reject = 451159;
    $request->saveaccountconfigRequest->specificationsMapping = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->accountName = 'ut';

    $response = $sdk->skuApprovalSettings->saveaccountconfig($request);

    if ($response->saveaccountconfig200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveautoapproveforaccount

This endpoint enables the autoapprove rule to a marketplace's whole Received SKUs module. Once enabling the rule, received SKUs will be automatically approved on your store, regardless of the seller. 

 For the autoapprove rule to work as expected, the approval [Matcher score](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) should be set up as 80 (default value), but you can configure a different number through the field `Score` in [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveautoapproveforaccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveautoapproveforaccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveautoapproveforaccountRequest();
    $request->accept = 'maiores';
    $request->contentType = 'dicta';
    $request->saveautoapproveforaccountRequest = new SaveautoapproveforaccountRequest();
    $request->saveautoapproveforaccountRequest->enabled = false;
    $request->accountName = 'corporis';

    $response = $sdk->skuApprovalSettings->saveautoapproveforaccount($request);

    if ($response->saveautoapproveforaccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveautoapproveforaccountseller

This endpoint enables the auto approve setting to received SKUs from a specific seller. Be aware that once enabling the rule through this request, all received SKUs from that seller will be automatically approved on your store, regardless of the Matcher Score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveautoapproveforaccountsellerRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveautoapproveforaccountsellerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveautoapproveforaccountsellerRequest();
    $request->accept = 'dolore';
    $request->contentType = 'iusto';
    $request->saveautoapproveforaccountsellerRequest = new SaveautoapproveforaccountsellerRequest();
    $request->saveautoapproveforaccountsellerRequest->enabled = false;
    $request->accountName = 'dicta';
    $request->sellerId = 'harum';

    $response = $sdk->skuApprovalSettings->saveautoapproveforaccountseller($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
