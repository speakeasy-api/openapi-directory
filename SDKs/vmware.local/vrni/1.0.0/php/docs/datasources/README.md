# dataSources

## Overview

Data source APIs

### Available Operations

* [addAristaSwitch](#addaristaswitch) - Create an arista switch data source
* [addBrocadeSwitch](#addbrocadeswitch) - Create a brocade switch data source
* [addCheckpointFirewall](#addcheckpointfirewall) - Create a checkpoint firewall
* [addCiscoSwitch](#addciscoswitch) - Create a cisco switch data source
* [addDellSwitch](#adddellswitch) - Create a dell switch data source
* [addHpovManager](#addhpovmanager) - Create a hp oneview manager data source
* [addHpvcManager](#addhpvcmanager) - Create a hpvc manager data source
* [addJuniperSwitch](#addjuniperswitch) - Add a juniper switch as data source
* [addNsxvManagerDatasource](#addnsxvmanagerdatasource) - Create a nsx-v manager data source
* [addPanoramaFirewall](#addpanoramafirewall) - Create panorama firewall data source
* [addUcsManager](#adducsmanager) - Create an ucs manager data source
* [addVcenterDatasource](#addvcenterdatasource) - Create a vCenter data source
* [deleteAristaSwitch](#deletearistaswitch) - Delete an arista switch data source
* [deleteBrocadeSwitch](#deletebrocadeswitch) - Delete a brocade switch data source
* [deleteCheckpointFirewall](#deletecheckpointfirewall) - Delete a checkpoint firewall data source
* [deleteCiscoSwitch](#deleteciscoswitch) - Delete a cisco switch data source
* [deleteDellSwitch](#deletedellswitch) - Delete a dell switch data source
* [deleteHpovManager](#deletehpovmanager) - Delete a hp oneview data source
* [deleteHpvcManager](#deletehpvcmanager) - Delete a hpvc manager data source
* [deleteJuniperSwitch](#deletejuniperswitch) - Delete a juniper switch data source
* [deleteNsxvManager](#deletensxvmanager) - Delete a nsx-v manager data source
* [deletePanoramaFirewall](#deletepanoramafirewall) - Delete a panorama firewall data source
* [deleteUcsManager](#deleteucsmanager) - Delete an ucs manager data source
* [deleteVcenter](#deletevcenter) - Delete a vCenter data source
* [disableAristaSwitch](#disablearistaswitch) - Disable an arista switch data source
* [disableBrocadeSwitch](#disablebrocadeswitch) - Disable a brocade switch data source
* [disableCheckpointFirewall](#disablecheckpointfirewall) - Disable a checkpoint firewall data source
* [disableCiscoSwitch](#disableciscoswitch) - Disable a cisco switch data source
* [disableDellSwitch](#disabledellswitch) - Disable a dell switch data source
* [disableHpovManager](#disablehpovmanager) - Disable a hp oneview data source
* [disableHpvcManager](#disablehpvcmanager) - Disable a hpvc manager data source
* [disableJuniperSwitch](#disablejuniperswitch) - Disable a juniper switch data source
* [disableNsxvManager](#disablensxvmanager) - Disable a nsx-v manager data source
* [disablePanoramaFirewall](#disablepanoramafirewall) - Disable a panorama firewall data source
* [disableUcsManager](#disableucsmanager) - Disable an ucs manager data source
* [disableVcenter](#disablevcenter) - Disable a vCenter data source
* [enableAristaSwitch](#enablearistaswitch) - Enable an arista switch data source
* [enableBrocadeSwitch](#enablebrocadeswitch) - Enable a brocade switch data source
* [enableCheckpointFirewall](#enablecheckpointfirewall) - Enable a checkpoint firewall data source
* [enableCiscoSwitch](#enableciscoswitch) - Enable a cisco switch data source
* [enableDellSwitch](#enabledellswitch) - Enable a dell switch data source
* [enableHpovManager](#enablehpovmanager) - Enable a hp oneview data source
* [enableHpvcManager](#enablehpvcmanager) - Enable a hpvc manager data source
* [enableJuniperSwitch](#enablejuniperswitch) - Enable a juniper switch data source
* [enableNsxvManager](#enablensxvmanager) - Enable a nsx-v manager data source
* [enablePanoramaFirewall](#enablepanoramafirewall) - Enable a panorama firewall data source
* [enableUcsManager](#enableucsmanager) - Enable an ucs manager data source
* [enableVcenter](#enablevcenter) - Enable a vCenter data source
* [getAristaSwitch](#getaristaswitch) - Show arista switch data source details
* [getAristaSwitchSnmpConfig](#getaristaswitchsnmpconfig) - Show snmp config for arista switch data source
* [getBrocadeSwitch](#getbrocadeswitch) - Show brocade switch data source details
* [getBrocadeSwitchSnmpConfig](#getbrocadeswitchsnmpconfig) - Show snmp config for brocade switch data source
* [getCheckpointFirewall](#getcheckpointfirewall) - Show checkpoint firewall data source details
* [getCiscoSwitch](#getciscoswitch) - Show cisco switch data source details
* [getCiscoSwitchSnmpConfig](#getciscoswitchsnmpconfig) - Show snmp config for cisco switch data source
* [getDellSwitch](#getdellswitch) - Show dell switch data source details
* [getDellSwitchSnmpConfig](#getdellswitchsnmpconfig) - Show snmp config for dell switch data source
* [getHpovManager](#gethpovmanager) - Show hp oneview data source details
* [getHpvcManager](#gethpvcmanager) - Show hpvc data source details
* [getJuniperSwitch](#getjuniperswitch) - Show juniper switch data source details
* [getJuniperSwitchSnmpConfig](#getjuniperswitchsnmpconfig) - Show snmp config for juniper switch data source
* [getNsxvControllerCluster](#getnsxvcontrollercluster) - Show nsx controller-cluster details
* [getNsxvManager](#getnsxvmanager) - Show nsx-v manager data source details
* [getPanoramaFirewall](#getpanoramafirewall) - Show panorama firewall data source details
* [getUcsManager](#getucsmanager) - Show ucs manager data source details
* [getUcsSnmpConfig](#getucssnmpconfig) - Show snmp config for ucs fabric interconnects
* [getVcenter](#getvcenter) - Show vCenter data source details
* [listAristaSwitches](#listaristaswitches) - List arista switch data sources
* [listBrocadeSwitches](#listbrocadeswitches) - List brocade switch data sources
* [listCheckpointFirewalls](#listcheckpointfirewalls) - List checkpoint firewall data sources
* [listCiscoSwitches](#listciscoswitches) - List cisco switch data sources
* [listDellSwitches](#listdellswitches) - List dell switch data sources
* [listHpovManagers](#listhpovmanagers) - List hp oneview manager data sources
* [listHpvcManagers](#listhpvcmanagers) - List hpvc manager data sources
* [listJuniperSwitches](#listjuniperswitches) - List juniper switch data sources
* [listNsxvManagers](#listnsxvmanagers) - List nsx-v manager data sources
* [listPanoramaFirewalls](#listpanoramafirewalls) - List panorama firewall data sources
* [listUcsManagers](#listucsmanagers) - List ucs manager data sources
* [listVcenters](#listvcenters) - List vCenter data sources
* [updateAristaSwitch](#updatearistaswitch) - Update an arista switch data source
* [updateAristaSwitchSnmpConfig](#updatearistaswitchsnmpconfig) - Update snmp config for arista switch data source
* [updateBrocadeSwitch](#updatebrocadeswitch) - Update a brocade switch data source
* [updateBrocadeSwitchSnmpConfig](#updatebrocadeswitchsnmpconfig) - Update snmp config for brocade switch data source
* [updateCheckpointFirewall](#updatecheckpointfirewall) - Update a checkpoint firewall data source
* [updateCiscoSwitch](#updateciscoswitch) - Update a cisco switch data source
* [updateCiscoSwitchSnmpConfig](#updateciscoswitchsnmpconfig) - Update snmp config for cisco switch data source
* [updateDellSwitch](#updatedellswitch) - Update a dell switch data source
* [updateDellSwitchSnmpConfig](#updatedellswitchsnmpconfig) - Update snmp config for dell switch data source
* [updateHpovManager](#updatehpovmanager) - Update a hp oneview data source
* [updateHpvcManager](#updatehpvcmanager) - Update a hpvc manager data source
* [updateJuniperSwitch](#updatejuniperswitch) - Update a juniper switch data source
* [updateJuniperSwitchSnmpConfig](#updatejuniperswitchsnmpconfig) - Update snmp config for a juniper switch data source
* [updateNsxvControllerCluster](#updatensxvcontrollercluster) - Update nsx controller-cluster details
* [updateNsxvManager](#updatensxvmanager) - Update a nsx-v manager data source
* [updatePanoramaFirewall](#updatepanoramafirewall) - Update a panorama firewall data source
* [updateUcsManager](#updateucsmanager) - Update an ucs manager data source
* [updateUcsSnmpConfig](#updateucssnmpconfig) - Update snmp config for ucs fabric interconnects
* [updateVcenter](#updatevcenter) - Update a vCenter data source.

## addAristaSwitch

Add arista switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Operations\AddAristaSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'aliquid';
    $request->credentials->username = 'Laron_Tremblay';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'dolor';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddAristaSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addAristaSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addBrocadeSwitch

Add brocade switch as a data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Operations\AddBrocadeSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'debitis';
    $request->credentials->username = 'Veda.Parisian';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'illum';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddBrocadeSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addBrocadeSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addCheckpointFirewall

Add checkpoint firewall as data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Operations\AddCheckpointFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'maiores';
    $request->credentials->username = 'Maximo76';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'facere';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddCheckpointFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addCheckpointFirewall($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addCiscoSwitch

Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CiscoSwitchDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CiscoSwitchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddCiscoSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CiscoSwitchDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'ea';
    $request->credentials->username = 'Gracie.Padberg58';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'enim';
    $request->proxyId = '1000:104:12313412';
    $request->switchType = CiscoSwitchTypeEnum::NEXUS9_K;

    $requestSecurity = new AddCiscoSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addCiscoSwitch($request, $requestSecurity);

    if ($response->ciscoSwitchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addDellSwitch

Add a dell switch as data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DellSwitchDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DellSwitchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddDellSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DellSwitchDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'delectus';
    $request->credentials->username = 'Matilda_McKenzie50';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'deleniti';
    $request->proxyId = '1000:104:12313412';
    $request->switchType = DellSwitchTypeEnum::S6000;

    $requestSecurity = new AddDellSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addDellSwitch($request, $requestSecurity);

    if ($response->dellSwitchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addHpovManager

Add a hp oneview manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddHpovManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSource();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'amet';
    $request->credentials->username = 'Luis_Huels';
    $request->enabled = false;
    $request->entityId = 'omnis';
    $request->entityType = DataSourceTypeEnum::V_CENTER_DATA_SOURCE;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'perferendis';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddHpovManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addHpovManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addHpvcManager

Add hpvc manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddHpvcManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSource();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'nihil';
    $request->credentials->username = 'Elisha.Rau';
    $request->enabled = false;
    $request->entityId = 'labore';
    $request->entityType = DataSourceTypeEnum::JUNIPER_SWITCH_DATA_SOURCE;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'natus';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddHpvcManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addHpvcManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addJuniperSwitch

Add switch Datasource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Operations\AddJuniperSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'nobis';
    $request->credentials->username = 'Hildegard10';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'magnam';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddJuniperSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addJuniperSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addNsxvManagerDatasource

Add a nsx-v manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\NSXVManagerDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Operations\AddNsxvManagerDatasourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NSXVManagerDataSourceRequest();
    $request->centralCliEnabled = false;
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'et';
    $request->credentials->username = 'Kevon_Hermann';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->ipfixEnabled = false;
    $request->nickname = 'vc1';
    $request->notes = 'sint';
    $request->proxyId = '1000:104:12313412';
    $request->vcenterId = 'accusantium';

    $requestSecurity = new AddNsxvManagerDatasourceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addNsxvManagerDatasource($request, $requestSecurity);

    if ($response->nsxvManagerDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addPanoramaFirewall

Add panorama firewall as data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Operations\AddPanoramaFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'mollitia';
    $request->credentials->username = 'Vivienne43';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'dolor';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddPanoramaFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addPanoramaFirewall($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addUcsManager

Add an ucs manager as data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddUcsManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwitchDataSource();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'necessitatibus';
    $request->credentials->username = 'Brown43';
    $request->enabled = false;
    $request->entityId = 'doloribus';
    $request->entityType = DataSourceTypeEnum::PAN_FIREWALL_DATA_SOURCE;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'eius';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddUcsManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addUcsManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addVcenterDatasource

Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VCenterDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Operations\AddVcenterDatasourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VCenterDataSourceRequest();
    $request->credentials = new PasswordCredentials();
    $request->credentials->password = 'maxime';
    $request->credentials->username = 'Kaitlyn.Prosacco';
    $request->enabled = false;
    $request->fqdn = 'your.domain.com';
    $request->ip = '192.168.10.1';
    $request->nickname = 'vc1';
    $request->notes = 'architecto';
    $request->proxyId = '1000:104:12313412';

    $requestSecurity = new AddVcenterDatasourceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->addVcenterDatasource($request, $requestSecurity);

    if ($response->vCenterDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAristaSwitch

Delete an arista switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAristaSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAristaSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAristaSwitchRequest();
    $request->id = 'e5b7fd2e-d028-4921-8ddc-692601fb576b';

    $requestSecurity = new DeleteAristaSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteAristaSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBrocadeSwitch

Delete a brocade switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBrocadeSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBrocadeSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBrocadeSwitchRequest();
    $request->id = '0d5f0d30-c5fb-4b25-8705-3202c73d5fe9';

    $requestSecurity = new DeleteBrocadeSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteBrocadeSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCheckpointFirewall

Delete a checkpoint firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCheckpointFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCheckpointFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCheckpointFirewallRequest();
    $request->id = 'b90c2890-9b3f-4e49-a8d9-cbf48633323f';

    $requestSecurity = new DeleteCheckpointFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteCheckpointFirewall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCiscoSwitch

Delete a cisco switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCiscoSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCiscoSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCiscoSwitchRequest();
    $request->id = '9b77f3a4-1006-474e-bf69-280d1ba77a89';

    $requestSecurity = new DeleteCiscoSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteCiscoSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDellSwitch

Delete a data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDellSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDellSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDellSwitchRequest();
    $request->id = 'ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2';

    $requestSecurity = new DeleteDellSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteDellSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHpovManager

Delete a hp oneview data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHpovManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHpovManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHpovManagerRequest();
    $request->id = 'af7a73cf-3be4-453f-870b-326b5a73429c';

    $requestSecurity = new DeleteHpovManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteHpovManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHpvcManager

Delete a hpvc manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHpvcManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHpvcManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHpvcManagerRequest();
    $request->id = 'db1a8422-bb67-49d2-b227-15bf0cbb1e31';

    $requestSecurity = new DeleteHpvcManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteHpvcManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJuniperSwitch

Delete a juniper switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJuniperSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJuniperSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJuniperSwitchRequest();
    $request->id = 'b8b90f34-43a1-4108-a0ad-cf4b921879fc';

    $requestSecurity = new DeleteJuniperSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteJuniperSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNsxvManager

Delete a nsx-v manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNsxvManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNsxvManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNsxvManagerRequest();
    $request->id = 'e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf';

    $requestSecurity = new DeleteNsxvManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteNsxvManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePanoramaFirewall

Delete a panorama firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePanoramaFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePanoramaFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePanoramaFirewallRequest();
    $request->id = 'f7c70a45-626d-4436-813f-16d9f5fce6c5';

    $requestSecurity = new DeletePanoramaFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deletePanoramaFirewall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUcsManager

Delete an ucs manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUcsManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUcsManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUcsManagerRequest();
    $request->id = '56146c3e-250f-4b00-8c42-e141aac366c8';

    $requestSecurity = new DeleteUcsManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteUcsManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVcenter

Delete a data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVcenterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVcenterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVcenterRequest();
    $request->id = 'dd6b1442-9074-4747-b8a7-bd466d28c10a';

    $requestSecurity = new DeleteVcenterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->deleteVcenter($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableAristaSwitch

Disable an arista switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableAristaSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableAristaSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableAristaSwitchRequest();
    $request->id = 'b3cdca42-5190-44e5-a3c7-e0bc7178e479';

    $requestSecurity = new DisableAristaSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableAristaSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableBrocadeSwitch

Disable a brocade switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableBrocadeSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableBrocadeSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableBrocadeSwitchRequest();
    $request->id = '6f2a70c6-8828-42aa-8825-62f222e9817e';

    $requestSecurity = new DisableBrocadeSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableBrocadeSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableCheckpointFirewall

Disable a checkpoint firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableCheckpointFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableCheckpointFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableCheckpointFirewallRequest();
    $request->id = 'e17cbe61-e6b7-4b95-bc0a-b3c20c4f3789';

    $requestSecurity = new DisableCheckpointFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableCheckpointFirewall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableCiscoSwitch

Disable a cisco switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableCiscoSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableCiscoSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableCiscoSwitchRequest();
    $request->id = 'fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04';

    $requestSecurity = new DisableCiscoSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableCiscoSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableDellSwitch

Disable a dell switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableDellSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableDellSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableDellSwitchRequest();
    $request->id = 'f1575608-2d68-4ea1-9f1d-17051339d080';

    $requestSecurity = new DisableDellSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableDellSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableHpovManager

Disable a hp oneview data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableHpovManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableHpovManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableHpovManagerRequest();
    $request->id = '86a18403-94c2-4607-9f93-f5f0642dac7a';

    $requestSecurity = new DisableHpovManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableHpovManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableHpvcManager

Disable a hpvc manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableHpvcManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableHpvcManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableHpvcManagerRequest();
    $request->id = 'f515cc41-3aa6-43aa-a8d6-7864dbb675fd';

    $requestSecurity = new DisableHpvcManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableHpvcManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableJuniperSwitch

Disable a juniper switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableJuniperSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableJuniperSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableJuniperSwitchRequest();
    $request->id = '5e60b375-ed4f-46fb-ae41-f33317fe35b6';

    $requestSecurity = new DisableJuniperSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableJuniperSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableNsxvManager

Disable a nsx-v manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableNsxvManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableNsxvManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableNsxvManagerRequest();
    $request->id = '0eb1ea42-6555-4ba3-8287-44ed53b88f3a';

    $requestSecurity = new DisableNsxvManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableNsxvManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disablePanoramaFirewall

Disable a panorama firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisablePanoramaFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisablePanoramaFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisablePanoramaFirewallRequest();
    $request->id = '8d8f5c0b-2f2f-4b7b-994a-276b26916fe1';

    $requestSecurity = new DisablePanoramaFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disablePanoramaFirewall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableUcsManager

Disable an ucs manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableUcsManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableUcsManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableUcsManagerRequest();
    $request->id = 'f08f4294-e369-48f4-87f6-03e8b445e80c';

    $requestSecurity = new DisableUcsManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableUcsManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableVcenter

Disable a vCenter data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableVcenterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableVcenterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableVcenterRequest();
    $request->id = 'a55efd20-e457-4e18-98b6-a89fbe3a5aa8';

    $requestSecurity = new DisableVcenterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->disableVcenter($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableAristaSwitch

Enable an arista switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableAristaSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableAristaSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableAristaSwitchRequest();
    $request->id = 'e4824d0a-b407-4508-8e51-862065e904f3';

    $requestSecurity = new EnableAristaSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableAristaSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableBrocadeSwitch

Enable a brocade switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableBrocadeSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableBrocadeSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableBrocadeSwitchRequest();
    $request->id = 'b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50';

    $requestSecurity = new EnableBrocadeSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableBrocadeSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableCheckpointFirewall

Enable a checkpoint firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableCheckpointFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableCheckpointFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableCheckpointFirewallRequest();
    $request->id = 'ce187f86-bc17-43d6-89ee-e9526f8d986e';

    $requestSecurity = new EnableCheckpointFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableCheckpointFirewall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableCiscoSwitch

Enable a cisco switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableCiscoSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableCiscoSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableCiscoSwitchRequest();
    $request->id = '881ead4f-0e10-4125-a3f9-4e29e973e922';

    $requestSecurity = new EnableCiscoSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableCiscoSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableDellSwitch

Enable a dell switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableDellSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableDellSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableDellSwitchRequest();
    $request->id = 'a57a15be-3e06-4080-be2b-6e3ab8845f05';

    $requestSecurity = new EnableDellSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableDellSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableHpovManager

Enable a hp oneview data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableHpovManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableHpovManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableHpovManagerRequest();
    $request->id = '97a60ff2-a54a-431e-9476-4a3e865e7956';

    $requestSecurity = new EnableHpovManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableHpovManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableHpvcManager

Enable a hpvc manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableHpvcManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableHpvcManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableHpvcManagerRequest();
    $request->id = 'f9251a5a-9da6-460f-b57b-faad4f9efc1b';

    $requestSecurity = new EnableHpvcManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableHpvcManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableJuniperSwitch

Enable a juniper switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableJuniperSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableJuniperSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableJuniperSwitchRequest();
    $request->id = '4512c103-2648-4dc2-b615-199ebfd0e9fe';

    $requestSecurity = new EnableJuniperSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableJuniperSwitch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableNsxvManager

Enable a nsx-v manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableNsxvManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableNsxvManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableNsxvManagerRequest();
    $request->id = '6c632ca3-aed0-4117-9963-12fde0477177';

    $requestSecurity = new EnableNsxvManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableNsxvManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enablePanoramaFirewall

Enable a panorama firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnablePanoramaFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnablePanoramaFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnablePanoramaFirewallRequest();
    $request->id = '8ff61d01-7476-4360-a15d-b6a660659a1a';

    $requestSecurity = new EnablePanoramaFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enablePanoramaFirewall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableUcsManager

Enable an ucs manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableUcsManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableUcsManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableUcsManagerRequest();
    $request->id = 'deaab585-1d6c-4645-b08b-61891baa0fe1';

    $requestSecurity = new EnableUcsManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableUcsManager($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableVcenter

Enable a vCenter data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableVcenterRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableVcenterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableVcenterRequest();
    $request->id = 'ade008e6-f8c5-4f35-8d8c-db5a34181430';

    $requestSecurity = new EnableVcenterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->enableVcenter($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAristaSwitch

Show arista switch data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAristaSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAristaSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAristaSwitchRequest();
    $request->id = '10421813-d520-48ec-a7e2-53b668451c6c';

    $requestSecurity = new GetAristaSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getAristaSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAristaSwitchSnmpConfig

Show snmp config for arista switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAristaSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAristaSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAristaSwitchSnmpConfigRequest();
    $request->id = '6e205e16-deab-43fe-8957-8a64584273a8';

    $requestSecurity = new GetAristaSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getAristaSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBrocadeSwitch

Show brocade switch data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBrocadeSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBrocadeSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBrocadeSwitchRequest();
    $request->id = '418d1623-09fb-4092-9921-aefb9f58c4d8';

    $requestSecurity = new GetBrocadeSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getBrocadeSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBrocadeSwitchSnmpConfig

Show snmp config for brocade switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBrocadeSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBrocadeSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBrocadeSwitchSnmpConfigRequest();
    $request->id = '6e68e4be-0560-413f-99da-757a59ecfef6';

    $requestSecurity = new GetBrocadeSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getBrocadeSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCheckpointFirewall

Show checkpoint firewall data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckpointFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckpointFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCheckpointFirewallRequest();
    $request->id = '6ef1caa3-383c-42be-b477-373c8d72f64d';

    $requestSecurity = new GetCheckpointFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getCheckpointFirewall($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCiscoSwitch

Show cisco switch data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCiscoSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCiscoSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCiscoSwitchRequest();
    $request->id = '1db1f2c4-3106-461e-9634-9e1cf9e06e3a';

    $requestSecurity = new GetCiscoSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getCiscoSwitch($request, $requestSecurity);

    if ($response->ciscoSwitchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCiscoSwitchSnmpConfig

Show snmp config for cisco switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCiscoSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCiscoSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCiscoSwitchSnmpConfigRequest();
    $request->id = '437000ae-6b6b-4c9b-8f75-9eac55a9741d';

    $requestSecurity = new GetCiscoSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getCiscoSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDellSwitch

Get a dell switch data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDellSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDellSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDellSwitchRequest();
    $request->id = '31135296-5bb8-4a72-8261-1435e139dbc2';

    $requestSecurity = new GetDellSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getDellSwitch($request, $requestSecurity);

    if ($response->dellSwitchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDellSwitchSnmpConfig

Show snmp config for dell switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDellSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDellSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDellSwitchSnmpConfigRequest();
    $request->id = '259b1abd-a8c0-470e-9084-cb0672d1ad87';

    $requestSecurity = new GetDellSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getDellSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHpovManager

Show hp oneview data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHpovManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHpovManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHpovManagerRequest();
    $request->id = '9eeb9665-b85e-4fbd-82ba-e0be2d782259';

    $requestSecurity = new GetHpovManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getHpovManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHpvcManager

Show hpvc data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHpvcManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHpvcManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHpvcManagerRequest();
    $request->id = 'e3ea4b51-97f9-4244-bda7-ce52b895c537';

    $requestSecurity = new GetHpvcManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getHpvcManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJuniperSwitch

Show juniper switch data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJuniperSwitchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJuniperSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJuniperSwitchRequest();
    $request->id = 'c6454efb-0b34-4896-83ca-5acfbe2fd570';

    $requestSecurity = new GetJuniperSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getJuniperSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJuniperSwitchSnmpConfig

Show snmp config for juniper switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJuniperSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJuniperSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJuniperSwitchSnmpConfigRequest();
    $request->id = '75779291-77de-4ac6-86ec-b573409e3eb1';

    $requestSecurity = new GetJuniperSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getJuniperSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNsxvControllerCluster

Show nsx controller-cluster details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNsxvControllerClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNsxvControllerClusterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNsxvControllerClusterRequest();
    $request->id = 'e5a2b12e-b07f-4116-9b99-545fc95fa889';

    $requestSecurity = new GetNsxvControllerClusterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getNsxvControllerCluster($request, $requestSecurity);

    if ($response->nsxControllerDataCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNsxvManager

Show nsx-v manager data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNsxvManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNsxvManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNsxvManagerRequest();
    $request->id = '70e189db-b30f-4cb3-bea0-55b197cd44e2';

    $requestSecurity = new GetNsxvManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getNsxvManager($request, $requestSecurity);

    if ($response->nsxvManagerDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPanoramaFirewall

Show panorama firewall data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPanoramaFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPanoramaFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPanoramaFirewallRequest();
    $request->id = 'f52d82d3-513b-4b6f-88b6-56bcdb35ff2e';

    $requestSecurity = new GetPanoramaFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getPanoramaFirewall($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUcsManager

Show ucs manager data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUcsManagerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUcsManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUcsManagerRequest();
    $request->id = '4b27537a-8cd9-4e73-99c1-77d525f77b11';

    $requestSecurity = new GetUcsManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getUcsManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUcsSnmpConfig

Show snmp config for ucs fabric interconnects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUcsSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUcsSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUcsSnmpConfigRequest();
    $request->id = '4eeb52ff-785f-4c37-814d-4c98e0c2bb89';

    $requestSecurity = new GetUcsSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getUcsSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVcenter

Show vCenter data source details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVcenterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVcenterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVcenterRequest();
    $request->id = 'eb75dad6-36c6-4005-83d8-bb31180f739a';

    $requestSecurity = new GetVcenterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->getVcenter($request, $requestSecurity);

    if ($response->vCenterDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAristaSwitches

List arista switch data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAristaSwitchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListAristaSwitchesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listAristaSwitches($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBrocadeSwitches

List brocade switch data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBrocadeSwitchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListBrocadeSwitchesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listBrocadeSwitches($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCheckpointFirewalls

List checkpoint firewall data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCheckpointFirewallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListCheckpointFirewallsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listCheckpointFirewalls($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCiscoSwitches

List cisco switch data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCiscoSwitchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListCiscoSwitchesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listCiscoSwitches($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDellSwitches

List dell switch data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDellSwitchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListDellSwitchesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listDellSwitches($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHpovManagers

List hp oneview manager data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHpovManagersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListHpovManagersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listHpovManagers($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHpvcManagers

List hpvc manager data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHpvcManagersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListHpvcManagersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listHpvcManagers($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJuniperSwitches

List juniper switch data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListJuniperSwitchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListJuniperSwitchesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listJuniperSwitches($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNsxvManagers

List nsx-v manager data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListNsxvManagersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListNsxvManagersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listNsxvManagers($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPanoramaFirewalls

List panorama firewall data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPanoramaFirewallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListPanoramaFirewallsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listPanoramaFirewalls($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUcsManagers

List ucs manager data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUcsManagersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListUcsManagersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listUcsManagers($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVcenters

List vCenter data sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVcentersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListVcentersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->listVcenters($requestSecurity);

    if ($response->dataSourceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAristaSwitch

Update an switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAristaSwitchRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAristaSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAristaSwitchRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'necessitatibus';
    $request->switchDataSource->credentials->username = 'Larue36';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'molestiae';
    $request->switchDataSource->entityType = DataSourceTypeEnum::CHECKPOINT_FIREWALL_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'facilis';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = '809e2810-331f-4398-9d4c-700b607f3c93';

    $requestSecurity = new UpdateAristaSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateAristaSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAristaSwitchSnmpConfig

Update snmp config for arista switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAristaSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp2cConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3Config;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigPrivacyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfigSNMPVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAristaSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAristaSwitchSnmpConfigRequest();
    $request->snmpConfig = new SNMPConfig();
    $request->snmpConfig->configSnmp2c = new Snmp2cConfig();
    $request->snmpConfig->configSnmp2c->communityString = 'eligendi';
    $request->snmpConfig->configSnmp3 = new Snmp3Config();
    $request->snmpConfig->configSnmp3->authenticationPassword = 'dignissimos';
    $request->snmpConfig->configSnmp3->authenticationType = Snmp3ConfigAuthenticationTypeEnum::NO_AUTH;
    $request->snmpConfig->configSnmp3->contextName = 'soluta';
    $request->snmpConfig->configSnmp3->privacyPassword = 'natus';
    $request->snmpConfig->configSnmp3->privacyType = Snmp3ConfigPrivacyTypeEnum::THREE_DES;
    $request->snmpConfig->configSnmp3->username = 'Lucie.Fay77';
    $request->snmpConfig->snmpEnabled = false;
    $request->snmpConfig->snmpVersion = SNMPConfigSNMPVersionEnum::V3;
    $request->id = 'da7e23f2-2574-411f-af4b-7544e472e802';

    $requestSecurity = new UpdateAristaSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateAristaSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBrocadeSwitch

Update a brocade switch data source. Only credentials, nickname and notes can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrocadeSwitchRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrocadeSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBrocadeSwitchRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'deleniti';
    $request->switchDataSource->credentials->username = 'Emil.Kling';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'libero';
    $request->switchDataSource->entityType = DataSourceTypeEnum::BROCADE_SWITCH_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'sit';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = '463a7d57-5f14-400e-b64a-d7334ec1b781';

    $requestSecurity = new UpdateBrocadeSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateBrocadeSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBrocadeSwitchSnmpConfig

Update snmp config for brocade switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrocadeSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp2cConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3Config;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigPrivacyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfigSNMPVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrocadeSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBrocadeSwitchSnmpConfigRequest();
    $request->snmpConfig = new SNMPConfig();
    $request->snmpConfig->configSnmp2c = new Snmp2cConfig();
    $request->snmpConfig->configSnmp2c->communityString = 'facilis';
    $request->snmpConfig->configSnmp3 = new Snmp3Config();
    $request->snmpConfig->configSnmp3->authenticationPassword = 'amet';
    $request->snmpConfig->configSnmp3->authenticationType = Snmp3ConfigAuthenticationTypeEnum::MD5;
    $request->snmpConfig->configSnmp3->contextName = 'fuga';
    $request->snmpConfig->configSnmp3->privacyPassword = 'alias';
    $request->snmpConfig->configSnmp3->privacyType = Snmp3ConfigPrivacyTypeEnum::AES192;
    $request->snmpConfig->configSnmp3->username = 'Aditya_Lubowitz';
    $request->snmpConfig->snmpEnabled = false;
    $request->snmpConfig->snmpVersion = SNMPConfigSNMPVersionEnum::V2C;
    $request->id = '00efada2-00ef-4042-aeb2-164cf9ab8366';

    $requestSecurity = new UpdateBrocadeSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateBrocadeSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCheckpointFirewall

Update a checkpoint firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCheckpointFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCheckpointFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCheckpointFirewallRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'impedit';
    $request->switchDataSource->credentials->username = 'Jessie96';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'repellat';
    $request->switchDataSource->entityType = DataSourceTypeEnum::PAN_FIREWALL_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'laborum';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = '9e06bee4-825c-41fc-8e11-5c80bff91854';

    $requestSecurity = new UpdateCheckpointFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateCheckpointFirewall($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCiscoSwitch

Update a cisco switch data source. Only credentials, nickname and notes can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCiscoSwitchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CiscoSwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CiscoSwitchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCiscoSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCiscoSwitchRequest();
    $request->ciscoSwitchDataSource = new CiscoSwitchDataSource();
    $request->ciscoSwitchDataSource->credentials = new PasswordCredentials();
    $request->ciscoSwitchDataSource->credentials->password = 'modi';
    $request->ciscoSwitchDataSource->credentials->username = 'Tobin16';
    $request->ciscoSwitchDataSource->enabled = false;
    $request->ciscoSwitchDataSource->entityId = 'assumenda';
    $request->ciscoSwitchDataSource->entityType = DataSourceTypeEnum::PAN_FIREWALL_DATA_SOURCE;
    $request->ciscoSwitchDataSource->fqdn = 'your.domain.com';
    $request->ciscoSwitchDataSource->ip = '192.168.10.1';
    $request->ciscoSwitchDataSource->nickname = 'vc1';
    $request->ciscoSwitchDataSource->notes = 'doloribus';
    $request->ciscoSwitchDataSource->proxyId = '1000:104:12313412';
    $request->ciscoSwitchDataSource->switchType = CiscoSwitchTypeEnum::NEXUS7_K;
    $request->id = 'ce8f1977-773e-4635-a2a7-b408f05e3d48';

    $requestSecurity = new UpdateCiscoSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateCiscoSwitch($request, $requestSecurity);

    if ($response->ciscoSwitchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCiscoSwitchSnmpConfig

Update snmp config for cisco switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCiscoSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp2cConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3Config;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigPrivacyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfigSNMPVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCiscoSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCiscoSwitchSnmpConfigRequest();
    $request->snmpConfig = new SNMPConfig();
    $request->snmpConfig->configSnmp2c = new Snmp2cConfig();
    $request->snmpConfig->configSnmp2c->communityString = 'doloribus';
    $request->snmpConfig->configSnmp3 = new Snmp3Config();
    $request->snmpConfig->configSnmp3->authenticationPassword = 'fugiat';
    $request->snmpConfig->configSnmp3->authenticationType = Snmp3ConfigAuthenticationTypeEnum::SHA;
    $request->snmpConfig->configSnmp3->contextName = 'delectus';
    $request->snmpConfig->configSnmp3->privacyPassword = 'velit';
    $request->snmpConfig->configSnmp3->privacyType = Snmp3ConfigPrivacyTypeEnum::AES;
    $request->snmpConfig->configSnmp3->username = 'Colin99';
    $request->snmpConfig->snmpEnabled = false;
    $request->snmpConfig->snmpVersion = SNMPConfigSNMPVersionEnum::V2C;
    $request->id = 'fd94259c-0b36-4f25-aa94-4f3b756c11f6';

    $requestSecurity = new UpdateCiscoSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateCiscoSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDellSwitch

Update a dell switch data source. Only credentials, nickname and notes can be updated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDellSwitchRequest;
use \OpenAPI\OpenAPI\Models\Shared\DellSwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DellSwitchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDellSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDellSwitchRequest();
    $request->dellSwitchDataSource = new DellSwitchDataSource();
    $request->dellSwitchDataSource->credentials = new PasswordCredentials();
    $request->dellSwitchDataSource->credentials->password = 'quisquam';
    $request->dellSwitchDataSource->credentials->username = 'Dallas.Kunze10';
    $request->dellSwitchDataSource->enabled = false;
    $request->dellSwitchDataSource->entityId = 'qui';
    $request->dellSwitchDataSource->entityType = DataSourceTypeEnum::JUNIPER_SWITCH_DATA_SOURCE;
    $request->dellSwitchDataSource->fqdn = 'your.domain.com';
    $request->dellSwitchDataSource->ip = '192.168.10.1';
    $request->dellSwitchDataSource->nickname = 'vc1';
    $request->dellSwitchDataSource->notes = 'magni';
    $request->dellSwitchDataSource->proxyId = '1000:104:12313412';
    $request->dellSwitchDataSource->switchType = DellSwitchTypeEnum::POWERCONNECT8024;
    $request->id = '3835bbc0-5a23-4a45-8efc-5fde10a0ce21';

    $requestSecurity = new UpdateDellSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateDellSwitch($request, $requestSecurity);

    if ($response->dellSwitchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDellSwitchSnmpConfig

Update snmp config for dell switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDellSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp2cConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3Config;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigPrivacyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfigSNMPVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDellSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDellSwitchSnmpConfigRequest();
    $request->snmpConfig = new SNMPConfig();
    $request->snmpConfig->configSnmp2c = new Snmp2cConfig();
    $request->snmpConfig->configSnmp2c->communityString = 'vel';
    $request->snmpConfig->configSnmp3 = new Snmp3Config();
    $request->snmpConfig->configSnmp3->authenticationPassword = 'perspiciatis';
    $request->snmpConfig->configSnmp3->authenticationType = Snmp3ConfigAuthenticationTypeEnum::SHA;
    $request->snmpConfig->configSnmp3->contextName = 'ullam';
    $request->snmpConfig->configSnmp3->privacyPassword = 'architecto';
    $request->snmpConfig->configSnmp3->privacyType = Snmp3ConfigPrivacyTypeEnum::AES;
    $request->snmpConfig->configSnmp3->username = 'Aida_Boehm';
    $request->snmpConfig->snmpEnabled = false;
    $request->snmpConfig->snmpVersion = SNMPConfigSNMPVersionEnum::V2C;
    $request->id = 'dc5e3476-2799-4bfb-be69-49fb2bb4ecae';

    $requestSecurity = new UpdateDellSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateDellSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHpovManager

Update a hp oneview data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHpovManagerRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHpovManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHpovManagerRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'autem';
    $request->switchDataSource->credentials->username = 'Orval.Dooley84';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'facilis';
    $request->switchDataSource->entityType = DataSourceTypeEnum::ARISTA_SWITCH_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'mollitia';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = 'debd5dae-a4c5-406a-8aa9-4c02644cf5e9';

    $requestSecurity = new UpdateHpovManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateHpovManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHpvcManager

Update a hpvc manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHpvcManagerRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHpvcManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHpvcManagerRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'nulla';
    $request->switchDataSource->credentials->username = 'Lillie34';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'esse';
    $request->switchDataSource->entityType = DataSourceTypeEnum::NSXV_MANAGER_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'fuga';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = 'dc1ac600-dec0-401a-8802-e2ec09ff8f0f';

    $requestSecurity = new UpdateHpvcManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateHpvcManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJuniperSwitch

Update a juniper switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJuniperSwitchRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJuniperSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJuniperSwitchRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'rem';
    $request->switchDataSource->credentials->username = 'Birdie_Homenick24';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'eius';
    $request->switchDataSource->entityType = DataSourceTypeEnum::V_CENTER_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'in';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = 'c13e902c-1412-45b0-960a-668151a472af';

    $requestSecurity = new UpdateJuniperSwitchSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateJuniperSwitch($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJuniperSwitchSnmpConfig

Update snmp config for a juniper switch data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJuniperSwitchSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp2cConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3Config;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigPrivacyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfigSNMPVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJuniperSwitchSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJuniperSwitchSnmpConfigRequest();
    $request->snmpConfig = new SNMPConfig();
    $request->snmpConfig->configSnmp2c = new Snmp2cConfig();
    $request->snmpConfig->configSnmp2c->communityString = 'omnis';
    $request->snmpConfig->configSnmp3 = new Snmp3Config();
    $request->snmpConfig->configSnmp3->authenticationPassword = 'sed';
    $request->snmpConfig->configSnmp3->authenticationType = Snmp3ConfigAuthenticationTypeEnum::NO_AUTH;
    $request->snmpConfig->configSnmp3->contextName = 'maxime';
    $request->snmpConfig->configSnmp3->privacyPassword = 'quis';
    $request->snmpConfig->configSnmp3->privacyType = Snmp3ConfigPrivacyTypeEnum::AES256;
    $request->snmpConfig->configSnmp3->username = 'Ellen_Marks24';
    $request->snmpConfig->snmpEnabled = false;
    $request->snmpConfig->snmpVersion = SNMPConfigSNMPVersionEnum::V3;
    $request->id = '350cf876-ffb9-401c-aecb-b4e243cf789f';

    $requestSecurity = new UpdateJuniperSwitchSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateJuniperSwitchSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNsxvControllerCluster

Update nsx controller-cluster details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNsxvControllerClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\NSXControllerDataCollection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNsxvControllerClusterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNsxvControllerClusterRequest();
    $request->nsxControllerDataCollection = new NSXControllerDataCollection();
    $request->nsxControllerDataCollection->controllerPassword = 'a';
    $request->nsxControllerDataCollection->enabled = false;
    $request->id = 'afeda53e-5ae6-4e0a-8184-c2b9c247c883';

    $requestSecurity = new UpdateNsxvControllerClusterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateNsxvControllerCluster($request, $requestSecurity);

    if ($response->nsxControllerDataCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNsxvManager

Update a nsx-v manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNsxvManagerRequest;
use \OpenAPI\OpenAPI\Models\Shared\NSXVManagerDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNsxvManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNsxvManagerRequest();
    $request->nsxvManagerDataSource = new NSXVManagerDataSource();
    $request->nsxvManagerDataSource->centralCliEnabled = false;
    $request->nsxvManagerDataSource->credentials = new PasswordCredentials();
    $request->nsxvManagerDataSource->credentials->password = 'molestiae';
    $request->nsxvManagerDataSource->credentials->username = 'Danielle2';
    $request->nsxvManagerDataSource->enabled = false;
    $request->nsxvManagerDataSource->entityId = 'necessitatibus';
    $request->nsxvManagerDataSource->entityType = DataSourceTypeEnum::DELL_SWITCH_DATA_SOURCE;
    $request->nsxvManagerDataSource->fqdn = 'your.domain.com';
    $request->nsxvManagerDataSource->ip = '192.168.10.1';
    $request->nsxvManagerDataSource->ipfixEnabled = false;
    $request->nsxvManagerDataSource->nickname = 'vc1';
    $request->nsxvManagerDataSource->notes = 'molestias';
    $request->nsxvManagerDataSource->proxyId = '1000:104:12313412';
    $request->nsxvManagerDataSource->vcenterId = 'dolore';
    $request->id = '2f32e550-5575-46f5-956d-0bd0af2dfe13';

    $requestSecurity = new UpdateNsxvManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateNsxvManager($request, $requestSecurity);

    if ($response->nsxvManagerDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePanoramaFirewall

Update a panorama firewall data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePanoramaFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePanoramaFirewallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePanoramaFirewallRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'pariatur';
    $request->switchDataSource->credentials->username = 'Martina.Grimes12';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'minus';
    $request->switchDataSource->entityType = DataSourceTypeEnum::HPVC_MANAGER_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'dolorum';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = '3f8941ae-bc0b-480a-a924-d3b2ecfcc8f8';

    $requestSecurity = new UpdatePanoramaFirewallSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updatePanoramaFirewall($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUcsManager

Update an ucs manager data source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUcsManagerRequest;
use \OpenAPI\OpenAPI\Models\Shared\SwitchDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUcsManagerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUcsManagerRequest();
    $request->switchDataSource = new SwitchDataSource();
    $request->switchDataSource->credentials = new PasswordCredentials();
    $request->switchDataSource->credentials->password = 'iste';
    $request->switchDataSource->credentials->username = 'Foster1';
    $request->switchDataSource->enabled = false;
    $request->switchDataSource->entityId = 'doloribus';
    $request->switchDataSource->entityType = DataSourceTypeEnum::JUNIPER_SWITCH_DATA_SOURCE;
    $request->switchDataSource->fqdn = 'your.domain.com';
    $request->switchDataSource->ip = '192.168.10.1';
    $request->switchDataSource->nickname = 'vc1';
    $request->switchDataSource->notes = 'at';
    $request->switchDataSource->proxyId = '1000:104:12313412';
    $request->id = 'd3d6fa18-04e5-44c8-af16-8a363c8873e4';

    $requestSecurity = new UpdateUcsManagerSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateUcsManager($request, $requestSecurity);

    if ($response->switchDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUcsSnmpConfig

Update snmp config for ucs fabric interconnects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUcsSnmpConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp2cConfig;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3Config;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snmp3ConfigPrivacyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SNMPConfigSNMPVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUcsSnmpConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUcsSnmpConfigRequest();
    $request->snmpConfig = new SNMPConfig();
    $request->snmpConfig->configSnmp2c = new Snmp2cConfig();
    $request->snmpConfig->configSnmp2c->communityString = 'blanditiis';
    $request->snmpConfig->configSnmp3 = new Snmp3Config();
    $request->snmpConfig->configSnmp3->authenticationPassword = 'numquam';
    $request->snmpConfig->configSnmp3->authenticationType = Snmp3ConfigAuthenticationTypeEnum::NO_AUTH;
    $request->snmpConfig->configSnmp3->contextName = 'voluptatum';
    $request->snmpConfig->configSnmp3->privacyPassword = 'sit';
    $request->snmpConfig->configSnmp3->privacyType = Snmp3ConfigPrivacyTypeEnum::AES256;
    $request->snmpConfig->configSnmp3->username = 'Art_Wiegand';
    $request->snmpConfig->snmpEnabled = false;
    $request->snmpConfig->snmpVersion = SNMPConfigSNMPVersionEnum::V3;
    $request->id = 'ca275a60-a04c-4495-8c69-9171b51c1bdb';

    $requestSecurity = new UpdateUcsSnmpConfigSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateUcsSnmpConfig($request, $requestSecurity);

    if ($response->snmpConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVcenter

Update a vcenter data source. Only nickname, notes and credentials can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVcenterRequest;
use \OpenAPI\OpenAPI\Models\Shared\VCenterDataSource;
use \OpenAPI\OpenAPI\Models\Shared\PasswordCredentials;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVcenterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVcenterRequest();
    $request->vCenterDataSource = new VCenterDataSource();
    $request->vCenterDataSource->credentials = new PasswordCredentials();
    $request->vCenterDataSource->credentials->password = 'beatae';
    $request->vCenterDataSource->credentials->username = 'Oceane71';
    $request->vCenterDataSource->enabled = false;
    $request->vCenterDataSource->entityId = 'corrupti';
    $request->vCenterDataSource->entityType = DataSourceTypeEnum::NSXV_MANAGER_DATA_SOURCE;
    $request->vCenterDataSource->fqdn = 'your.domain.com';
    $request->vCenterDataSource->ip = '192.168.10.1';
    $request->vCenterDataSource->nickname = 'vc1';
    $request->vCenterDataSource->notes = 'atque';
    $request->vCenterDataSource->proxyId = '1000:104:12313412';
    $request->id = 'ebdfc4cc-ca99-4bc7-bc0b-2dce10873e42';

    $requestSecurity = new UpdateVcenterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->dataSources->updateVcenter($request, $requestSecurity);

    if ($response->vCenterDataSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
