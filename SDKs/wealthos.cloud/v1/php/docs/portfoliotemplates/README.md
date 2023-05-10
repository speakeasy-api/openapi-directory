# portfolioTemplates

## Overview

A portfolio template captures how an investor’s cash (once transferred to a pot) should be automatically invested by the system. A portfolio template consists of a set of investment products and the ratios in which these products must be bought, once cleared cash is available to invest. 

For example, a portfolio template ‘PT1’ has the following template

Investment Product | Ratio
-------------------|-------
Investment Product A | 20%
Investment Product B | 30%
Investment Product C | 50%

If GBP 100 is transferred to a pot linked to Portfolio template PT1, the following buy orders will be triggered

* BUY Investment Product A for GBP 20
* BUY Investment Product B for GBP 30
* BUY Investment Product C for GBP 50

### Portfolio Creation

Portfolio Templates can be created by the Wealth Manger (generic set of portfolio templates created in WealthOS and a single template will be assigned to an Investor’s pot based on suitability - e.g. robo advisory) 

<!-- If a Portfolio template is created by an investor then the request must have `owner : "investor"` and `investor_id` populated with the relevant investor ID.  -->

The ratios of investment products within a portfolio template must add up to a 100% - if this is not the case, the system will reject the portfolio creation or update. 

Once cleared cash is available in a pot, the system can be instructed to trigger investment product buy requests based on the portfolio template linked to the pot. 



### Available Operations

* [createPortfolioTemplate](#createportfoliotemplate) - Create new Portfolio Template
* [getAllPortfolioTemplates](#getallportfoliotemplates) - Get all the Portfolio templates
* [getPortfolioTemplate](#getportfoliotemplate) - Retrive existing Portfolio template
* [updatePortfolioTemplate](#updateportfoliotemplate) - Update existing Portfolio template

## createPortfolioTemplate

Create new Portfolio Template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioTemplateRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioTemplateRequestBodyRatios;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePortfolioTemplateRequest();
    $request->requestBody = new CreatePortfolioTemplateRequestBodyInput();
    $request->requestBody->portfolioName = 'dolorum';
    $request->requestBody->ratios = [
        new CreatePortfolioTemplateRequestBodyRatios(),
        new CreatePortfolioTemplateRequestBodyRatios(),
    ];
    $request->xApiKey = 'in';

    $requestSecurity = new CreatePortfolioTemplateSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->portfolioTemplates->createPortfolioTemplate($request, $requestSecurity);

    if ($response->createPortfolioTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPortfolioTemplates

Get all the portfolio templates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPortfolioTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPortfolioTemplatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPortfolioTemplatesRequest();
    $request->xApiKey = 'illum';

    $requestSecurity = new GetAllPortfolioTemplatesSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->portfolioTemplates->getAllPortfolioTemplates($request, $requestSecurity);

    if ($response->getAllPortfolioTemplates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortfolioTemplate

Retrive existing Portfolio template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfolioTemplateRequest();
    $request->portfolioTemplateId = 'maiores';
    $request->xApiKey = 'rerum';

    $requestSecurity = new GetPortfolioTemplateSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->portfolioTemplates->getPortfolioTemplate($request, $requestSecurity);

    if ($response->getPortfolioTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePortfolioTemplate

Update existing Portfolio template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioTemplateRequestBodyRatios;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePortfolioTemplateRequest();
    $request->requestBody = new UpdatePortfolioTemplateRequestBody();
    $request->requestBody->portfolioName = 'dicta';
    $request->requestBody->ratios = [
        new UpdatePortfolioTemplateRequestBodyRatios(),
        new UpdatePortfolioTemplateRequestBodyRatios(),
    ];
    $request->requestBody->referenceVersion = 1;
    $request->portfolioTemplateId = 'cumque';
    $request->xApiKey = 'facere';

    $requestSecurity = new UpdatePortfolioTemplateSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->portfolioTemplates->updatePortfolioTemplate($request, $requestSecurity);

    if ($response->updatePortfolioTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
