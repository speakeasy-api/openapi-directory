# configuration

### Available Operations

* [affiliationById](#affiliationbyid) - Affiliation By Id
* [affiliations](#affiliations) - Affiliations
* [availablePaymentMethods](#availablepaymentmethods) - Available Payment Methods
* [insertAffiliation](#insertaffiliation) - Insert Affiliation
* [insertRule](#insertrule) - Insert Rule
* [putRuleById](#putrulebyid) - Rule By Id
* [rule](#rule) - Delete Rule
* [ruleById](#rulebyid) - Rule By Id
* [rules](#rules) - Rules
* [updateAffiliation](#updateaffiliation) - Update Affiliation

## affiliationById

Returns associated data for the specified affiliation Id, like name and implementation, for example.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AffiliationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AffiliationByIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->affiliationId = 'e046d326-5421-45ab-95ae-f13d37f260b5';

    $response = $sdk->configuration->affiliationById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## affiliations

Returns all affiliations that your provider can handle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AffiliationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AffiliationsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';

    $response = $sdk->configuration->affiliations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## availablePaymentMethods

Returns enabled payment methods, like visa, master, bankissueinvoice that are shown for the final user and enabled to receive payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AvailablePaymentMethodsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvailablePaymentMethodsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';

    $response = $sdk->configuration->availablePaymentMethods($request);

    if ($response->paymentSystemsResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insertAffiliation

Creates a new affiliation and returns a successful response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InsertAffiliationRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertAffiliationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsertAffiliationRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->insertAffiliationRequest = new InsertAffiliationRequest();
    $request->insertAffiliationRequest->configuration = [
        new Configuration(),
        new Configuration(),
        new Configuration(),
    ];
    $request->insertAffiliationRequest->implementation = 'provident';
    $request->insertAffiliationRequest->isConfigured = false;
    $request->insertAffiliationRequest->isdelivered = false;
    $request->insertAffiliationRequest->name = 'Ellis Mitchell';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';

    $response = $sdk->configuration->insertAffiliation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insertRule

Creates a new rule and returns a successful response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InsertRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Antifraud;
use \OpenAPI\OpenAPI\Models\Shared\Connector;
use \OpenAPI\OpenAPI\Models\Shared\Issuer;
use \OpenAPI\OpenAPI\Models\Shared\PaymentSystem;
use \OpenAPI\OpenAPI\Models\Shared\SalesChannel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsertRuleRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->insertRuleRequest = new InsertRuleRequest();
    $request->insertRuleRequest->antifraud = new Antifraud();
    $request->insertRuleRequest->antifraud->affiliationId = 'illum';
    $request->insertRuleRequest->antifraud->implementation = 'vel';
    $request->insertRuleRequest->beginDate = 'error';
    $request->insertRuleRequest->condition = 'deserunt';
    $request->insertRuleRequest->connector = new Connector();
    $request->insertRuleRequest->connector->affiliationId = 'suscipit';
    $request->insertRuleRequest->connector->implementation = 'iure';
    $request->insertRuleRequest->country = 'French Guiana';
    $request->insertRuleRequest->dateIntervals = 'debitis';
    $request->insertRuleRequest->enabled = false;
    $request->insertRuleRequest->endDate = 'ipsa';
    $request->insertRuleRequest->installmentOptions = 'delectus';
    $request->insertRuleRequest->installmentsService = 'tempora';
    $request->insertRuleRequest->isDefault = false;
    $request->insertRuleRequest->isSelfAuthorized = 'suscipit';
    $request->insertRuleRequest->issuer = new Issuer();
    $request->insertRuleRequest->issuer->name = 'Alexandra Schulist';
    $request->insertRuleRequest->multiMerchantList = 'excepturi';
    $request->insertRuleRequest->name = 'Mrs. Sophie Smith MD';
    $request->insertRuleRequest->paymentSystem = new PaymentSystem();
    $request->insertRuleRequest->paymentSystem->id = 20218;
    $request->insertRuleRequest->paymentSystem->implementation = 'ipsam';
    $request->insertRuleRequest->paymentSystem->name = 'Timmy Satterfield';
    $request->insertRuleRequest->requiresAuthentication = 'at';
    $request->insertRuleRequest->salesChannels = [
        new SalesChannel(),
        new SalesChannel(),
        new SalesChannel(),
        new SalesChannel(),
    ];
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';

    $response = $sdk->configuration->insertRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRuleById

Update Rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRuleByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Antifraud1;
use \OpenAPI\OpenAPI\Models\Shared\Connector;
use \OpenAPI\OpenAPI\Models\Shared\InstallmentOptions;
use \OpenAPI\OpenAPI\Models\Shared\Issuer;
use \OpenAPI\OpenAPI\Models\Shared\PaymentSystem;
use \OpenAPI\OpenAPI\Models\Shared\SalesChannel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRuleByIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->ruleByIdRequest = new RuleByIdRequest();
    $request->ruleByIdRequest->antifraud = new Antifraud1();
    $request->ruleByIdRequest->antifraud->affiliationId = 'molestiae';
    $request->ruleByIdRequest->beginDate = 'quod';
    $request->ruleByIdRequest->condition = 'quod';
    $request->ruleByIdRequest->connector = new Connector();
    $request->ruleByIdRequest->connector->affiliationId = 'esse';
    $request->ruleByIdRequest->connector->implementation = 'totam';
    $request->ruleByIdRequest->country = 'Sao Tome and Principe';
    $request->ruleByIdRequest->dateIntervals = 'dolorum';
    $request->ruleByIdRequest->enabled = false;
    $request->ruleByIdRequest->endDate = 'dicta';
    $request->ruleByIdRequest->id = 'ba928fc8-1674-42cb-b392-05929396fea7';
    $request->ruleByIdRequest->installmentOptions = new InstallmentOptions();
    $request->ruleByIdRequest->installmentOptions->interestRateMethod = 'corporis';
    $request->ruleByIdRequest->isDefault = 'iste';
    $request->ruleByIdRequest->isSelfAuthorized = 'iure';
    $request->ruleByIdRequest->issuer = new Issuer();
    $request->ruleByIdRequest->issuer->name = 'Dr. Rickey Boyle';
    $request->ruleByIdRequest->multiMerchantList = 'mollitia';
    $request->ruleByIdRequest->name = 'Ernest Ebert';
    $request->ruleByIdRequest->paymentSystem = new PaymentSystem();
    $request->ruleByIdRequest->paymentSystem->id = 750686;
    $request->ruleByIdRequest->paymentSystem->implementation = 'enim';
    $request->ruleByIdRequest->paymentSystem->name = 'Corey Hane III';
    $request->ruleByIdRequest->salesChannels = [
        new SalesChannel(),
        new SalesChannel(),
        new SalesChannel(),
    ];
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->ruleId = 'doloribus';

    $response = $sdk->configuration->putRuleById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rule

Deletes rules by specified Id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuleRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->ruleId = 'sapiente';

    $response = $sdk->configuration->rule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ruleById

Returns rule by specified RuleId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RuleByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuleByIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->ruleId = 'architecto';

    $response = $sdk->configuration->ruleById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rules

Returns all rules conditions your provider can handle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RulesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';

    $response = $sdk->configuration->rules($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAffiliation

Returns all affiliations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAffiliationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAffiliationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAffiliationRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->updateAffiliationRequest = new UpdateAffiliationRequest();
    $request->updateAffiliationRequest->configuration = [
        new Configuration(),
        new Configuration(),
        new Configuration(),
    ];
    $request->updateAffiliationRequest->id = '3a2fa946-7739-4251-aa52-c3f5ad019da1';
    $request->updateAffiliationRequest->implementation = 'reiciendis';
    $request->updateAffiliationRequest->isConfigured = false;
    $request->updateAffiliationRequest->isdelivered = false;
    $request->updateAffiliationRequest->name = 'Caleb Koss';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->affiliationId = 'e046d326-5421-45ab-95ae-f13d37f260b5';

    $response = $sdk->configuration->updateAffiliation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
