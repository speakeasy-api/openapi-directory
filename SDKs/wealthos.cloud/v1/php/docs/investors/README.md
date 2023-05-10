# investors

## Overview

The Investor endpoint allows you to create investors, update investors and retrieve investor records in bulk or individually. If a KYC/AML service has been set-up through WealthOS (e.g. Onfido), then the investor will be verified using this service. 

When retrieving the investor, the following fields will provide information regarding the investor’s status that can be used for deciding on what subsequent investor action must be permitted.
 
* dealing_status: Normally set to Active once KYC/AML passes, however may be independently set by administrators if required. 
 
* kyc_aml_status - the status of the KYC/AML check 
 
* Status - ultimate status of the investor derived from dealing_status and kcy_aml_status.

If WealthOS is not set-up to manage the KYC/AML service then the wealth manager must specify the `kyc_aml_status` and `dealing_status` on investor creation and update. The `status` of the investor will be consider active only when the `kyc_aml_status : "clear"` and `dealing_status : "active"`

### Available Operations

* [createInvestor](#createinvestor) - Create Investor
* [getAllInvestors](#getallinvestors) - Get All Investors
* [getInvestor](#getinvestor) - Get Investor
* [updateInvestor](#updateinvestor) - Update Investor

## createInvestor

Create a new investor in the system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestAddress;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestBankAccounts;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestBankAccountsAccountStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestBankAccountsDefaultAccountEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestDateOfBirth;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestDealingStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestEmploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWish;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestIdNumbers;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestKycAmlStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetailsLtaProtectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorRootTypeForInvestorCreationRequestTaxResidenceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvestorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInvestorRequest();
    $request->requestBody = new CreateInvestorRootTypeForInvestorCreationRequestInput();
    $request->requestBody->address = new CreateInvestorRootTypeForInvestorCreationRequestAddress();
    $request->requestBody->address->addressLine = '14';
    $request->requestBody->address->city = 'London';
    $request->requestBody->address->country = 'GBR';
    $request->requestBody->address->postalCode = 'S2 2DF';
    $request->requestBody->address->state = 'England';
    $request->requestBody->address->streetName = 'Tottenham Court Road';
    $request->requestBody->bankAccounts = [
        new CreateInvestorRootTypeForInvestorCreationRequestBankAccounts(),
    ];
    $request->requestBody->dateOfBirth = new CreateInvestorRootTypeForInvestorCreationRequestDateOfBirth();
    $request->requestBody->dateOfBirth->day = '9';
    $request->requestBody->dateOfBirth->month = '12';
    $request->requestBody->dateOfBirth->year = '1990';
    $request->requestBody->dealingStatus = CreateInvestorRootTypeForInvestorCreationRequestDealingStatusEnum::INACTIVE;
    $request->requestBody->email = 'johndoe@gmail.com';
    $request->requestBody->employmentStatus = CreateInvestorRootTypeForInvestorCreationRequestEmploymentStatusEnum::EMPLOYED;
    $request->requestBody->expressionOfWish = new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWish();
    $request->requestBody->expressionOfWish->sippBeneficiaries = [
        new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries(),
        new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries(),
        new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippBeneficiaries(),
    ];
    $request->requestBody->expressionOfWish->sippNominees = [
        new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees(),
        new CreateInvestorRootTypeForInvestorCreationRequestExpressionOfWishSippNominees(),
    ];
    $request->requestBody->firstName = 'John';
    $request->requestBody->gender = 'male';
    $request->requestBody->homeNumber = '+94776789543';
    $request->requestBody->idNumbers = [
        new CreateInvestorRootTypeForInvestorCreationRequestIdNumbers(),
        new CreateInvestorRootTypeForInvestorCreationRequestIdNumbers(),
        new CreateInvestorRootTypeForInvestorCreationRequestIdNumbers(),
    ];
    $request->requestBody->investorId = 'john_doe';
    $request->requestBody->kycAmlStatus = CreateInvestorRootTypeForInvestorCreationRequestKycAmlStatusEnum::NOT_STARTED;
    $request->requestBody->lastName = 'Doe';
    $request->requestBody->ltaProtectionDetails = [
        new CreateInvestorRootTypeForInvestorCreationRequestLtaProtectionDetails(),
    ];
    $request->requestBody->mifidTaxId = '2382392274';
    $request->requestBody->mobileNumber = '+94716759546';
    $request->requestBody->mpaaTriggered = true;
    $request->requestBody->mpaaTriggeredDate = '2021-12-05';
    $request->requestBody->nationality = 'GBR';
    $request->requestBody->officeNumber = '+94336789543';
    $request->requestBody->retirementAge = 60;
    $request->requestBody->taxId = 'AB123456C';
    $request->requestBody->taxResidence = CreateInvestorRootTypeForInvestorCreationRequestTaxResidenceEnum::GB_ENG;
    $request->requestBody->taxResidencyCompliant = true;
    $request->requestBody->title = 'Mr.';
    $request->xApiKey = 'doloremque';

    $requestSecurity = new CreateInvestorSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investors->createInvestor($request, $requestSecurity);

    if ($response->rootTypeForInvestorCreationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllInvestors

Returns all the investors in an array

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllInvestorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllInvestorsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAllInvestorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllInvestorsRequest();
    $request->pageNumber = 'reprehenderit';
    $request->pageSize = 'ut';
    $request->sort = GetAllInvestorsSortEnum::DESC;
    $request->xApiKey = 'dicta';

    $requestSecurity = new GetAllInvestorsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investors->getAllInvestors($request, $requestSecurity);

    if ($response->getAllInvestors200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvestor

Get details of an investor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestorRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInvestorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvestorRequest();
    $request->investorId = 'corporis';
    $request->xApiKey = 'dolore';

    $requestSecurity = new GetInvestorSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investors->getInvestor($request, $requestSecurity);

    if ($response->rootTypeForInvestor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInvestor

Update an existing investor. WealthOS will update only the fields sent in the request. Field mentioned as Nullable can be deleted by updating those values with null.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorDateOfBirth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorDealingStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorEmploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWish;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorIdNumbers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorKycAmlStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetailsLtaProtectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorUpdateRequestBodyForInvestorTaxResidenceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvestorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInvestorRequest();
    $request->requestBody = new UpdateInvestorUpdateRequestBodyForInvestorInput();
    $request->requestBody->address = new UpdateInvestorUpdateRequestBodyForInvestorAddress();
    $request->requestBody->address->addressLine = '14';
    $request->requestBody->address->city = 'London';
    $request->requestBody->address->country = 'GBR';
    $request->requestBody->address->postalCode = 'S2 2DF';
    $request->requestBody->address->state = 'England';
    $request->requestBody->address->streetName = 'Tottenham Court Road';
    $request->requestBody->dateOfBirth = new UpdateInvestorUpdateRequestBodyForInvestorDateOfBirth();
    $request->requestBody->dateOfBirth->day = '9';
    $request->requestBody->dateOfBirth->month = '12';
    $request->requestBody->dateOfBirth->year = '1990';
    $request->requestBody->dealingStatus = UpdateInvestorUpdateRequestBodyForInvestorDealingStatusEnum::INACTIVE;
    $request->requestBody->email = 'johndoe@gmail.com';
    $request->requestBody->employmentStatus = UpdateInvestorUpdateRequestBodyForInvestorEmploymentStatusEnum::EMPLOYED;
    $request->requestBody->expressionOfWish = new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWish();
    $request->requestBody->expressionOfWish->sippBeneficiaries = [
        new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries(),
        new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippBeneficiaries(),
    ];
    $request->requestBody->expressionOfWish->sippNominees = [
        new UpdateInvestorUpdateRequestBodyForInvestorExpressionOfWishSippNominees(),
    ];
    $request->requestBody->firstName = 'John';
    $request->requestBody->gender = 'male';
    $request->requestBody->homeNumber = '+94112956325';
    $request->requestBody->idNumbers = [
        new UpdateInvestorUpdateRequestBodyForInvestorIdNumbers(),
        new UpdateInvestorUpdateRequestBodyForInvestorIdNumbers(),
        new UpdateInvestorUpdateRequestBodyForInvestorIdNumbers(),
    ];
    $request->requestBody->kycAmlStatus = UpdateInvestorUpdateRequestBodyForInvestorKycAmlStatusEnum::NOT_STARTED;
    $request->requestBody->lastName = 'Doe';
    $request->requestBody->ltaProtectionDetails = [
        new UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails(),
        new UpdateInvestorUpdateRequestBodyForInvestorLtaProtectionDetails(),
    ];
    $request->requestBody->mifidTaxId = '2382392274';
    $request->requestBody->mobileNumber = '+94773216598';
    $request->requestBody->mpaaTriggered = true;
    $request->requestBody->mpaaTriggeredDate = '2021-12-05';
    $request->requestBody->nationality = 'GBR';
    $request->requestBody->officeNumber = '+94332659632';
    $request->requestBody->referenceVersion = 1;
    $request->requestBody->retirementAge = 60;
    $request->requestBody->taxId = 'QW123456E';
    $request->requestBody->taxResidence = UpdateInvestorUpdateRequestBodyForInvestorTaxResidenceEnum::GB_ENG;
    $request->requestBody->taxResidencyCompliant = true;
    $request->requestBody->title = 'Mr.';
    $request->investorId = 'accusamus';
    $request->xApiKey = 'commodi';

    $requestSecurity = new UpdateInvestorSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->investors->updateInvestor($request, $requestSecurity);

    if ($response->rootTypeForInvestor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
