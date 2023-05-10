# rebalance

## Overview

The rebalancing feature provides advisors and portfolio managers the ability to evaluate which pots have drifted significantly from their target portfolios, and trigger a rebalance execution for these pots to bring the holdings back to parity with the pot's target portfolio. Driven by a single rebalance request, the system completely orchestrates this multi-day buy/sell process across a host of different pots, with status updates being provided via API endpoints and web sockets.

### Available Operations

* [createRebalance](#createrebalance) - Trigger rebalance process
* [evaluateRebalance](#evaluaterebalance) - Evaluate rebalance
* [getRebalanceDetails](#getrebalancedetails) - Retrieve rebalance request related details

## createRebalance

This endpoint allows you to trigger the rebalancing of a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will contain a `rebalance_request_id` and `status` of the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRebalanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRebalanceSwitchInstructionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRebalanceSwitchInstructionRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateRebalanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRebalanceRequest();
    $request->requestBody = new CreateRebalanceSwitchInstructionRequest();
    $request->requestBody->requestId = 'd028921c-ddc6-4926-81fb-576b0d5f0d30';
    $request->requestBody->type = CreateRebalanceSwitchInstructionRequestTypeEnum::PORTFOLIO;
    $request->requestBody->values = [
        'hic',
        'libero',
    ];
    $request->xApiKey = 'nobis';

    $requestSecurity = new CreateRebalanceSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->rebalance->createRebalance($request, $requestSecurity);

    if ($response->createRebalance201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evaluateRebalance

Evaluate if a pot or a group of pots has deviated significatly from the target portfolio and eligible for rebalancing. The request can be sent for a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will indicate if the pot is eligible for rebalance and % deviation from the target portfolio template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateRebalanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateRebalanceSwitchInstructionRequest;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateRebalanceSwitchInstructionRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateRebalanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvaluateRebalanceRequest();
    $request->requestBody = new EvaluateRebalanceSwitchInstructionRequest();
    $request->requestBody->requestId = '25870532-02c7-43d5-be9b-90c28909b3fe';
    $request->requestBody->type = EvaluateRebalanceSwitchInstructionRequestTypeEnum::POT;
    $request->requestBody->values = [
        'dolorum',
        'deleniti',
        'pariatur',
    ];
    $request->xApiKey = 'provident';

    $requestSecurity = new EvaluateRebalanceSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->rebalance->evaluateRebalance($request, $requestSecurity);

    if ($response->thisIsTheReturnObjectWithEvaluationPerPot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebalanceDetails

Retrieve details of a rebalace request using the `rebalance_request_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRebalanceDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRebalanceDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRebalanceDetailsRequest();
    $request->rebalanceRequestId = 'nobis';
    $request->xApiKey = 'libero';

    $requestSecurity = new GetRebalanceDetailsSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->rebalance->getRebalanceDetails($request, $requestSecurity);

    if ($response->getRebalanceDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
