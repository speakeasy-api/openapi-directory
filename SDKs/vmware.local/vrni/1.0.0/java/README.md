# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationResponse;
import org.openapis.openapi.models.operations.AddApplicationSecurity;
import org.openapis.openapi.models.shared.ApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ApplicationRequest req = new ApplicationRequest() {{
                name = "Terrence Rau";
            }};            

            AddApplicationResponse res = sdk.applications.addApplication(req, new AddApplicationSecurity("nulla") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [applications](docs/applications/README.md)

* [addApplication](docs/applications/README.md#addapplication) - Create an application
* [addTier](docs/applications/README.md#addtier) - Create tier in application
* [deleteApplication](docs/applications/README.md#deleteapplication) - Delete an application
* [deleteTier](docs/applications/README.md#deletetier) - Delete tier
* [getApplication](docs/applications/README.md#getapplication) - Show application details
* [getApplicationTier](docs/applications/README.md#getapplicationtier) - Show tier details
* [getTier](docs/applications/README.md#gettier) - Show tier details
* [listApplicationTiers](docs/applications/README.md#listapplicationtiers) - List tiers of an application
* [listApplications](docs/applications/README.md#listapplications) - List applications

### [authentication](docs/authentication/README.md)

* [create](docs/authentication/README.md#create) - Create an auth token
* [delete](docs/authentication/README.md#delete) - Delete an auth token.

### [dataSources](docs/datasources/README.md)

* [addAristaSwitch](docs/datasources/README.md#addaristaswitch) - Create an arista switch data source
* [addBrocadeSwitch](docs/datasources/README.md#addbrocadeswitch) - Create a brocade switch data source
* [addCheckpointFirewall](docs/datasources/README.md#addcheckpointfirewall) - Create a checkpoint firewall
* [addCiscoSwitch](docs/datasources/README.md#addciscoswitch) - Create a cisco switch data source
* [addDellSwitch](docs/datasources/README.md#adddellswitch) - Create a dell switch data source
* [addHpovManager](docs/datasources/README.md#addhpovmanager) - Create a hp oneview manager data source
* [addHpvcManager](docs/datasources/README.md#addhpvcmanager) - Create a hpvc manager data source
* [addJuniperSwitch](docs/datasources/README.md#addjuniperswitch) - Add a juniper switch as data source
* [addNsxvManagerDatasource](docs/datasources/README.md#addnsxvmanagerdatasource) - Create a nsx-v manager data source
* [addPanoramaFirewall](docs/datasources/README.md#addpanoramafirewall) - Create panorama firewall data source
* [addUcsManager](docs/datasources/README.md#adducsmanager) - Create an ucs manager data source
* [addVcenterDatasource](docs/datasources/README.md#addvcenterdatasource) - Create a vCenter data source
* [deleteAristaSwitch](docs/datasources/README.md#deletearistaswitch) - Delete an arista switch data source
* [deleteBrocadeSwitch](docs/datasources/README.md#deletebrocadeswitch) - Delete a brocade switch data source
* [deleteCheckpointFirewall](docs/datasources/README.md#deletecheckpointfirewall) - Delete a checkpoint firewall data source
* [deleteCiscoSwitch](docs/datasources/README.md#deleteciscoswitch) - Delete a cisco switch data source
* [deleteDellSwitch](docs/datasources/README.md#deletedellswitch) - Delete a dell switch data source
* [deleteHpovManager](docs/datasources/README.md#deletehpovmanager) - Delete a hp oneview data source
* [deleteHpvcManager](docs/datasources/README.md#deletehpvcmanager) - Delete a hpvc manager data source
* [deleteJuniperSwitch](docs/datasources/README.md#deletejuniperswitch) - Delete a juniper switch data source
* [deleteNsxvManager](docs/datasources/README.md#deletensxvmanager) - Delete a nsx-v manager data source
* [deletePanoramaFirewall](docs/datasources/README.md#deletepanoramafirewall) - Delete a panorama firewall data source
* [deleteUcsManager](docs/datasources/README.md#deleteucsmanager) - Delete an ucs manager data source
* [deleteVcenter](docs/datasources/README.md#deletevcenter) - Delete a vCenter data source
* [disableAristaSwitch](docs/datasources/README.md#disablearistaswitch) - Disable an arista switch data source
* [disableBrocadeSwitch](docs/datasources/README.md#disablebrocadeswitch) - Disable a brocade switch data source
* [disableCheckpointFirewall](docs/datasources/README.md#disablecheckpointfirewall) - Disable a checkpoint firewall data source
* [disableCiscoSwitch](docs/datasources/README.md#disableciscoswitch) - Disable a cisco switch data source
* [disableDellSwitch](docs/datasources/README.md#disabledellswitch) - Disable a dell switch data source
* [disableHpovManager](docs/datasources/README.md#disablehpovmanager) - Disable a hp oneview data source
* [disableHpvcManager](docs/datasources/README.md#disablehpvcmanager) - Disable a hpvc manager data source
* [disableJuniperSwitch](docs/datasources/README.md#disablejuniperswitch) - Disable a juniper switch data source
* [disableNsxvManager](docs/datasources/README.md#disablensxvmanager) - Disable a nsx-v manager data source
* [disablePanoramaFirewall](docs/datasources/README.md#disablepanoramafirewall) - Disable a panorama firewall data source
* [disableUcsManager](docs/datasources/README.md#disableucsmanager) - Disable an ucs manager data source
* [disableVcenter](docs/datasources/README.md#disablevcenter) - Disable a vCenter data source
* [enableAristaSwitch](docs/datasources/README.md#enablearistaswitch) - Enable an arista switch data source
* [enableBrocadeSwitch](docs/datasources/README.md#enablebrocadeswitch) - Enable a brocade switch data source
* [enableCheckpointFirewall](docs/datasources/README.md#enablecheckpointfirewall) - Enable a checkpoint firewall data source
* [enableCiscoSwitch](docs/datasources/README.md#enableciscoswitch) - Enable a cisco switch data source
* [enableDellSwitch](docs/datasources/README.md#enabledellswitch) - Enable a dell switch data source
* [enableHpovManager](docs/datasources/README.md#enablehpovmanager) - Enable a hp oneview data source
* [enableHpvcManager](docs/datasources/README.md#enablehpvcmanager) - Enable a hpvc manager data source
* [enableJuniperSwitch](docs/datasources/README.md#enablejuniperswitch) - Enable a juniper switch data source
* [enableNsxvManager](docs/datasources/README.md#enablensxvmanager) - Enable a nsx-v manager data source
* [enablePanoramaFirewall](docs/datasources/README.md#enablepanoramafirewall) - Enable a panorama firewall data source
* [enableUcsManager](docs/datasources/README.md#enableucsmanager) - Enable an ucs manager data source
* [enableVcenter](docs/datasources/README.md#enablevcenter) - Enable a vCenter data source
* [getAristaSwitch](docs/datasources/README.md#getaristaswitch) - Show arista switch data source details
* [getAristaSwitchSnmpConfig](docs/datasources/README.md#getaristaswitchsnmpconfig) - Show snmp config for arista switch data source
* [getBrocadeSwitch](docs/datasources/README.md#getbrocadeswitch) - Show brocade switch data source details
* [getBrocadeSwitchSnmpConfig](docs/datasources/README.md#getbrocadeswitchsnmpconfig) - Show snmp config for brocade switch data source
* [getCheckpointFirewall](docs/datasources/README.md#getcheckpointfirewall) - Show checkpoint firewall data source details
* [getCiscoSwitch](docs/datasources/README.md#getciscoswitch) - Show cisco switch data source details
* [getCiscoSwitchSnmpConfig](docs/datasources/README.md#getciscoswitchsnmpconfig) - Show snmp config for cisco switch data source
* [getDellSwitch](docs/datasources/README.md#getdellswitch) - Show dell switch data source details
* [getDellSwitchSnmpConfig](docs/datasources/README.md#getdellswitchsnmpconfig) - Show snmp config for dell switch data source
* [getHpovManager](docs/datasources/README.md#gethpovmanager) - Show hp oneview data source details
* [getHpvcManager](docs/datasources/README.md#gethpvcmanager) - Show hpvc data source details
* [getJuniperSwitch](docs/datasources/README.md#getjuniperswitch) - Show juniper switch data source details
* [getJuniperSwitchSnmpConfig](docs/datasources/README.md#getjuniperswitchsnmpconfig) - Show snmp config for juniper switch data source
* [getNsxvControllerCluster](docs/datasources/README.md#getnsxvcontrollercluster) - Show nsx controller-cluster details
* [getNsxvManager](docs/datasources/README.md#getnsxvmanager) - Show nsx-v manager data source details
* [getPanoramaFirewall](docs/datasources/README.md#getpanoramafirewall) - Show panorama firewall data source details
* [getUcsManager](docs/datasources/README.md#getucsmanager) - Show ucs manager data source details
* [getUcsSnmpConfig](docs/datasources/README.md#getucssnmpconfig) - Show snmp config for ucs fabric interconnects
* [getVcenter](docs/datasources/README.md#getvcenter) - Show vCenter data source details
* [listAristaSwitches](docs/datasources/README.md#listaristaswitches) - List arista switch data sources
* [listBrocadeSwitches](docs/datasources/README.md#listbrocadeswitches) - List brocade switch data sources
* [listCheckpointFirewalls](docs/datasources/README.md#listcheckpointfirewalls) - List checkpoint firewall data sources
* [listCiscoSwitches](docs/datasources/README.md#listciscoswitches) - List cisco switch data sources
* [listDellSwitches](docs/datasources/README.md#listdellswitches) - List dell switch data sources
* [listHpovManagers](docs/datasources/README.md#listhpovmanagers) - List hp oneview manager data sources
* [listHpvcManagers](docs/datasources/README.md#listhpvcmanagers) - List hpvc manager data sources
* [listJuniperSwitches](docs/datasources/README.md#listjuniperswitches) - List juniper switch data sources
* [listNsxvManagers](docs/datasources/README.md#listnsxvmanagers) - List nsx-v manager data sources
* [listPanoramaFirewalls](docs/datasources/README.md#listpanoramafirewalls) - List panorama firewall data sources
* [listUcsManagers](docs/datasources/README.md#listucsmanagers) - List ucs manager data sources
* [listVcenters](docs/datasources/README.md#listvcenters) - List vCenter data sources
* [updateAristaSwitch](docs/datasources/README.md#updatearistaswitch) - Update an arista switch data source
* [updateAristaSwitchSnmpConfig](docs/datasources/README.md#updatearistaswitchsnmpconfig) - Update snmp config for arista switch data source
* [updateBrocadeSwitch](docs/datasources/README.md#updatebrocadeswitch) - Update a brocade switch data source
* [updateBrocadeSwitchSnmpConfig](docs/datasources/README.md#updatebrocadeswitchsnmpconfig) - Update snmp config for brocade switch data source
* [updateCheckpointFirewall](docs/datasources/README.md#updatecheckpointfirewall) - Update a checkpoint firewall data source
* [updateCiscoSwitch](docs/datasources/README.md#updateciscoswitch) - Update a cisco switch data source
* [updateCiscoSwitchSnmpConfig](docs/datasources/README.md#updateciscoswitchsnmpconfig) - Update snmp config for cisco switch data source
* [updateDellSwitch](docs/datasources/README.md#updatedellswitch) - Update a dell switch data source
* [updateDellSwitchSnmpConfig](docs/datasources/README.md#updatedellswitchsnmpconfig) - Update snmp config for dell switch data source
* [updateHpovManager](docs/datasources/README.md#updatehpovmanager) - Update a hp oneview data source
* [updateHpvcManager](docs/datasources/README.md#updatehpvcmanager) - Update a hpvc manager data source
* [updateJuniperSwitch](docs/datasources/README.md#updatejuniperswitch) - Update a juniper switch data source
* [updateJuniperSwitchSnmpConfig](docs/datasources/README.md#updatejuniperswitchsnmpconfig) - Update snmp config for a juniper switch data source
* [updateNsxvControllerCluster](docs/datasources/README.md#updatensxvcontrollercluster) - Update nsx controller-cluster details
* [updateNsxvManager](docs/datasources/README.md#updatensxvmanager) - Update a nsx-v manager data source
* [updatePanoramaFirewall](docs/datasources/README.md#updatepanoramafirewall) - Update a panorama firewall data source
* [updateUcsManager](docs/datasources/README.md#updateucsmanager) - Update an ucs manager data source
* [updateUcsSnmpConfig](docs/datasources/README.md#updateucssnmpconfig) - Update snmp config for ucs fabric interconnects
* [updateVcenter](docs/datasources/README.md#updatevcenter) - Update a vCenter data source.

### [entities](docs/entities/README.md)

* [getCluster](docs/entities/README.md#getcluster) - Show cluster details
* [getDatacenter](docs/entities/README.md#getdatacenter) - Show vCenter datacenter details
* [getDatastore](docs/entities/README.md#getdatastore) - Show datastore details
* [getDistributedVirtualPortgroup](docs/entities/README.md#getdistributedvirtualportgroup) - Show distributed virtual portgroup details
* [getDistributedVirtualSwitch](docs/entities/README.md#getdistributedvirtualswitch) - Show distributed virtual switch details
* [getFirewall](docs/entities/README.md#getfirewall) - Show firewall details
* [getFirewallRule](docs/entities/README.md#getfirewallrule) - Show firewall rule details
* [getFlow](docs/entities/README.md#getflow) - Show flow details
* [getFlows](docs/entities/README.md#getflows) - List flows
* [getFolder](docs/entities/README.md#getfolder) - Show folder details
* [getHost](docs/entities/README.md#gethost) - Show host details
* [getIPSet](docs/entities/README.md#getipset) - Show ip set details
* [getLayer2Network](docs/entities/README.md#getlayer2network) - Show layer2 network details
* [getNSXManager](docs/entities/README.md#getnsxmanager) - Show nsx manager details
* [getName](docs/entities/README.md#getname) - Get name of an entity
* [getNames](docs/entities/README.md#getnames) - Get names for entities
* [getProblemEvent](docs/entities/README.md#getproblemevent) - Show problem details
* [getSecurityGroup](docs/entities/README.md#getsecuritygroup) - Show security group details
* [getSecurityTag](docs/entities/README.md#getsecuritytag) - Show security tag details
* [getService](docs/entities/README.md#getservice) - Show service details
* [getServiceGroup](docs/entities/README.md#getservicegroup) - Show service group details
* [getVcenterManager](docs/entities/README.md#getvcentermanager) - Show vCenter manager details
* [getVm](docs/entities/README.md#getvm) - Show vm details
* [getVmknic](docs/entities/README.md#getvmknic) - Show vmknic details
* [getVnic](docs/entities/README.md#getvnic) - Show vnic details
* [listClusters](docs/entities/README.md#listclusters) - List clusters
* [listDatacenters](docs/entities/README.md#listdatacenters) - List vCenter datacenters
* [listDatastores](docs/entities/README.md#listdatastores) - List datastores
* [listDistributedVirtualPortgroups](docs/entities/README.md#listdistributedvirtualportgroups) - List distributed virtual portgroups
* [listDistributedVirtualSwitches](docs/entities/README.md#listdistributedvirtualswitches) - List distributed virtual switches
* [listFirewallRules](docs/entities/README.md#listfirewallrules) - List firewall rules
* [listFirewalls](docs/entities/README.md#listfirewalls) - List firewalls
* [listFolders](docs/entities/README.md#listfolders) - List folders
* [listHosts](docs/entities/README.md#listhosts) - List hosts
* [listIPSets](docs/entities/README.md#listipsets) - List ip sets
* [listLayer2Networks](docs/entities/README.md#listlayer2networks) - List layer2 networks
* [listNSXManagers](docs/entities/README.md#listnsxmanagers) - List nsx managers
* [listProblemEvents](docs/entities/README.md#listproblemevents) - List problems
* [listSecurityGroups](docs/entities/README.md#listsecuritygroups) - List security groups
* [listSecurityTags](docs/entities/README.md#listsecuritytags) - List security tags
* [listServiceGroups](docs/entities/README.md#listservicegroups) - List service groups
* [listServices](docs/entities/README.md#listservices) - List services
* [listVcenterManagers](docs/entities/README.md#listvcentermanagers) - List vCenter managers
* [listVmknics](docs/entities/README.md#listvmknics) - List vmknics
* [listVms](docs/entities/README.md#listvms) - List vms
* [listVnics](docs/entities/README.md#listvnics) - List vnics

### [info](docs/info/README.md)

* [getVersion](docs/info/README.md#getversion) - Show version info

### [infrastructure](docs/infrastructure/README.md)

* [getNode](docs/infrastructure/README.md#getnode) - Show node details
* [listNodes](docs/infrastructure/README.md#listnodes) - List nodes

### [microsegmentation](docs/microsegmentation/README.md)

* [exportNsxRecommendedRules](docs/microsegmentation/README.md#exportnsxrecommendedrules) - Export recommended rules for NSX-V
* [listRecommendedRules](docs/microsegmentation/README.md#listrecommendedrules) - Get logical recommended rules

### [search](docs/search/README.md)

* [searchEntities](docs/search/README.md#searchentities) - Search entities
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
