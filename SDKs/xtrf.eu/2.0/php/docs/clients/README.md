# clients

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [create2](#create2) - Creates a new person.
* [create3](#create3) - Creates a new client.
* [delete3](#delete3) - Removes a person.
* [delete4](#delete4) - Removes a customer price list.
* [delete5](#delete5) - Removes a client.
* [generateSingleUseSignInToken](#generatesingleusesignintoken) - Generates a single use sign-in token.
* [getAddress](#getaddress) - Returns address of a given client.
* [getAllIds1](#getallids1) - Returns persons' internal identifiers.
* [getAllIds2](#getallids2) - Returns clients' internal identifiers.
* [getAllNamesWithIds](#getallnameswithids) - Returns list of simple clients representations
* [getById1](#getbyid1) - Returns person details.
* [getById2](#getbyid2) - Returns client details.
* [getCategories](#getcategories) - Returns categories of a given client.
* [getContact](#getcontact) - Returns contact of a given person.
* [getContact1](#getcontact1) - Returns contact of a given client.
* [getCorrespondenceAddress](#getcorrespondenceaddress) - Returns correspondence address of a given client.
* [getCustomField](#getcustomfield) - Returns custom field of a given client.
* [getCustomFields](#getcustomfields) - Returns custom fields of a given person.
* [getCustomFields1](#getcustomfields1) - Returns custom fields of a given client.
* [getIndustries](#getindustries) - Returns industries of a given client.
* [updateAddress](#updateaddress) - Updates address of a given client.
* [updateCategories](#updatecategories) - Updates categories of a given client.
* [updateContact](#updatecontact) - Updates contact of a given person.
* [updateContact1](#updatecontact1) - Updates contact of a given client.
* [updateCorrespondenceAddress](#updatecorrespondenceaddress) - Updates correspondence address of a given client.
* [updateCustomField](#updatecustomfield) - Updates given custom field of a given client.
* [updateCustomFields](#updatecustomfields) - Updates custom fields of a given person.
* [updateCustomFields1](#updatecustomfields1) - Updates custom fields of a given client.
* [updateIndustries](#updateindustries) - Updates industries of a given client.
* [update1](#update1) - Updates an existing person.
* [update2](#update2) - Updates an existing client.

## create2

Creates a new person. Required fields are presented in the example. Other fields (from PUT) may also be specified here.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactEmailsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTOGenderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerPersonDTO();
    $request->active = false;
    $request->contact = new PersonContactDTO();
    $request->contact->emails = new PersonContactEmailsDTO();
    $request->contact->emails->additional = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->contact->emails->primary = 'ipsa';
    $request->contact->fax = 'omnis';
    $request->contact->phones = [
        'cum',
        'perferendis',
    ];
    $request->contact->sms = 'doloremque';
    $request->customFields = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->customerId = 282807;
    $request->firstProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T09:14:02.538Z');
    $request->firstQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T21:48:41.971Z');
    $request->gender = CustomerPersonDTOGenderEnum::FEMALE;
    $request->id = 118727;
    $request->lastName = 'Pfeffer';
    $request->lastProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T15:01:52.114Z');
    $request->lastQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T20:15:26.045Z');
    $request->motherTonguesIds = [
        216822,
    ];
    $request->name = 'Virgil Mante';
    $request->numberOfProjects = 508969;
    $request->numberOfQuotes = 523248;
    $request->positionId = 916723;

    $response = $sdk->clients->create2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## create3

Creates a new client. All available fields are presented in PUT request.<p>
  Required fields:
  <ul>
    <li>name</li>
    <li>fullName</li>
    <li>contact -> emails -> primary</li>
  </ul>
</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CustomerDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerAccountingDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerTaxNoDTO;
use \OpenAPI\OpenAPI\Models\Shared\AddressDTO;
use \OpenAPI\OpenAPI\Models\Shared\ContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerContactEmailsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactEmailsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTOGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerResponsiblePersonsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerDTOStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerDTO();
    $request->accountOnCustomerServer = 'quasi';
    $request->accounting = new CustomerAccountingDTO();
    $request->accounting->taxNumbers = [
        new CustomerTaxNoDTO(),
        new CustomerTaxNoDTO(),
        new CustomerTaxNoDTO(),
        new CustomerTaxNoDTO(),
    ];
    $request->billingAddress = new AddressDTO();
    $request->billingAddress->addressLine1 = 'sint';
    $request->billingAddress->addressLine2 = 'veritatis';
    $request->billingAddress->city = 'El Monte';
    $request->billingAddress->countryId = 318569;
    $request->billingAddress->postalCode = '68167';
    $request->billingAddress->provinceId = 841386;
    $request->billingAddress->sameAsBillingAddress = false;
    $request->branchId = 289406;
    $request->categoriesIds = [
        183191,
        397821,
    ];
    $request->clientFirstProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T10:34:02.904Z');
    $request->clientFirstQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T19:07:16.800Z');
    $request->clientLastProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-22T01:26:35.048Z');
    $request->clientLastQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-08T13:10:11.700Z');
    $request->clientNumberOfProjects = 677817;
    $request->clientNumberOfQuotes = 569618;
    $request->contact = new ContactDTO();
    $request->contact->emails = new CustomerContactEmailsDTO();
    $request->contact->emails->additional = [
        'facilis',
        'tempore',
    ];
    $request->contact->emails->cc = [
        'delectus',
        'eum',
    ];
    $request->contact->emails->primary = 'non';
    $request->contact->fax = 'eligendi';
    $request->contact->phones = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->contact->sms = 'sint';
    $request->contact->websites = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->contractNumber = 'dolorum';
    $request->correspondenceAddress = new AddressDTO();
    $request->correspondenceAddress->addressLine1 = 'in';
    $request->correspondenceAddress->addressLine2 = 'in';
    $request->correspondenceAddress->city = 'White Plains';
    $request->correspondenceAddress->countryId = 699479;
    $request->correspondenceAddress->postalCode = '27843';
    $request->correspondenceAddress->provinceId = 675439;
    $request->correspondenceAddress->sameAsBillingAddress = false;
    $request->customFields = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->fullName = 'non';
    $request->id = 581273;
    $request->idNumber = 'enim';
    $request->industriesIds = [
        965417,
        692532,
        588465,
        725255,
    ];
    $request->leadSourceId = 659669;
    $request->limitAccessToPeopleResponsible = false;
    $request->name = 'Jaime Will';
    $request->notes = 'nisi';
    $request->persons = [
        new CustomerPersonDTO(),
        new CustomerPersonDTO(),
    ];
    $request->responsiblePersons = new CustomerResponsiblePersonsDTO();
    $request->responsiblePersons->accountManagerId = 618809;
    $request->responsiblePersons->projectCoordinatorId = 606393;
    $request->responsiblePersons->projectManagerId = 474867;
    $request->responsiblePersons->salesPersonId = 19193;
    $request->salesNotes = 'nihil';
    $request->status = CustomerDTOStatusEnum::ACTIVE;

    $response = $sdk->clients->create3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete3

Removes a person.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete3Request();
    $request->personId = 716075;

    $response = $sdk->clients->delete3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete4

Removes a customer price list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete4Request();
    $request->priceListId = 660174;

    $response = $sdk->clients->delete4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete5

Removes a client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Delete5Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Delete5Request();
    $request->customerId = 287991;

    $response = $sdk->clients->delete5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateSingleUseSignInToken

Generates a single use sign-in token for the customer person found for given login or e-mail. Returns 'url' and 'token' which allows to sign-in to customer portal as this person. Token is valid for two minutes and can be used only once. To sign-in to customer portal you should post 'token' provided as the 'accessToken' form param to the 'url' using POST method.Detailed description is available in the Customer API <a href="/api-doc/customer-api/authentication">authentication</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenRequestDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessTokenRequestDTO();
    $request->loginOrEmail = 'labore';

    $response = $sdk->clients->generateSingleUseSignInToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddress

Returns address of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressRequest();
    $request->customerId = 383462;

    $response = $sdk->clients->getAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds1

Returns persons' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIds1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIds1Request();
    $request->updatedSince = 618016;

    $response = $sdk->clients->getAllIds1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllIds2

Returns clients' internal identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllIds2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllIds2Request();
    $request->emailEquals = 'nobis';
    $request->nameEquals = 'eum';
    $request->updatedSince = 878453;

    $response = $sdk->clients->getAllIds2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllNamesWithIds

Returns list of simple clients representations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllNamesWithIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllNamesWithIdsRequest();
    $request->updatedSince = 135474;

    $response = $sdk->clients->getAllNamesWithIds($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById1

Returns person details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById1Request();
    $request->personId = 102863;

    $response = $sdk->clients->getById1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getById2

Returns client details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetById2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetById2Request();
    $request->customerId = 298282;
    $request->embed = 'et';

    $response = $sdk->clients->getById2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategories

Returns categories of a given client.

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
    $request->customerId = 569965;

    $response = $sdk->clients->getCategories($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContact

Returns contact of a given person.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactRequest();
    $request->personId = 354047;

    $response = $sdk->clients->getContact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContact1

Returns contact of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContact1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContact1Request();
    $request->customerId = 590873;

    $response = $sdk->clients->getContact1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorrespondenceAddress

Returns correspondence address of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCorrespondenceAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorrespondenceAddressRequest();
    $request->customerId = 551816;

    $response = $sdk->clients->getCorrespondenceAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomField

Returns custom field of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldRequest();
    $request->customFieldKey = 'sint';
    $request->customerId = 33625;

    $response = $sdk->clients->getCustomField($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields

Returns custom fields of a given person.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldsRequest();
    $request->personId = 653201;

    $response = $sdk->clients->getCustomFields($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFields1

Returns custom fields of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFields1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFields1Request();
    $request->customerId = 968962;

    $response = $sdk->clients->getCustomFields1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndustries

Returns industries of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIndustriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndustriesRequest();
    $request->customerId = 652103;

    $response = $sdk->clients->getIndustries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAddress

Updates address of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAddressRequest();
    $request->addressDTO = new AddressDTO();
    $request->addressDTO->addressLine1 = 'ad';
    $request->addressDTO->addressLine2 = 'eum';
    $request->addressDTO->city = 'Fort Brown';
    $request->addressDTO->countryId = 367562;
    $request->addressDTO->postalCode = '49828';
    $request->addressDTO->provinceId = 537023;
    $request->addressDTO->sameAsBillingAddress = false;
    $request->customerId = 703889;

    $response = $sdk->clients->updateAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCategories

Updates categories of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCategoriesRequest();
    $request->requestBody = [
        100226,
        99569,
    ];
    $request->customerId = 919483;

    $response = $sdk->clients->updateCategories($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContact

Updates contact of a given person. Sets that this person uses specific address and contact (not the one from customer).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactEmailsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactRequest();
    $request->personContactDTO = new PersonContactDTO();
    $request->personContactDTO->emails = new PersonContactEmailsDTO();
    $request->personContactDTO->emails->additional = [
        'expedita',
        'nihil',
    ];
    $request->personContactDTO->emails->primary = 'repellat';
    $request->personContactDTO->fax = 'quibusdam';
    $request->personContactDTO->phones = [
        'saepe',
    ];
    $request->personContactDTO->sms = 'pariatur';
    $request->personId = 37559;

    $response = $sdk->clients->updateContact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContact1

Updates contact of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContact1Request;
use \OpenAPI\OpenAPI\Models\Shared\ContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerContactEmailsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContact1Request();
    $request->contactDTO = new ContactDTO();
    $request->contactDTO->emails = new CustomerContactEmailsDTO();
    $request->contactDTO->emails->additional = [
        'praesentium',
    ];
    $request->contactDTO->emails->cc = [
        'magni',
        'sunt',
        'quo',
    ];
    $request->contactDTO->emails->primary = 'illum';
    $request->contactDTO->fax = 'pariatur';
    $request->contactDTO->phones = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->contactDTO->sms = 'accusantium';
    $request->contactDTO->websites = [
        'maiores',
    ];
    $request->customerId = 697429;

    $response = $sdk->clients->updateContact1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCorrespondenceAddress

Updates correspondence address of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCorrespondenceAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCorrespondenceAddressRequest();
    $request->addressDTO = new AddressDTO();
    $request->addressDTO->addressLine1 = 'ipsam';
    $request->addressDTO->addressLine2 = 'voluptate';
    $request->addressDTO->city = 'Mireyaton';
    $request->addressDTO->countryId = 866383;
    $request->addressDTO->postalCode = '90820';
    $request->addressDTO->provinceId = 764912;
    $request->addressDTO->sameAsBillingAddress = false;
    $request->customerId = 359978;

    $response = $sdk->clients->updateCorrespondenceAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomField

Updates given custom field of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomFieldRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomFieldRequest();
    $request->customFieldDTO = new CustomFieldDTO();
    $request->customFieldDTO->key = 'hic';
    $request->customFieldDTO->name = 'Robin D'Amore';
    $request->customFieldDTO->type = CustomFieldDTOTypeEnum::NUMBER;
    $request->customFieldDTO->value = [
        'quis' => 'nesciunt',
    ];
    $request->customFieldKey = 'eos';
    $request->customerId = 18521;

    $response = $sdk->clients->updateCustomField($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomFields

Updates custom fields of a given person.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomFieldsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomFieldsRequest();
    $request->requestBody = [
        new CustomFieldDTO(),
    ];
    $request->personId = 793698;

    $response = $sdk->clients->updateCustomFields($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomFields1

Updates custom fields of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomFields1Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomFields1Request();
    $request->requestBody = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->customerId = 223924;

    $response = $sdk->clients->updateCustomFields1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIndustries

Updates industries of a given client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndustriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIndustriesRequest();
    $request->requestBody = [
        345352,
        944120,
        928082,
        608253,
    ];
    $request->customerId = 704415;

    $response = $sdk->clients->updateIndustries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## update1

Only specified fields will be changed. One may not specify embeddable fields here - use separate API calls for updating them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Update1Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactEmailsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTOGenderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Update1Request();
    $request->customerPersonDTO = new CustomerPersonDTO();
    $request->customerPersonDTO->active = false;
    $request->customerPersonDTO->contact = new PersonContactDTO();
    $request->customerPersonDTO->contact->emails = new PersonContactEmailsDTO();
    $request->customerPersonDTO->contact->emails->additional = [
        'voluptatem',
        'porro',
        'consequuntur',
    ];
    $request->customerPersonDTO->contact->emails->primary = 'blanditiis';
    $request->customerPersonDTO->contact->fax = 'error';
    $request->customerPersonDTO->contact->phones = [
        'occaecati',
    ];
    $request->customerPersonDTO->contact->sms = 'rerum';
    $request->customerPersonDTO->customFields = [
        new CustomFieldDTO(),
    ];
    $request->customerPersonDTO->customerId = 992397;
    $request->customerPersonDTO->firstProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T08:20:25.450Z');
    $request->customerPersonDTO->firstQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-23T06:19:56.211Z');
    $request->customerPersonDTO->gender = CustomerPersonDTOGenderEnum::MALE;
    $request->customerPersonDTO->id = 864282;
    $request->customerPersonDTO->lastName = 'McLaughlin';
    $request->customerPersonDTO->lastProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T12:23:35.067Z');
    $request->customerPersonDTO->lastQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T10:05:07.174Z');
    $request->customerPersonDTO->motherTonguesIds = [
        398221,
        212390,
        209843,
    ];
    $request->customerPersonDTO->name = 'Norma Erdman';
    $request->customerPersonDTO->numberOfProjects = 739551;
    $request->customerPersonDTO->numberOfQuotes = 452109;
    $request->customerPersonDTO->positionId = 490459;
    $request->personId = 970237;

    $response = $sdk->clients->update1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## update2

Only specified fields will be changed (id is required). One may not specify embeddable fields here - use separate API calls for updating them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\Update2Request;
use \OpenAPI\OpenAPI\Models\Shared\CustomerDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerAccountingDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerTaxNoDTO;
use \OpenAPI\OpenAPI\Models\Shared\AddressDTO;
use \OpenAPI\OpenAPI\Models\Shared\ContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerContactEmailsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldDTOTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactDTO;
use \OpenAPI\OpenAPI\Models\Shared\PersonContactEmailsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerPersonDTOGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerResponsiblePersonsDTO;
use \OpenAPI\OpenAPI\Models\Shared\CustomerDTOStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Update2Request();
    $request->customerDTO = new CustomerDTO();
    $request->customerDTO->accountOnCustomerServer = 'amet';
    $request->customerDTO->accounting = new CustomerAccountingDTO();
    $request->customerDTO->accounting->taxNumbers = [
        new CustomerTaxNoDTO(),
        new CustomerTaxNoDTO(),
        new CustomerTaxNoDTO(),
    ];
    $request->customerDTO->billingAddress = new AddressDTO();
    $request->customerDTO->billingAddress->addressLine1 = 'numquam';
    $request->customerDTO->billingAddress->addressLine2 = 'veritatis';
    $request->customerDTO->billingAddress->city = 'North Houstonmouth';
    $request->customerDTO->billingAddress->countryId = 311796;
    $request->customerDTO->billingAddress->postalCode = '69361-5080';
    $request->customerDTO->billingAddress->provinceId = 743835;
    $request->customerDTO->billingAddress->sameAsBillingAddress = false;
    $request->customerDTO->branchId = 679393;
    $request->customerDTO->categoriesIds = [
        453697,
        677082,
    ];
    $request->customerDTO->clientFirstProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-14T20:34:13.522Z');
    $request->customerDTO->clientFirstQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-09T09:45:52.295Z');
    $request->customerDTO->clientLastProjectDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T21:36:49.552Z');
    $request->customerDTO->clientLastQuoteDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T13:18:42.293Z');
    $request->customerDTO->clientNumberOfProjects = 663078;
    $request->customerDTO->clientNumberOfQuotes = 906418;
    $request->customerDTO->contact = new ContactDTO();
    $request->customerDTO->contact->emails = new CustomerContactEmailsDTO();
    $request->customerDTO->contact->emails->additional = [
        'aspernatur',
        'perferendis',
    ];
    $request->customerDTO->contact->emails->cc = [
        'optio',
    ];
    $request->customerDTO->contact->emails->primary = 'accusamus';
    $request->customerDTO->contact->fax = 'ad';
    $request->customerDTO->contact->phones = [
        'suscipit',
        'deserunt',
        'provident',
        'minima',
    ];
    $request->customerDTO->contact->sms = 'repellendus';
    $request->customerDTO->contact->websites = [
        'similique',
        'alias',
        'at',
    ];
    $request->customerDTO->contractNumber = 'quaerat';
    $request->customerDTO->correspondenceAddress = new AddressDTO();
    $request->customerDTO->correspondenceAddress->addressLine1 = 'tempora';
    $request->customerDTO->correspondenceAddress->addressLine2 = 'vel';
    $request->customerDTO->correspondenceAddress->city = 'Torpberg';
    $request->customerDTO->correspondenceAddress->countryId = 679880;
    $request->customerDTO->correspondenceAddress->postalCode = '46427-9278';
    $request->customerDTO->correspondenceAddress->provinceId = 253941;
    $request->customerDTO->correspondenceAddress->sameAsBillingAddress = false;
    $request->customerDTO->customFields = [
        new CustomFieldDTO(),
        new CustomFieldDTO(),
    ];
    $request->customerDTO->fullName = 'dolorem';
    $request->customerDTO->id = 957451;
    $request->customerDTO->idNumber = 'totam';
    $request->customerDTO->industriesIds = [
        25662,
        711584,
    ];
    $request->customerDTO->leadSourceId = 207470;
    $request->customerDTO->limitAccessToPeopleResponsible = false;
    $request->customerDTO->name = 'Gina Renner';
    $request->customerDTO->notes = 'quam';
    $request->customerDTO->persons = [
        new CustomerPersonDTO(),
    ];
    $request->customerDTO->responsiblePersons = new CustomerResponsiblePersonsDTO();
    $request->customerDTO->responsiblePersons->accountManagerId = 277628;
    $request->customerDTO->responsiblePersons->projectCoordinatorId = 186458;
    $request->customerDTO->responsiblePersons->projectManagerId = 586784;
    $request->customerDTO->responsiblePersons->salesPersonId = 807581;
    $request->customerDTO->salesNotes = 'pariatur';
    $request->customerDTO->status = CustomerDTOStatusEnum::POTENTIAL;
    $request->customerId = 117531;

    $response = $sdk->clients->update2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
