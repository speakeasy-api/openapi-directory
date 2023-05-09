# microsegmentation

## Overview

Micro-segmentation APIs

### Available Operations

* [exportNsxRecommendedRules](#exportnsxrecommendedrules) - Export recommended rules for NSX-V
* [listRecommendedRules](#listrecommendedrules) - Get logical recommended rules

## exportNsxRecommendedRules

Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
format

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportNsxRecommendedRulesResponse;
import org.openapis.openapi.models.operations.ExportNsxRecommendedRulesSecurity;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.MicroSecGroup;
import org.openapis.openapi.models.shared.RecommendedRulesRequest;
import org.openapis.openapi.models.shared.Reference;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RecommendedRulesRequest req = new RecommendedRulesRequest() {{
                group1 = new MicroSecGroup() {{
                    entity = new Reference() {{
                        entityId = "voluptatibus";
                        entityType = EntityTypeEnum.EC2_IP_SET;
                    }};;
                }};;
                group2 = new MicroSecGroup() {{
                    entity = new Reference() {{
                        entityId = "sapiente";
                        entityType = EntityTypeEnum.NSX_DISTRIBUTED_FIREWALL;
                    }};;
                }};;
                timeRange = new TimeRange() {{
                    endTime = 906556L;
                    startTime = 411372L;
                }};;
            }};            

            ExportNsxRecommendedRulesResponse res = sdk.microsegmentation.exportNsxRecommendedRules(req, new ExportNsxRecommendedRulesSecurity("impedit") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.exportNsxRecommendedRules200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecommendedRules

Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
This API provides service to retrieve recommended rules based on flow traffic that is observed between
two groups OR for a single group based on all the inbound and outboud traffic for that group.
In case two groups are provided, both the groups should be of same type.
Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecommendedRulesResponse;
import org.openapis.openapi.models.operations.ListRecommendedRulesSecurity;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.MicroSecGroup;
import org.openapis.openapi.models.shared.RecommendedRulesRequest;
import org.openapis.openapi.models.shared.Reference;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RecommendedRulesRequest req = new RecommendedRulesRequest() {{
                group1 = new MicroSecGroup() {{
                    entity = new Reference() {{
                        entityId = "corporis";
                        entityType = EntityTypeEnum.EC2_IP_SET;
                    }};;
                }};;
                group2 = new MicroSecGroup() {{
                    entity = new Reference() {{
                        entityId = "aliquid";
                        entityType = EntityTypeEnum.HOST;
                    }};;
                }};;
                timeRange = new TimeRange() {{
                    endTime = 301831L;
                    startTime = 407241L;
                }};;
            }};            

            ListRecommendedRulesResponse res = sdk.microsegmentation.listRecommendedRules(req, new ListRecommendedRulesSecurity("quo") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.recommendedRules != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
