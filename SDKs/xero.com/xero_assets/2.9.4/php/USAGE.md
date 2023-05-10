<!-- Start SDK Example Usage -->
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
    $request->asset->accountingBookValue = 5488.14;
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
    $request->xeroTenantId = 'provident';

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
<!-- End SDK Example Usage -->