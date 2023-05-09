# Applications

## Overview

Applications APIs

### Available Operations

* [AddApplication](#addapplication) - Create an application
* [AddTier](#addtier) - Create tier in application
* [DeleteApplication](#deleteapplication) - Delete an application
* [DeleteTier](#deletetier) - Delete tier
* [GetApplication](#getapplication) - Show application details
* [GetApplicationTier](#getapplicationtier) - Show tier details
* [GetTier](#gettier) - Show tier details
* [ListApplicationTiers](#listapplicationtiers) - List tiers of an application
* [ListApplications](#listapplications) - List applications

## AddApplication

Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
application. An application name is unique and should not conflict with another application name.

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
    res, err := s.Applications.AddApplication(ctx, shared.ApplicationRequest{
        Name: sdk.String("Johnnie Stamm"),
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

## AddTier

Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.

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
    res, err := s.Applications.AddTier(ctx, operations.AddTierRequest{
        TierRequest: shared.TierRequest{
            GroupMembershipCriteria: []shared.GroupMembershipCriteria{
                shared.GroupMembershipCriteria{
                    IPAddressMembershipCriteria: &shared.IPAddressMembershipCriteria{
                        IPAddresses: []string{
                            "iure",
                            "magnam",
                        },
                    },
                    MembershipType: shared.GroupMembershipCriteriaMembershipTypeEnumIPAddressMembershipCriteria.ToPointer(),
                    SearchMembershipCriteria: &shared.SearchMembershipCriteria{
                        EntityType: shared.AllEntityTypeEnumBaseEvent.ToPointer(),
                        Filter: sdk.String("delectus"),
                    },
                },
                shared.GroupMembershipCriteria{
                    IPAddressMembershipCriteria: &shared.IPAddressMembershipCriteria{
                        IPAddresses: []string{
                            "suscipit",
                            "molestiae",
                        },
                    },
                    MembershipType: shared.GroupMembershipCriteriaMembershipTypeEnumIPAddressMembershipCriteria.ToPointer(),
                    SearchMembershipCriteria: &shared.SearchMembershipCriteria{
                        EntityType: shared.AllEntityTypeEnumVpc.ToPointer(),
                        Filter: sdk.String("voluptatum"),
                    },
                },
                shared.GroupMembershipCriteria{
                    IPAddressMembershipCriteria: &shared.IPAddressMembershipCriteria{
                        IPAddresses: []string{
                            "excepturi",
                            "nisi",
                        },
                    },
                    MembershipType: shared.GroupMembershipCriteriaMembershipTypeEnumIPAddressMembershipCriteria.ToPointer(),
                    SearchMembershipCriteria: &shared.SearchMembershipCriteria{
                        EntityType: shared.AllEntityTypeEnumNsxDistributedFirewall.ToPointer(),
                        Filter: sdk.String("ab"),
                    },
                },
            },
            Name: sdk.String("Mrs. Marie O'Connell"),
        },
        ID: "fc2ddf7c-c78c-4a1b-a928-fc816742cb73",
    }, operations.AddTierSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tier != nil {
        // handle response
    }
}
```

## DeleteApplication

Deleting an application deletes all the tiers of the application along with the application

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
    res, err := s.Applications.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        ID: "92059293-96fe-4a75-96eb-10faaa2352c5",
    }, operations.DeleteApplicationSecurity{
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

## DeleteTier

Delete tier of an application

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
    res, err := s.Applications.DeleteTier(ctx, operations.DeleteTierRequest{
        ID: "955907af-f1a3-4a2f-a946-7739251aa52c",
        TierID: "sequi",
    }, operations.DeleteTierSecurity{
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

## GetApplication

Show application details

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
    res, err := s.Applications.GetApplication(ctx, operations.GetApplicationRequest{
        ID: "f5ad019d-a1ff-4e78-b097-b0074f15471b",
    }, operations.GetApplicationSecurity{
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

## GetApplicationTier

Show tier details

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
    res, err := s.Applications.GetApplicationTier(ctx, operations.GetApplicationTierRequest{
        ID: "5e6e13b9-9d48-48e1-a91e-450ad2abd442",
        TierID: "aliquid",
    }, operations.GetApplicationTierSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tier != nil {
        // handle response
    }
}
```

## GetTier

Show tier details

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
    res, err := s.Applications.GetTier(ctx, operations.GetTierRequest{
        Authorization: "cupiditate",
        TierID: "quos",
    }, operations.GetTierSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tier != nil {
        // handle response
    }
}
```

## ListApplicationTiers

List tiers of an application

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
    res, err := s.Applications.ListApplicationTiers(ctx, operations.ListApplicationTiersRequest{
        ID: "02d502a9-4bb4-4f63-8969-e9a3efa77dfb",
    }, operations.ListApplicationTiersSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TierListResponse != nil {
        // handle response
    }
}
```

## ListApplications

List applications

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
    res, err := s.Applications.ListApplications(ctx, operations.ListApplicationsRequest{
        Cursor: sdk.String("dicta"),
        EndTime: sdk.Float64(2974.37),
        Size: sdk.Float64(7670.24),
        StartTime: sdk.Float64(8137.98),
    }, operations.ListApplicationsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListResponse != nil {
        // handle response
    }
}
```
