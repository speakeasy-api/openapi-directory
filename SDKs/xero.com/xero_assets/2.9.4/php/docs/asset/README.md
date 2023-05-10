# asset

### Available Operations

* [createAsset](#createasset) - adds a fixed asset
* [createAssetType](#createassettype) - adds a fixed asset type
* [getAssetById](#getassetbyid) - Retrieves fixed asset by id
* [getAssetSettings](#getassetsettings) - searches fixed asset settings
* [getAssetTypes](#getassettypes) - searches fixed asset types
* [getAssets](#getassets) - searches fixed asset

## createAsset

Adds an asset to the system

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Asset;
use \OpenAPI\OpenAPI\Models\Shared\AssetStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationDetail;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSetting;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSettingAveragingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSettingDepreciationCalculationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSettingDepreciationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssetRequest();
    $request->asset = new Asset();
    $request->asset->accountingBookValue = 7151.9;
    $request->asset->assetId = '3b5b3a38-5649-495f-87a1-14a4e5918634';
    $request->asset->assetName = 'Awesome Truck 3';
    $request->asset->assetNumber = 'FA-0013';
    $request->asset->assetStatus = AssetStatusEnum::DRAFT;
    $request->asset->assetTypeId = '3b5b3a38-5649-495f-87a1-14a4e5918634';
    $request->asset->bookDepreciationDetail = new BookDepreciationDetail();
    $request->asset->bookDepreciationDetail->costLimit = 9000;
    $request->asset->bookDepreciationDetail->currentAccumDepreciationAmount = 5;
    $request->asset->bookDepreciationDetail->currentCapitalGain = 5.25;
    $request->asset->bookDepreciationDetail->currentGainLoss = 10.5;
    $request->asset->bookDepreciationDetail->depreciationStartDate = DateTime::createFromFormat('Y-m-d', '2015-07-01T00:00:00');
    $request->asset->bookDepreciationDetail->priorAccumDepreciationAmount = 0.45;
    $request->asset->bookDepreciationDetail->residualValue = 10000;
    $request->asset->bookDepreciationSetting = new BookDepreciationSetting();
    $request->asset->bookDepreciationSetting->averagingMethod = BookDepreciationSettingAveragingMethodEnum::ACTUAL_DAYS;
    $request->asset->bookDepreciationSetting->bookEffectiveDateOfChangeId = '68f17094-af97-4f1b-b36b-013b45b6ad3c';
    $request->asset->bookDepreciationSetting->depreciableObjectId = '68f17094-af97-4f1b-b36b-013b45b6ad3c';
    $request->asset->bookDepreciationSetting->depreciableObjectType = 'Asset';
    $request->asset->bookDepreciationSetting->depreciationCalculationMethod = BookDepreciationSettingDepreciationCalculationMethodEnum::NONE;
    $request->asset->bookDepreciationSetting->depreciationMethod = BookDepreciationSettingDepreciationMethodEnum::STRAIGHT_LINE;
    $request->asset->bookDepreciationSetting->depreciationRate = 0.05;
    $request->asset->bookDepreciationSetting->effectiveLifeYears = 5;
    $request->asset->canRollback = true;
    $request->asset->disposalDate = DateTime::createFromFormat('Y-m-d', '2020-07-01T00:00:00');
    $request->asset->disposalPrice = 1.0000;
    $request->asset->isDeleteEnabledForDate = true;
    $request->asset->purchaseDate = DateTime::createFromFormat('Y-m-d', '2015-07-01T00:00:00');
    $request->asset->purchasePrice = 1000.0000;
    $request->asset->serialNumber = 'ca4c6b39-4f4f-43e8-98da-5e1f350a6694';
    $request->asset->warrantyExpiryDate = 'ca4c6b39-4f4f-43e8-98da-5e1f350a6694';
    $request->xeroTenantId = 'quibusdam';

    $requestSecurity = new CreateAssetSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->asset->createAsset($request, $requestSecurity);

    if ($response->asset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssetType

Adds an fixed asset type to the system

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetType;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSetting;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSettingAveragingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSettingDepreciationCalculationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BookDepreciationSettingDepreciationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssetTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssetTypeRequest();
    $request->assetType = new AssetType();
    $request->assetType->accumulatedDepreciationAccountId = 'ca4c6b39-4f4f-43e8-98da-5e1f350a6694';
    $request->assetType->assetTypeId = '5da209c5-5e19-4a43-b925-71b776c49ced';
    $request->assetType->assetTypeName = 'Computer Equipment';
    $request->assetType->bookDepreciationSetting = new BookDepreciationSetting();
    $request->assetType->bookDepreciationSetting->averagingMethod = BookDepreciationSettingAveragingMethodEnum::ACTUAL_DAYS;
    $request->assetType->bookDepreciationSetting->bookEffectiveDateOfChangeId = '68f17094-af97-4f1b-b36b-013b45b6ad3c';
    $request->assetType->bookDepreciationSetting->depreciableObjectId = '68f17094-af97-4f1b-b36b-013b45b6ad3c';
    $request->assetType->bookDepreciationSetting->depreciableObjectType = 'Asset';
    $request->assetType->bookDepreciationSetting->depreciationCalculationMethod = BookDepreciationSettingDepreciationCalculationMethodEnum::NONE;
    $request->assetType->bookDepreciationSetting->depreciationMethod = BookDepreciationSettingDepreciationMethodEnum::STRAIGHT_LINE;
    $request->assetType->bookDepreciationSetting->depreciationRate = 0.05;
    $request->assetType->bookDepreciationSetting->effectiveLifeYears = 5;
    $request->assetType->depreciationExpenseAccountId = 'b23fc79b-d66b-44b0-a240-e138e086fcbc';
    $request->assetType->fixedAssetAccountId = '24e260f1-bfc4-4766-ad7f-8a8ce01de879';
    $request->assetType->locks = 33;
    $request->xeroTenantId = 'unde';

    $requestSecurity = new CreateAssetTypeSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->asset->createAssetType($request, $requestSecurity);

    if ($response->assetType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetById

By passing in the appropriate asset id, you can search for
a specific fixed asset in the system


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetByIdRequest();
    $request->id = '4f7bcdcb-5ec1-4258-9558-19f662fccdfe';
    $request->xeroTenantId = 'nulla';

    $requestSecurity = new GetAssetByIdSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->asset->getAssetById($request, $requestSecurity);

    if ($response->asset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetSettings

By passing in the appropriate options, you can search for available fixed asset types in the system

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetSettingsRequest();
    $request->xeroTenantId = 'corrupti';

    $requestSecurity = new GetAssetSettingsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->asset->getAssetSettings($request, $requestSecurity);

    if ($response->setting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetTypes

By passing in the appropriate options, you can search for available fixed asset types in the system

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetTypesRequest();
    $request->xeroTenantId = 'illum';

    $requestSecurity = new GetAssetTypesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->asset->getAssetTypes($request, $requestSecurity);

    if ($response->assetTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssets

By passing in the appropriate options, you can search for available fixed asset in the system

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetsOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetsSortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssetStatusQueryParamEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetsRequest();
    $request->filterBy = 'Company Car';
    $request->orderBy = GetAssetsOrderByEnum::ASSET_NAME;
    $request->page = 1;
    $request->pageSize = 5;
    $request->sortDirection = GetAssetsSortDirectionEnum::ASC;
    $request->status = AssetStatusQueryParamEnum::DRAFT;
    $request->xeroTenantId = 'error';

    $requestSecurity = new GetAssetsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->asset->getAssets($request, $requestSecurity);

    if ($response->assets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
