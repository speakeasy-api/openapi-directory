# microsegmentation

## Overview

Micro-segmentation APIs

### Available Operations

* [exportNsxRecommendedRules](#exportnsxrecommendedrules) - Export recommended rules for NSX-V
* [listRecommendedRules](#listrecommendedrules) - Get logical recommended rules

## exportNsxRecommendedRules

Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RecommendedRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MicroSecGroup;
use \OpenAPI\OpenAPI\Models\Shared\Reference;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Operations\ExportNsxRecommendedRulesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendedRulesRequest();
    $request->group1 = new MicroSecGroup();
    $request->group1->entity = new Reference();
    $request->group1->entity->entityId = 'quas';
    $request->group1->entity->entityType = EntityTypeEnum::CLUSTER;
    $request->group2 = new MicroSecGroup();
    $request->group2->entity = new Reference();
    $request->group2->entity->entityId = 'vero';
    $request->group2->entity->entityType = EntityTypeEnum::NSX_SERVICE;
    $request->timeRange = new TimeRange();
    $request->timeRange->endTime = 704732;
    $request->timeRange->startTime = 983060;

    $requestSecurity = new ExportNsxRecommendedRulesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->microsegmentation->exportNsxRecommendedRules($request, $requestSecurity);

    if ($response->exportNsxRecommendedRules200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommendedRules

Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
This API provides service to retrieve recommended rules based on flow traffic that is observed between
two groups OR for a single group based on all the inbound and outboud traffic for that group.
In case two groups are provided, both the groups should be of same type.
Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RecommendedRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MicroSecGroup;
use \OpenAPI\OpenAPI\Models\Shared\Reference;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendedRulesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommendedRulesRequest();
    $request->group1 = new MicroSecGroup();
    $request->group1->entity = new Reference();
    $request->group1->entity->entityId = 'error';
    $request->group1->entity->entityType = EntityTypeEnum::VC_DATACENTER;
    $request->group2 = new MicroSecGroup();
    $request->group2->entity = new Reference();
    $request->group2->entity->entityId = 'a';
    $request->group2->entity->entityType = EntityTypeEnum::CLUSTER;
    $request->timeRange = new TimeRange();
    $request->timeRange->endTime = 958280;
    $request->timeRange->startTime = 977641;

    $requestSecurity = new ListRecommendedRulesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->microsegmentation->listRecommendedRules($request, $requestSecurity);

    if ($response->recommendedRules !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
