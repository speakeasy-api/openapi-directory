# entities

## Overview

Entities APIs

### Available Operations

* [getCluster](#getcluster) - Show cluster details
* [getDatacenter](#getdatacenter) - Show vCenter datacenter details
* [getDatastore](#getdatastore) - Show datastore details
* [getDistributedVirtualPortgroup](#getdistributedvirtualportgroup) - Show distributed virtual portgroup details
* [getDistributedVirtualSwitch](#getdistributedvirtualswitch) - Show distributed virtual switch details
* [getFirewall](#getfirewall) - Show firewall details
* [getFirewallRule](#getfirewallrule) - Show firewall rule details
* [getFlow](#getflow) - Show flow details
* [getFlows](#getflows) - List flows
* [getFolder](#getfolder) - Show folder details
* [getHost](#gethost) - Show host details
* [getIPSet](#getipset) - Show ip set details
* [getLayer2Network](#getlayer2network) - Show layer2 network details
* [getNSXManager](#getnsxmanager) - Show nsx manager details
* [getName](#getname) - Get name of an entity
* [getNames](#getnames) - Get names for entities
* [getProblemEvent](#getproblemevent) - Show problem details
* [getSecurityGroup](#getsecuritygroup) - Show security group details
* [getSecurityTag](#getsecuritytag) - Show security tag details
* [getService](#getservice) - Show service details
* [getServiceGroup](#getservicegroup) - Show service group details
* [getVcenterManager](#getvcentermanager) - Show vCenter manager details
* [getVm](#getvm) - Show vm details
* [getVmknic](#getvmknic) - Show vmknic details
* [getVnic](#getvnic) - Show vnic details
* [listClusters](#listclusters) - List clusters
* [listDatacenters](#listdatacenters) - List vCenter datacenters
* [listDatastores](#listdatastores) - List datastores
* [listDistributedVirtualPortgroups](#listdistributedvirtualportgroups) - List distributed virtual portgroups
* [listDistributedVirtualSwitches](#listdistributedvirtualswitches) - List distributed virtual switches
* [listFirewallRules](#listfirewallrules) - List firewall rules
* [listFirewalls](#listfirewalls) - List firewalls
* [listFolders](#listfolders) - List folders
* [listHosts](#listhosts) - List hosts
* [listIPSets](#listipsets) - List ip sets
* [listLayer2Networks](#listlayer2networks) - List layer2 networks
* [listNSXManagers](#listnsxmanagers) - List nsx managers
* [listProblemEvents](#listproblemevents) - List problems
* [listSecurityGroups](#listsecuritygroups) - List security groups
* [listSecurityTags](#listsecuritytags) - List security tags
* [listServiceGroups](#listservicegroups) - List service groups
* [listServices](#listservices) - List services
* [listVcenterManagers](#listvcentermanagers) - List vCenter managers
* [listVmknics](#listvmknics) - List vmknics
* [listVms](#listvms) - List vms
* [listVnics](#listvnics) - List vnics

## getCluster

Show cluster details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterRequest();
    $request->id = 'b006d678-878b-4a85-81a5-8208c54fefa9';
    $request->time = 763869;

    $requestSecurity = new GetClusterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getCluster($request, $requestSecurity);

    if ($response->cluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatacenter

Show vCenter datacenter details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDatacenterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDatacenterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatacenterRequest();
    $request->id = '95f2eac5-565d-4307-8fee-81206e2813fa';
    $request->time = 303421;

    $requestSecurity = new GetDatacenterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getDatacenter($request, $requestSecurity);

    if ($response->vcDatacenter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatastore

Show datastore details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDatastoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatastoreRequest();
    $request->id = 'a41c480d-3f21-432a-b031-02d514f4cc6f';
    $request->time = 65118;

    $requestSecurity = new GetDatastoreSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getDatastore($request, $requestSecurity);

    if ($response->datastore !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributedVirtualPortgroup

Show distributed virtual portgroup details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributedVirtualPortgroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributedVirtualPortgroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributedVirtualPortgroupRequest();
    $request->id = '8bf9621a-6a4f-477a-87ee-3e4be752c65b';
    $request->time = 218128;

    $requestSecurity = new GetDistributedVirtualPortgroupSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getDistributedVirtualPortgroup($request, $requestSecurity);

    if ($response->distributedVirtualPortgroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributedVirtualSwitch

Show distributed virtual switch details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributedVirtualSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributedVirtualSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributedVirtualSwitchRequest();
    $request->id = '4418e3bb-91c8-4d97-9e0e-8419d8f84f14';
    $request->time = 286726;

    $requestSecurity = new GetDistributedVirtualSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getDistributedVirtualSwitch($request, $requestSecurity);

    if ($response->distributedVirtualSwitch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewall

Show firewall details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallRequest();
    $request->id = 'f3e07edc-c4aa-45f3-8abd-905a972e0567';
    $request->time = 154130;

    $requestSecurity = new GetFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getFirewall($request, $requestSecurity);

    if ($response->baseFirewallRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallRule

Show firewall rule details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallRuleRequest();
    $request->id = '8227b2d3-0947-40bf-ba4f-a87cf535a6fa';
    $request->time = 925994;

    $requestSecurity = new GetFirewallRuleSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getFirewallRule($request, $requestSecurity);

    if ($response->baseFirewallRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFlow

Show flow details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFlowRequest();
    $request->id = '54ebf60c-321f-4023-b75d-2367fe1a0cc8';
    $request->time = 819996;

    $requestSecurity = new GetFlowSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getFlow($request, $requestSecurity);

    if ($response->flow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFlows

List flows

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFlowsRequest();
    $request->cursor = 'maiores';
    $request->endTime = 4857.95;
    $request->size = 5886.62;
    $request->startTime = 9609.33;

    $requestSecurity = new GetFlowsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getFlows($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFolder

Show folder details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFolderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFolderRequest();
    $request->id = '0a396d90-c364-4b7c-95df-bace188b1c4e';
    $request->time = 920548;

    $requestSecurity = new GetFolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getFolder($request, $requestSecurity);

    if ($response->folder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHost

Show host details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHostRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHostRequest();
    $request->id = '2c8c6ce6-11fe-4eb1-87cb-db6eec74378b';
    $request->time = 643997;

    $requestSecurity = new GetHostSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getHost($request, $requestSecurity);

    if ($response->host !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIPSet

Show ip set details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIPSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIPSetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIPSetRequest();
    $request->id = '25317747-dc91-45ad-acaf-5dd6723dc0f5';
    $request->time = 633643;

    $requestSecurity = new GetIPSetSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getIPSet($request, $requestSecurity);

    if ($response->baseIPSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLayer2Network

Show layer2 network details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLayer2NetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLayer2NetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLayer2NetworkRequest();
    $request->id = 'e2f3a6b7-0087-4875-a143-f5a6c98b5555';
    $request->time = 273383;

    $requestSecurity = new GetLayer2NetworkSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getLayer2Network($request, $requestSecurity);

    if ($response->baseL2Network !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNSXManager

Show nsx manager details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNSXManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNSXManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNSXManagerRequest();
    $request->id = '080d40bc-acc6-4cbd-ab5f-3ec909304f92';
    $request->time = 425817;

    $requestSecurity = new GetNSXManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getNSXManager($request, $requestSecurity);

    if ($response->baseEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getName

Get name of an entity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNameRequest();
    $request->id = 'bad25538-19b4-474b-8ed2-0e56248fff63';
    $request->time = 585628;

    $requestSecurity = new GetNameSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getName($request, $requestSecurity);

    if ($response->entityName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNames

Get names for entities.Limit of 1000 entities in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\NamesRequest;
use \OpenAPI\OpenAPI\Models\Shared\NameRequestParam;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NamesRequest();
    $request->entities = [
        new NameRequestParam(),
        new NameRequestParam(),
        new NameRequestParam(),
    ];

    $requestSecurity = new GetNamesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getNames($request, $requestSecurity);

    if ($response->namesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProblemEvent

Show problem event details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProblemEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProblemEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProblemEventRequest();
    $request->id = '910abdca-b626-4766-96e1-ec00221b335d';
    $request->time = 506532;

    $requestSecurity = new GetProblemEventSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getProblemEvent($request, $requestSecurity);

    if ($response->problemEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecurityGroup

Show security group details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecurityGroupRequest();
    $request->id = '9acb3ecf-da8d-40c5-89ef-03004978a61f';
    $request->time = 673010;

    $requestSecurity = new GetSecurityGroupSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getSecurityGroup($request, $requestSecurity);

    if ($response->baseSecurityGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecurityTag

Show security tag details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecurityTagRequest();
    $request->id = '1cf20688-f77c-41ff-871d-ca163f2a3c80';
    $request->time = 671690;

    $requestSecurity = new GetSecurityTagSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getSecurityTag($request, $requestSecurity);

    if ($response->securityTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getService

Show service details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceRequest();
    $request->id = '97ff334c-ddf8-457a-9e61-876c6ab21d29';
    $request->time = 851199;

    $requestSecurity = new GetServiceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getService($request, $requestSecurity);

    if ($response->baseService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceGroup

Show service group details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceGroupRequest();
    $request->id = 'fc94d6fe-cd79-4939-8066-a6d2d0003553';
    $request->time = 188732;

    $requestSecurity = new GetServiceGroupSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getServiceGroup($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcenterManager

Show vCenter manager details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVcenterManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVcenterManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcenterManagerRequest();
    $request->id = '8cec086f-a21e-4915-acb3-119167b8e3c8';
    $request->time = 849690;

    $requestSecurity = new GetVcenterManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getVcenterManager($request, $requestSecurity);

    if ($response->vCenterManager !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVm

Show vm details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVmRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVmSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmRequest();
    $request->id = 'b03408d6-d364-4ffd-8559-06d1263d48e9';
    $request->time = 206451;

    $requestSecurity = new GetVmSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getVm($request, $requestSecurity);

    if ($response->baseVirtualMachine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVmknic

Show vmknic details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVmknicRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVmknicSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVmknicRequest();
    $request->id = '5c2c9e81-f30b-4e3e-8320-2d7216576506';
    $request->time = 388333;

    $requestSecurity = new GetVmknicSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getVmknic($request, $requestSecurity);

    if ($response->vmknic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVnic

Show vnic details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVnicRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVnicSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVnicRequest();
    $request->id = '41870d9d-21f9-4ad0-b0c4-ecc11a083642';
    $request->time = 616183;

    $requestSecurity = new GetVnicSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->getVnic($request, $requestSecurity);

    if ($response->baseVnic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClusters

List clusters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListClustersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClustersRequest();
    $request->cursor = 'voluptatem';
    $request->endTime = 3842.73;
    $request->size = 5123.7;
    $request->startTime = 7034.07;

    $requestSecurity = new ListClustersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listClusters($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatacenters

List vCenter datacenters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDatacentersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatacentersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatacentersRequest();
    $request->cursor = 'laudantium';
    $request->endTime = 3530.75;
    $request->size = 149;
    $request->startTime = 1544.25;

    $requestSecurity = new ListDatacentersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listDatacenters($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatastores

List datastores

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDatastoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatastoresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatastoresRequest();
    $request->cursor = 'officia';
    $request->endTime = 3126.9;
    $request->size = 3613.71;
    $request->startTime = 8843.25;

    $requestSecurity = new ListDatastoresSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listDatastores($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDistributedVirtualPortgroups

List distributed virtual portgroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributedVirtualPortgroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributedVirtualPortgroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDistributedVirtualPortgroupsRequest();
    $request->cursor = 'iusto';
    $request->endTime = 9585.33;
    $request->size = 4590.86;
    $request->startTime = 2075.12;

    $requestSecurity = new ListDistributedVirtualPortgroupsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listDistributedVirtualPortgroups($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDistributedVirtualSwitches

List distributed virtual switches

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributedVirtualSwitchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributedVirtualSwitchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDistributedVirtualSwitchesRequest();
    $request->cursor = 'quidem';
    $request->endTime = 7884.69;
    $request->size = 5062.45;
    $request->startTime = 2733.49;

    $requestSecurity = new ListDistributedVirtualSwitchesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listDistributedVirtualSwitches($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallRules

List firewall rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRulesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallRulesRequest();
    $request->cursor = 'ipsam';
    $request->endTime = 8871.32;
    $request->size = 1964.97;
    $request->startTime = 1655.45;

    $requestSecurity = new ListFirewallRulesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listFirewallRules($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewalls

List firewalls

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallsRequest();
    $request->cursor = 'voluptatem';
    $request->endTime = 6659.6;
    $request->size = 2261.81;
    $request->startTime = 842.11;

    $requestSecurity = new ListFirewallsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listFirewalls($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFolders

List folders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFoldersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFoldersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFoldersRequest();
    $request->cursor = 'error';
    $request->endTime = 9738.94;
    $request->size = 2581.4;
    $request->startTime = 7006.34;

    $requestSecurity = new ListFoldersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listFolders($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHosts

List hosts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListHostsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHostsRequest();
    $request->cursor = 'dolorum';
    $request->endTime = 8418.16;
    $request->size = 9375.91;
    $request->startTime = 5666.69;

    $requestSecurity = new ListHostsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listHosts($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIPSets

List ip sets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIPSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIPSetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIPSetsRequest();
    $request->cursor = 'numquam';
    $request->endTime = 4768.01;
    $request->size = 7738.33;
    $request->startTime = 6218.83;

    $requestSecurity = new ListIPSetsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listIPSets($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLayer2Networks

List layer2 networks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLayer2NetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLayer2NetworksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLayer2NetworksRequest();
    $request->cursor = 'animi';
    $request->endTime = 5287.42;
    $request->size = 3995.85;
    $request->startTime = 4693.84;

    $requestSecurity = new ListLayer2NetworksSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listLayer2Networks($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNSXManagers

List nsx managers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListNSXManagersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNSXManagersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNSXManagersRequest();
    $request->cursor = 'facilis';
    $request->endTime = 7594.51;
    $request->size = 2796.73;
    $request->startTime = 1782.01;

    $requestSecurity = new ListNSXManagersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listNSXManagers($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProblemEvents

List problem events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListProblemEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProblemEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProblemEventsRequest();
    $request->cursor = 'magnam';
    $request->endTime = 1711.72;
    $request->size = 4004.92;
    $request->startTime = 4318.43;

    $requestSecurity = new ListProblemEventsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listProblemEvents($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityGroups

List security groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityGroupsRequest();
    $request->cursor = 'vel';
    $request->endTime = 3207.48;
    $request->size = 5522.87;
    $request->startTime = 741.24;

    $requestSecurity = new ListSecurityGroupsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listSecurityGroups($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityTags

List security tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityTagsRequest();
    $request->cursor = 'suscipit';
    $request->endTime = 8444.71;
    $request->size = 8554.84;
    $request->startTime = 7716.03;

    $requestSecurity = new ListSecurityTagsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listSecurityTags($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceGroups

List service groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceGroupsRequest();
    $request->cursor = 'culpa';
    $request->endTime = 5439.22;
    $request->size = 9139.09;
    $request->startTime = 9793.25;

    $requestSecurity = new ListServiceGroupsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listServiceGroups($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

List services

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesRequest();
    $request->cursor = 'nemo';
    $request->endTime = 726;
    $request->size = 9846.69;
    $request->startTime = 7666.7;

    $requestSecurity = new ListServicesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listServices($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVcenterManagers

List vCenter managers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVcenterManagersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVcenterManagersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVcenterManagersRequest();
    $request->cursor = 'expedita';
    $request->endTime = 2663.7;
    $request->size = 7682.44;
    $request->startTime = 3685.99;

    $requestSecurity = new ListVcenterManagersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listVcenterManagers($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVmknics

List vmknics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVmknicsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVmknicsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVmknicsRequest();
    $request->cursor = 'occaecati';
    $request->endTime = 2192.79;
    $request->size = 8791.93;
    $request->startTime = 7890.38;

    $requestSecurity = new ListVmknicsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listVmknics($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVms

List vms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVmsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVmsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVmsRequest();
    $request->cursor = 'quasi';
    $request->endTime = 1442.4;
    $request->size = 7798.23;
    $request->startTime = 8400.17;

    $requestSecurity = new ListVmsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listVms($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVnics

List vnics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVnicsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVnicsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVnicsRequest();
    $request->cursor = 'mollitia';
    $request->endTime = 6615.78;
    $request->size = 8409.92;
    $request->startTime = 590.23;

    $requestSecurity = new ListVnicsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->entities->listVnics($request, $requestSecurity);

    if ($response->pagedListResponseWithTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
