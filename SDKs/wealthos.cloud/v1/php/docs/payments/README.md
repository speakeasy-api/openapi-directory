# payments

## Overview

The Payments endpoint allows you to put cash into a specific pot in your account by sending a payment intent. This intent must capture the following information regarding the payment:

* Details regarding payment such as the `amount` to collect and the `currency`
* Supported `payment_type` (card payments, electronic fund transfers etc.).
* Associated key information to track a payment (e.g. `pot_id`).
* Intention of payment:
    * Cash into the pot only, do not invest (`purpose: "cash"`)
    * Invest based on the portfolio attached to the investor (`purpose: "invest"` and `investment_instructions` not populated)
    * Invest based on attached instructions (`purpose: "invest"` and `investment_instructions` populated). If the pot has a portfolio attached, then the priority will be given to investment instructions. If the investment instructions apply only for a propotion of money coming in, then the rest will be added as cash.

<!-- If you have additional parameters to associate with a payment, you can define a custom object and include it under a top-level field of the request body with the value you used for `payment_type` as its field name. (e.g. `"stripe": {.....}`). -->
Additionaly, if the `service_provider` is given as `"truelayer"` extra accept an extra object `service_provider_params` where you have to provide the `bank_account_id`as a key-value pair and you will recieve this object in response including the fields, `bank_account_id`, `payment_intent_id` and `hpp_url`. (e.g `"service_provider_params: {"bank_account_id": "ba-82faf049...", "payment_intent_id: 91aa9de...", "hpp_url":"https://..."}"`).

For `"stripe"`, in the response, you will receive the  `payment_intent_id`, `client_secret` and `publishable_key` inside that additional object with the value you used for `payment_type` as its field name. (e.g. `"service_provider_params": {"payment_intent_id: 91aa9de...", "client_secret": "pi_XXXXX", "publishable_key": "pk_test_XXXXX", .....}`).

These values will be used with the client library for each payment call for the following purposes.

* `payment_intent_id` - to uniquely identify your payment intent
* `client_secret` - The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
* `publishable_key` - to uniquely identify your payment service account
* `hpp_url` - The redirect URL for proceed with bank payment (only for Truelayer)

### Available Operations

* [createSinglePaymentIntent](#createsinglepaymentintent) - Create Single Payment Intent
* [getAllPayments](#getallpayments) - Get All Payments
* [getPayment](#getpayment) - Get Payment by Transaction Id
* [getPotPayments](#getpotpayments) - Get Payments by Pot Id

## createSinglePaymentIntent

Create a new Single Payment Intent for the given `amount` and `currency`. If successful, a new Payment Intent will be created with `pending_confirmation` status and the API will return the `client_secret` and `publishable_key` as response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentRequestBodyInvestmentInstructions;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentRequestBodyPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentRequestBodyPurposeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentRequestBodyServiceProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentRequestBodyServiceProviderParams;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinglePaymentIntentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSinglePaymentIntentRequest();
    $request->requestBody = new CreateSinglePaymentIntentRequestBody();
    $request->requestBody->amount = 'repudiandae';
    $request->requestBody->currency = 'quae';
    $request->requestBody->investmentInstructions = [
        new CreateSinglePaymentIntentRequestBodyInvestmentInstructions(),
    ];
    $request->requestBody->paymentType = CreateSinglePaymentIntentRequestBodyPaymentTypeEnum::ELECTRONIC_FUND_TRANSFER;
    $request->requestBody->potId = 'molestias';
    $request->requestBody->purpose = CreateSinglePaymentIntentRequestBodyPurposeEnum::INVEST;
    $request->requestBody->requestId = 'd488e1e9-1e45-40ad-aabd-44269802d502';
    $request->requestBody->serviceProvider = CreateSinglePaymentIntentRequestBodyServiceProviderEnum::NONE;
    $request->requestBody->serviceProviderParams = new CreateSinglePaymentIntentRequestBodyServiceProviderParams();
    $request->requestBody->serviceProviderParams->bankAccountId = 'excepturi';
    $request->xApiKey = 'tempora';

    $requestSecurity = new CreateSinglePaymentIntentSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->createSinglePaymentIntent($request, $requestSecurity);

    if ($response->createSinglePaymentIntent201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPayments

Returns all the Payments setup for the tenant in an array

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPaymentsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPaymentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPaymentsRequest();
    $request->pageNumber = 'facilis';
    $request->pageSize = 'tempore';
    $request->paymentType = 'labore';
    $request->purpose = 'delectus';
    $request->serviceProvider = 'eum';
    $request->sort = GetAllPaymentsSortEnum::ASC;
    $request->xApiKey = 'eligendi';

    $requestSecurity = new GetAllPaymentsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->getAllPayments($request, $requestSecurity);

    if ($response->getAllPayments200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayment

Get Payment by transaction ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentRequest();
    $request->transactionId = 'sint';
    $request->xApiKey = 'aliquid';

    $requestSecurity = new GetPaymentSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->getPayment($request, $requestSecurity);

    if ($response->rootTypeForPayments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPotPayments

 Only last 1000 records will be recieved if the result contain more that 1000 payments. In that case, the pagination should be used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPotPaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPotPaymentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPotPaymentsRequest();
    $request->pageNumber = 'provident';
    $request->pageSize = 'necessitatibus';
    $request->paymentType = 'sint';
    $request->potId = 'officia';
    $request->purpose = 'dolor';
    $request->serviceProvider = 'debitis';
    $request->xApiKey = 'a';

    $requestSecurity = new GetPotPaymentsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->getPotPayments($request, $requestSecurity);

    if ($response->getPotPayments200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
