# Microsegmentation

## Overview

Micro-segmentation APIs

### Available Operations

* [ExportNsxRecommendedRules](#exportnsxrecommendedrules) - Export recommended rules for NSX-V
* [ListRecommendedRules](#listrecommendedrules) - Get logical recommended rules

## ExportNsxRecommendedRules

Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
format

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
    res, err := s.Microsegmentation.ExportNsxRecommendedRules(ctx, shared.RecommendedRulesRequest{
        Group1: &shared.MicroSecGroup{
            Entity: &shared.Reference{
                EntityID: sdk.String("facere"),
                EntityType: shared.EntityTypeEnumCluster.ToPointer(),
            },
        },
        Group2: &shared.MicroSecGroup{
            Entity: &shared.Reference{
                EntityID: sdk.String("quis"),
                EntityType: shared.EntityTypeEnumProblemEvent.ToPointer(),
            },
        },
        TimeRange: &shared.TimeRange{
            EndTime: sdk.Int64(152047),
            StartTime: sdk.Int64(250621),
        },
    }, operations.ExportNsxRecommendedRulesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportNsxRecommendedRules200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## ListRecommendedRules

Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
This API provides service to retrieve recommended rules based on flow traffic that is observed between
two groups OR for a single group based on all the inbound and outboud traffic for that group.
In case two groups are provided, both the groups should be of same type.
Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.

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
    res, err := s.Microsegmentation.ListRecommendedRules(ctx, shared.RecommendedRulesRequest{
        Group1: &shared.MicroSecGroup{
            Entity: &shared.Reference{
                EntityID: sdk.String("porro"),
                EntityType: shared.EntityTypeEnumNsxServiceGroup.ToPointer(),
            },
        },
        Group2: &shared.MicroSecGroup{
            Entity: &shared.Reference{
                EntityID: sdk.String("soluta"),
                EntityType: shared.EntityTypeEnumEc2Instance.ToPointer(),
            },
        },
        TimeRange: &shared.TimeRange{
            EndTime: sdk.Int64(967047),
            StartTime: sdk.Int64(289153),
        },
    }, operations.ListRecommendedRulesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecommendedRules != nil {
        // handle response
    }
}
```
