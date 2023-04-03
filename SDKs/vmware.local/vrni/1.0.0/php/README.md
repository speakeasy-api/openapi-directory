# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### applications

* `addApplication` - Create an application
* `addTier` - Create tier in application
* `deleteApplication` - Delete an application
* `deleteTier` - Delete tier
* `getApplication` - Show application details
* `getApplicationTier` - Show tier details
* `getTier` - Show tier details
* `listApplicationTiers` - List tiers of an application
* `listApplications` - List applications

### authentication

* `create` - Create an auth token
* `delete` - Delete an auth token.

### dataSources

* `addAristaSwitch` - Create an arista switch data source
* `addBrocadeSwitch` - Create a brocade switch data source
* `addCheckpointFirewall` - Create a checkpoint firewall
* `addCiscoSwitch` - Create a cisco switch data source
* `addDellSwitch` - Create a dell switch data source
* `addHpovManager` - Create a hp oneview manager data source
* `addHpvcManager` - Create a hpvc manager data source
* `addJuniperSwitch` - Add a juniper switch as data source
* `addNsxvManagerDatasource` - Create a nsx-v manager data source
* `addPanoramaFirewall` - Create panorama firewall data source
* `addUcsManager` - Create an ucs manager data source
* `addVcenterDatasource` - Create a vCenter data source
* `deleteAristaSwitch` - Delete an arista switch data source
* `deleteBrocadeSwitch` - Delete a brocade switch data source
* `deleteCheckpointFirewall` - Delete a checkpoint firewall data source
* `deleteCiscoSwitch` - Delete a cisco switch data source
* `deleteDellSwitch` - Delete a dell switch data source
* `deleteHpovManager` - Delete a hp oneview data source
* `deleteHpvcManager` - Delete a hpvc manager data source
* `deleteJuniperSwitch` - Delete a juniper switch data source
* `deleteNsxvManager` - Delete a nsx-v manager data source
* `deletePanoramaFirewall` - Delete a panorama firewall data source
* `deleteUcsManager` - Delete an ucs manager data source
* `deleteVcenter` - Delete a vCenter data source
* `disableAristaSwitch` - Disable an arista switch data source
* `disableBrocadeSwitch` - Disable a brocade switch data source
* `disableCheckpointFirewall` - Disable a checkpoint firewall data source
* `disableCiscoSwitch` - Disable a cisco switch data source
* `disableDellSwitch` - Disable a dell switch data source
* `disableHpovManager` - Disable a hp oneview data source
* `disableHpvcManager` - Disable a hpvc manager data source
* `disableJuniperSwitch` - Disable a juniper switch data source
* `disableNsxvManager` - Disable a nsx-v manager data source
* `disablePanoramaFirewall` - Disable a panorama firewall data source
* `disableUcsManager` - Disable an ucs manager data source
* `disableVcenter` - Disable a vCenter data source
* `enableAristaSwitch` - Enable an arista switch data source
* `enableBrocadeSwitch` - Enable a brocade switch data source
* `enableCheckpointFirewall` - Enable a checkpoint firewall data source
* `enableCiscoSwitch` - Enable a cisco switch data source
* `enableDellSwitch` - Enable a dell switch data source
* `enableHpovManager` - Enable a hp oneview data source
* `enableHpvcManager` - Enable a hpvc manager data source
* `enableJuniperSwitch` - Enable a juniper switch data source
* `enableNsxvManager` - Enable a nsx-v manager data source
* `enablePanoramaFirewall` - Enable a panorama firewall data source
* `enableUcsManager` - Enable an ucs manager data source
* `enableVcenter` - Enable a vCenter data source
* `getAristaSwitch` - Show arista switch data source details
* `getAristaSwitchSnmpConfig` - Show snmp config for arista switch data source
* `getBrocadeSwitch` - Show brocade switch data source details
* `getBrocadeSwitchSnmpConfig` - Show snmp config for brocade switch data source
* `getCheckpointFirewall` - Show checkpoint firewall data source details
* `getCiscoSwitch` - Show cisco switch data source details
* `getCiscoSwitchSnmpConfig` - Show snmp config for cisco switch data source
* `getDellSwitch` - Show dell switch data source details
* `getDellSwitchSnmpConfig` - Show snmp config for dell switch data source
* `getHpovManager` - Show hp oneview data source details
* `getHpvcManager` - Show hpvc data source details
* `getJuniperSwitch` - Show juniper switch data source details
* `getJuniperSwitchSnmpConfig` - Show snmp config for juniper switch data source
* `getNsxvControllerCluster` - Show nsx controller-cluster details
* `getNsxvManager` - Show nsx-v manager data source details
* `getPanoramaFirewall` - Show panorama firewall data source details
* `getUcsManager` - Show ucs manager data source details
* `getUcsSnmpConfig` - Show snmp config for ucs fabric interconnects
* `getVcenter` - Show vCenter data source details
* `listAristaSwitches` - List arista switch data sources
* `listBrocadeSwitches` - List brocade switch data sources
* `listCheckpointFirewalls` - List checkpoint firewall data sources
* `listCiscoSwitches` - List cisco switch data sources
* `listDellSwitches` - List dell switch data sources
* `listHpovManagers` - List hp oneview manager data sources
* `listHpvcManagers` - List hpvc manager data sources
* `listJuniperSwitches` - List juniper switch data sources
* `listNsxvManagers` - List nsx-v manager data sources
* `listPanoramaFirewalls` - List panorama firewall data sources
* `listUcsManagers` - List ucs manager data sources
* `listVcenters` - List vCenter data sources
* `updateAristaSwitch` - Update an arista switch data source
* `updateAristaSwitchSnmpConfig` - Update snmp config for arista switch data source
* `updateBrocadeSwitch` - Update a brocade switch data source
* `updateBrocadeSwitchSnmpConfig` - Update snmp config for brocade switch data source
* `updateCheckpointFirewall` - Update a checkpoint firewall data source
* `updateCiscoSwitch` - Update a cisco switch data source
* `updateCiscoSwitchSnmpConfig` - Update snmp config for cisco switch data source
* `updateDellSwitch` - Update a dell switch data source
* `updateDellSwitchSnmpConfig` - Update snmp config for dell switch data source
* `updateHpovManager` - Update a hp oneview data source
* `updateHpvcManager` - Update a hpvc manager data source
* `updateJuniperSwitch` - Update a juniper switch data source
* `updateJuniperSwitchSnmpConfig` - Update snmp config for a juniper switch data source
* `updateNsxvControllerCluster` - Update nsx controller-cluster details
* `updateNsxvManager` - Update a nsx-v manager data source
* `updatePanoramaFirewall` - Update a panorama firewall data source
* `updateUcsManager` - Update an ucs manager data source
* `updateUcsSnmpConfig` - Update snmp config for ucs fabric interconnects
* `updateVcenter` - Update a vCenter data source.

