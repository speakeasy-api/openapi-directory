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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterRequest;
import org.openapis.openapi.models.operations.GetClusterResponse;
import org.openapis.openapi.models.operations.GetClusterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClusterRequest req = new GetClusterRequest("natus") {{
                time = 179603L;
            }};            

            GetClusterResponse res = sdk.entities.getCluster(req, new GetClusterSecurity("atque") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.cluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatacenter

Show vCenter datacenter details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatacenterRequest;
import org.openapis.openapi.models.operations.GetDatacenterResponse;
import org.openapis.openapi.models.operations.GetDatacenterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDatacenterRequest req = new GetDatacenterRequest("sit") {{
                time = 854614L;
            }};            

            GetDatacenterResponse res = sdk.entities.getDatacenter(req, new GetDatacenterSecurity("ab") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vcDatacenter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatastore

Show datastore details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatastoreRequest;
import org.openapis.openapi.models.operations.GetDatastoreResponse;
import org.openapis.openapi.models.operations.GetDatastoreSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDatastoreRequest req = new GetDatastoreRequest("soluta") {{
                time = 679393L;
            }};            

            GetDatastoreResponse res = sdk.entities.getDatastore(req, new GetDatastoreSecurity("iusto") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.datastore != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributedVirtualPortgroup

Show distributed virtual portgroup details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributedVirtualPortgroupRequest;
import org.openapis.openapi.models.operations.GetDistributedVirtualPortgroupResponse;
import org.openapis.openapi.models.operations.GetDistributedVirtualPortgroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistributedVirtualPortgroupRequest req = new GetDistributedVirtualPortgroupRequest("voluptate") {{
                time = 677082L;
            }};            

            GetDistributedVirtualPortgroupResponse res = sdk.entities.getDistributedVirtualPortgroup(req, new GetDistributedVirtualPortgroupSecurity("deleniti") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.distributedVirtualPortgroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistributedVirtualSwitch

Show distributed virtual switch details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistributedVirtualSwitchRequest;
import org.openapis.openapi.models.operations.GetDistributedVirtualSwitchResponse;
import org.openapis.openapi.models.operations.GetDistributedVirtualSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistributedVirtualSwitchRequest req = new GetDistributedVirtualSwitchRequest("omnis") {{
                time = 896672L;
            }};            

            GetDistributedVirtualSwitchResponse res = sdk.entities.getDistributedVirtualSwitch(req, new GetDistributedVirtualSwitchSecurity("distinctio") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.distributedVirtualSwitch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewall

Show firewall details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallRequest;
import org.openapis.openapi.models.operations.GetFirewallResponse;
import org.openapis.openapi.models.operations.GetFirewallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFirewallRequest req = new GetFirewallRequest("asperiores") {{
                time = 469497L;
            }};            

            GetFirewallResponse res = sdk.entities.getFirewall(req, new GetFirewallSecurity("ipsum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseFirewallRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallRule

Show firewall rule details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallRuleRequest;
import org.openapis.openapi.models.operations.GetFirewallRuleResponse;
import org.openapis.openapi.models.operations.GetFirewallRuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFirewallRuleRequest req = new GetFirewallRuleRequest("voluptate") {{
                time = 663078L;
            }};            

            GetFirewallRuleResponse res = sdk.entities.getFirewallRule(req, new GetFirewallRuleSecurity("saepe") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseFirewallRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFlow

Show flow details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFlowRequest;
import org.openapis.openapi.models.operations.GetFlowResponse;
import org.openapis.openapi.models.operations.GetFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFlowRequest req = new GetFlowRequest("eius") {{
                time = 137220L;
            }};            

            GetFlowResponse res = sdk.entities.getFlow(req, new GetFlowSecurity("perferendis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.flow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFlows

List flows

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFlowsRequest;
import org.openapis.openapi.models.operations.GetFlowsResponse;
import org.openapis.openapi.models.operations.GetFlowsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFlowsRequest req = new GetFlowsRequest() {{
                cursor = "amet";
                endTime = 7583.79;
                size = 8815.86;
                startTime = 3200.17;
            }};            

            GetFlowsResponse res = sdk.entities.getFlows(req, new GetFlowsSecurity("saepe") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFolder

Show folder details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFolderRequest;
import org.openapis.openapi.models.operations.GetFolderResponse;
import org.openapis.openapi.models.operations.GetFolderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFolderRequest req = new GetFolderRequest("suscipit") {{
                time = 645785L;
            }};            

            GetFolderResponse res = sdk.entities.getFolder(req, new GetFolderSecurity("provident") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.folder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHost

Show host details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHostRequest;
import org.openapis.openapi.models.operations.GetHostResponse;
import org.openapis.openapi.models.operations.GetHostSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHostRequest req = new GetHostRequest("minima") {{
                time = 831049L;
            }};            

            GetHostResponse res = sdk.entities.getHost(req, new GetHostSecurity("totam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.host != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIPSet

Show ip set details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIPSetRequest;
import org.openapis.openapi.models.operations.GetIPSetResponse;
import org.openapis.openapi.models.operations.GetIPSetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIPSetRequest req = new GetIPSetRequest("similique") {{
                time = 55L;
            }};            

            GetIPSetResponse res = sdk.entities.getIPSet(req, new GetIPSetSecurity("at") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseIPSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLayer2Network

Show layer2 network details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLayer2NetworkRequest;
import org.openapis.openapi.models.operations.GetLayer2NetworkResponse;
import org.openapis.openapi.models.operations.GetLayer2NetworkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLayer2NetworkRequest req = new GetLayer2NetworkRequest("quaerat") {{
                time = 273542L;
            }};            

            GetLayer2NetworkResponse res = sdk.entities.getLayer2Network(req, new GetLayer2NetworkSecurity("vel") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseL2Network != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNSXManager

Show nsx manager details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNSXManagerRequest;
import org.openapis.openapi.models.operations.GetNSXManagerResponse;
import org.openapis.openapi.models.operations.GetNSXManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNSXManagerRequest req = new GetNSXManagerRequest("quod") {{
                time = 885338L;
            }};            

            GetNSXManagerResponse res = sdk.entities.getNSXManager(req, new GetNSXManagerSecurity("qui") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getName

Get name of an entity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNameRequest;
import org.openapis.openapi.models.operations.GetNameResponse;
import org.openapis.openapi.models.operations.GetNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNameRequest req = new GetNameRequest("dolorum") {{
                time = 952792L;
            }};            

            GetNameResponse res = sdk.entities.getName(req, new GetNameSecurity("esse") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.entityName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNames

Get names for entities.Limit of 1000 entities in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamesResponse;
import org.openapis.openapi.models.operations.GetNamesSecurity;
import org.openapis.openapi.models.shared.NameRequestParam;
import org.openapis.openapi.models.shared.NamesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.NamesRequest req = new NamesRequest() {{
                entities = new org.openapis.openapi.models.shared.NameRequestParam[]{{
                    add(new NameRequestParam() {{
                        entityId = "iusto";
                        time = 215507L;
                    }}),
                    add(new NameRequestParam() {{
                        entityId = "quisquam";
                        time = 947371L;
                    }}),
                    add(new NameRequestParam() {{
                        entityId = "amet";
                        time = 730856L;
                    }}),
                }};
            }};            

            GetNamesResponse res = sdk.entities.getNames(req, new GetNamesSecurity("accusamus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.namesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProblemEvent

Show problem event details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProblemEventRequest;
import org.openapis.openapi.models.operations.GetProblemEventResponse;
import org.openapis.openapi.models.operations.GetProblemEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProblemEventRequest req = new GetProblemEventRequest("numquam") {{
                time = 313692L;
            }};            

            GetProblemEventResponse res = sdk.entities.getProblemEvent(req, new GetProblemEventSecurity("dolorem") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.problemEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSecurityGroup

Show security group details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSecurityGroupRequest;
import org.openapis.openapi.models.operations.GetSecurityGroupResponse;
import org.openapis.openapi.models.operations.GetSecurityGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSecurityGroupRequest req = new GetSecurityGroupRequest("sapiente") {{
                time = 518201L;
            }};            

            GetSecurityGroupResponse res = sdk.entities.getSecurityGroup(req, new GetSecurityGroupSecurity("nihil") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseSecurityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSecurityTag

Show security tag details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSecurityTagRequest;
import org.openapis.openapi.models.operations.GetSecurityTagResponse;
import org.openapis.openapi.models.operations.GetSecurityTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSecurityTagRequest req = new GetSecurityTagRequest("sit") {{
                time = 711584L;
            }};            

            GetSecurityTagResponse res = sdk.entities.getSecurityTag(req, new GetSecurityTagSecurity("neque") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.securityTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getService

Show service details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceRequest;
import org.openapis.openapi.models.operations.GetServiceResponse;
import org.openapis.openapi.models.operations.GetServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServiceRequest req = new GetServiceRequest("sed") {{
                time = 424685L;
            }};            

            GetServiceResponse res = sdk.entities.getService(req, new GetServiceSecurity("libero") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseService != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceGroup

Show service group details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceGroupRequest;
import org.openapis.openapi.models.operations.GetServiceGroupResponse;
import org.openapis.openapi.models.operations.GetServiceGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServiceGroupRequest req = new GetServiceGroupRequest("voluptas") {{
                time = 646265L;
            }};            

            GetServiceGroupResponse res = sdk.entities.getServiceGroup(req, new GetServiceGroupSecurity("quam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcenterManager

Show vCenter manager details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcenterManagerRequest;
import org.openapis.openapi.models.operations.GetVcenterManagerResponse;
import org.openapis.openapi.models.operations.GetVcenterManagerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVcenterManagerRequest req = new GetVcenterManagerRequest("ipsum") {{
                time = 277628L;
            }};            

            GetVcenterManagerResponse res = sdk.entities.getVcenterManager(req, new GetVcenterManagerSecurity("qui") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vCenterManager != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVm

Show vm details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmRequest;
import org.openapis.openapi.models.operations.GetVmResponse;
import org.openapis.openapi.models.operations.GetVmSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVmRequest req = new GetVmRequest("cupiditate") {{
                time = 807581L;
            }};            

            GetVmResponse res = sdk.entities.getVm(req, new GetVmSecurity("pariatur") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseVirtualMachine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmknic

Show vmknic details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmknicRequest;
import org.openapis.openapi.models.operations.GetVmknicResponse;
import org.openapis.openapi.models.operations.GetVmknicSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVmknicRequest req = new GetVmknicRequest("soluta") {{
                time = 117531L;
            }};            

            GetVmknicResponse res = sdk.entities.getVmknic(req, new GetVmknicSecurity("laborum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vmknic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVnic

Show vnic details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVnicRequest;
import org.openapis.openapi.models.operations.GetVnicResponse;
import org.openapis.openapi.models.operations.GetVnicSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVnicRequest req = new GetVnicRequest("totam") {{
                time = 276894L;
            }};            

            GetVnicResponse res = sdk.entities.getVnic(req, new GetVnicSecurity("aspernatur") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.baseVnic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClusters

List clusters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClustersRequest;
import org.openapis.openapi.models.operations.ListClustersResponse;
import org.openapis.openapi.models.operations.ListClustersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListClustersRequest req = new ListClustersRequest() {{
                cursor = "dolores";
                endTime = 7168.6;
                size = 7044.74;
                startTime = 3960.6;
            }};            

            ListClustersResponse res = sdk.entities.listClusters(req, new ListClustersSecurity("quam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatacenters

List vCenter datacenters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatacentersRequest;
import org.openapis.openapi.models.operations.ListDatacentersResponse;
import org.openapis.openapi.models.operations.ListDatacentersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDatacentersRequest req = new ListDatacentersRequest() {{
                cursor = "molestias";
                endTime = 8404.29;
                size = 1832.8;
                startTime = 2048.65;
            }};            

            ListDatacentersResponse res = sdk.entities.listDatacenters(req, new ListDatacentersSecurity("fugit") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatastores

List datastores

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatastoresRequest;
import org.openapis.openapi.models.operations.ListDatastoresResponse;
import org.openapis.openapi.models.operations.ListDatastoresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDatastoresRequest req = new ListDatastoresRequest() {{
                cursor = "magni";
                endTime = 4880.56;
                size = 1248.33;
                startTime = 3556.13;
            }};            

            ListDatastoresResponse res = sdk.entities.listDatastores(req, new ListDatastoresSecurity("nam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDistributedVirtualPortgroups

List distributed virtual portgroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDistributedVirtualPortgroupsRequest;
import org.openapis.openapi.models.operations.ListDistributedVirtualPortgroupsResponse;
import org.openapis.openapi.models.operations.ListDistributedVirtualPortgroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDistributedVirtualPortgroupsRequest req = new ListDistributedVirtualPortgroupsRequest() {{
                cursor = "hic";
                endTime = 304.52;
                size = 7653.26;
                startTime = 7469.94;
            }};            

            ListDistributedVirtualPortgroupsResponse res = sdk.entities.listDistributedVirtualPortgroups(req, new ListDistributedVirtualPortgroupsSecurity("nobis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDistributedVirtualSwitches

List distributed virtual switches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDistributedVirtualSwitchesRequest;
import org.openapis.openapi.models.operations.ListDistributedVirtualSwitchesResponse;
import org.openapis.openapi.models.operations.ListDistributedVirtualSwitchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDistributedVirtualSwitchesRequest req = new ListDistributedVirtualSwitchesRequest() {{
                cursor = "et";
                endTime = 9037.2;
                size = 2174.5;
                startTime = 834.22;
            }};            

            ListDistributedVirtualSwitchesResponse res = sdk.entities.listDistributedVirtualSwitches(req, new ListDistributedVirtualSwitchesSecurity("nobis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallRules

List firewall rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallRulesRequest;
import org.openapis.openapi.models.operations.ListFirewallRulesResponse;
import org.openapis.openapi.models.operations.ListFirewallRulesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFirewallRulesRequest req = new ListFirewallRulesRequest() {{
                cursor = "quos";
                endTime = 7316.94;
                size = 5844.76;
                startTime = 456.14;
            }};            

            ListFirewallRulesResponse res = sdk.entities.listFirewallRules(req, new ListFirewallRulesSecurity("delectus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewalls

List firewalls

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallsRequest;
import org.openapis.openapi.models.operations.ListFirewallsResponse;
import org.openapis.openapi.models.operations.ListFirewallsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFirewallsRequest req = new ListFirewallsRequest() {{
                cursor = "dolorem";
                endTime = 2921.47;
                size = 2869.15;
                startTime = 2408.29;
            }};            

            ListFirewallsResponse res = sdk.entities.listFirewalls(req, new ListFirewallsSecurity("dolorum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFolders

List folders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFoldersRequest;
import org.openapis.openapi.models.operations.ListFoldersResponse;
import org.openapis.openapi.models.operations.ListFoldersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFoldersRequest req = new ListFoldersRequest() {{
                cursor = "architecto";
                endTime = 630.38;
                size = 164.29;
                startTime = 5556.49;
            }};            

            ListFoldersResponse res = sdk.entities.listFolders(req, new ListFoldersSecurity("itaque") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHosts

List hosts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHostsRequest;
import org.openapis.openapi.models.operations.ListHostsResponse;
import org.openapis.openapi.models.operations.ListHostsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHostsRequest req = new ListHostsRequest() {{
                cursor = "consequatur";
                endTime = 6699.17;
                size = 8330.38;
                startTime = 7851.53;
            }};            

            ListHostsResponse res = sdk.entities.listHosts(req, new ListHostsSecurity("doloribus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIPSets

List ip sets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIPSetsRequest;
import org.openapis.openapi.models.operations.ListIPSetsResponse;
import org.openapis.openapi.models.operations.ListIPSetsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIPSetsRequest req = new ListIPSetsRequest() {{
                cursor = "ut";
                endTime = 7034.95;
                size = 5864.1;
                startTime = 1816.31;
            }};            

            ListIPSetsResponse res = sdk.entities.listIPSets(req, new ListIPSetsSecurity("quae") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLayer2Networks

List layer2 networks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLayer2NetworksRequest;
import org.openapis.openapi.models.operations.ListLayer2NetworksResponse;
import org.openapis.openapi.models.operations.ListLayer2NetworksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLayer2NetworksRequest req = new ListLayer2NetworksRequest() {{
                cursor = "laudantium";
                endTime = 4856.28;
                size = 5804.47;
                startTime = 9774.96;
            }};            

            ListLayer2NetworksResponse res = sdk.entities.listLayer2Networks(req, new ListLayer2NetworksSecurity("quisquam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNSXManagers

List nsx managers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNSXManagersRequest;
import org.openapis.openapi.models.operations.ListNSXManagersResponse;
import org.openapis.openapi.models.operations.ListNSXManagersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListNSXManagersRequest req = new ListNSXManagersRequest() {{
                cursor = "vero";
                endTime = 6064.76;
                size = 3381.59;
                startTime = 2184.03;
            }};            

            ListNSXManagersResponse res = sdk.entities.listNSXManagers(req, new ListNSXManagersSecurity("delectus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProblemEvents

List problem events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProblemEventsRequest;
import org.openapis.openapi.models.operations.ListProblemEventsResponse;
import org.openapis.openapi.models.operations.ListProblemEventsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListProblemEventsRequest req = new ListProblemEventsRequest() {{
                cursor = "voluptate";
                endTime = 2317.01;
                size = 8788.7;
                startTime = 9493.19;
            }};            

            ListProblemEventsResponse res = sdk.entities.listProblemEvents(req, new ListProblemEventsSecurity("dignissimos") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSecurityGroups

List security groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSecurityGroupsRequest;
import org.openapis.openapi.models.operations.ListSecurityGroupsResponse;
import org.openapis.openapi.models.operations.ListSecurityGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSecurityGroupsRequest req = new ListSecurityGroupsRequest() {{
                cursor = "hic";
                endTime = 7155.61;
                size = 7992.03;
                startTime = 4861.6;
            }};            

            ListSecurityGroupsResponse res = sdk.entities.listSecurityGroups(req, new ListSecurityGroupsSecurity("similique") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSecurityTags

List security tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSecurityTagsRequest;
import org.openapis.openapi.models.operations.ListSecurityTagsResponse;
import org.openapis.openapi.models.operations.ListSecurityTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSecurityTagsRequest req = new ListSecurityTagsRequest() {{
                cursor = "facilis";
                endTime = 8742.88;
                size = 4981.4;
                startTime = 2930.2;
            }};            

            ListSecurityTagsResponse res = sdk.entities.listSecurityTags(req, new ListSecurityTagsSecurity("quibusdam") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceGroups

List service groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceGroupsRequest;
import org.openapis.openapi.models.operations.ListServiceGroupsResponse;
import org.openapis.openapi.models.operations.ListServiceGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceGroupsRequest req = new ListServiceGroupsRequest() {{
                cursor = "illum";
                endTime = 1943.42;
                size = 6178.77;
                startTime = 7733.26;
            }};            

            ListServiceGroupsResponse res = sdk.entities.listServiceGroups(req, new ListServiceGroupsSecurity("aut") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServices

List services

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServicesRequest;
import org.openapis.openapi.models.operations.ListServicesResponse;
import org.openapis.openapi.models.operations.ListServicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServicesRequest req = new ListServicesRequest() {{
                cursor = "voluptatibus";
                endTime = 3472.33;
                size = 8623.1;
                startTime = 1481.41;
            }};            

            ListServicesResponse res = sdk.entities.listServices(req, new ListServicesSecurity("porro") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVcenterManagers

List vCenter managers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVcenterManagersRequest;
import org.openapis.openapi.models.operations.ListVcenterManagersResponse;
import org.openapis.openapi.models.operations.ListVcenterManagersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVcenterManagersRequest req = new ListVcenterManagersRequest() {{
                cursor = "maiores";
                endTime = 9850.33;
                size = 4783.7;
                startTime = 7535.7;
            }};            

            ListVcenterManagersResponse res = sdk.entities.listVcenterManagers(req, new ListVcenterManagersSecurity("ducimus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVmknics

List vmknics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVmknicsRequest;
import org.openapis.openapi.models.operations.ListVmknicsResponse;
import org.openapis.openapi.models.operations.ListVmknicsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVmknicsRequest req = new ListVmknicsRequest() {{
                cursor = "alias";
                endTime = 6394.73;
                size = 2694.79;
                startTime = 3685.84;
            }};            

            ListVmknicsResponse res = sdk.entities.listVmknics(req, new ListVmknicsSecurity("ea") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVms

List vms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVmsRequest;
import org.openapis.openapi.models.operations.ListVmsResponse;
import org.openapis.openapi.models.operations.ListVmsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVmsRequest req = new ListVmsRequest() {{
                cursor = "aspernatur";
                endTime = 4282.24;
                size = 8221.18;
                startTime = 2978.42;
            }};            

            ListVmsResponse res = sdk.entities.listVms(req, new ListVmsSecurity("ratione") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVnics

List vnics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVnicsRequest;
import org.openapis.openapi.models.operations.ListVnicsResponse;
import org.openapis.openapi.models.operations.ListVnicsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVnicsRequest req = new ListVnicsRequest() {{
                cursor = "ex";
                endTime = 5113.19;
                size = 1206.57;
                startTime = 2243.17;
            }};            

            ListVnicsResponse res = sdk.entities.listVnics(req, new ListVnicsSecurity("maiores") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
