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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.ApplicationRequest{
        Name: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Applications.AddApplication(ctx, req, operations.AddApplicationSecurity{
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


### Applications

* `AddApplication` - Create an application
* `AddTier` - Create tier in application
* `DeleteApplication` - Delete an application
* `DeleteTier` - Delete tier
* `GetApplication` - Show application details
* `GetApplicationTier` - Show tier details
* `GetTier` - Show tier details
* `ListApplicationTiers` - List tiers of an application
* `ListApplications` - List applications

### Authentication

* `Create` - Create an auth token
* `Delete` - Delete an auth token.

### DataSources

* `AddAristaSwitch` - Create an arista switch data source
* `AddBrocadeSwitch` - Create a brocade switch data source
* `AddCheckpointFirewall` - Create a checkpoint firewall
* `AddCiscoSwitch` - Create a cisco switch data source
* `AddDellSwitch` - Create a dell switch data source
* `AddHpovManager` - Create a hp oneview manager data source
* `AddHpvcManager` - Create a hpvc manager data source
* `AddJuniperSwitch` - Add a juniper switch as data source
* `AddNsxvManagerDatasource` - Create a nsx-v manager data source
* `AddPanoramaFirewall` - Create panorama firewall data source
* `AddUcsManager` - Create an ucs manager data source
* `AddVcenterDatasource` - Create a vCenter data source
* `DeleteAristaSwitch` - Delete an arista switch data source
* `DeleteBrocadeSwitch` - Delete a brocade switch data source
* `DeleteCheckpointFirewall` - Delete a checkpoint firewall data source
* `DeleteCiscoSwitch` - Delete a cisco switch data source
* `DeleteDellSwitch` - Delete a dell switch data source
* `DeleteHpovManager` - Delete a hp oneview data source
* `DeleteHpvcManager` - Delete a hpvc manager data source
* `DeleteJuniperSwitch` - Delete a juniper switch data source
* `DeleteNsxvManager` - Delete a nsx-v manager data source
* `DeletePanoramaFirewall` - Delete a panorama firewall data source
* `DeleteUcsManager` - Delete an ucs manager data source
* `DeleteVcenter` - Delete a vCenter data source
* `DisableAristaSwitch` - Disable an arista switch data source
* `DisableBrocadeSwitch` - Disable a brocade switch data source
* `DisableCheckpointFirewall` - Disable a checkpoint firewall data source
* `DisableCiscoSwitch` - Disable a cisco switch data source
* `DisableDellSwitch` - Disable a dell switch data source
* `DisableHpovManager` - Disable a hp oneview data source
* `DisableHpvcManager` - Disable a hpvc manager data source
* `DisableJuniperSwitch` - Disable a juniper switch data source
* `DisableNsxvManager` - Disable a nsx-v manager data source
* `DisablePanoramaFirewall` - Disable a panorama firewall data source
* `DisableUcsManager` - Disable an ucs manager data source
* `DisableVcenter` - Disable a vCenter data source
* `EnableAristaSwitch` - Enable an arista switch data source
* `EnableBrocadeSwitch` - Enable a brocade switch data source
* `EnableCheckpointFirewall` - Enable a checkpoint firewall data source
* `EnableCiscoSwitch` - Enable a cisco switch data source
* `EnableDellSwitch` - Enable a dell switch data source
* `EnableHpovManager` - Enable a hp oneview data source
* `EnableHpvcManager` - Enable a hpvc manager data source
* `EnableJuniperSwitch` - Enable a juniper switch data source
* `EnableNsxvManager` - Enable a nsx-v manager data source
* `EnablePanoramaFirewall` - Enable a panorama firewall data source
* `EnableUcsManager` - Enable an ucs manager data source
* `EnableVcenter` - Enable a vCenter data source
* `GetAristaSwitch` - Show arista switch data source details
* `GetAristaSwitchSnmpConfig` - Show snmp config for arista switch data source
* `GetBrocadeSwitch` - Show brocade switch data source details
* `GetBrocadeSwitchSnmpConfig` - Show snmp config for brocade switch data source
* `GetCheckpointFirewall` - Show checkpoint firewall data source details
* `GetCiscoSwitch` - Show cisco switch data source details
* `GetCiscoSwitchSnmpConfig` - Show snmp config for cisco switch data source
* `GetDellSwitch` - Show dell switch data source details
* `GetDellSwitchSnmpConfig` - Show snmp config for dell switch data source
* `GetHpovManager` - Show hp oneview data source details
* `GetHpvcManager` - Show hpvc data source details
* `GetJuniperSwitch` - Show juniper switch data source details
* `GetJuniperSwitchSnmpConfig` - Show snmp config for juniper switch data source
* `GetNsxvControllerCluster` - Show nsx controller-cluster details
* `GetNsxvManager` - Show nsx-v manager data source details
* `GetPanoramaFirewall` - Show panorama firewall data source details
* `GetUcsManager` - Show ucs manager data source details
* `GetUcsSnmpConfig` - Show snmp config for ucs fabric interconnects
* `GetVcenter` - Show vCenter data source details
* `ListAristaSwitches` - List arista switch data sources
* `ListBrocadeSwitches` - List brocade switch data sources
* `ListCheckpointFirewalls` - List checkpoint firewall data sources
* `ListCiscoSwitches` - List cisco switch data sources
* `ListDellSwitches` - List dell switch data sources
* `ListHpovManagers` - List hp oneview manager data sources
* `ListHpvcManagers` - List hpvc manager data sources
* `ListJuniperSwitches` - List juniper switch data sources
* `ListNsxvManagers` - List nsx-v manager data sources
* `ListPanoramaFirewalls` - List panorama firewall data sources
* `ListUcsManagers` - List ucs manager data sources
* `ListVcenters` - List vCenter data sources
* `UpdateAristaSwitch` - Update an arista switch data source
* `UpdateAristaSwitchSnmpConfig` - Update snmp config for arista switch data source
* `UpdateBrocadeSwitch` - Update a brocade switch data source
* `UpdateBrocadeSwitchSnmpConfig` - Update snmp config for brocade switch data source
* `UpdateCheckpointFirewall` - Update a checkpoint firewall data source
* `UpdateCiscoSwitch` - Update a cisco switch data source
* `UpdateCiscoSwitchSnmpConfig` - Update snmp config for cisco switch data source
* `UpdateDellSwitch` - Update a dell switch data source
* `UpdateDellSwitchSnmpConfig` - Update snmp config for dell switch data source
* `UpdateHpovManager` - Update a hp oneview data source
* `UpdateHpvcManager` - Update a hpvc manager data source
* `UpdateJuniperSwitch` - Update a juniper switch data source
* `UpdateJuniperSwitchSnmpConfig` - Update snmp config for a juniper switch data source
* `UpdateNsxvControllerCluster` - Update nsx controller-cluster details
* `UpdateNsxvManager` - Update a nsx-v manager data source
* `UpdatePanoramaFirewall` - Update a panorama firewall data source
* `UpdateUcsManager` - Update an ucs manager data source
* `UpdateUcsSnmpConfig` - Update snmp config for ucs fabric interconnects
* `UpdateVcenter` - Update a vCenter data source.

### Entities

* `GetCluster` - Show cluster details
* `GetDatacenter` - Show vCenter datacenter details
* `GetDatastore` - Show datastore details
* `GetDistributedVirtualPortgroup` - Show distributed virtual portgroup details
* `GetDistributedVirtualSwitch` - Show distributed virtual switch details
* `GetFirewall` - Show firewall details
* `GetFirewallRule` - Show firewall rule details
* `GetFlow` - Show flow details
* `GetFlows` - List flows
* `GetFolder` - Show folder details
* `GetHost` - Show host details
* `GetIPSet` - Show ip set details
* `GetLayer2Network` - Show layer2 network details
* `GetNSXManager` - Show nsx manager details
* `GetName` - Get name of an entity
* `GetNames` - Get names for entities
* `GetProblemEvent` - Show problem details
* `GetSecurityGroup` - Show security group details
* `GetSecurityTag` - Show security tag details
* `GetService` - Show service details
* `GetServiceGroup` - Show service group details
* `GetVcenterManager` - Show vCenter manager details
* `GetVM` - Show vm details
* `GetVmknic` - Show vmknic details
* `GetVnic` - Show vnic details
* `ListClusters` - List clusters
* `ListDatacenters` - List vCenter datacenters
* `ListDatastores` - List datastores
* `ListDistributedVirtualPortgroups` - List distributed virtual portgroups
* `ListDistributedVirtualSwitches` - List distributed virtual switches
* `ListFirewallRules` - List firewall rules
* `ListFirewalls` - List firewalls
* `ListFolders` - List folders
* `ListHosts` - List hosts
* `ListIPSets` - List ip sets
* `ListLayer2Networks` - List layer2 networks
* `ListNSXManagers` - List nsx managers
* `ListProblemEvents` - List problems
* `ListSecurityGroups` - List security groups
* `ListSecurityTags` - List security tags
* `ListServiceGroups` - List service groups
* `ListServices` - List services
* `ListVcenterManagers` - List vCenter managers
* `ListVmknics` - List vmknics
* `ListVms` - List vms
* `ListVnics` - List vnics

### Info

* `GetVersion` - Show version info

### Infrastructure

* `GetNode` - Show node details
* `ListNodes` - List nodes

### Microsegmentation

* `ExportNsxRecommendedRules` - Export recommended rules for NSX-V
* `ListRecommendedRules` - Get logical recommended rules

### Search

* `SearchEntities` - Search entities
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
