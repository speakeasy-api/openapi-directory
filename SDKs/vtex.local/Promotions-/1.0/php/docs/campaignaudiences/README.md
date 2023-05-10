# campaignAudiences

### Available Operations

* [getcampaignaudiences](#getcampaignaudiences) - Get all campaign audiences
* [getcampaignconfiguration](#getcampaignconfiguration) - Get campaign audience configuration
* [setcampaignconfiguration](#setcampaignconfiguration) - Create campaign audience

## getcampaignaudiences

Retrieves a list of all campaign audiences and their respective configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetcampaignaudiencesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcampaignaudiencesRequest();
    $request->accept = 'debitis';
    $request->contentType = 'application/json';

    $response = $sdk->campaignAudiences->getcampaignaudiences($request);

    if ($response->getcampaignaudiences200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getcampaignconfiguration

Retrieves a specific campaign audience configuration by its ID. This API uses the campaign ID, not the campaign name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetcampaignconfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcampaignconfigurationRequest();
    $request->accept = 'ipsa';
    $request->contentType = 'delectus';
    $request->campaignId = 'dd270d06-1ed1-47fc-b04e-a2431121b5a4';

    $response = $sdk->campaignAudiences->getcampaignconfiguration($request);

    if ($response->getcampaignconfiguration200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setcampaignconfiguration

Creates a new campaign audience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyLastModified;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurations;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsAffiliates;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsBrands;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsCategories;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsCollections;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsListCategory1BuyTogether;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsPaymentsMethods;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsProducts;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsSkus;
use \OpenAPI\OpenAPI\Models\Operations\SetcampaignconfigurationRequestBodyTargetConfigurationsZipCodeRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetcampaignconfigurationRequest();
    $request->accept = 'tempora';
    $request->contentType = 'suscipit';
    $request->requestBody = new SetcampaignconfigurationRequestBody();
    $request->requestBody->beginDateUtc = '2020-05-01T21:30:00Z';
    $request->requestBody->endDateUtc = '2020-05-02T01:30:00Z';
    $request->requestBody->id = 'dd270d06-1ed1-47fc-b04e-a2431121b5a4';
    $request->requestBody->isActive = true;
    $request->requestBody->isAndOperator = true;
    $request->requestBody->isArchived = false;
    $request->requestBody->lastModified = new SetcampaignconfigurationRequestBodyLastModified();
    $request->requestBody->lastModified->dateUtc = '2020-05-01T21:22:01.807398Z';
    $request->requestBody->lastModified->user = 'email@email.com';
    $request->requestBody->name = 'Interna';
    $request->requestBody->targetConfigurations = [
        new SetcampaignconfigurationRequestBodyTargetConfigurations(),
        new SetcampaignconfigurationRequestBodyTargetConfigurations(),
    ];

    $response = $sdk->campaignAudiences->setcampaignconfiguration($request);

    if ($response->setcampaignconfiguration200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