### entities

* `getCluster` - Show cluster details
* `getDatacenter` - Show vCenter datacenter details
* `getDatastore` - Show datastore details
* `getDistributedVirtualPortgroup` - Show distributed virtual portgroup details
* `getDistributedVirtualSwitch` - Show distributed virtual switch details
* `getFirewall` - Show firewall details
* `getFirewallRule` - Show firewall rule details
* `getFlow` - Show flow details
* `getFlows` - List flows
* `getFolder` - Show folder details
* `getHost` - Show host details
* `getIPSet` - Show ip set details
* `getLayer2Network` - Show layer2 network details
* `getNSXManager` - Show nsx manager details
* `getName` - Get name of an entity
* `getNames` - Get names for entities
* `getProblemEvent` - Show problem details
* `getSecurityGroup` - Show security group details
* `getSecurityTag` - Show security tag details
* `getService` - Show service details
* `getServiceGroup` - Show service group details
* `getVcenterManager` - Show vCenter manager details
* `getVm` - Show vm details
* `getVmknic` - Show vmknic details
* `getVnic` - Show vnic details
* `listClusters` - List clusters
* `listDatacenters` - List vCenter datacenters
* `listDatastores` - List datastores
* `listDistributedVirtualPortgroups` - List distributed virtual portgroups
* `listDistributedVirtualSwitches` - List distributed virtual switches
* `listFirewallRules` - List firewall rules
* `listFirewalls` - List firewalls
* `listFolders` - List folders
* `listHosts` - List hosts
* `listIPSets` - List ip sets
* `listLayer2Networks` - List layer2 networks
* `listNSXManagers` - List nsx managers
* `listProblemEvents` - List problems
* `listSecurityGroups` - List security groups
* `listSecurityTags` - List security tags
* `listServiceGroups` - List service groups
* `listServices` - List services
* `listVcenterManagers` - List vCenter managers
* `listVmknics` - List vmknics
* `listVms` - List vms
* `listVnics` - List vnics

### info

* `getVersion` - Show version info

### infrastructure

* `getNode` - Show node details
* `listNodes` - List nodes

### microsegmentation

* `exportNsxRecommendedRules` - Export recommended rules for NSX-V
* `listRecommendedRules` - Get logical recommended rules

### search

* `searchEntities` - Search entities
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
