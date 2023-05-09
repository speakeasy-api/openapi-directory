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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddAristaSwitchResponse;
import org.openapis.openapi.models.operations.AddAristaSwitchSecurity;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSourceRequest req = new SwitchDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("optio", "totam");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "beatae";
            }};            

            AddAristaSwitchResponse res = sdk.dataSources.addAristaSwitch(req, new AddAristaSwitchSecurity("commodi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addBrocadeSwitch

Add brocade switch as a data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddBrocadeSwitchResponse;
import org.openapis.openapi.models.operations.AddBrocadeSwitchSecurity;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSourceRequest req = new SwitchDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("molestiae", "modi");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "qui";
            }};            

            AddBrocadeSwitchResponse res = sdk.dataSources.addBrocadeSwitch(req, new AddBrocadeSwitchSecurity("impedit") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addCheckpointFirewall

Add checkpoint firewall as data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCheckpointFirewallResponse;
import org.openapis.openapi.models.operations.AddCheckpointFirewallSecurity;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSourceRequest req = new SwitchDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("cum", "esse");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "ipsum";
            }};            

            AddCheckpointFirewallResponse res = sdk.dataSources.addCheckpointFirewall(req, new AddCheckpointFirewallSecurity("excepturi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addCiscoSwitch

Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCiscoSwitchResponse;
import org.openapis.openapi.models.operations.AddCiscoSwitchSecurity;
import org.openapis.openapi.models.shared.CiscoSwitchDataSourceRequest;
import org.openapis.openapi.models.shared.CiscoSwitchTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CiscoSwitchDataSourceRequest req = new CiscoSwitchDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("aspernatur", "perferendis");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "ad";
                switchType = CiscoSwitchTypeEnum.NEXUS5_K;
            }};            

            AddCiscoSwitchResponse res = sdk.dataSources.addCiscoSwitch(req, new AddCiscoSwitchSecurity("sed") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.ciscoSwitchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addDellSwitch

Add a dell switch as data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDellSwitchResponse;
import org.openapis.openapi.models.operations.AddDellSwitchSecurity;
import org.openapis.openapi.models.shared.DellSwitchDataSourceRequest;
import org.openapis.openapi.models.shared.DellSwitchTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DellSwitchDataSourceRequest req = new DellSwitchDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("iste", "dolor");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "natus";
                switchType = DellSwitchTypeEnum.POWERCONNECT8024;
            }};            

            AddDellSwitchResponse res = sdk.dataSources.addDellSwitch(req, new AddDellSwitchSecurity("hic") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dellSwitchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addHpovManager

Add a hp oneview manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddHpovManagerResponse;
import org.openapis.openapi.models.operations.AddHpovManagerSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSource req = new SwitchDataSource() {{
                credentials = new PasswordCredentials("saepe", "fuga");;
                enabled = false;
                entityId = "in";
                entityType = DataSourceTypeEnum.JUNIPER_SWITCH_DATA_SOURCE;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                nickname = "vc1";
                notes = "iste";
                proxyId = "1000:104:12313412";
            }};            

            AddHpovManagerResponse res = sdk.dataSources.addHpovManager(req, new AddHpovManagerSecurity("iure") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addHpvcManager

Add hpvc manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddHpvcManagerResponse;
import org.openapis.openapi.models.operations.AddHpvcManagerSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSource req = new SwitchDataSource() {{
                credentials = new PasswordCredentials("saepe", "quidem");;
                enabled = false;
                entityId = "architecto";
                entityType = DataSourceTypeEnum.CISCO_SWITCH_DATA_SOURCE;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                nickname = "vc1";
                notes = "reiciendis";
                proxyId = "1000:104:12313412";
            }};            

            AddHpvcManagerResponse res = sdk.dataSources.addHpvcManager(req, new AddHpvcManagerSecurity("est") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addJuniperSwitch

Add switch Datasource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddJuniperSwitchResponse;
import org.openapis.openapi.models.operations.AddJuniperSwitchSecurity;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSourceRequest req = new SwitchDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("mollitia", "laborum");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "dolores";
            }};            

            AddJuniperSwitchResponse res = sdk.dataSources.addJuniperSwitch(req, new AddJuniperSwitchSecurity("dolorem") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addNsxvManagerDatasource

Add a nsx-v manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNsxvManagerDatasourceResponse;
import org.openapis.openapi.models.operations.AddNsxvManagerDatasourceSecurity;
import org.openapis.openapi.models.shared.NSXVManagerDataSourceRequest;
import org.openapis.openapi.models.shared.PasswordCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.NSXVManagerDataSourceRequest req = new NSXVManagerDataSourceRequest(                new PasswordCredentials("corporis", "explicabo");, "vc1", "1000:104:12313412", "nobis") {{
                centralCliEnabled = false;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                ipfixEnabled = false;
                notes = "enim";
            }};            

            AddNsxvManagerDatasourceResponse res = sdk.dataSources.addNsxvManagerDatasource(req, new AddNsxvManagerDatasourceSecurity("omnis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.nsxvManagerDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addPanoramaFirewall

Add panorama firewall as data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddPanoramaFirewallResponse;
import org.openapis.openapi.models.operations.AddPanoramaFirewallSecurity;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSourceRequest req = new SwitchDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("nemo", "minima");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "excepturi";
            }};            

            AddPanoramaFirewallResponse res = sdk.dataSources.addPanoramaFirewall(req, new AddPanoramaFirewallSecurity("accusantium") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addUcsManager

Add an ucs manager as data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddUcsManagerResponse;
import org.openapis.openapi.models.operations.AddUcsManagerSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SwitchDataSource req = new SwitchDataSource() {{
                credentials = new PasswordCredentials("iure", "culpa");;
                enabled = false;
                entityId = "doloribus";
                entityType = DataSourceTypeEnum.CHECKPOINT_FIREWALL_DATA_SOURCE;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                nickname = "vc1";
                notes = "architecto";
                proxyId = "1000:104:12313412";
            }};            

            AddUcsManagerResponse res = sdk.dataSources.addUcsManager(req, new AddUcsManagerSecurity("mollitia") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addVcenterDatasource

Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddVcenterDatasourceResponse;
import org.openapis.openapi.models.operations.AddVcenterDatasourceSecurity;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.VCenterDataSourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VCenterDataSourceRequest req = new VCenterDataSourceRequest("vc1", "1000:104:12313412") {{
                credentials = new PasswordCredentials("dolorem", "culpa");;
                enabled = false;
                fqdn = "your.domain.com";
                ip = "192.168.10.1";
                notes = "consequuntur";
            }};            

            AddVcenterDatasourceResponse res = sdk.dataSources.addVcenterDatasource(req, new AddVcenterDatasourceSecurity("repellat") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vCenterDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAristaSwitch

Delete an arista switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAristaSwitchRequest;
import org.openapis.openapi.models.operations.DeleteAristaSwitchResponse;
import org.openapis.openapi.models.operations.DeleteAristaSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAristaSwitchRequest req = new DeleteAristaSwitchRequest("mollitia");            

            DeleteAristaSwitchResponse res = sdk.dataSources.deleteAristaSwitch(req, new DeleteAristaSwitchSecurity("occaecati") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBrocadeSwitch

Delete a brocade switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBrocadeSwitchRequest;
import org.openapis.openapi.models.operations.DeleteBrocadeSwitchResponse;
import org.openapis.openapi.models.operations.DeleteBrocadeSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBrocadeSwitchRequest req = new DeleteBrocadeSwitchRequest("numquam");            

            DeleteBrocadeSwitchResponse res = sdk.dataSources.deleteBrocadeSwitch(req, new DeleteBrocadeSwitchSecurity("commodi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCheckpointFirewall

Delete a checkpoint firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCheckpointFirewallRequest;
import org.openapis.openapi.models.operations.DeleteCheckpointFirewallResponse;
import org.openapis.openapi.models.operations.DeleteCheckpointFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCheckpointFirewallRequest req = new DeleteCheckpointFirewallRequest("quam");            

            DeleteCheckpointFirewallResponse res = sdk.dataSources.deleteCheckpointFirewall(req, new DeleteCheckpointFirewallSecurity("molestiae") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCiscoSwitch

Delete a cisco switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCiscoSwitchRequest;
import org.openapis.openapi.models.operations.DeleteCiscoSwitchResponse;
import org.openapis.openapi.models.operations.DeleteCiscoSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCiscoSwitchRequest req = new DeleteCiscoSwitchRequest("velit");            

            DeleteCiscoSwitchResponse res = sdk.dataSources.deleteCiscoSwitch(req, new DeleteCiscoSwitchSecurity("error") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDellSwitch

Delete a data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDellSwitchRequest;
import org.openapis.openapi.models.operations.DeleteDellSwitchResponse;
import org.openapis.openapi.models.operations.DeleteDellSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDellSwitchRequest req = new DeleteDellSwitchRequest("quia");            

            DeleteDellSwitchResponse res = sdk.dataSources.deleteDellSwitch(req, new DeleteDellSwitchSecurity("quis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHpovManager

Delete a hp oneview data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHpovManagerRequest;
import org.openapis.openapi.models.operations.DeleteHpovManagerResponse;
import org.openapis.openapi.models.operations.DeleteHpovManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHpovManagerRequest req = new DeleteHpovManagerRequest("vitae");            

            DeleteHpovManagerResponse res = sdk.dataSources.deleteHpovManager(req, new DeleteHpovManagerSecurity("laborum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHpvcManager

Delete a hpvc manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHpvcManagerRequest;
import org.openapis.openapi.models.operations.DeleteHpvcManagerResponse;
import org.openapis.openapi.models.operations.DeleteHpvcManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteHpvcManagerRequest req = new DeleteHpvcManagerRequest("animi");            

            DeleteHpvcManagerResponse res = sdk.dataSources.deleteHpvcManager(req, new DeleteHpvcManagerSecurity("enim") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteJuniperSwitch

Delete a juniper switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJuniperSwitchRequest;
import org.openapis.openapi.models.operations.DeleteJuniperSwitchResponse;
import org.openapis.openapi.models.operations.DeleteJuniperSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJuniperSwitchRequest req = new DeleteJuniperSwitchRequest("odit");            

            DeleteJuniperSwitchResponse res = sdk.dataSources.deleteJuniperSwitch(req, new DeleteJuniperSwitchSecurity("quo") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNsxvManager

Delete a nsx-v manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNsxvManagerRequest;
import org.openapis.openapi.models.operations.DeleteNsxvManagerResponse;
import org.openapis.openapi.models.operations.DeleteNsxvManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteNsxvManagerRequest req = new DeleteNsxvManagerRequest("sequi");            

            DeleteNsxvManagerResponse res = sdk.dataSources.deleteNsxvManager(req, new DeleteNsxvManagerSecurity("tenetur") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePanoramaFirewall

Delete a panorama firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePanoramaFirewallRequest;
import org.openapis.openapi.models.operations.DeletePanoramaFirewallResponse;
import org.openapis.openapi.models.operations.DeletePanoramaFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePanoramaFirewallRequest req = new DeletePanoramaFirewallRequest("ipsam");            

            DeletePanoramaFirewallResponse res = sdk.dataSources.deletePanoramaFirewall(req, new DeletePanoramaFirewallSecurity("id") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUcsManager

Delete an ucs manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUcsManagerRequest;
import org.openapis.openapi.models.operations.DeleteUcsManagerResponse;
import org.openapis.openapi.models.operations.DeleteUcsManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUcsManagerRequest req = new DeleteUcsManagerRequest("possimus");            

            DeleteUcsManagerResponse res = sdk.dataSources.deleteUcsManager(req, new DeleteUcsManagerSecurity("aut") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVcenter

Delete a data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVcenterRequest;
import org.openapis.openapi.models.operations.DeleteVcenterResponse;
import org.openapis.openapi.models.operations.DeleteVcenterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVcenterRequest req = new DeleteVcenterRequest("quasi");            

            DeleteVcenterResponse res = sdk.dataSources.deleteVcenter(req, new DeleteVcenterSecurity("error") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableAristaSwitch

Disable an arista switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableAristaSwitchRequest;
import org.openapis.openapi.models.operations.DisableAristaSwitchResponse;
import org.openapis.openapi.models.operations.DisableAristaSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableAristaSwitchRequest req = new DisableAristaSwitchRequest("temporibus");            

            DisableAristaSwitchResponse res = sdk.dataSources.disableAristaSwitch(req, new DisableAristaSwitchSecurity("laborum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableBrocadeSwitch

Disable a brocade switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableBrocadeSwitchRequest;
import org.openapis.openapi.models.operations.DisableBrocadeSwitchResponse;
import org.openapis.openapi.models.operations.DisableBrocadeSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableBrocadeSwitchRequest req = new DisableBrocadeSwitchRequest("quasi");            

            DisableBrocadeSwitchResponse res = sdk.dataSources.disableBrocadeSwitch(req, new DisableBrocadeSwitchSecurity("reiciendis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableCheckpointFirewall

Disable a checkpoint firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableCheckpointFirewallRequest;
import org.openapis.openapi.models.operations.DisableCheckpointFirewallResponse;
import org.openapis.openapi.models.operations.DisableCheckpointFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableCheckpointFirewallRequest req = new DisableCheckpointFirewallRequest("voluptatibus");            

            DisableCheckpointFirewallResponse res = sdk.dataSources.disableCheckpointFirewall(req, new DisableCheckpointFirewallSecurity("vero") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableCiscoSwitch

Disable a cisco switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableCiscoSwitchRequest;
import org.openapis.openapi.models.operations.DisableCiscoSwitchResponse;
import org.openapis.openapi.models.operations.DisableCiscoSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableCiscoSwitchRequest req = new DisableCiscoSwitchRequest("nihil");            

            DisableCiscoSwitchResponse res = sdk.dataSources.disableCiscoSwitch(req, new DisableCiscoSwitchSecurity("praesentium") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableDellSwitch

Disable a dell switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableDellSwitchRequest;
import org.openapis.openapi.models.operations.DisableDellSwitchResponse;
import org.openapis.openapi.models.operations.DisableDellSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableDellSwitchRequest req = new DisableDellSwitchRequest("voluptatibus");            

            DisableDellSwitchResponse res = sdk.dataSources.disableDellSwitch(req, new DisableDellSwitchSecurity("ipsa") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableHpovManager

Disable a hp oneview data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableHpovManagerRequest;
import org.openapis.openapi.models.operations.DisableHpovManagerResponse;
import org.openapis.openapi.models.operations.DisableHpovManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableHpovManagerRequest req = new DisableHpovManagerRequest("omnis");            

            DisableHpovManagerResponse res = sdk.dataSources.disableHpovManager(req, new DisableHpovManagerSecurity("voluptate") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableHpvcManager

Disable a hpvc manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableHpvcManagerRequest;
import org.openapis.openapi.models.operations.DisableHpvcManagerResponse;
import org.openapis.openapi.models.operations.DisableHpvcManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableHpvcManagerRequest req = new DisableHpvcManagerRequest("cum");            

            DisableHpvcManagerResponse res = sdk.dataSources.disableHpvcManager(req, new DisableHpvcManagerSecurity("perferendis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableJuniperSwitch

Disable a juniper switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableJuniperSwitchRequest;
import org.openapis.openapi.models.operations.DisableJuniperSwitchResponse;
import org.openapis.openapi.models.operations.DisableJuniperSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableJuniperSwitchRequest req = new DisableJuniperSwitchRequest("doloremque");            

            DisableJuniperSwitchResponse res = sdk.dataSources.disableJuniperSwitch(req, new DisableJuniperSwitchSecurity("reprehenderit") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableNsxvManager

Disable a nsx-v manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableNsxvManagerRequest;
import org.openapis.openapi.models.operations.DisableNsxvManagerResponse;
import org.openapis.openapi.models.operations.DisableNsxvManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableNsxvManagerRequest req = new DisableNsxvManagerRequest("ut");            

            DisableNsxvManagerResponse res = sdk.dataSources.disableNsxvManager(req, new DisableNsxvManagerSecurity("maiores") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disablePanoramaFirewall

Disable a panorama firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisablePanoramaFirewallRequest;
import org.openapis.openapi.models.operations.DisablePanoramaFirewallResponse;
import org.openapis.openapi.models.operations.DisablePanoramaFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisablePanoramaFirewallRequest req = new DisablePanoramaFirewallRequest("dicta");            

            DisablePanoramaFirewallResponse res = sdk.dataSources.disablePanoramaFirewall(req, new DisablePanoramaFirewallSecurity("corporis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableUcsManager

Disable an ucs manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableUcsManagerRequest;
import org.openapis.openapi.models.operations.DisableUcsManagerResponse;
import org.openapis.openapi.models.operations.DisableUcsManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableUcsManagerRequest req = new DisableUcsManagerRequest("dolore");            

            DisableUcsManagerResponse res = sdk.dataSources.disableUcsManager(req, new DisableUcsManagerSecurity("iusto") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableVcenter

Disable a vCenter data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableVcenterRequest;
import org.openapis.openapi.models.operations.DisableVcenterResponse;
import org.openapis.openapi.models.operations.DisableVcenterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableVcenterRequest req = new DisableVcenterRequest("dicta");            

            DisableVcenterResponse res = sdk.dataSources.disableVcenter(req, new DisableVcenterSecurity("harum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableAristaSwitch

Enable an arista switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableAristaSwitchRequest;
import org.openapis.openapi.models.operations.EnableAristaSwitchResponse;
import org.openapis.openapi.models.operations.EnableAristaSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableAristaSwitchRequest req = new EnableAristaSwitchRequest("enim");            

            EnableAristaSwitchResponse res = sdk.dataSources.enableAristaSwitch(req, new EnableAristaSwitchSecurity("accusamus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableBrocadeSwitch

Enable a brocade switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableBrocadeSwitchRequest;
import org.openapis.openapi.models.operations.EnableBrocadeSwitchResponse;
import org.openapis.openapi.models.operations.EnableBrocadeSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableBrocadeSwitchRequest req = new EnableBrocadeSwitchRequest("commodi");            

            EnableBrocadeSwitchResponse res = sdk.dataSources.enableBrocadeSwitch(req, new EnableBrocadeSwitchSecurity("repudiandae") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableCheckpointFirewall

Enable a checkpoint firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableCheckpointFirewallRequest;
import org.openapis.openapi.models.operations.EnableCheckpointFirewallResponse;
import org.openapis.openapi.models.operations.EnableCheckpointFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableCheckpointFirewallRequest req = new EnableCheckpointFirewallRequest("quae");            

            EnableCheckpointFirewallResponse res = sdk.dataSources.enableCheckpointFirewall(req, new EnableCheckpointFirewallSecurity("ipsum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableCiscoSwitch

Enable a cisco switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableCiscoSwitchRequest;
import org.openapis.openapi.models.operations.EnableCiscoSwitchResponse;
import org.openapis.openapi.models.operations.EnableCiscoSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableCiscoSwitchRequest req = new EnableCiscoSwitchRequest("quidem");            

            EnableCiscoSwitchResponse res = sdk.dataSources.enableCiscoSwitch(req, new EnableCiscoSwitchSecurity("molestias") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableDellSwitch

Enable a dell switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableDellSwitchRequest;
import org.openapis.openapi.models.operations.EnableDellSwitchResponse;
import org.openapis.openapi.models.operations.EnableDellSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableDellSwitchRequest req = new EnableDellSwitchRequest("excepturi");            

            EnableDellSwitchResponse res = sdk.dataSources.enableDellSwitch(req, new EnableDellSwitchSecurity("pariatur") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableHpovManager

Enable a hp oneview data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableHpovManagerRequest;
import org.openapis.openapi.models.operations.EnableHpovManagerResponse;
import org.openapis.openapi.models.operations.EnableHpovManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableHpovManagerRequest req = new EnableHpovManagerRequest("modi");            

            EnableHpovManagerResponse res = sdk.dataSources.enableHpovManager(req, new EnableHpovManagerSecurity("praesentium") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableHpvcManager

Enable a hpvc manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableHpvcManagerRequest;
import org.openapis.openapi.models.operations.EnableHpvcManagerResponse;
import org.openapis.openapi.models.operations.EnableHpvcManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableHpvcManagerRequest req = new EnableHpvcManagerRequest("rem");            

            EnableHpvcManagerResponse res = sdk.dataSources.enableHpvcManager(req, new EnableHpvcManagerSecurity("voluptates") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableJuniperSwitch

Enable a juniper switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableJuniperSwitchRequest;
import org.openapis.openapi.models.operations.EnableJuniperSwitchResponse;
import org.openapis.openapi.models.operations.EnableJuniperSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableJuniperSwitchRequest req = new EnableJuniperSwitchRequest("quasi");            

            EnableJuniperSwitchResponse res = sdk.dataSources.enableJuniperSwitch(req, new EnableJuniperSwitchSecurity("repudiandae") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableNsxvManager

Enable a nsx-v manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableNsxvManagerRequest;
import org.openapis.openapi.models.operations.EnableNsxvManagerResponse;
import org.openapis.openapi.models.operations.EnableNsxvManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableNsxvManagerRequest req = new EnableNsxvManagerRequest("sint");            

            EnableNsxvManagerResponse res = sdk.dataSources.enableNsxvManager(req, new EnableNsxvManagerSecurity("veritatis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enablePanoramaFirewall

Enable a panorama firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnablePanoramaFirewallRequest;
import org.openapis.openapi.models.operations.EnablePanoramaFirewallResponse;
import org.openapis.openapi.models.operations.EnablePanoramaFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnablePanoramaFirewallRequest req = new EnablePanoramaFirewallRequest("itaque");            

            EnablePanoramaFirewallResponse res = sdk.dataSources.enablePanoramaFirewall(req, new EnablePanoramaFirewallSecurity("incidunt") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableUcsManager

Enable an ucs manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableUcsManagerRequest;
import org.openapis.openapi.models.operations.EnableUcsManagerResponse;
import org.openapis.openapi.models.operations.EnableUcsManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableUcsManagerRequest req = new EnableUcsManagerRequest("enim");            

            EnableUcsManagerResponse res = sdk.dataSources.enableUcsManager(req, new EnableUcsManagerSecurity("consequatur") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableVcenter

Enable a vCenter data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableVcenterRequest;
import org.openapis.openapi.models.operations.EnableVcenterResponse;
import org.openapis.openapi.models.operations.EnableVcenterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableVcenterRequest req = new EnableVcenterRequest("est");            

            EnableVcenterResponse res = sdk.dataSources.enableVcenter(req, new EnableVcenterSecurity("quibusdam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAristaSwitch

Show arista switch data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAristaSwitchRequest;
import org.openapis.openapi.models.operations.GetAristaSwitchResponse;
import org.openapis.openapi.models.operations.GetAristaSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAristaSwitchRequest req = new GetAristaSwitchRequest("explicabo");            

            GetAristaSwitchResponse res = sdk.dataSources.getAristaSwitch(req, new GetAristaSwitchSecurity("deserunt") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAristaSwitchSnmpConfig

Show snmp config for arista switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAristaSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.GetAristaSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.GetAristaSwitchSnmpConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAristaSwitchSnmpConfigRequest req = new GetAristaSwitchSnmpConfigRequest("distinctio");            

            GetAristaSwitchSnmpConfigResponse res = sdk.dataSources.getAristaSwitchSnmpConfig(req, new GetAristaSwitchSnmpConfigSecurity("quibusdam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBrocadeSwitch

Show brocade switch data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBrocadeSwitchRequest;
import org.openapis.openapi.models.operations.GetBrocadeSwitchResponse;
import org.openapis.openapi.models.operations.GetBrocadeSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBrocadeSwitchRequest req = new GetBrocadeSwitchRequest("labore");            

            GetBrocadeSwitchResponse res = sdk.dataSources.getBrocadeSwitch(req, new GetBrocadeSwitchSecurity("modi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBrocadeSwitchSnmpConfig

Show snmp config for brocade switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBrocadeSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.GetBrocadeSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.GetBrocadeSwitchSnmpConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBrocadeSwitchSnmpConfigRequest req = new GetBrocadeSwitchSnmpConfigRequest("qui");            

            GetBrocadeSwitchSnmpConfigResponse res = sdk.dataSources.getBrocadeSwitchSnmpConfig(req, new GetBrocadeSwitchSnmpConfigSecurity("aliquid") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCheckpointFirewall

Show checkpoint firewall data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCheckpointFirewallRequest;
import org.openapis.openapi.models.operations.GetCheckpointFirewallResponse;
import org.openapis.openapi.models.operations.GetCheckpointFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCheckpointFirewallRequest req = new GetCheckpointFirewallRequest("cupiditate");            

            GetCheckpointFirewallResponse res = sdk.dataSources.getCheckpointFirewall(req, new GetCheckpointFirewallSecurity("quos") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCiscoSwitch

Show cisco switch data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCiscoSwitchRequest;
import org.openapis.openapi.models.operations.GetCiscoSwitchResponse;
import org.openapis.openapi.models.operations.GetCiscoSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCiscoSwitchRequest req = new GetCiscoSwitchRequest("perferendis");            

            GetCiscoSwitchResponse res = sdk.dataSources.getCiscoSwitch(req, new GetCiscoSwitchSecurity("magni") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.ciscoSwitchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCiscoSwitchSnmpConfig

Show snmp config for cisco switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCiscoSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.GetCiscoSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.GetCiscoSwitchSnmpConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCiscoSwitchSnmpConfigRequest req = new GetCiscoSwitchSnmpConfigRequest("assumenda");            

            GetCiscoSwitchSnmpConfigResponse res = sdk.dataSources.getCiscoSwitchSnmpConfig(req, new GetCiscoSwitchSnmpConfigSecurity("ipsam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDellSwitch

Get a dell switch data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDellSwitchRequest;
import org.openapis.openapi.models.operations.GetDellSwitchResponse;
import org.openapis.openapi.models.operations.GetDellSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDellSwitchRequest req = new GetDellSwitchRequest("alias");            

            GetDellSwitchResponse res = sdk.dataSources.getDellSwitch(req, new GetDellSwitchSecurity("fugit") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dellSwitchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDellSwitchSnmpConfig

Show snmp config for dell switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDellSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.GetDellSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.GetDellSwitchSnmpConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDellSwitchSnmpConfigRequest req = new GetDellSwitchSnmpConfigRequest("dolorum");            

            GetDellSwitchSnmpConfigResponse res = sdk.dataSources.getDellSwitchSnmpConfig(req, new GetDellSwitchSnmpConfigSecurity("excepturi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHpovManager

Show hp oneview data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHpovManagerRequest;
import org.openapis.openapi.models.operations.GetHpovManagerResponse;
import org.openapis.openapi.models.operations.GetHpovManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHpovManagerRequest req = new GetHpovManagerRequest("tempora");            

            GetHpovManagerResponse res = sdk.dataSources.getHpovManager(req, new GetHpovManagerSecurity("facilis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHpvcManager

Show hpvc data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHpvcManagerRequest;
import org.openapis.openapi.models.operations.GetHpvcManagerResponse;
import org.openapis.openapi.models.operations.GetHpvcManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHpvcManagerRequest req = new GetHpvcManagerRequest("tempore");            

            GetHpvcManagerResponse res = sdk.dataSources.getHpvcManager(req, new GetHpvcManagerSecurity("labore") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJuniperSwitch

Show juniper switch data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJuniperSwitchRequest;
import org.openapis.openapi.models.operations.GetJuniperSwitchResponse;
import org.openapis.openapi.models.operations.GetJuniperSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJuniperSwitchRequest req = new GetJuniperSwitchRequest("delectus");            

            GetJuniperSwitchResponse res = sdk.dataSources.getJuniperSwitch(req, new GetJuniperSwitchSecurity("eum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJuniperSwitchSnmpConfig

Show snmp config for juniper switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJuniperSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.GetJuniperSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.GetJuniperSwitchSnmpConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJuniperSwitchSnmpConfigRequest req = new GetJuniperSwitchSnmpConfigRequest("non");            

            GetJuniperSwitchSnmpConfigResponse res = sdk.dataSources.getJuniperSwitchSnmpConfig(req, new GetJuniperSwitchSnmpConfigSecurity("eligendi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNsxvControllerCluster

Show nsx controller-cluster details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNsxvControllerClusterRequest;
import org.openapis.openapi.models.operations.GetNsxvControllerClusterResponse;
import org.openapis.openapi.models.operations.GetNsxvControllerClusterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNsxvControllerClusterRequest req = new GetNsxvControllerClusterRequest("sint");            

            GetNsxvControllerClusterResponse res = sdk.dataSources.getNsxvControllerCluster(req, new GetNsxvControllerClusterSecurity("aliquid") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.nsxControllerDataCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNsxvManager

Show nsx-v manager data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNsxvManagerRequest;
import org.openapis.openapi.models.operations.GetNsxvManagerResponse;
import org.openapis.openapi.models.operations.GetNsxvManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNsxvManagerRequest req = new GetNsxvManagerRequest("provident");            

            GetNsxvManagerResponse res = sdk.dataSources.getNsxvManager(req, new GetNsxvManagerSecurity("necessitatibus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.nsxvManagerDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPanoramaFirewall

Show panorama firewall data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPanoramaFirewallRequest;
import org.openapis.openapi.models.operations.GetPanoramaFirewallResponse;
import org.openapis.openapi.models.operations.GetPanoramaFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPanoramaFirewallRequest req = new GetPanoramaFirewallRequest("sint");            

            GetPanoramaFirewallResponse res = sdk.dataSources.getPanoramaFirewall(req, new GetPanoramaFirewallSecurity("officia") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUcsManager

Show ucs manager data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUcsManagerRequest;
import org.openapis.openapi.models.operations.GetUcsManagerResponse;
import org.openapis.openapi.models.operations.GetUcsManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUcsManagerRequest req = new GetUcsManagerRequest("dolor");            

            GetUcsManagerResponse res = sdk.dataSources.getUcsManager(req, new GetUcsManagerSecurity("debitis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUcsSnmpConfig

Show snmp config for ucs fabric interconnects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUcsSnmpConfigRequest;
import org.openapis.openapi.models.operations.GetUcsSnmpConfigResponse;
import org.openapis.openapi.models.operations.GetUcsSnmpConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUcsSnmpConfigRequest req = new GetUcsSnmpConfigRequest("a");            

            GetUcsSnmpConfigResponse res = sdk.dataSources.getUcsSnmpConfig(req, new GetUcsSnmpConfigSecurity("dolorum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcenter

Show vCenter data source details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcenterRequest;
import org.openapis.openapi.models.operations.GetVcenterResponse;
import org.openapis.openapi.models.operations.GetVcenterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVcenterRequest req = new GetVcenterRequest("in");            

            GetVcenterResponse res = sdk.dataSources.getVcenter(req, new GetVcenterSecurity("in") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vCenterDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAristaSwitches

List arista switch data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAristaSwitchesResponse;
import org.openapis.openapi.models.operations.ListAristaSwitchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAristaSwitchesResponse res = sdk.dataSources.listAristaSwitches(new ListAristaSwitchesSecurity("illum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBrocadeSwitches

List brocade switch data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBrocadeSwitchesResponse;
import org.openapis.openapi.models.operations.ListBrocadeSwitchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBrocadeSwitchesResponse res = sdk.dataSources.listBrocadeSwitches(new ListBrocadeSwitchesSecurity("maiores") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCheckpointFirewalls

List checkpoint firewall data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCheckpointFirewallsResponse;
import org.openapis.openapi.models.operations.ListCheckpointFirewallsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCheckpointFirewallsResponse res = sdk.dataSources.listCheckpointFirewalls(new ListCheckpointFirewallsSecurity("rerum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCiscoSwitches

List cisco switch data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCiscoSwitchesResponse;
import org.openapis.openapi.models.operations.ListCiscoSwitchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCiscoSwitchesResponse res = sdk.dataSources.listCiscoSwitches(new ListCiscoSwitchesSecurity("dicta") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDellSwitches

List dell switch data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDellSwitchesResponse;
import org.openapis.openapi.models.operations.ListDellSwitchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDellSwitchesResponse res = sdk.dataSources.listDellSwitches(new ListDellSwitchesSecurity("magnam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHpovManagers

List hp oneview manager data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHpovManagersResponse;
import org.openapis.openapi.models.operations.ListHpovManagersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHpovManagersResponse res = sdk.dataSources.listHpovManagers(new ListHpovManagersSecurity("cumque") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHpvcManagers

List hpvc manager data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHpvcManagersResponse;
import org.openapis.openapi.models.operations.ListHpvcManagersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHpvcManagersResponse res = sdk.dataSources.listHpvcManagers(new ListHpvcManagersSecurity("facere") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJuniperSwitches

List juniper switch data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJuniperSwitchesResponse;
import org.openapis.openapi.models.operations.ListJuniperSwitchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListJuniperSwitchesResponse res = sdk.dataSources.listJuniperSwitches(new ListJuniperSwitchesSecurity("ea") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNsxvManagers

List nsx-v manager data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNsxvManagersResponse;
import org.openapis.openapi.models.operations.ListNsxvManagersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListNsxvManagersResponse res = sdk.dataSources.listNsxvManagers(new ListNsxvManagersSecurity("aliquid") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPanoramaFirewalls

List panorama firewall data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPanoramaFirewallsResponse;
import org.openapis.openapi.models.operations.ListPanoramaFirewallsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPanoramaFirewallsResponse res = sdk.dataSources.listPanoramaFirewalls(new ListPanoramaFirewallsSecurity("laborum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUcsManagers

List ucs manager data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUcsManagersResponse;
import org.openapis.openapi.models.operations.ListUcsManagersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUcsManagersResponse res = sdk.dataSources.listUcsManagers(new ListUcsManagersSecurity("accusamus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVcenters

List vCenter data sources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVcentersResponse;
import org.openapis.openapi.models.operations.ListVcentersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVcentersResponse res = sdk.dataSources.listVcenters(new ListVcentersSecurity("non") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSourceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAristaSwitch

Update an switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAristaSwitchRequest;
import org.openapis.openapi.models.operations.UpdateAristaSwitchResponse;
import org.openapis.openapi.models.operations.UpdateAristaSwitchSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAristaSwitchRequest req = new UpdateAristaSwitchRequest("occaecati") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("enim", "accusamus");;
                    enabled = false;
                    entityId = "delectus";
                    entityType = DataSourceTypeEnum.HPVC_MANAGER_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "provident";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateAristaSwitchResponse res = sdk.dataSources.updateAristaSwitch(req, new UpdateAristaSwitchSecurity("nam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAristaSwitchSnmpConfig

Update snmp config for arista switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAristaSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.UpdateAristaSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.UpdateAristaSwitchSnmpConfigSecurity;
import org.openapis.openapi.models.shared.SNMPConfig;
import org.openapis.openapi.models.shared.SNMPConfigSNMPVersionEnum;
import org.openapis.openapi.models.shared.Snmp2cConfig;
import org.openapis.openapi.models.shared.Snmp3Config;
import org.openapis.openapi.models.shared.Snmp3ConfigAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Snmp3ConfigPrivacyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAristaSwitchSnmpConfigRequest req = new UpdateAristaSwitchSnmpConfigRequest("id") {{
                snmpConfig = new SNMPConfig() {{
                    configSnmp2c = new Snmp2cConfig() {{
                        communityString = "blanditiis";
                    }};;
                    configSnmp3 = new Snmp3Config() {{
                        authenticationPassword = "deleniti";
                        authenticationType = Snmp3ConfigAuthenticationTypeEnum.SHA;
                        contextName = "amet";
                        privacyPassword = "deserunt";
                        privacyType = Snmp3ConfigPrivacyTypeEnum.AES128;
                        username = "Henry.Mosciski";
                    }};;
                    snmpEnabled = false;
                    snmpVersion = SNMPConfigSNMPVersionEnum.V2C;
                }};;
            }};            

            UpdateAristaSwitchSnmpConfigResponse res = sdk.dataSources.updateAristaSwitchSnmpConfig(req, new UpdateAristaSwitchSnmpConfigSecurity("nihil") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBrocadeSwitch

Update a brocade switch data source. Only credentials, nickname and notes can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBrocadeSwitchRequest;
import org.openapis.openapi.models.operations.UpdateBrocadeSwitchResponse;
import org.openapis.openapi.models.operations.UpdateBrocadeSwitchSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBrocadeSwitchRequest req = new UpdateBrocadeSwitchRequest("magnam") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("distinctio", "id");;
                    enabled = false;
                    entityId = "labore";
                    entityType = DataSourceTypeEnum.BROCADE_SWITCH_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "suscipit";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateBrocadeSwitchResponse res = sdk.dataSources.updateBrocadeSwitch(req, new UpdateBrocadeSwitchSecurity("natus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBrocadeSwitchSnmpConfig

Update snmp config for brocade switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBrocadeSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.UpdateBrocadeSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.UpdateBrocadeSwitchSnmpConfigSecurity;
import org.openapis.openapi.models.shared.SNMPConfig;
import org.openapis.openapi.models.shared.SNMPConfigSNMPVersionEnum;
import org.openapis.openapi.models.shared.Snmp2cConfig;
import org.openapis.openapi.models.shared.Snmp3Config;
import org.openapis.openapi.models.shared.Snmp3ConfigAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Snmp3ConfigPrivacyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBrocadeSwitchSnmpConfigRequest req = new UpdateBrocadeSwitchSnmpConfigRequest("nobis") {{
                snmpConfig = new SNMPConfig() {{
                    configSnmp2c = new Snmp2cConfig() {{
                        communityString = "eum";
                    }};;
                    configSnmp3 = new Snmp3Config() {{
                        authenticationPassword = "vero";
                        authenticationType = Snmp3ConfigAuthenticationTypeEnum.NO_AUTH;
                        contextName = "architecto";
                        privacyPassword = "magnam";
                        privacyType = Snmp3ConfigPrivacyTypeEnum.AES;
                        username = "Kevon_Hermann";
                    }};;
                    snmpEnabled = false;
                    snmpVersion = SNMPConfigSNMPVersionEnum.V3;
                }};;
            }};            

            UpdateBrocadeSwitchSnmpConfigResponse res = sdk.dataSources.updateBrocadeSwitchSnmpConfig(req, new UpdateBrocadeSwitchSnmpConfigSecurity("accusantium") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCheckpointFirewall

Update a checkpoint firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCheckpointFirewallRequest;
import org.openapis.openapi.models.operations.UpdateCheckpointFirewallResponse;
import org.openapis.openapi.models.operations.UpdateCheckpointFirewallSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCheckpointFirewallRequest req = new UpdateCheckpointFirewallRequest("mollitia") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("reiciendis", "mollitia");;
                    enabled = false;
                    entityId = "ad";
                    entityType = DataSourceTypeEnum.V_CENTER_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "dolor";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateCheckpointFirewallResponse res = sdk.dataSources.updateCheckpointFirewall(req, new UpdateCheckpointFirewallSecurity("necessitatibus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCiscoSwitch

Update a cisco switch data source. Only credentials, nickname and notes can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCiscoSwitchRequest;
import org.openapis.openapi.models.operations.UpdateCiscoSwitchResponse;
import org.openapis.openapi.models.operations.UpdateCiscoSwitchSecurity;
import org.openapis.openapi.models.shared.CiscoSwitchDataSource;
import org.openapis.openapi.models.shared.CiscoSwitchTypeEnum;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCiscoSwitchRequest req = new UpdateCiscoSwitchRequest("odit") {{
                ciscoSwitchDataSource = new CiscoSwitchDataSource() {{
                    credentials = new PasswordCredentials("nemo", "quasi");;
                    enabled = false;
                    entityId = "iure";
                    entityType = DataSourceTypeEnum.CHECKPOINT_FIREWALL_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "debitis";
                    proxyId = "1000:104:12313412";
                    switchType = CiscoSwitchTypeEnum.CATALYST4500;
                }};;
            }};            

            UpdateCiscoSwitchResponse res = sdk.dataSources.updateCiscoSwitch(req, new UpdateCiscoSwitchSecurity("maxime") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.ciscoSwitchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCiscoSwitchSnmpConfig

Update snmp config for cisco switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCiscoSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.UpdateCiscoSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.UpdateCiscoSwitchSnmpConfigSecurity;
import org.openapis.openapi.models.shared.SNMPConfig;
import org.openapis.openapi.models.shared.SNMPConfigSNMPVersionEnum;
import org.openapis.openapi.models.shared.Snmp2cConfig;
import org.openapis.openapi.models.shared.Snmp3Config;
import org.openapis.openapi.models.shared.Snmp3ConfigAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Snmp3ConfigPrivacyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCiscoSwitchSnmpConfigRequest req = new UpdateCiscoSwitchSnmpConfigRequest("deleniti") {{
                snmpConfig = new SNMPConfig() {{
                    configSnmp2c = new Snmp2cConfig() {{
                        communityString = "facilis";
                    }};;
                    configSnmp3 = new Snmp3Config() {{
                        authenticationPassword = "in";
                        authenticationType = Snmp3ConfigAuthenticationTypeEnum.NO_AUTH;
                        contextName = "architecto";
                        privacyPassword = "repudiandae";
                        privacyType = Snmp3ConfigPrivacyTypeEnum.AES128;
                        username = "Michael_Koss14";
                    }};;
                    snmpEnabled = false;
                    snmpVersion = SNMPConfigSNMPVersionEnum.V3;
                }};;
            }};            

            UpdateCiscoSwitchSnmpConfigResponse res = sdk.dataSources.updateCiscoSwitchSnmpConfig(req, new UpdateCiscoSwitchSnmpConfigSecurity("pariatur") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDellSwitch

Update a dell switch data source. Only credentials, nickname and notes can be updated

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDellSwitchRequest;
import org.openapis.openapi.models.operations.UpdateDellSwitchResponse;
import org.openapis.openapi.models.operations.UpdateDellSwitchSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.DellSwitchDataSource;
import org.openapis.openapi.models.shared.DellSwitchTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDellSwitchRequest req = new UpdateDellSwitchRequest("accusantium") {{
                dellSwitchDataSource = new DellSwitchDataSource() {{
                    credentials = new PasswordCredentials("consequuntur", "praesentium");;
                    enabled = false;
                    entityId = "natus";
                    entityType = DataSourceTypeEnum.ARISTA_SWITCH_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "sunt";
                    proxyId = "1000:104:12313412";
                    switchType = DellSwitchTypeEnum.Z9100;
                }};;
            }};            

            UpdateDellSwitchResponse res = sdk.dataSources.updateDellSwitch(req, new UpdateDellSwitchSecurity("illum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.dellSwitchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDellSwitchSnmpConfig

Update snmp config for dell switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDellSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.UpdateDellSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.UpdateDellSwitchSnmpConfigSecurity;
import org.openapis.openapi.models.shared.SNMPConfig;
import org.openapis.openapi.models.shared.SNMPConfigSNMPVersionEnum;
import org.openapis.openapi.models.shared.Snmp2cConfig;
import org.openapis.openapi.models.shared.Snmp3Config;
import org.openapis.openapi.models.shared.Snmp3ConfigAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Snmp3ConfigPrivacyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDellSwitchSnmpConfigRequest req = new UpdateDellSwitchSnmpConfigRequest("pariatur") {{
                snmpConfig = new SNMPConfig() {{
                    configSnmp2c = new Snmp2cConfig() {{
                        communityString = "maxime";
                    }};;
                    configSnmp3 = new Snmp3Config() {{
                        authenticationPassword = "ea";
                        authenticationType = Snmp3ConfigAuthenticationTypeEnum.MD5;
                        contextName = "odit";
                        privacyPassword = "ea";
                        privacyType = Snmp3ConfigPrivacyTypeEnum.AES;
                        username = "Annie.Wunsch45";
                    }};;
                    snmpEnabled = false;
                    snmpVersion = SNMPConfigSNMPVersionEnum.V2C;
                }};;
            }};            

            UpdateDellSwitchSnmpConfigResponse res = sdk.dataSources.updateDellSwitchSnmpConfig(req, new UpdateDellSwitchSnmpConfigSecurity("nam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHpovManager

Update a hp oneview data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHpovManagerRequest;
import org.openapis.openapi.models.operations.UpdateHpovManagerResponse;
import org.openapis.openapi.models.operations.UpdateHpovManagerSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateHpovManagerRequest req = new UpdateHpovManagerRequest("eaque") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("pariatur", "nemo");;
                    enabled = false;
                    entityId = "voluptatibus";
                    entityType = DataSourceTypeEnum.CISCO_SWITCH_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "fugiat";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateHpovManagerResponse res = sdk.dataSources.updateHpovManager(req, new UpdateHpovManagerSecurity("amet") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHpvcManager

Update a hpvc manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHpvcManagerRequest;
import org.openapis.openapi.models.operations.UpdateHpvcManagerResponse;
import org.openapis.openapi.models.operations.UpdateHpvcManagerSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateHpvcManagerRequest req = new UpdateHpvcManagerRequest("aut") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("cumque", "corporis");;
                    enabled = false;
                    entityId = "hic";
                    entityType = DataSourceTypeEnum.HPVC_MANAGER_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "nobis";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateHpvcManagerResponse res = sdk.dataSources.updateHpvcManager(req, new UpdateHpvcManagerSecurity("dolores") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateJuniperSwitch

Update a juniper switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateJuniperSwitchRequest;
import org.openapis.openapi.models.operations.UpdateJuniperSwitchResponse;
import org.openapis.openapi.models.operations.UpdateJuniperSwitchSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateJuniperSwitchRequest req = new UpdateJuniperSwitchRequest("quis") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("totam", "dignissimos");;
                    enabled = false;
                    entityId = "eaque";
                    entityType = DataSourceTypeEnum.JUNIPER_SWITCH_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "nesciunt";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateJuniperSwitchResponse res = sdk.dataSources.updateJuniperSwitch(req, new UpdateJuniperSwitchSecurity("eos") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateJuniperSwitchSnmpConfig

Update snmp config for a juniper switch data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateJuniperSwitchSnmpConfigRequest;
import org.openapis.openapi.models.operations.UpdateJuniperSwitchSnmpConfigResponse;
import org.openapis.openapi.models.operations.UpdateJuniperSwitchSnmpConfigSecurity;
import org.openapis.openapi.models.shared.SNMPConfig;
import org.openapis.openapi.models.shared.SNMPConfigSNMPVersionEnum;
import org.openapis.openapi.models.shared.Snmp2cConfig;
import org.openapis.openapi.models.shared.Snmp3Config;
import org.openapis.openapi.models.shared.Snmp3ConfigAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Snmp3ConfigPrivacyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateJuniperSwitchSnmpConfigRequest req = new UpdateJuniperSwitchSnmpConfigRequest("perferendis") {{
                snmpConfig = new SNMPConfig() {{
                    configSnmp2c = new Snmp2cConfig() {{
                        communityString = "dolores";
                    }};;
                    configSnmp3 = new Snmp3Config() {{
                        authenticationPassword = "minus";
                        authenticationType = Snmp3ConfigAuthenticationTypeEnum.MD5;
                        contextName = "dolor";
                        privacyPassword = "vero";
                        privacyType = Snmp3ConfigPrivacyTypeEnum.AES128;
                        username = "Tyreek_Walter";
                    }};;
                    snmpEnabled = false;
                    snmpVersion = SNMPConfigSNMPVersionEnum.V3;
                }};;
            }};            

            UpdateJuniperSwitchSnmpConfigResponse res = sdk.dataSources.updateJuniperSwitchSnmpConfig(req, new UpdateJuniperSwitchSnmpConfigSecurity("voluptatem") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNsxvControllerCluster

Update nsx controller-cluster details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNsxvControllerClusterRequest;
import org.openapis.openapi.models.operations.UpdateNsxvControllerClusterResponse;
import org.openapis.openapi.models.operations.UpdateNsxvControllerClusterSecurity;
import org.openapis.openapi.models.shared.NSXControllerDataCollection;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateNsxvControllerClusterRequest req = new UpdateNsxvControllerClusterRequest("porro") {{
                nsxControllerDataCollection = new NSXControllerDataCollection() {{
                    controllerPassword = "consequuntur";
                    enabled = false;
                }};;
            }};            

            UpdateNsxvControllerClusterResponse res = sdk.dataSources.updateNsxvControllerCluster(req, new UpdateNsxvControllerClusterSecurity("blanditiis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.nsxControllerDataCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNsxvManager

Update a nsx-v manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNsxvManagerRequest;
import org.openapis.openapi.models.operations.UpdateNsxvManagerResponse;
import org.openapis.openapi.models.operations.UpdateNsxvManagerSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.NSXVManagerDataSource;
import org.openapis.openapi.models.shared.PasswordCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateNsxvManagerRequest req = new UpdateNsxvManagerRequest("error") {{
                nsxvManagerDataSource = new NSXVManagerDataSource() {{
                    centralCliEnabled = false;
                    credentials = new PasswordCredentials("eaque", "occaecati");;
                    enabled = false;
                    entityId = "rerum";
                    entityType = DataSourceTypeEnum.ARISTA_SWITCH_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    ipfixEnabled = false;
                    nickname = "vc1";
                    notes = "asperiores";
                    proxyId = "1000:104:12313412";
                    vcenterId = "earum";
                }};;
            }};            

            UpdateNsxvManagerResponse res = sdk.dataSources.updateNsxvManager(req, new UpdateNsxvManagerSecurity("modi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.nsxvManagerDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePanoramaFirewall

Update a panorama firewall data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePanoramaFirewallRequest;
import org.openapis.openapi.models.operations.UpdatePanoramaFirewallResponse;
import org.openapis.openapi.models.operations.UpdatePanoramaFirewallSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePanoramaFirewallRequest req = new UpdatePanoramaFirewallRequest("iste") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("dolorum", "deleniti");;
                    enabled = false;
                    entityId = "pariatur";
                    entityType = DataSourceTypeEnum.UCS_MANAGER_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "nobis";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdatePanoramaFirewallResponse res = sdk.dataSources.updatePanoramaFirewall(req, new UpdatePanoramaFirewallSecurity("libero") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUcsManager

Update an ucs manager data source

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUcsManagerRequest;
import org.openapis.openapi.models.operations.UpdateUcsManagerResponse;
import org.openapis.openapi.models.operations.UpdateUcsManagerSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.SwitchDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUcsManagerRequest req = new UpdateUcsManagerRequest("delectus") {{
                switchDataSource = new SwitchDataSource() {{
                    credentials = new PasswordCredentials("quaerat", "quos");;
                    enabled = false;
                    entityId = "aliquid";
                    entityType = DataSourceTypeEnum.ARISTA_SWITCH_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "dolorem";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateUcsManagerResponse res = sdk.dataSources.updateUcsManager(req, new UpdateUcsManagerSecurity("dolor") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.switchDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUcsSnmpConfig

Update snmp config for ucs fabric interconnects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUcsSnmpConfigRequest;
import org.openapis.openapi.models.operations.UpdateUcsSnmpConfigResponse;
import org.openapis.openapi.models.operations.UpdateUcsSnmpConfigSecurity;
import org.openapis.openapi.models.shared.SNMPConfig;
import org.openapis.openapi.models.shared.SNMPConfigSNMPVersionEnum;
import org.openapis.openapi.models.shared.Snmp2cConfig;
import org.openapis.openapi.models.shared.Snmp3Config;
import org.openapis.openapi.models.shared.Snmp3ConfigAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Snmp3ConfigPrivacyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUcsSnmpConfigRequest req = new UpdateUcsSnmpConfigRequest("qui") {{
                snmpConfig = new SNMPConfig() {{
                    configSnmp2c = new Snmp2cConfig() {{
                        communityString = "ipsum";
                    }};;
                    configSnmp3 = new Snmp3Config() {{
                        authenticationPassword = "hic";
                        authenticationType = Snmp3ConfigAuthenticationTypeEnum.MD5;
                        contextName = "cum";
                        privacyPassword = "voluptate";
                        privacyType = Snmp3ConfigPrivacyTypeEnum.AES192;
                        username = "Waldo.Farrell8";
                    }};;
                    snmpEnabled = false;
                    snmpVersion = SNMPConfigSNMPVersionEnum.V2C;
                }};;
            }};            

            UpdateUcsSnmpConfigResponse res = sdk.dataSources.updateUcsSnmpConfig(req, new UpdateUcsSnmpConfigSecurity("ipsa") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.snmpConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVcenter

Update a vcenter data source. Only nickname, notes and credentials can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVcenterRequest;
import org.openapis.openapi.models.operations.UpdateVcenterResponse;
import org.openapis.openapi.models.operations.UpdateVcenterSecurity;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.PasswordCredentials;
import org.openapis.openapi.models.shared.VCenterDataSource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateVcenterRequest req = new UpdateVcenterRequest("iure") {{
                vCenterDataSource = new VCenterDataSource() {{
                    credentials = new PasswordCredentials("odio", "quaerat");;
                    enabled = false;
                    entityId = "accusamus";
                    entityType = DataSourceTypeEnum.HPVC_MANAGER_DATA_SOURCE;
                    fqdn = "your.domain.com";
                    ip = "192.168.10.1";
                    nickname = "vc1";
                    notes = "voluptatibus";
                    proxyId = "1000:104:12313412";
                }};;
            }};            

            UpdateVcenterResponse res = sdk.dataSources.updateVcenter(req, new UpdateVcenterSecurity("voluptas") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vCenterDataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
