# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vmware.local/vrni/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Applications.AddApplication(ctx, shared.ApplicationRequest{
        Name: sdk.String("Terrence Rau"),
    }, operations.AddApplicationSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Applications](docs/applications/README.md)

* [AddApplication](docs/applications/README.md#addapplication) - Create an application
* [AddTier](docs/applications/README.md#addtier) - Create tier in application
* [DeleteApplication](docs/applications/README.md#deleteapplication) - Delete an application
* [DeleteTier](docs/applications/README.md#deletetier) - Delete tier
* [GetApplication](docs/applications/README.md#getapplication) - Show application details
* [GetApplicationTier](docs/applications/README.md#getapplicationtier) - Show tier details
* [GetTier](docs/applications/README.md#gettier) - Show tier details
* [ListApplicationTiers](docs/applications/README.md#listapplicationtiers) - List tiers of an application
* [ListApplications](docs/applications/README.md#listapplications) - List applications

### [Authentication](docs/authentication/README.md)

* [Create](docs/authentication/README.md#create) - Create an auth token
* [Delete](docs/authentication/README.md#delete) - Delete an auth token.

### [DataSources](docs/datasources/README.md)

* [AddAristaSwitch](docs/datasources/README.md#addaristaswitch) - Create an arista switch data source
* [AddBrocadeSwitch](docs/datasources/README.md#addbrocadeswitch) - Create a brocade switch data source
* [AddCheckpointFirewall](docs/datasources/README.md#addcheckpointfirewall) - Create a checkpoint firewall
* [AddCiscoSwitch](docs/datasources/README.md#addciscoswitch) - Create a cisco switch data source
* [AddDellSwitch](docs/datasources/README.md#adddellswitch) - Create a dell switch data source
* [AddHpovManager](docs/datasources/README.md#addhpovmanager) - Create a hp oneview manager data source
* [AddHpvcManager](docs/datasources/README.md#addhpvcmanager) - Create a hpvc manager data source
* [AddJuniperSwitch](docs/datasources/README.md#addjuniperswitch) - Add a juniper switch as data source
* [AddNsxvManagerDatasource](docs/datasources/README.md#addnsxvmanagerdatasource) - Create a nsx-v manager data source
* [AddPanoramaFirewall](docs/datasources/README.md#addpanoramafirewall) - Create panorama firewall data source
* [AddUcsManager](docs/datasources/README.md#adducsmanager) - Create an ucs manager data source
* [AddVcenterDatasource](docs/datasources/README.md#addvcenterdatasource) - Create a vCenter data source
* [DeleteAristaSwitch](docs/datasources/README.md#deletearistaswitch) - Delete an arista switch data source
* [DeleteBrocadeSwitch](docs/datasources/README.md#deletebrocadeswitch) - Delete a brocade switch data source
* [DeleteCheckpointFirewall](docs/datasources/README.md#deletecheckpointfirewall) - Delete a checkpoint firewall data source
* [DeleteCiscoSwitch](docs/datasources/README.md#deleteciscoswitch) - Delete a cisco switch data source
* [DeleteDellSwitch](docs/datasources/README.md#deletedellswitch) - Delete a dell switch data source
* [DeleteHpovManager](docs/datasources/README.md#deletehpovmanager) - Delete a hp oneview data source
* [DeleteHpvcManager](docs/datasources/README.md#deletehpvcmanager) - Delete a hpvc manager data source
* [DeleteJuniperSwitch](docs/datasources/README.md#deletejuniperswitch) - Delete a juniper switch data source
* [DeleteNsxvManager](docs/datasources/README.md#deletensxvmanager) - Delete a nsx-v manager data source
* [DeletePanoramaFirewall](docs/datasources/README.md#deletepanoramafirewall) - Delete a panorama firewall data source
* [DeleteUcsManager](docs/datasources/README.md#deleteucsmanager) - Delete an ucs manager data source
* [DeleteVcenter](docs/datasources/README.md#deletevcenter) - Delete a vCenter data source
* [DisableAristaSwitch](docs/datasources/README.md#disablearistaswitch) - Disable an arista switch data source
* [DisableBrocadeSwitch](docs/datasources/README.md#disablebrocadeswitch) - Disable a brocade switch data source
* [DisableCheckpointFirewall](docs/datasources/README.md#disablecheckpointfirewall) - Disable a checkpoint firewall data source
* [DisableCiscoSwitch](docs/datasources/README.md#disableciscoswitch) - Disable a cisco switch data source
* [DisableDellSwitch](docs/datasources/README.md#disabledellswitch) - Disable a dell switch data source
* [DisableHpovManager](docs/datasources/README.md#disablehpovmanager) - Disable a hp oneview data source
* [DisableHpvcManager](docs/datasources/README.md#disablehpvcmanager) - Disable a hpvc manager data source
* [DisableJuniperSwitch](docs/datasources/README.md#disablejuniperswitch) - Disable a juniper switch data source
* [DisableNsxvManager](docs/datasources/README.md#disablensxvmanager) - Disable a nsx-v manager data source
* [DisablePanoramaFirewall](docs/datasources/README.md#disablepanoramafirewall) - Disable a panorama firewall data source
* [DisableUcsManager](docs/datasources/README.md#disableucsmanager) - Disable an ucs manager data source
* [DisableVcenter](docs/datasources/README.md#disablevcenter) - Disable a vCenter data source
* [EnableAristaSwitch](docs/datasources/README.md#enablearistaswitch) - Enable an arista switch data source
* [EnableBrocadeSwitch](docs/datasources/README.md#enablebrocadeswitch) - Enable a brocade switch data source
* [EnableCheckpointFirewall](docs/datasources/README.md#enablecheckpointfirewall) - Enable a checkpoint firewall data source
* [EnableCiscoSwitch](docs/datasources/README.md#enableciscoswitch) - Enable a cisco switch data source
* [EnableDellSwitch](docs/datasources/README.md#enabledellswitch) - Enable a dell switch data source
* [EnableHpovManager](docs/datasources/README.md#enablehpovmanager) - Enable a hp oneview data source
* [EnableHpvcManager](docs/datasources/README.md#enablehpvcmanager) - Enable a hpvc manager data source
* [EnableJuniperSwitch](docs/datasources/README.md#enablejuniperswitch) - Enable a juniper switch data source
* [EnableNsxvManager](docs/datasources/README.md#enablensxvmanager) - Enable a nsx-v manager data source
* [EnablePanoramaFirewall](docs/datasources/README.md#enablepanoramafirewall) - Enable a panorama firewall data source
* [EnableUcsManager](docs/datasources/README.md#enableucsmanager) - Enable an ucs manager data source
* [EnableVcenter](docs/datasources/README.md#enablevcenter) - Enable a vCenter data source
* [GetAristaSwitch](docs/datasources/README.md#getaristaswitch) - Show arista switch data source details
* [GetAristaSwitchSnmpConfig](docs/datasources/README.md#getaristaswitchsnmpconfig) - Show snmp config for arista switch data source
* [GetBrocadeSwitch](docs/datasources/README.md#getbrocadeswitch) - Show brocade switch data source details
* [GetBrocadeSwitchSnmpConfig](docs/datasources/README.md#getbrocadeswitchsnmpconfig) - Show snmp config for brocade switch data source
* [GetCheckpointFirewall](docs/datasources/README.md#getcheckpointfirewall) - Show checkpoint firewall data source details
* [GetCiscoSwitch](docs/datasources/README.md#getciscoswitch) - Show cisco switch data source details
* [GetCiscoSwitchSnmpConfig](docs/datasources/README.md#getciscoswitchsnmpconfig) - Show snmp config for cisco switch data source
* [GetDellSwitch](docs/datasources/README.md#getdellswitch) - Show dell switch data source details
* [GetDellSwitchSnmpConfig](docs/datasources/README.md#getdellswitchsnmpconfig) - Show snmp config for dell switch data source
* [GetHpovManager](docs/datasources/README.md#gethpovmanager) - Show hp oneview data source details
* [GetHpvcManager](docs/datasources/README.md#gethpvcmanager) - Show hpvc data source details
* [GetJuniperSwitch](docs/datasources/README.md#getjuniperswitch) - Show juniper switch data source details
* [GetJuniperSwitchSnmpConfig](docs/datasources/README.md#getjuniperswitchsnmpconfig) - Show snmp config for juniper switch data source
* [GetNsxvControllerCluster](docs/datasources/README.md#getnsxvcontrollercluster) - Show nsx controller-cluster details
* [GetNsxvManager](docs/datasources/README.md#getnsxvmanager) - Show nsx-v manager data source details
* [GetPanoramaFirewall](docs/datasources/README.md#getpanoramafirewall) - Show panorama firewall data source details
* [GetUcsManager](docs/datasources/README.md#getucsmanager) - Show ucs manager data source details
* [GetUcsSnmpConfig](docs/datasources/README.md#getucssnmpconfig) - Show snmp config for ucs fabric interconnects
* [GetVcenter](docs/datasources/README.md#getvcenter) - Show vCenter data source details
* [ListAristaSwitches](docs/datasources/README.md#listaristaswitches) - List arista switch data sources
* [ListBrocadeSwitches](docs/datasources/README.md#listbrocadeswitches) - List brocade switch data sources
* [ListCheckpointFirewalls](docs/datasources/README.md#listcheckpointfirewalls) - List checkpoint firewall data sources
* [ListCiscoSwitches](docs/datasources/README.md#listciscoswitches) - List cisco switch data sources
* [ListDellSwitches](docs/datasources/README.md#listdellswitches) - List dell switch data sources
* [ListHpovManagers](docs/datasources/README.md#listhpovmanagers) - List hp oneview manager data sources
* [ListHpvcManagers](docs/datasources/README.md#listhpvcmanagers) - List hpvc manager data sources
* [ListJuniperSwitches](docs/datasources/README.md#listjuniperswitches) - List juniper switch data sources
* [ListNsxvManagers](docs/datasources/README.md#listnsxvmanagers) - List nsx-v manager data sources
* [ListPanoramaFirewalls](docs/datasources/README.md#listpanoramafirewalls) - List panorama firewall data sources
* [ListUcsManagers](docs/datasources/README.md#listucsmanagers) - List ucs manager data sources
* [ListVcenters](docs/datasources/README.md#listvcenters) - List vCenter data sources
* [UpdateAristaSwitch](docs/datasources/README.md#updatearistaswitch) - Update an arista switch data source
* [UpdateAristaSwitchSnmpConfig](docs/datasources/README.md#updatearistaswitchsnmpconfig) - Update snmp config for arista switch data source
* [UpdateBrocadeSwitch](docs/datasources/README.md#updatebrocadeswitch) - Update a brocade switch data source
* [UpdateBrocadeSwitchSnmpConfig](docs/datasources/README.md#updatebrocadeswitchsnmpconfig) - Update snmp config for brocade switch data source
* [UpdateCheckpointFirewall](docs/datasources/README.md#updatecheckpointfirewall) - Update a checkpoint firewall data source
* [UpdateCiscoSwitch](docs/datasources/README.md#updateciscoswitch) - Update a cisco switch data source
* [UpdateCiscoSwitchSnmpConfig](docs/datasources/README.md#updateciscoswitchsnmpconfig) - Update snmp config for cisco switch data source
* [UpdateDellSwitch](docs/datasources/README.md#updatedellswitch) - Update a dell switch data source
* [UpdateDellSwitchSnmpConfig](docs/datasources/README.md#updatedellswitchsnmpconfig) - Update snmp config for dell switch data source
* [UpdateHpovManager](docs/datasources/README.md#updatehpovmanager) - Update a hp oneview data source
* [UpdateHpvcManager](docs/datasources/README.md#updatehpvcmanager) - Update a hpvc manager data source
* [UpdateJuniperSwitch](docs/datasources/README.md#updatejuniperswitch) - Update a juniper switch data source
* [UpdateJuniperSwitchSnmpConfig](docs/datasources/README.md#updatejuniperswitchsnmpconfig) - Update snmp config for a juniper switch data source
* [UpdateNsxvControllerCluster](docs/datasources/README.md#updatensxvcontrollercluster) - Update nsx controller-cluster details
* [UpdateNsxvManager](docs/datasources/README.md#updatensxvmanager) - Update a nsx-v manager data source
* [UpdatePanoramaFirewall](docs/datasources/README.md#updatepanoramafirewall) - Update a panorama firewall data source
* [UpdateUcsManager](docs/datasources/README.md#updateucsmanager) - Update an ucs manager data source
* [UpdateUcsSnmpConfig](docs/datasources/README.md#updateucssnmpconfig) - Update snmp config for ucs fabric interconnects
* [UpdateVcenter](docs/datasources/README.md#updatevcenter) - Update a vCenter data source.

### [Entities](docs/entities/README.md)

* [GetCluster](docs/entities/README.md#getcluster) - Show cluster details
* [GetDatacenter](docs/entities/README.md#getdatacenter) - Show vCenter datacenter details
* [GetDatastore](docs/entities/README.md#getdatastore) - Show datastore details
* [GetDistributedVirtualPortgroup](docs/entities/README.md#getdistributedvirtualportgroup) - Show distributed virtual portgroup details
* [GetDistributedVirtualSwitch](docs/entities/README.md#getdistributedvirtualswitch) - Show distributed virtual switch details
* [GetFirewall](docs/entities/README.md#getfirewall) - Show firewall details
* [GetFirewallRule](docs/entities/README.md#getfirewallrule) - Show firewall rule details
* [GetFlow](docs/entities/README.md#getflow) - Show flow details
* [GetFlows](docs/entities/README.md#getflows) - List flows
* [GetFolder](docs/entities/README.md#getfolder) - Show folder details
* [GetHost](docs/entities/README.md#gethost) - Show host details
* [GetIPSet](docs/entities/README.md#getipset) - Show ip set details
* [GetLayer2Network](docs/entities/README.md#getlayer2network) - Show layer2 network details
* [GetNSXManager](docs/entities/README.md#getnsxmanager) - Show nsx manager details
* [GetName](docs/entities/README.md#getname) - Get name of an entity
* [GetNames](docs/entities/README.md#getnames) - Get names for entities
* [GetProblemEvent](docs/entities/README.md#getproblemevent) - Show problem details
* [GetSecurityGroup](docs/entities/README.md#getsecuritygroup) - Show security group details
* [GetSecurityTag](docs/entities/README.md#getsecuritytag) - Show security tag details
* [GetService](docs/entities/README.md#getservice) - Show service details
* [GetServiceGroup](docs/entities/README.md#getservicegroup) - Show service group details
* [GetVcenterManager](docs/entities/README.md#getvcentermanager) - Show vCenter manager details
* [GetVM](docs/entities/README.md#getvm) - Show vm details
* [GetVmknic](docs/entities/README.md#getvmknic) - Show vmknic details
* [GetVnic](docs/entities/README.md#getvnic) - Show vnic details
* [ListClusters](docs/entities/README.md#listclusters) - List clusters
* [ListDatacenters](docs/entities/README.md#listdatacenters) - List vCenter datacenters
* [ListDatastores](docs/entities/README.md#listdatastores) - List datastores
* [ListDistributedVirtualPortgroups](docs/entities/README.md#listdistributedvirtualportgroups) - List distributed virtual portgroups
* [ListDistributedVirtualSwitches](docs/entities/README.md#listdistributedvirtualswitches) - List distributed virtual switches
* [ListFirewallRules](docs/entities/README.md#listfirewallrules) - List firewall rules
* [ListFirewalls](docs/entities/README.md#listfirewalls) - List firewalls
* [ListFolders](docs/entities/README.md#listfolders) - List folders
* [ListHosts](docs/entities/README.md#listhosts) - List hosts
* [ListIPSets](docs/entities/README.md#listipsets) - List ip sets
* [ListLayer2Networks](docs/entities/README.md#listlayer2networks) - List layer2 networks
* [ListNSXManagers](docs/entities/README.md#listnsxmanagers) - List nsx managers
* [ListProblemEvents](docs/entities/README.md#listproblemevents) - List problems
* [ListSecurityGroups](docs/entities/README.md#listsecuritygroups) - List security groups
* [ListSecurityTags](docs/entities/README.md#listsecuritytags) - List security tags
* [ListServiceGroups](docs/entities/README.md#listservicegroups) - List service groups
* [ListServices](docs/entities/README.md#listservices) - List services
* [ListVcenterManagers](docs/entities/README.md#listvcentermanagers) - List vCenter managers
* [ListVmknics](docs/entities/README.md#listvmknics) - List vmknics
* [ListVms](docs/entities/README.md#listvms) - List vms
* [ListVnics](docs/entities/README.md#listvnics) - List vnics

### [Info](docs/info/README.md)

* [GetVersion](docs/info/README.md#getversion) - Show version info

### [Infrastructure](docs/infrastructure/README.md)

* [GetNode](docs/infrastructure/README.md#getnode) - Show node details
* [ListNodes](docs/infrastructure/README.md#listnodes) - List nodes

### [Microsegmentation](docs/microsegmentation/README.md)

* [ExportNsxRecommendedRules](docs/microsegmentation/README.md#exportnsxrecommendedrules) - Export recommended rules for NSX-V
* [ListRecommendedRules](docs/microsegmentation/README.md#listrecommendedrules) - Get logical recommended rules

### [Search](docs/search/README.md)

* [SearchEntities](docs/search/README.md#searchentities) - Search entities
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
