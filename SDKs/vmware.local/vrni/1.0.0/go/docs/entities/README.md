# Entities

## Overview

Entities APIs

### Available Operations

* [GetCluster](#getcluster) - Show cluster details
* [GetDatacenter](#getdatacenter) - Show vCenter datacenter details
* [GetDatastore](#getdatastore) - Show datastore details
* [GetDistributedVirtualPortgroup](#getdistributedvirtualportgroup) - Show distributed virtual portgroup details
* [GetDistributedVirtualSwitch](#getdistributedvirtualswitch) - Show distributed virtual switch details
* [GetFirewall](#getfirewall) - Show firewall details
* [GetFirewallRule](#getfirewallrule) - Show firewall rule details
* [GetFlow](#getflow) - Show flow details
* [GetFlows](#getflows) - List flows
* [GetFolder](#getfolder) - Show folder details
* [GetHost](#gethost) - Show host details
* [GetIPSet](#getipset) - Show ip set details
* [GetLayer2Network](#getlayer2network) - Show layer2 network details
* [GetNSXManager](#getnsxmanager) - Show nsx manager details
* [GetName](#getname) - Get name of an entity
* [GetNames](#getnames) - Get names for entities
* [GetProblemEvent](#getproblemevent) - Show problem details
* [GetSecurityGroup](#getsecuritygroup) - Show security group details
* [GetSecurityTag](#getsecuritytag) - Show security tag details
* [GetService](#getservice) - Show service details
* [GetServiceGroup](#getservicegroup) - Show service group details
* [GetVcenterManager](#getvcentermanager) - Show vCenter manager details
* [GetVM](#getvm) - Show vm details
* [GetVmknic](#getvmknic) - Show vmknic details
* [GetVnic](#getvnic) - Show vnic details
* [ListClusters](#listclusters) - List clusters
* [ListDatacenters](#listdatacenters) - List vCenter datacenters
* [ListDatastores](#listdatastores) - List datastores
* [ListDistributedVirtualPortgroups](#listdistributedvirtualportgroups) - List distributed virtual portgroups
* [ListDistributedVirtualSwitches](#listdistributedvirtualswitches) - List distributed virtual switches
* [ListFirewallRules](#listfirewallrules) - List firewall rules
* [ListFirewalls](#listfirewalls) - List firewalls
* [ListFolders](#listfolders) - List folders
* [ListHosts](#listhosts) - List hosts
* [ListIPSets](#listipsets) - List ip sets
* [ListLayer2Networks](#listlayer2networks) - List layer2 networks
* [ListNSXManagers](#listnsxmanagers) - List nsx managers
* [ListProblemEvents](#listproblemevents) - List problems
* [ListSecurityGroups](#listsecuritygroups) - List security groups
* [ListSecurityTags](#listsecuritytags) - List security tags
* [ListServiceGroups](#listservicegroups) - List service groups
* [ListServices](#listservices) - List services
* [ListVcenterManagers](#listvcentermanagers) - List vCenter managers
* [ListVmknics](#listvmknics) - List vmknics
* [ListVms](#listvms) - List vms
* [ListVnics](#listvnics) - List vnics

## GetCluster

Show cluster details

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
    res, err := s.Entities.GetCluster(ctx, operations.GetClusterRequest{
        ID: "8c54fefa-9c95-4f2e-ac55-65d307cfee81",
        Time: sdk.Int64(144179),
    }, operations.GetClusterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Cluster != nil {
        // handle response
    }
}
```

## GetDatacenter

Show vCenter datacenter details

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
    res, err := s.Entities.GetDatacenter(ctx, operations.GetDatacenterRequest{
        ID: "06e2813f-a4a4-41c4-80d3-f2132af03102",
        Time: sdk.Int64(860362),
    }, operations.GetDatacenterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VCDatacenter != nil {
        // handle response
    }
}
```

## GetDatastore

Show datastore details

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
    res, err := s.Entities.GetDatastore(ctx, operations.GetDatastoreRequest{
        ID: "514f4cc6-f18b-4f96-a1a6-a4f77a87ee3e",
        Time: sdk.Int64(263346),
    }, operations.GetDatastoreSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Datastore != nil {
        // handle response
    }
}
```

## GetDistributedVirtualPortgroup

Show distributed virtual portgroup details

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
    res, err := s.Entities.GetDistributedVirtualPortgroup(ctx, operations.GetDistributedVirtualPortgroupRequest{
        ID: "be752c65-b344-418e-bbb9-1c8d975e0e84",
        Time: sdk.Int64(63825),
    }, operations.GetDistributedVirtualPortgroupSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributedVirtualPortgroup != nil {
        // handle response
    }
}
```

## GetDistributedVirtualSwitch

Show distributed virtual switch details

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
    res, err := s.Entities.GetDistributedVirtualSwitch(ctx, operations.GetDistributedVirtualSwitchRequest{
        ID: "9d8f84f1-44f3-4e07-adcc-4aa5f3cabd90",
        Time: sdk.Int64(369941),
    }, operations.GetDistributedVirtualSwitchSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributedVirtualSwitch != nil {
        // handle response
    }
}
```

## GetFirewall

Show firewall details

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
    res, err := s.Entities.GetFirewall(ctx, operations.GetFirewallRequest{
        ID: "a972e056-7282-427b-ad30-9470bf7a4fa8",
        Time: sdk.Int64(482628),
    }, operations.GetFirewallSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseFirewallRule != nil {
        // handle response
    }
}
```

## GetFirewallRule

Show firewall rule details

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
    res, err := s.Entities.GetFirewallRule(ctx, operations.GetFirewallRuleRequest{
        ID: "cf535a6f-ae54-4ebf-a0c3-21f023b75d23",
        Time: sdk.Int64(390854),
    }, operations.GetFirewallRuleSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseFirewallRule != nil {
        // handle response
    }
}
```

## GetFlow

Show flow details

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
    res, err := s.Entities.GetFlow(ctx, operations.GetFlowRequest{
        ID: "7fe1a0cc-8df7-49f0-a396-d90c364b7c15",
        Time: sdk.Int64(859725),
    }, operations.GetFlowSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Flow != nil {
        // handle response
    }
}
```

## GetFlows

List flows

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
    res, err := s.Entities.GetFlows(ctx, operations.GetFlowsRequest{
        Cursor: sdk.String("maiores"),
        EndTime: sdk.Float64(7156.22),
        Size: sdk.Float64(6496.57),
        StartTime: sdk.Float64(7709.97),
    }, operations.GetFlowsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## GetFolder

Show folder details

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
    res, err := s.Entities.GetFolder(ctx, operations.GetFolderRequest{
        ID: "e188b1c4-ee2c-48c6-8e61-1feeb1c7cbdb",
        Time: sdk.Int64(382342),
    }, operations.GetFolderSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Folder != nil {
        // handle response
    }
}
```

## GetHost

Show host details

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
    res, err := s.Entities.GetHost(ctx, operations.GetHostRequest{
        ID: "eec74378-ba25-4317-b47d-c915ad2caf5d",
        Time: sdk.Int64(845086),
    }, operations.GetHostSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Host != nil {
        // handle response
    }
}
```

## GetIPSet

Show ip set details

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
    res, err := s.Entities.GetIPSet(ctx, operations.GetIPSetRequest{
        ID: "6723dc0f-5ae2-4f3a-ab70-0878756143f5",
        Time: sdk.Int64(666005),
    }, operations.GetIPSetSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseIPSet != nil {
        // handle response
    }
}
```

## GetLayer2Network

Show layer2 network details

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
    res, err := s.Entities.GetLayer2Network(ctx, operations.GetLayer2NetworkRequest{
        ID: "6c98b555-5408-40d4-8bca-cc6cbd6b5f3e",
        Time: sdk.Int64(803792),
    }, operations.GetLayer2NetworkSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseL2Network != nil {
        // handle response
    }
}
```

## GetNSXManager

Show nsx manager details

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
    res, err := s.Entities.GetNSXManager(ctx, operations.GetNSXManagerRequest{
        ID: "909304f9-26ba-4d25-9381-9b474b0ed20e",
        Time: sdk.Int64(360635),
    }, operations.GetNSXManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseEntity != nil {
        // handle response
    }
}
```

## GetName

Get name of an entity

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
    res, err := s.Entities.GetName(ctx, operations.GetNameRequest{
        ID: "6248fff6-39a9-410a-bdca-b62676696e1e",
        Time: sdk.Int64(790305),
    }, operations.GetNameSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EntityName != nil {
        // handle response
    }
}
```

## GetNames

Get names for entities.Limit of 1000 entities in a single request.

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
    res, err := s.Entities.GetNames(ctx, shared.NamesRequest{
        Entities: []shared.NameRequestParam{
            shared.NameRequestParam{
                EntityID: sdk.String("alias"),
                Time: sdk.Int64(181622),
            },
        },
    }, operations.GetNamesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamesResponse != nil {
        // handle response
    }
}
```

## GetProblemEvent

Show problem event details.

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
    res, err := s.Entities.GetProblemEvent(ctx, operations.GetProblemEventRequest{
        ID: "21b335d8-9acb-43ec-bda8-d0c549ef0300",
        Time: sdk.Int64(273732),
    }, operations.GetProblemEventSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProblemEvent != nil {
        // handle response
    }
}
```

## GetSecurityGroup

Show security group details

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
    res, err := s.Entities.GetSecurityGroup(ctx, operations.GetSecurityGroupRequest{
        ID: "978a61fa-1cf2-4068-8f77-c1ffc71dca16",
        Time: sdk.Int64(235970),
    }, operations.GetSecurityGroupSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseSecurityGroup != nil {
        // handle response
    }
}
```

## GetSecurityTag

Show security tag details

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
    res, err := s.Entities.GetSecurityTag(ctx, operations.GetSecurityTagRequest{
        ID: "f2a3c80a-97ff-4334-8ddf-857a9e61876c",
        Time: sdk.Int64(400470),
    }, operations.GetSecurityTagSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SecurityTag != nil {
        // handle response
    }
}
```

## GetService

Show service details

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
    res, err := s.Entities.GetService(ctx, operations.GetServiceRequest{
        ID: "ab21d29d-fc94-4d6f-acd7-99390066a6d2",
        Time: sdk.Int64(852689),
    }, operations.GetServiceSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseService != nil {
        // handle response
    }
}
```

## GetServiceGroup

Show service group details

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
    res, err := s.Entities.GetServiceGroup(ctx, operations.GetServiceGroupRequest{
        ID: "00035533-8cec-4086-ba21-e9152cb31191",
        Time: sdk.Int64(420233),
    }, operations.GetServiceGroupSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## GetVcenterManager

Show vCenter manager details

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
    res, err := s.Entities.GetVcenterManager(ctx, operations.GetVcenterManagerRequest{
        ID: "7b8e3c8d-b034-408d-ad36-4ffd455906d1",
        Time: sdk.Int64(154840),
    }, operations.GetVcenterManagerSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VCenterManager != nil {
        // handle response
    }
}
```

## GetVM

Show vm details

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
    res, err := s.Entities.GetVM(ctx, operations.GetVMRequest{
        ID: "63d48e93-5c2c-49e8-9f30-be3e43202d72",
        Time: sdk.Int64(109683),
    }, operations.GetVMSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseVirtualMachine != nil {
        // handle response
    }
}
```

## GetVmknic

Show vmknic details

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
    res, err := s.Entities.GetVmknic(ctx, operations.GetVmknicRequest{
        ID: "65765066-4187-40d9-921f-9ad030c4ecc1",
        Time: sdk.Int64(107301),
    }, operations.GetVmknicSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Vmknic != nil {
        // handle response
    }
}
```

## GetVnic

Show vnic details

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
    res, err := s.Entities.GetVnic(ctx, operations.GetVnicRequest{
        ID: "a0836429-068b-4850-aa55-e7f73bc845e3",
        Time: sdk.Int64(165545),
    }, operations.GetVnicSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseVnic != nil {
        // handle response
    }
}
```

## ListClusters

List clusters

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
    res, err := s.Entities.ListClusters(ctx, operations.ListClustersRequest{
        Cursor: sdk.String("voluptatem"),
        EndTime: sdk.Float64(6659.6),
        Size: sdk.Float64(2261.81),
        StartTime: sdk.Float64(842.11),
    }, operations.ListClustersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListDatacenters

List vCenter datacenters

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
    res, err := s.Entities.ListDatacenters(ctx, operations.ListDatacentersRequest{
        Cursor: sdk.String("error"),
        EndTime: sdk.Float64(9738.94),
        Size: sdk.Float64(2581.4),
        StartTime: sdk.Float64(7006.34),
    }, operations.ListDatacentersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListDatastores

List datastores

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
    res, err := s.Entities.ListDatastores(ctx, operations.ListDatastoresRequest{
        Cursor: sdk.String("dolorum"),
        EndTime: sdk.Float64(8418.16),
        Size: sdk.Float64(9375.91),
        StartTime: sdk.Float64(5666.69),
    }, operations.ListDatastoresSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListDistributedVirtualPortgroups

List distributed virtual portgroups

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
    res, err := s.Entities.ListDistributedVirtualPortgroups(ctx, operations.ListDistributedVirtualPortgroupsRequest{
        Cursor: sdk.String("numquam"),
        EndTime: sdk.Float64(4768.01),
        Size: sdk.Float64(7738.33),
        StartTime: sdk.Float64(6218.83),
    }, operations.ListDistributedVirtualPortgroupsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListDistributedVirtualSwitches

List distributed virtual switches

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
    res, err := s.Entities.ListDistributedVirtualSwitches(ctx, operations.ListDistributedVirtualSwitchesRequest{
        Cursor: sdk.String("animi"),
        EndTime: sdk.Float64(5287.42),
        Size: sdk.Float64(3995.85),
        StartTime: sdk.Float64(4693.84),
    }, operations.ListDistributedVirtualSwitchesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListFirewallRules

List firewall rules

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
    res, err := s.Entities.ListFirewallRules(ctx, operations.ListFirewallRulesRequest{
        Cursor: sdk.String("facilis"),
        EndTime: sdk.Float64(7594.51),
        Size: sdk.Float64(2796.73),
        StartTime: sdk.Float64(1782.01),
    }, operations.ListFirewallRulesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListFirewalls

List firewalls

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
    res, err := s.Entities.ListFirewalls(ctx, operations.ListFirewallsRequest{
        Cursor: sdk.String("magnam"),
        EndTime: sdk.Float64(1711.72),
        Size: sdk.Float64(4004.92),
        StartTime: sdk.Float64(4318.43),
    }, operations.ListFirewallsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListFolders

List folders

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
    res, err := s.Entities.ListFolders(ctx, operations.ListFoldersRequest{
        Cursor: sdk.String("vel"),
        EndTime: sdk.Float64(3207.48),
        Size: sdk.Float64(5522.87),
        StartTime: sdk.Float64(741.24),
    }, operations.ListFoldersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListHosts

List hosts

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
    res, err := s.Entities.ListHosts(ctx, operations.ListHostsRequest{
        Cursor: sdk.String("suscipit"),
        EndTime: sdk.Float64(8444.71),
        Size: sdk.Float64(8554.84),
        StartTime: sdk.Float64(7716.03),
    }, operations.ListHostsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListIPSets

List ip sets

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
    res, err := s.Entities.ListIPSets(ctx, operations.ListIPSetsRequest{
        Cursor: sdk.String("culpa"),
        EndTime: sdk.Float64(5439.22),
        Size: sdk.Float64(9139.09),
        StartTime: sdk.Float64(9793.25),
    }, operations.ListIPSetsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListLayer2Networks

List layer2 networks

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
    res, err := s.Entities.ListLayer2Networks(ctx, operations.ListLayer2NetworksRequest{
        Cursor: sdk.String("nemo"),
        EndTime: sdk.Float64(726),
        Size: sdk.Float64(9846.69),
        StartTime: sdk.Float64(7666.7),
    }, operations.ListLayer2NetworksSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListNSXManagers

List nsx managers

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
    res, err := s.Entities.ListNSXManagers(ctx, operations.ListNSXManagersRequest{
        Cursor: sdk.String("expedita"),
        EndTime: sdk.Float64(2663.7),
        Size: sdk.Float64(7682.44),
        StartTime: sdk.Float64(3685.99),
    }, operations.ListNSXManagersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListProblemEvents

List problem events.

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
    res, err := s.Entities.ListProblemEvents(ctx, operations.ListProblemEventsRequest{
        Cursor: sdk.String("occaecati"),
        EndTime: sdk.Float64(2192.79),
        Size: sdk.Float64(8791.93),
        StartTime: sdk.Float64(7890.38),
    }, operations.ListProblemEventsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListSecurityGroups

List security groups

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
    res, err := s.Entities.ListSecurityGroups(ctx, operations.ListSecurityGroupsRequest{
        Cursor: sdk.String("quasi"),
        EndTime: sdk.Float64(1442.4),
        Size: sdk.Float64(7798.23),
        StartTime: sdk.Float64(8400.17),
    }, operations.ListSecurityGroupsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListSecurityTags

List security tags

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
    res, err := s.Entities.ListSecurityTags(ctx, operations.ListSecurityTagsRequest{
        Cursor: sdk.String("mollitia"),
        EndTime: sdk.Float64(6615.78),
        Size: sdk.Float64(8409.92),
        StartTime: sdk.Float64(590.23),
    }, operations.ListSecurityTagsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListServiceGroups

List service groups

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
    res, err := s.Entities.ListServiceGroups(ctx, operations.ListServiceGroupsRequest{
        Cursor: sdk.String("accusamus"),
        EndTime: sdk.Float64(8109.82),
        Size: sdk.Float64(4648.78),
        StartTime: sdk.Float64(6277.56),
    }, operations.ListServiceGroupsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListServices

List services

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
    res, err := s.Entities.ListServices(ctx, operations.ListServicesRequest{
        Cursor: sdk.String("delectus"),
        EndTime: sdk.Float64(9049.83),
        Size: sdk.Float64(8139.75),
        StartTime: sdk.Float64(7487.23),
    }, operations.ListServicesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListVcenterManagers

List vCenter managers

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
    res, err := s.Entities.ListVcenterManagers(ctx, operations.ListVcenterManagersRequest{
        Cursor: sdk.String("at"),
        EndTime: sdk.Float64(5611.21),
        Size: sdk.Float64(128.77),
        StartTime: sdk.Float64(8365.48),
    }, operations.ListVcenterManagersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListVmknics

List vmknics

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
    res, err := s.Entities.ListVmknics(ctx, operations.ListVmknicsRequest{
        Cursor: sdk.String("tenetur"),
        EndTime: sdk.Float64(2780.5),
        Size: sdk.Float64(2546.48),
        StartTime: sdk.Float64(5469.5),
    }, operations.ListVmknicsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListVms

List vms

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
    res, err := s.Entities.ListVms(ctx, operations.ListVmsRequest{
        Cursor: sdk.String("similique"),
        EndTime: sdk.Float64(2936.17),
        Size: sdk.Float64(4565.99),
        StartTime: sdk.Float64(9682.05),
    }, operations.ListVmsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```

## ListVnics

List vnics

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
    res, err := s.Entities.ListVnics(ctx, operations.ListVnicsRequest{
        Cursor: sdk.String("iste"),
        EndTime: sdk.Float64(2261.96),
        Size: sdk.Float64(5810.19),
        StartTime: sdk.Float64(157.38),
    }, operations.ListVnicsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponseWithTime != nil {
        // handle response
    }
}
```
