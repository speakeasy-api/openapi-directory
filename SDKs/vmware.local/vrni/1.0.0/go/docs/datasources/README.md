# DataSources

## Overview

Data source APIs

### Available Operations

* [AddAristaSwitch](#addaristaswitch) - Create an arista switch data source
* [AddBrocadeSwitch](#addbrocadeswitch) - Create a brocade switch data source
* [AddCheckpointFirewall](#addcheckpointfirewall) - Create a checkpoint firewall
* [AddCiscoSwitch](#addciscoswitch) - Create a cisco switch data source
* [AddDellSwitch](#adddellswitch) - Create a dell switch data source
* [AddHpovManager](#addhpovmanager) - Create a hp oneview manager data source
* [AddHpvcManager](#addhpvcmanager) - Create a hpvc manager data source
* [AddJuniperSwitch](#addjuniperswitch) - Add a juniper switch as data source
* [AddNsxvManagerDatasource](#addnsxvmanagerdatasource) - Create a nsx-v manager data source
* [AddPanoramaFirewall](#addpanoramafirewall) - Create panorama firewall data source
* [AddUcsManager](#adducsmanager) - Create an ucs manager data source
* [AddVcenterDatasource](#addvcenterdatasource) - Create a vCenter data source
* [DeleteAristaSwitch](#deletearistaswitch) - Delete an arista switch data source
* [DeleteBrocadeSwitch](#deletebrocadeswitch) - Delete a brocade switch data source
* [DeleteCheckpointFirewall](#deletecheckpointfirewall) - Delete a checkpoint firewall data source
* [DeleteCiscoSwitch](#deleteciscoswitch) - Delete a cisco switch data source
* [DeleteDellSwitch](#deletedellswitch) - Delete a dell switch data source
* [DeleteHpovManager](#deletehpovmanager) - Delete a hp oneview data source
* [DeleteHpvcManager](#deletehpvcmanager) - Delete a hpvc manager data source
* [DeleteJuniperSwitch](#deletejuniperswitch) - Delete a juniper switch data source
* [DeleteNsxvManager](#deletensxvmanager) - Delete a nsx-v manager data source
* [DeletePanoramaFirewall](#deletepanoramafirewall) - Delete a panorama firewall data source
* [DeleteUcsManager](#deleteucsmanager) - Delete an ucs manager data source
* [DeleteVcenter](#deletevcenter) - Delete a vCenter data source
* [DisableAristaSwitch](#disablearistaswitch) - Disable an arista switch data source
* [DisableBrocadeSwitch](#disablebrocadeswitch) - Disable a brocade switch data source
* [DisableCheckpointFirewall](#disablecheckpointfirewall) - Disable a checkpoint firewall data source
* [DisableCiscoSwitch](#disableciscoswitch) - Disable a cisco switch data source
* [DisableDellSwitch](#disabledellswitch) - Disable a dell switch data source
* [DisableHpovManager](#disablehpovmanager) - Disable a hp oneview data source
* [DisableHpvcManager](#disablehpvcmanager) - Disable a hpvc manager data source
* [DisableJuniperSwitch](#disablejuniperswitch) - Disable a juniper switch data source
* [DisableNsxvManager](#disablensxvmanager) - Disable a nsx-v manager data source
* [DisablePanoramaFirewall](#disablepanoramafirewall) - Disable a panorama firewall data source
* [DisableUcsManager](#disableucsmanager) - Disable an ucs manager data source
* [DisableVcenter](#disablevcenter) - Disable a vCenter data source
* [EnableAristaSwitch](#enablearistaswitch) - Enable an arista switch data source
* [EnableBrocadeSwitch](#enablebrocadeswitch) - Enable a brocade switch data source
* [EnableCheckpointFirewall](#enablecheckpointfirewall) - Enable a checkpoint firewall data source
* [EnableCiscoSwitch](#enableciscoswitch) - Enable a cisco switch data source
* [EnableDellSwitch](#enabledellswitch) - Enable a dell switch data source
* [EnableHpovManager](#enablehpovmanager) - Enable a hp oneview data source
* [EnableHpvcManager](#enablehpvcmanager) - Enable a hpvc manager data source
* [EnableJuniperSwitch](#enablejuniperswitch) - Enable a juniper switch data source
* [EnableNsxvManager](#enablensxvmanager) - Enable a nsx-v manager data source
* [EnablePanoramaFirewall](#enablepanoramafirewall) - Enable a panorama firewall data source
* [EnableUcsManager](#enableucsmanager) - Enable an ucs manager data source
* [EnableVcenter](#enablevcenter) - Enable a vCenter data source
* [GetAristaSwitch](#getaristaswitch) - Show arista switch data source details
* [GetAristaSwitchSnmpConfig](#getaristaswitchsnmpconfig) - Show snmp config for arista switch data source
* [GetBrocadeSwitch](#getbrocadeswitch) - Show brocade switch data source details
* [GetBrocadeSwitchSnmpConfig](#getbrocadeswitchsnmpconfig) - Show snmp config for brocade switch data source
* [GetCheckpointFirewall](#getcheckpointfirewall) - Show checkpoint firewall data source details
* [GetCiscoSwitch](#getciscoswitch) - Show cisco switch data source details
* [GetCiscoSwitchSnmpConfig](#getciscoswitchsnmpconfig) - Show snmp config for cisco switch data source
* [GetDellSwitch](#getdellswitch) - Show dell switch data source details
* [GetDellSwitchSnmpConfig](#getdellswitchsnmpconfig) - Show snmp config for dell switch data source
* [GetHpovManager](#gethpovmanager) - Show hp oneview data source details
* [GetHpvcManager](#gethpvcmanager) - Show hpvc data source details
* [GetJuniperSwitch](#getjuniperswitch) - Show juniper switch data source details
* [GetJuniperSwitchSnmpConfig](#getjuniperswitchsnmpconfig) - Show snmp config for juniper switch data source
* [GetNsxvControllerCluster](#getnsxvcontrollercluster) - Show nsx controller-cluster details
* [GetNsxvManager](#getnsxvmanager) - Show nsx-v manager data source details
* [GetPanoramaFirewall](#getpanoramafirewall) - Show panorama firewall data source details
* [GetUcsManager](#getucsmanager) - Show ucs manager data source details
* [GetUcsSnmpConfig](#getucssnmpconfig) - Show snmp config for ucs fabric interconnects
* [GetVcenter](#getvcenter) - Show vCenter data source details
* [ListAristaSwitches](#listaristaswitches) - List arista switch data sources
* [ListBrocadeSwitches](#listbrocadeswitches) - List brocade switch data sources
* [ListCheckpointFirewalls](#listcheckpointfirewalls) - List checkpoint firewall data sources
* [ListCiscoSwitches](#listciscoswitches) - List cisco switch data sources
* [ListDellSwitches](#listdellswitches) - List dell switch data sources
* [ListHpovManagers](#listhpovmanagers) - List hp oneview manager data sources
* [ListHpvcManagers](#listhpvcmanagers) - List hpvc manager data sources
* [ListJuniperSwitches](#listjuniperswitches) - List juniper switch data sources
* [ListNsxvManagers](#listnsxvmanagers) - List nsx-v manager data sources
* [ListPanoramaFirewalls](#listpanoramafirewalls) - List panorama firewall data sources
* [ListUcsManagers](#listucsmanagers) - List ucs manager data sources
* [ListVcenters](#listvcenters) - List vCenter data sources
* [UpdateAristaSwitch](#updatearistaswitch) - Update an arista switch data source
* [UpdateAristaSwitchSnmpConfig](#updatearistaswitchsnmpconfig) - Update snmp config for arista switch data source
* [UpdateBrocadeSwitch](#updatebrocadeswitch) - Update a brocade switch data source
* [UpdateBrocadeSwitchSnmpConfig](#updatebrocadeswitchsnmpconfig) - Update snmp config for brocade switch data source
* [UpdateCheckpointFirewall](#updatecheckpointfirewall) - Update a checkpoint firewall data source
* [UpdateCiscoSwitch](#updateciscoswitch) - Update a cisco switch data source
* [UpdateCiscoSwitchSnmpConfig](#updateciscoswitchsnmpconfig) - Update snmp config for cisco switch data source
* [UpdateDellSwitch](#updatedellswitch) - Update a dell switch data source
* [UpdateDellSwitchSnmpConfig](#updatedellswitchsnmpconfig) - Update snmp config for dell switch data source
* [UpdateHpovManager](#updatehpovmanager) - Update a hp oneview data source
* [UpdateHpvcManager](#updatehpvcmanager) - Update a hpvc manager data source
* [UpdateJuniperSwitch](#updatejuniperswitch) - Update a juniper switch data source
* [UpdateJuniperSwitchSnmpConfig](#updatejuniperswitchsnmpconfig) - Update snmp config for a juniper switch data source
* [UpdateNsxvControllerCluster](#updatensxvcontrollercluster) - Update nsx controller-cluster details
* [UpdateNsxvManager](#updatensxvmanager) - Update a nsx-v manager data source
* [UpdatePanoramaFirewall](#updatepanoramafirewall) - Update a panorama firewall data source
* [UpdateUcsManager](#updateucsmanager) - Update an ucs manager data source
* [UpdateUcsSnmpConfig](#updateucssnmpconfig) - Update snmp config for ucs fabric interconnects
* [UpdateVcenter](#updatevcenter) - Update a vCenter data source.

## AddAristaSwitch

Add arista switch data source

### Example Usage

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
    res, err := s.DataSources.AddAristaSwitch(ctx, shared.SwitchDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "ea",
            Username: "Gracie.Padberg58",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("enim"),
        ProxyID: "1000:104:12313412",
    }, operations.AddAristaSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddBrocadeSwitch

Add brocade switch as a data source

### Example Usage

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
    res, err := s.DataSources.AddBrocadeSwitch(ctx, shared.SwitchDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "accusamus",
            Username: "Virgil_Pouros",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("id"),
        ProxyID: "1000:104:12313412",
    }, operations.AddBrocadeSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddCheckpointFirewall

Add checkpoint firewall as data source

### Example Usage

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
    res, err := s.DataSources.AddCheckpointFirewall(ctx, shared.SwitchDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "blanditiis",
            Username: "Kacie64",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("nisi"),
        ProxyID: "1000:104:12313412",
    }, operations.AddCheckpointFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddCiscoSwitch

Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

### Example Usage

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
    res, err := s.DataSources.AddCiscoSwitch(ctx, shared.CiscoSwitchDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "vel",
            Username: "Libby.Moen",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("nihil"),
        ProxyID: "1000:104:12313412",
        SwitchType: shared.CiscoSwitchTypeEnumCatalyst4500.ToPointer(),
    }, operations.AddCiscoSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CiscoSwitchDataSource != nil {
        // handle response
    }
}
```

## AddDellSwitch

Add a dell switch as data source

### Example Usage

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
    res, err := s.DataSources.AddDellSwitch(ctx, shared.DellSwitchDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "distinctio",
            Username: "Maggie38",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("natus"),
        ProxyID: "1000:104:12313412",
        SwitchType: shared.DellSwitchTypeEnumZ9100.ToPointer(),
    }, operations.AddDellSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DellSwitchDataSource != nil {
        // handle response
    }
}
```

## AddHpovManager

Add a hp oneview manager data source

### Example Usage

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
    res, err := s.DataSources.AddHpovManager(ctx, shared.SwitchDataSource{
        Credentials: &shared.PasswordCredentials{
            Password: "eum",
            Username: "Shaina29",
        },
        Enabled: sdk.Bool(false),
        EntityID: sdk.String("et"),
        EntityType: shared.DataSourceTypeEnumNsxvManagerDataSource.ToPointer(),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: sdk.String("vc1"),
        Notes: sdk.String("ullam"),
        ProxyID: sdk.String("1000:104:12313412"),
    }, operations.AddHpovManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddHpvcManager

Add hpvc manager data source

### Example Usage

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
    res, err := s.DataSources.AddHpvcManager(ctx, shared.SwitchDataSource{
        Credentials: &shared.PasswordCredentials{
            Password: "provident",
            Username: "Katrina65",
        },
        Enabled: sdk.Bool(false),
        EntityID: sdk.String("reiciendis"),
        EntityType: shared.DataSourceTypeEnumUcsManagerDataSource.ToPointer(),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: sdk.String("vc1"),
        Notes: sdk.String("ad"),
        ProxyID: sdk.String("1000:104:12313412"),
    }, operations.AddHpvcManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddJuniperSwitch

Add switch Datasource

### Example Usage

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
    res, err := s.DataSources.AddJuniperSwitch(ctx, shared.SwitchDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "eum",
            Username: "Dallas36",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("quasi"),
        ProxyID: "1000:104:12313412",
    }, operations.AddJuniperSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddNsxvManagerDatasource

Add a nsx-v manager data source

### Example Usage

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
    res, err := s.DataSources.AddNsxvManagerDatasource(ctx, shared.NSXVManagerDataSourceRequest{
        CentralCliEnabled: sdk.Bool(false),
        Credentials: shared.PasswordCredentials{
            Password: "iure",
            Username: "Wilton80",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        IpfixEnabled: sdk.Bool(false),
        Nickname: "vc1",
        Notes: sdk.String("deleniti"),
        ProxyID: "1000:104:12313412",
        VcenterID: "facilis",
    }, operations.AddNsxvManagerDatasourceSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NSXVManagerDataSource != nil {
        // handle response
    }
}
```

## AddPanoramaFirewall

Add panorama firewall as data source

### Example Usage

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
    res, err := s.DataSources.AddPanoramaFirewall(ctx, shared.SwitchDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "in",
            Username: "Barbara.Bradtke71",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("nihil"),
        ProxyID: "1000:104:12313412",
    }, operations.AddPanoramaFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddUcsManager

Add an ucs manager as data source

### Example Usage

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
    res, err := s.DataSources.AddUcsManager(ctx, shared.SwitchDataSource{
        Credentials: &shared.PasswordCredentials{
            Password: "repellat",
            Username: "Roman_Cormier3",
        },
        Enabled: sdk.Bool(false),
        EntityID: sdk.String("consequuntur"),
        EntityType: shared.DataSourceTypeEnumNsxvManagerDataSource.ToPointer(),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: sdk.String("vc1"),
        Notes: sdk.String("natus"),
        ProxyID: sdk.String("1000:104:12313412"),
    }, operations.AddUcsManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## AddVcenterDatasource

Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.

### Example Usage

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
    res, err := s.DataSources.AddVcenterDatasource(ctx, shared.VCenterDataSourceRequest{
        Credentials: &shared.PasswordCredentials{
            Password: "magni",
            Username: "Bradford_Satterfield80",
        },
        Enabled: sdk.Bool(false),
        Fqdn: sdk.String("your.domain.com"),
        IP: sdk.String("192.168.10.1"),
        Nickname: "vc1",
        Notes: sdk.String("ea"),
        ProxyID: "1000:104:12313412",
    }, operations.AddVcenterDatasourceSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VCenterDataSource != nil {
        // handle response
    }
}
```

## DeleteAristaSwitch

Delete an arista switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteAristaSwitch(ctx, operations.DeleteAristaSwitchRequest{
        ID: "92601fb5-76b0-4d5f-8d30-c5fbb2587053",
    }, operations.DeleteAristaSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteBrocadeSwitch

Delete a brocade switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteBrocadeSwitch(ctx, operations.DeleteBrocadeSwitchRequest{
        ID: "202c73d5-fe9b-490c-a890-9b3fe49a8d9c",
    }, operations.DeleteBrocadeSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCheckpointFirewall

Delete a checkpoint firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteCheckpointFirewall(ctx, operations.DeleteCheckpointFirewallRequest{
        ID: "bf486333-23f9-4b77-b3a4-100674ebf692",
    }, operations.DeleteCheckpointFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCiscoSwitch

Delete a cisco switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteCiscoSwitch(ctx, operations.DeleteCiscoSwitchRequest{
        ID: "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95",
    }, operations.DeleteCiscoSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDellSwitch

Delete a data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteDellSwitch(ctx, operations.DeleteDellSwitchRequest{
        ID: "d8a0d446-ce2a-4f7a-b3cf-3be453f870b3",
    }, operations.DeleteDellSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHpovManager

Delete a hp oneview data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteHpovManager(ctx, operations.DeleteHpovManagerRequest{
        ID: "26b5a734-29cd-4b1a-8422-bb679d232271",
    }, operations.DeleteHpovManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHpvcManager

Delete a hpvc manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteHpvcManager(ctx, operations.DeleteHpvcManagerRequest{
        ID: "5bf0cbb1-e31b-48b9-8f34-43a1108e0adc",
    }, operations.DeleteHpvcManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteJuniperSwitch

Delete a juniper switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteJuniperSwitch(ctx, operations.DeleteJuniperSwitchRequest{
        ID: "f4b92187-9fce-4953-b73e-f7fbc7abd74d",
    }, operations.DeleteJuniperSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNsxvManager

Delete a nsx-v manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteNsxvManager(ctx, operations.DeleteNsxvManagerRequest{
        ID: "d39c0f5d-2cff-47c7-8a45-626d436813f1",
    }, operations.DeleteNsxvManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePanoramaFirewall

Delete a panorama firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeletePanoramaFirewall(ctx, operations.DeletePanoramaFirewallRequest{
        ID: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
    }, operations.DeletePanoramaFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUcsManager

Delete an ucs manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteUcsManager(ctx, operations.DeleteUcsManagerRequest{
        ID: "141aac36-6c8d-4d6b-9442-907474778a7b",
    }, operations.DeleteUcsManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteVcenter

Delete a data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DeleteVcenter(ctx, operations.DeleteVcenterRequest{
        ID: "d466d28c-10ab-43cd-8a42-51904e523c7e",
    }, operations.DeleteVcenterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableAristaSwitch

Disable an arista switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableAristaSwitch(ctx, operations.DisableAristaSwitchRequest{
        ID: "0bc7178e-4796-4f2a-b0c6-88282aa48256",
    }, operations.DisableAristaSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableBrocadeSwitch

Disable a brocade switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableBrocadeSwitch(ctx, operations.DisableBrocadeSwitchRequest{
        ID: "2f222e98-17ee-417c-be61-e6b7b95bc0ab",
    }, operations.DisableBrocadeSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableCheckpointFirewall

Disable a checkpoint firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableCheckpointFirewall(ctx, operations.DisableCheckpointFirewallRequest{
        ID: "3c20c4f3-789f-4d87-9f99-dd2efd121aa6",
    }, operations.DisableCheckpointFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableCiscoSwitch

Disable a cisco switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableCiscoSwitch(ctx, operations.DisableCiscoSwitchRequest{
        ID: "f1e674bd-b04f-4157-9608-2d68ea19f1d1",
    }, operations.DisableCiscoSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableDellSwitch

Disable a dell switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableDellSwitch(ctx, operations.DisableDellSwitchRequest{
        ID: "7051339d-0808-46a1-8403-94c26071f93f",
    }, operations.DisableDellSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableHpovManager

Disable a hp oneview data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableHpovManager(ctx, operations.DisableHpovManagerRequest{
        ID: "5f0642da-c7af-4515-8c41-3aa63aae8d67",
    }, operations.DisableHpovManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableHpvcManager

Disable a hpvc manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableHpvcManager(ctx, operations.DisableHpvcManagerRequest{
        ID: "864dbb67-5fd5-4e60-b375-ed4f6fbee41f",
    }, operations.DisableHpvcManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableJuniperSwitch

Disable a juniper switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableJuniperSwitch(ctx, operations.DisableJuniperSwitchRequest{
        ID: "33317fe3-5b60-4eb1-aa42-6555ba3c2874",
    }, operations.DisableJuniperSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableNsxvManager

Disable a nsx-v manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableNsxvManager(ctx, operations.DisableNsxvManagerRequest{
        ID: "4ed53b88-f3a8-4d8f-9c0b-2f2fb7b194a2",
    }, operations.DisableNsxvManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisablePanoramaFirewall

Disable a panorama firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisablePanoramaFirewall(ctx, operations.DisablePanoramaFirewallRequest{
        ID: "76b26916-fe1f-408f-8294-e3698f447f60",
    }, operations.DisablePanoramaFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableUcsManager

Disable an ucs manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableUcsManager(ctx, operations.DisableUcsManagerRequest{
        ID: "3e8b445e-80ca-455e-bd20-e457e1858b6a",
    }, operations.DisableUcsManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableVcenter

Disable a vCenter data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.DisableVcenter(ctx, operations.DisableVcenterRequest{
        ID: "89fbe3a5-aa8e-4482-8d0a-b4075088e518",
    }, operations.DisableVcenterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableAristaSwitch

Enable an arista switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableAristaSwitch(ctx, operations.EnableAristaSwitchRequest{
        ID: "62065e90-4f3b-4119-8b8a-bf603a79f9df",
    }, operations.EnableAristaSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableBrocadeSwitch

Enable a brocade switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableBrocadeSwitch(ctx, operations.EnableBrocadeSwitchRequest{
        ID: "e0ab7da8-a50c-4e18-bf86-bc173d689eee",
    }, operations.EnableBrocadeSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableCheckpointFirewall

Enable a checkpoint firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableCheckpointFirewall(ctx, operations.EnableCheckpointFirewallRequest{
        ID: "9526f8d9-86e8-481e-ad4f-0e1012563f94",
    }, operations.EnableCheckpointFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableCiscoSwitch

Enable a cisco switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableCiscoSwitch(ctx, operations.EnableCiscoSwitchRequest{
        ID: "e29e973e-922a-457a-95be-3e060807e2b6",
    }, operations.EnableCiscoSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableDellSwitch

Enable a dell switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableDellSwitch(ctx, operations.EnableDellSwitchRequest{
        ID: "e3ab8845-f059-47a6-8ff2-a54a31e94764",
    }, operations.EnableDellSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableHpovManager

Enable a hp oneview data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableHpovManager(ctx, operations.EnableHpovManagerRequest{
        ID: "a3e865e7-956f-4925-9a5a-9da660ff57bf",
    }, operations.EnableHpovManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableHpvcManager

Enable a hpvc manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableHpvcManager(ctx, operations.EnableHpvcManagerRequest{
        ID: "aad4f9ef-c1b4-4512-8103-2648dc2f6151",
    }, operations.EnableHpvcManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableJuniperSwitch

Enable a juniper switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableJuniperSwitch(ctx, operations.EnableJuniperSwitchRequest{
        ID: "99ebfd0e-9fe6-4c63-aca3-aed011799631",
    }, operations.EnableJuniperSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableNsxvManager

Enable a nsx-v manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableNsxvManager(ctx, operations.EnableNsxvManagerRequest{
        ID: "2fde0477-1778-4ff6-9d01-7476360a15db",
    }, operations.EnableNsxvManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnablePanoramaFirewall

Enable a panorama firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnablePanoramaFirewall(ctx, operations.EnablePanoramaFirewallRequest{
        ID: "6a660659-a1ad-4eaa-b585-1d6c645b08b6",
    }, operations.EnablePanoramaFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableUcsManager

Enable an ucs manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableUcsManager(ctx, operations.EnableUcsManagerRequest{
        ID: "1891baa0-fe1a-4de0-88e6-f8c5f350d8cd",
    }, operations.EnableUcsManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableVcenter

Enable a vCenter data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.EnableVcenter(ctx, operations.EnableVcenterRequest{
        ID: "b5a34181-4301-4042-9813-d5208ece7e25",
    }, operations.EnableVcenterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAristaSwitch

Show arista switch data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetAristaSwitch(ctx, operations.GetAristaSwitchRequest{
        ID: "3b668451-c6c6-4e20-9e16-deab3fec9578",
    }, operations.GetAristaSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetAristaSwitchSnmpConfig

Show snmp config for arista switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetAristaSwitchSnmpConfig(ctx, operations.GetAristaSwitchSnmpConfigRequest{
        ID: "a6458427-3a84-418d-9623-09fb0929921a",
    }, operations.GetAristaSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## GetBrocadeSwitch

Show brocade switch data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetBrocadeSwitch(ctx, operations.GetBrocadeSwitchRequest{
        ID: "efb9f58c-4d86-4e68-a4be-056013f59da7",
    }, operations.GetBrocadeSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetBrocadeSwitchSnmpConfig

Show snmp config for brocade switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetBrocadeSwitchSnmpConfig(ctx, operations.GetBrocadeSwitchSnmpConfigRequest{
        ID: "57a59ecf-ef66-4ef1-8aa3-383c2beb4773",
    }, operations.GetBrocadeSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## GetCheckpointFirewall

Show checkpoint firewall data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetCheckpointFirewall(ctx, operations.GetCheckpointFirewallRequest{
        ID: "73c8d72f-64d1-4db1-b2c4-310661e96349",
    }, operations.GetCheckpointFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetCiscoSwitch

Show cisco switch data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetCiscoSwitch(ctx, operations.GetCiscoSwitchRequest{
        ID: "e1cf9e06-e3a4-4370-80ae-6b6bc9b8f759",
    }, operations.GetCiscoSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CiscoSwitchDataSource != nil {
        // handle response
    }
}
```

## GetCiscoSwitchSnmpConfig

Show snmp config for cisco switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetCiscoSwitchSnmpConfig(ctx, operations.GetCiscoSwitchSnmpConfigRequest{
        ID: "eac55a97-41d3-4113-9296-5bb8a7202611",
    }, operations.GetCiscoSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## GetDellSwitch

Get a dell switch data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetDellSwitch(ctx, operations.GetDellSwitchRequest{
        ID: "435e139d-bc22-459b-9abd-a8c070e1084c",
    }, operations.GetDellSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DellSwitchDataSource != nil {
        // handle response
    }
}
```

## GetDellSwitchSnmpConfig

Show snmp config for dell switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetDellSwitchSnmpConfig(ctx, operations.GetDellSwitchSnmpConfigRequest{
        ID: "b0672d1a-d879-4eeb-9665-b85efbd02bae",
    }, operations.GetDellSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## GetHpovManager

Show hp oneview data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetHpovManager(ctx, operations.GetHpovManagerRequest{
        ID: "0be2d782-259e-43ea-8b51-97f92443da7c",
    }, operations.GetHpovManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetHpvcManager

Show hpvc data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetHpvcManager(ctx, operations.GetHpvcManagerRequest{
        ID: "e52b895c-537c-4645-8efb-0b34896c3ca5",
    }, operations.GetHpvcManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetJuniperSwitch

Show juniper switch data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetJuniperSwitch(ctx, operations.GetJuniperSwitchRequest{
        ID: "acfbe2fd-5707-4577-9291-77deac646ecb",
    }, operations.GetJuniperSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetJuniperSwitchSnmpConfig

Show snmp config for juniper switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetJuniperSwitchSnmpConfig(ctx, operations.GetJuniperSwitchSnmpConfigRequest{
        ID: "573409e3-eb1e-45a2-b12e-b07f116db995",
    }, operations.GetJuniperSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## GetNsxvControllerCluster

Show nsx controller-cluster details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetNsxvControllerCluster(ctx, operations.GetNsxvControllerClusterRequest{
        ID: "45fc95fa-8897-40e1-89db-b30fcb33ea05",
    }, operations.GetNsxvControllerClusterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NSXControllerDataCollection != nil {
        // handle response
    }
}
```

## GetNsxvManager

Show nsx-v manager data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetNsxvManager(ctx, operations.GetNsxvManagerRequest{
        ID: "5b197cd4-4e2f-452d-82d3-513bb6f48b65",
    }, operations.GetNsxvManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NSXVManagerDataSource != nil {
        // handle response
    }
}
```

## GetPanoramaFirewall

Show panorama firewall data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetPanoramaFirewall(ctx, operations.GetPanoramaFirewallRequest{
        ID: "6bcdb35f-f2e4-4b27-937a-8cd9e7319c17",
    }, operations.GetPanoramaFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetUcsManager

Show ucs manager data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetUcsManager(ctx, operations.GetUcsManagerRequest{
        ID: "7d525f77-b114-4eeb-92ff-785fc37814d4",
    }, operations.GetUcsManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## GetUcsSnmpConfig

Show snmp config for ucs fabric interconnects

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetUcsSnmpConfig(ctx, operations.GetUcsSnmpConfigRequest{
        ID: "c98e0c2b-b89e-4b75-9ad6-36c600503d8b",
    }, operations.GetUcsSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## GetVcenter

Show vCenter data source details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.GetVcenter(ctx, operations.GetVcenterRequest{
        ID: "b31180f7-39ae-49e0-97eb-809e2810331f",
    }, operations.GetVcenterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VCenterDataSource != nil {
        // handle response
    }
}
```

## ListAristaSwitches

List arista switch data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListAristaSwitches(ctx, operations.ListAristaSwitchesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListBrocadeSwitches

List brocade switch data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListBrocadeSwitches(ctx, operations.ListBrocadeSwitchesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListCheckpointFirewalls

List checkpoint firewall data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListCheckpointFirewalls(ctx, operations.ListCheckpointFirewallsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListCiscoSwitches

List cisco switch data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListCiscoSwitches(ctx, operations.ListCiscoSwitchesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListDellSwitches

List dell switch data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListDellSwitches(ctx, operations.ListDellSwitchesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListHpovManagers

List hp oneview manager data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListHpovManagers(ctx, operations.ListHpovManagersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListHpvcManagers

List hpvc manager data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListHpvcManagers(ctx, operations.ListHpvcManagersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListJuniperSwitches

List juniper switch data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListJuniperSwitches(ctx, operations.ListJuniperSwitchesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListNsxvManagers

List nsx-v manager data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListNsxvManagers(ctx, operations.ListNsxvManagersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListPanoramaFirewalls

List panorama firewall data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListPanoramaFirewalls(ctx, operations.ListPanoramaFirewallsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListUcsManagers

List ucs manager data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListUcsManagers(ctx, operations.ListUcsManagersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## ListVcenters

List vCenter data sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.ListVcenters(ctx, operations.ListVcentersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSourceListResponse != nil {
        // handle response
    }
}
```

## UpdateAristaSwitch

Update an switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateAristaSwitch(ctx, operations.UpdateAristaSwitchRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "dolor",
                Username: "Kristofer86",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("labore"),
            EntityType: shared.DataSourceTypeEnumHpOneViewDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("esse"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "00b607f3-c93c-473b-9da3-f2ceda7e23f2",
    }, operations.UpdateAristaSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateAristaSwitchSnmpConfig

Update snmp config for arista switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateAristaSwitchSnmpConfig(ctx, operations.UpdateAristaSwitchSnmpConfigRequest{
        SNMPConfig: &shared.SNMPConfig{
            ConfigSnmp2c: &shared.Snmp2cConfig{
                CommunityString: sdk.String("explicabo"),
            },
            ConfigSnmp3: &shared.Snmp3Config{
                AuthenticationPassword: sdk.String("exercitationem"),
                AuthenticationType: shared.Snmp3ConfigAuthenticationTypeEnumMd5.ToPointer(),
                ContextName: sdk.String("non"),
                PrivacyPassword: sdk.String("ab"),
                PrivacyType: shared.Snmp3ConfigPrivacyTypeEnumAes.ToPointer(),
                Username: sdk.String("Tyree.Nolan71"),
            },
            SnmpEnabled: sdk.Bool(false),
            SnmpVersion: shared.SNMPConfigSNMPVersionEnumV2c.ToPointer(),
        },
        ID: "544e472e-8028-457a-9b40-463a7d575f14",
    }, operations.UpdateAristaSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## UpdateBrocadeSwitch

Update a brocade switch data source. Only credentials, nickname and notes can be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateBrocadeSwitch(ctx, operations.UpdateBrocadeSwitchRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "aut",
                Username: "Adrain.Veum",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("numquam"),
            EntityType: shared.DataSourceTypeEnumHpvcManagerDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("possimus"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "7334ec1b-781b-436a-8808-8d100efada20",
    }, operations.UpdateBrocadeSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateBrocadeSwitchSnmpConfig

Update snmp config for brocade switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateBrocadeSwitchSnmpConfig(ctx, operations.UpdateBrocadeSwitchSnmpConfigRequest{
        SNMPConfig: &shared.SNMPConfig{
            ConfigSnmp2c: &shared.Snmp2cConfig{
                CommunityString: sdk.String("alias"),
            },
            ConfigSnmp3: &shared.Snmp3Config{
                AuthenticationPassword: sdk.String("eveniet"),
                AuthenticationType: shared.Snmp3ConfigAuthenticationTypeEnumSha.ToPointer(),
                ContextName: sdk.String("voluptatem"),
                PrivacyPassword: sdk.String("incidunt"),
                PrivacyType: shared.Snmp3ConfigPrivacyTypeEnumDes.ToPointer(),
                Username: sdk.String("Christopher.Tremblay10"),
            },
            SnmpEnabled: sdk.Bool(false),
            SnmpVersion: shared.SNMPConfigSNMPVersionEnumV2c.ToPointer(),
        },
        ID: "4cf9ab83-66c7-423f-bda9-e06bee4825c1",
    }, operations.UpdateBrocadeSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## UpdateCheckpointFirewall

Update a checkpoint firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateCheckpointFirewall(ctx, operations.UpdateCheckpointFirewallRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "voluptatibus",
                Username: "Nicola.Berge10",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("enim"),
            EntityType: shared.DataSourceTypeEnumHpOneViewDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("rem"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "0bff9185-44ec-442d-afcc-e8f1977773e6",
    }, operations.UpdateCheckpointFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateCiscoSwitch

Update a cisco switch data source. Only credentials, nickname and notes can be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateCiscoSwitch(ctx, operations.UpdateCiscoSwitchRequest{
        CiscoSwitchDataSource: &shared.CiscoSwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "neque",
                Username: "Florencio64",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("reprehenderit"),
            EntityType: shared.DataSourceTypeEnumHpvcManagerDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("eius"),
            ProxyID: sdk.String("1000:104:12313412"),
            SwitchType: shared.CiscoSwitchTypeEnumCatalyst3000.ToPointer(),
        },
        ID: "8f05e3d4-8fda-4f31-ba1f-5fd94259c0b3",
    }, operations.UpdateCiscoSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CiscoSwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateCiscoSwitchSnmpConfig

Update snmp config for cisco switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateCiscoSwitchSnmpConfig(ctx, operations.UpdateCiscoSwitchSnmpConfigRequest{
        SNMPConfig: &shared.SNMPConfig{
            ConfigSnmp2c: &shared.Snmp2cConfig{
                CommunityString: sdk.String("commodi"),
            },
            ConfigSnmp3: &shared.Snmp3Config{
                AuthenticationPassword: sdk.String("sapiente"),
                AuthenticationType: shared.Snmp3ConfigAuthenticationTypeEnumNoAuth.ToPointer(),
                ContextName: sdk.String("veniam"),
                PrivacyPassword: sdk.String("debitis"),
                PrivacyType: shared.Snmp3ConfigPrivacyTypeEnumAes256.ToPointer(),
                Username: sdk.String("King94"),
            },
            SnmpEnabled: sdk.Bool(false),
            SnmpVersion: shared.SNMPConfigSNMPVersionEnumV2c.ToPointer(),
        },
        ID: "b756c11f-6c37-4a51-a624-3835bbc05a23",
    }, operations.UpdateCiscoSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## UpdateDellSwitch

Update a dell switch data source. Only credentials, nickname and notes can be updated

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateDellSwitch(ctx, operations.UpdateDellSwitchRequest{
        DellSwitchDataSource: &shared.DellSwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "deserunt",
                Username: "Domenick_Hartmann95",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("quisquam"),
            EntityType: shared.DataSourceTypeEnumBrocadeSwitchDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("doloribus"),
            ProxyID: sdk.String("1000:104:12313412"),
            SwitchType: shared.DellSwitchTypeEnumS6000.ToPointer(),
        },
        ID: "e10a0ce2-169e-4510-819c-6dc5e3476279",
    }, operations.UpdateDellSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DellSwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateDellSwitchSnmpConfig

Update snmp config for dell switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateDellSwitchSnmpConfig(ctx, operations.UpdateDellSwitchSnmpConfigRequest{
        SNMPConfig: &shared.SNMPConfig{
            ConfigSnmp2c: &shared.Snmp2cConfig{
                CommunityString: sdk.String("provident"),
            },
            ConfigSnmp3: &shared.Snmp3Config{
                AuthenticationPassword: sdk.String("cum"),
                AuthenticationType: shared.Snmp3ConfigAuthenticationTypeEnumSha.ToPointer(),
                ContextName: sdk.String("facilis"),
                PrivacyPassword: sdk.String("quidem"),
                PrivacyType: shared.Snmp3ConfigPrivacyTypeEnumNoPriv.ToPointer(),
                Username: sdk.String("Gina59"),
            },
            SnmpEnabled: sdk.Bool(false),
            SnmpVersion: shared.SNMPConfigSNMPVersionEnumV3.ToPointer(),
        },
        ID: "b2bb4eca-e6c3-4d5d-b3ad-ebd5daea4c50",
    }, operations.UpdateDellSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## UpdateHpovManager

Update a hp oneview data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateHpovManager(ctx, operations.UpdateHpovManagerRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "suscipit",
                Username: "Luther_MacGyver57",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("labore"),
            EntityType: shared.DataSourceTypeEnumHpOneViewDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("perferendis"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "2644cf5e-9d9a-4457-8adc-1ac600dec001",
    }, operations.UpdateHpovManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateHpvcManager

Update a hpvc manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateHpvcManager(ctx, operations.UpdateHpvcManagerRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "similique",
                Username: "Otis16",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("officiis"),
            EntityType: shared.DataSourceTypeEnumDellSwitchDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("necessitatibus"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "c09ff8f0-f816-4ff3-877c-13e902c14125",
    }, operations.UpdateHpvcManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateJuniperSwitch

Update a juniper switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateJuniperSwitch(ctx, operations.UpdateJuniperSwitchRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "rerum",
                Username: "Abigail.Muller",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("id"),
            EntityType: shared.DataSourceTypeEnumJuniperSwitchDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("ex"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "8151a472-af92-43c5-949f-83f350cf876f",
    }, operations.UpdateJuniperSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateJuniperSwitchSnmpConfig

Update snmp config for a juniper switch data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateJuniperSwitchSnmpConfig(ctx, operations.UpdateJuniperSwitchSnmpConfigRequest{
        SNMPConfig: &shared.SNMPConfig{
            ConfigSnmp2c: &shared.Snmp2cConfig{
                CommunityString: sdk.String("a"),
            },
            ConfigSnmp3: &shared.Snmp3Config{
                AuthenticationPassword: sdk.String("nobis"),
                AuthenticationType: shared.Snmp3ConfigAuthenticationTypeEnumMd5.ToPointer(),
                ContextName: sdk.String("accusantium"),
                PrivacyPassword: sdk.String("dicta"),
                PrivacyType: shared.Snmp3ConfigPrivacyTypeEnumThreeDes.ToPointer(),
                Username: sdk.String("Haylie_Upton69"),
            },
            SnmpEnabled: sdk.Bool(false),
            SnmpVersion: shared.SNMPConfigSNMPVersionEnumV2c.ToPointer(),
        },
        ID: "e243cf78-9ffa-4fed-a53e-5ae6e0ac184c",
    }, operations.UpdateJuniperSwitchSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## UpdateNsxvControllerCluster

Update nsx controller-cluster details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateNsxvControllerCluster(ctx, operations.UpdateNsxvControllerClusterRequest{
        NSXControllerDataCollection: &shared.NSXControllerDataCollection{
            ControllerPassword: sdk.String("eos"),
            Enabled: sdk.Bool(false),
        },
        ID: "b9c247c8-8373-4a40-a194-2f32e5505575",
    }, operations.UpdateNsxvControllerClusterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NSXControllerDataCollection != nil {
        // handle response
    }
}
```

## UpdateNsxvManager

Update a nsx-v manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateNsxvManager(ctx, operations.UpdateNsxvManagerRequest{
        NSXVManagerDataSource: &shared.NSXVManagerDataSource{
            CentralCliEnabled: sdk.Bool(false),
            Credentials: &shared.PasswordCredentials{
                Password: "nisi",
                Username: "Ulices.Hayes38",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("pariatur"),
            EntityType: shared.DataSourceTypeEnumCiscoSwitchDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            IpfixEnabled: sdk.Bool(false),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("quidem"),
            ProxyID: sdk.String("1000:104:12313412"),
            VcenterID: sdk.String("repellendus"),
        },
        ID: "0af2dfe1-3db4-4f62-8ba3-f8941aebc0b8",
    }, operations.UpdateNsxvManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NSXVManagerDataSource != nil {
        // handle response
    }
}
```

## UpdatePanoramaFirewall

Update a panorama firewall data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdatePanoramaFirewall(ctx, operations.UpdatePanoramaFirewallRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "eaque",
                Username: "Lue.Hyatt",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("tempora"),
            EntityType: shared.DataSourceTypeEnumHpOneViewDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("dolor"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "b2ecfcc8-f895-4010-b5dd-3d6fa1804e54",
    }, operations.UpdatePanoramaFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateUcsManager

Update an ucs manager data source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateUcsManager(ctx, operations.UpdateUcsManagerRequest{
        SwitchDataSource: &shared.SwitchDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "quisquam",
                Username: "Keara.Crooks40",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("laudantium"),
            EntityType: shared.DataSourceTypeEnumUcsManagerDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("dolor"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "63c8873e-4843-480b-9f6b-8ca275a60a04",
    }, operations.UpdateUcsManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwitchDataSource != nil {
        // handle response
    }
}
```

## UpdateUcsSnmpConfig

Update snmp config for ucs fabric interconnects

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateUcsSnmpConfig(ctx, operations.UpdateUcsSnmpConfigRequest{
        SNMPConfig: &shared.SNMPConfig{
            ConfigSnmp2c: &shared.Snmp2cConfig{
                CommunityString: sdk.String("maxime"),
            },
            ConfigSnmp3: &shared.Snmp3Config{
                AuthenticationPassword: sdk.String("aliquam"),
                AuthenticationType: shared.Snmp3ConfigAuthenticationTypeEnumMd5.ToPointer(),
                ContextName: sdk.String("ullam"),
                PrivacyPassword: sdk.String("eligendi"),
                PrivacyType: shared.Snmp3ConfigPrivacyTypeEnumThreeDes.ToPointer(),
                Username: sdk.String("General.Mayert"),
            },
            SnmpEnabled: sdk.Bool(false),
            SnmpVersion: shared.SNMPConfigSNMPVersionEnumV2c.ToPointer(),
        },
        ID: "1b51c1bd-b1cf-44b8-88eb-dfc4ccca99bc",
    }, operations.UpdateUcsSnmpConfigSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SNMPConfig != nil {
        // handle response
    }
}
```

## UpdateVcenter

Update a vcenter data source. Only nickname, notes and credentials can be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataSources.UpdateVcenter(ctx, operations.UpdateVcenterRequest{
        VCenterDataSource: &shared.VCenterDataSource{
            Credentials: &shared.PasswordCredentials{
                Password: "esse",
                Username: "Tyree74",
            },
            Enabled: sdk.Bool(false),
            EntityID: sdk.String("fugit"),
            EntityType: shared.DataSourceTypeEnumPanFirewallDataSource.ToPointer(),
            Fqdn: sdk.String("your.domain.com"),
            IP: sdk.String("192.168.10.1"),
            Nickname: sdk.String("vc1"),
            Notes: sdk.String("eligendi"),
            ProxyID: sdk.String("1000:104:12313412"),
        },
        ID: "e10873e4-2b00-46d6-b887-8ba8581a5820",
    }, operations.UpdateVcenterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VCenterDataSource != nil {
        // handle response
    }
}
```
