# sellers

## Overview

Get sellers' data

### Available Operations

* [getListSellers](#getlistsellers) - List Sellers
* [getRetrieveSeller](#getretrieveseller) - Get Seller data by ID
* [updateSeller](#updateseller) - Update Seller by Seller ID
* [upsertSellerRequest](#upsertsellerrequest) - Configure Seller Account

## getListSellers

This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetListSellersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListSellersRequest();
    $request->accept = 'nam';
    $request->contentType = 'id';
    $request->accountName = 'blanditiis';
    $request->environment = 'deleniti';
    $request->from = 9560.84;
    $request->group = 'amet';
    $request->integration = 'deserunt';
    $request->isActive = false;
    $request->isBetterScope = false;
    $request->isVtex = false;
    $request->keyword = 'nisi';
    $request->sc = 'vel';
    $request->sellerType = 618809;
    $request->sort = 'omnis';
    $request->to = 4748.67;

    $response = $sdk->sellers->getListSellers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetrieveSeller

Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRetrieveSellerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRetrieveSellerRequest();
    $request->accept = 'perferendis';
    $request->contentType = 'nihil';
    $request->accountName = 'magnam';
    $request->environment = 'distinctio';
    $request->sc = 'id';
    $request->sellerId = 'labore';

    $response = $sdk->sellers->getRetrieveSeller($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSeller

This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSellerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSellerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSellerRequest();
    $request->accept = 'labore';
    $request->contentType = 'suscipit';
    $request->requestBody = [
        new UpdateSellerRequestBody(),
        new UpdateSellerRequestBody(),
        new UpdateSellerRequestBody(),
    ];
    $request->accountName = 'nobis';
    $request->environment = 'eum';
    $request->sellerId = 'vero';

    $response = $sdk->sellers->updateSeller($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsertSellerRequest

This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces. 

For marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly. 

This call includes all the information a seller needs to activate their account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpsertSellerRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpsertSellerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AvailableSalesChannel;
use \OpenAPI\OpenAPI\Models\Shared\Groups;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertSellerRequestRequest();
    $request->accept = 'aspernatur';
    $request->contentType = 'architecto';
    $request->upsertSellerRequest = new UpsertSellerRequest();
    $request->upsertSellerRequest->cscIdentification = 'magnam';
    $request->upsertSellerRequest->account = 'et';
    $request->upsertSellerRequest->allowHybridPayments = false;
    $request->upsertSellerRequest->availableSalesChannels = [
        new AvailableSalesChannel(),
        new AvailableSalesChannel(),
        new AvailableSalesChannel(),
    ];
    $request->upsertSellerRequest->catalogSystemEndpoint = 'ullam';
    $request->upsertSellerRequest->channel = 'provident';
    $request->upsertSellerRequest->deliveryPolicy = 'quos';
    $request->upsertSellerRequest->description = 'sint';
    $request->upsertSellerRequest->email = 'Madaline.Wisozk@gmail.com';
    $request->upsertSellerRequest->exchangeReturnPolicy = 'eum';
    $request->upsertSellerRequest->fulfillmentEndpoint = 'dolor';
    $request->upsertSellerRequest->fulfillmentSellerId = 'necessitatibus';
    $request->upsertSellerRequest->groups = [
        new Groups(),
    ];
    $request->upsertSellerRequest->id = '516fe4c8-b711-4e5b-bfd2-ed028921cddc';
    $request->upsertSellerRequest->isActive = false;
    $request->upsertSellerRequest->isBetterScope = false;
    $request->upsertSellerRequest->isVtex = false;
    $request->upsertSellerRequest->name = 'Miriam Connelly Jr.';
    $request->upsertSellerRequest->password = 'maiores';
    $request->upsertSellerRequest->salesChannel = 'quidem';
    $request->upsertSellerRequest->score = 3732.91;
    $request->upsertSellerRequest->securityPrivacyPolicy = 'voluptate';
    $request->upsertSellerRequest->sellerCommissionConfiguration = [
        'nam' => 'eaque',
        'pariatur' => 'nemo',
    ];
    $request->upsertSellerRequest->sellerType = 975522;
    $request->upsertSellerRequest->taxCode = 'perferendis';
    $request->upsertSellerRequest->trustPolicy = 'fugiat';
    $request->upsertSellerRequest->user = 'amet';
    $request->accountName = 'aut';
    $request->environment = 'cumque';

    $response = $sdk->sellers->upsertSellerRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
