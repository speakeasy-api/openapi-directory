<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Association;
use \OpenAPI\OpenAPI\Models\Shared\ObjectGroupEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFileAssociationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFileAssociationRequest();
    $request->association = new Association();
    $request->association->fileId = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->association->objectGroup = ObjectGroupEnum::OVERPAYMENT;
    $request->association->objectId = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';
    $request->association->objectType = ObjectTypeEnum::CURRENT;
    $request->fileId = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'esse';

    $requestSecurity = new CreateFileAssociationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->createFileAssociation($request, $requestSecurity);

    if ($response->association !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->