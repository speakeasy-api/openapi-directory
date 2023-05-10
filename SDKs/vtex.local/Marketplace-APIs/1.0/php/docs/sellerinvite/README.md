# sellerInvite

## Overview

Used to invite sellers and configure their accounts

### Available Operations

* [acceptSellerLead](#acceptsellerlead) - Accept Seller Lead
* [createSellerFromSellerLead](#createsellerfromsellerlead) - Create Seller From Lead
* [createSellerLead](#createsellerlead) - Invite Seller Lead
* [listSellerLeads](#listsellerleads) - List Seller Leads
* [removeSellerLead](#removesellerlead) - Delete Seller Lead
* [resendSellerLeadRequest](#resendsellerleadrequest) - Resend Seller Lead Invite
* [retrieveSellerLead](#retrievesellerlead) - Get Seller Lead's Data by Id

## acceptSellerLead

This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptSellerLeadRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptSellerLeadRequest;
use \OpenAPI\OpenAPI\Models\Shared\Accountable;
use \OpenAPI\OpenAPI\Models\Shared\Address;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptSellerLeadRequest();
    $request->accept = 'corporis';
    $request->acceptSellerLeadRequest = new AcceptSellerLeadRequest();
    $request->acceptSellerLeadRequest->accountId = 'iste';
    $request->acceptSellerLeadRequest->accountable = new Accountable();
    $request->acceptSellerLeadRequest->accountable->email = 'Sterling6@yahoo.com';
    $request->acceptSellerLeadRequest->accountable->name = 'Carlton O'Hara';
    $request->acceptSellerLeadRequest->accountable->phone = '417.463.3504';
    $request->acceptSellerLeadRequest->address = new Address();
    $request->acceptSellerLeadRequest->address->city = 'Yundtworth';
    $request->acceptSellerLeadRequest->address->complement = 'architecto';
    $request->acceptSellerLeadRequest->address->neighborhood = 'mollitia';
    $request->acceptSellerLeadRequest->address->number = 'dolorem';
    $request->acceptSellerLeadRequest->address->postalcode = '19652-4442';
    $request->acceptSellerLeadRequest->address->state = 'error';
    $request->acceptSellerLeadRequest->address->street = '31663 Orlando Drives';
    $request->acceptSellerLeadRequest->document = 'tenetur';
    $request->acceptSellerLeadRequest->email = 'Makayla9@yahoo.com';
    $request->acceptSellerLeadRequest->hasAcceptedLegalTerms = false;
    $request->acceptSellerLeadRequest->salesChannel = 'error';
    $request->acceptSellerLeadRequest->sellerAccountName = 'temporibus';
    $request->acceptSellerLeadRequest->sellerEmail = 'laborum';
    $request->acceptSellerLeadRequest->sellerName = 'quasi';
    $request->acceptSellerLeadRequest->sellerType = 971945;
    $request->contentType = 'voluptatibus';
    $request->accountName = 'vero';
    $request->environment = 'nihil';
    $request->sellerLeadId = 'praesentium';

    $response = $sdk->sellerInvite->acceptSellerLead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSellerFromSellerLead

This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled. 

The creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSellerFromSellerLeadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSellerFromSellerLeadRequest();
    $request->accept = 'voluptatibus';
    $request->contentType = 'ipsa';
    $request->accountName = 'omnis';
    $request->environment = 'voluptate';
    $request->isActive = false;
    $request->sellerLeadId = 'cum';

    $response = $sdk->sellerInvite->createSellerFromSellerLead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSellerLead

This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store. 

The email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSellerLeadRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSellerLeadRequest;
use \OpenAPI\OpenAPI\Models\Shared\Accountable;
use \OpenAPI\OpenAPI\Models\Shared\Address;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSellerLeadRequest();
    $request->accept = 'perferendis';
    $request->contentType = 'doloremque';
    $request->createSellerLeadRequest = new CreateSellerLeadRequest();
    $request->createSellerLeadRequest->accountId = 'reprehenderit';
    $request->createSellerLeadRequest->accountable = new Accountable();
    $request->createSellerLeadRequest->accountable->email = 'Wilfrid.Carter@gmail.com';
    $request->createSellerLeadRequest->accountable->name = 'Mildred Pfeffer';
    $request->createSellerLeadRequest->accountable->phone = '1-902-755-8255 x909';
    $request->createSellerLeadRequest->address = new Address();
    $request->createSellerLeadRequest->address->city = 'Arnoldoshire';
    $request->createSellerLeadRequest->address->complement = 'incidunt';
    $request->createSellerLeadRequest->address->neighborhood = 'enim';
    $request->createSellerLeadRequest->address->number = 'consequatur';
    $request->createSellerLeadRequest->address->postalcode = '81678-2213';
    $request->createSellerLeadRequest->address->state = 'cupiditate';
    $request->createSellerLeadRequest->address->street = '0183 Caden Port';
    $request->createSellerLeadRequest->document = 'excepturi';
    $request->createSellerLeadRequest->email = 'Mckayla96@gmail.com';
    $request->createSellerLeadRequest->hasAcceptedLegalTerms = false;
    $request->createSellerLeadRequest->salesChannel = 'eum';
    $request->createSellerLeadRequest->sellerAccountName = 'non';
    $request->createSellerLeadRequest->sellerEmail = 'eligendi';
    $request->createSellerLeadRequest->sellerName = 'sint';
    $request->createSellerLeadRequest->sellerType = 396098;
    $request->accountName = 'provident';
    $request->environment = 'necessitatibus';

    $response = $sdk->sellerInvite->createSellerLead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSellerLeads

This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSellerLeadsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSellerLeadsRequest();
    $request->accept = 'sint';
    $request->contentType = 'officia';
    $request->accountName = 'dolor';
    $request->environment = 'debitis';
    $request->isConnected = 'a';
    $request->limit = 680056;
    $request->offset = 447125;
    $request->orderBy = 'in';
    $request->search = 'illum';
    $request->status = 'maiores';

    $response = $sdk->sellerInvite->listSellerLeads($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeSellerLead

This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSellerLeadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveSellerLeadRequest();
    $request->accept = 'rerum';
    $request->contentType = 'dicta';
    $request->accountName = 'magnam';
    $request->environment = 'cumque';
    $request->sellerLeadId = 'facere';

    $response = $sdk->sellerInvite->removeSellerLead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendSellerLeadRequest

This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendSellerLeadRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendSellerLeadRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendSellerLeadRequestRequest();
    $request->accept = 'ea';
    $request->contentType = 'aliquid';
    $request->resendSellerLeadRequestRequest = new ResendSellerLeadRequestRequest();
    $request->resendSellerLeadRequestRequest->status = 'laborum';
    $request->accountName = 'accusamus';
    $request->environment = 'non';
    $request->sellerLeadId = 'occaecati';

    $response = $sdk->sellerInvite->resendSellerLeadRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSellerLead

Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSellerLeadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSellerLeadRequest();
    $request->accept = 'enim';
    $request->contentType = 'accusamus';
    $request->accountName = 'delectus';
    $request->environment = 'quidem';
    $request->sellerLeadId = 'provident';

    $response = $sdk->sellerInvite->retrieveSellerLead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
