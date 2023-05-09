# rebalance

## Overview

The rebalancing feature provides advisors and portfolio managers the ability to evaluate which pots have drifted significantly from their target portfolios, and trigger a rebalance execution for these pots to bring the holdings back to parity with the pot's target portfolio. Driven by a single rebalance request, the system completely orchestrates this multi-day buy/sell process across a host of different pots, with status updates being provided via API endpoints and web sockets.

### Available Operations

* [createRebalance](#createrebalance) - Trigger rebalance process
* [evaluateRebalance](#evaluaterebalance) - Evaluate rebalance
* [getRebalanceDetails](#getrebalancedetails) - Retrieve rebalance request related details

## createRebalance

This endpoint allows you to trigger the rebalancing of a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will contain a `rebalance_request_id` and `status` of the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRebalanceRequest;
import org.openapis.openapi.models.operations.CreateRebalanceResponse;
import org.openapis.openapi.models.operations.CreateRebalanceSecurity;
import org.openapis.openapi.models.operations.CreateRebalanceSwitchInstructionRequest;
import org.openapis.openapi.models.operations.CreateRebalanceSwitchInstructionRequestTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRebalanceRequest req = new CreateRebalanceRequest("consequatur") {{
                requestBody = new CreateRebalanceSwitchInstructionRequest("4e523c7e-0bc7-4178-a479-6f2a70c68828", CreateRebalanceSwitchInstructionRequestTypeEnum.POT,                 new String[]{{
                                    add("mollitia"),
                                    add("incidunt"),
                                    add("atque"),
                                }});;
            }};            

            CreateRebalanceResponse res = sdk.rebalance.createRebalance(req, new CreateRebalanceSecurity("explicabo") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createRebalance201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evaluateRebalance

Evaluate if a pot or a group of pots has deviated significatly from the target portfolio and eligible for rebalancing. The request can be sent for a pot (or a group of pots), all pots belonging to an investor (or a group of investors) or all pots linked to a portfolio (or a group of portfolios). The response will indicate if the pot is eligible for rebalance and % deviation from the target portfolio template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvaluateRebalanceRequest;
import org.openapis.openapi.models.operations.EvaluateRebalanceResponse;
import org.openapis.openapi.models.operations.EvaluateRebalanceSecurity;
import org.openapis.openapi.models.operations.EvaluateRebalanceSwitchInstructionRequest;
import org.openapis.openapi.models.operations.EvaluateRebalanceSwitchInstructionRequestTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EvaluateRebalanceRequest req = new EvaluateRebalanceRequest("minima") {{
                requestBody = new EvaluateRebalanceSwitchInstructionRequest("62f222e9-817e-4e17-8be6-1e6b7b95bc0a", EvaluateRebalanceSwitchInstructionRequestTypeEnum.PORTFOLIO,                 new String[]{{
                                    add("cumque"),
                                }});;
            }};            

            EvaluateRebalanceResponse res = sdk.rebalance.evaluateRebalance(req, new EvaluateRebalanceSecurity("consequuntur") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.thisIsTheReturnObjectWithEvaluationPerPot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRebalanceDetails

Retrieve details of a rebalace request using the `rebalance_request_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRebalanceDetailsRequest;
import org.openapis.openapi.models.operations.GetRebalanceDetailsResponse;
import org.openapis.openapi.models.operations.GetRebalanceDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRebalanceDetailsRequest req = new GetRebalanceDetailsRequest("consequatur", "minus");            

            GetRebalanceDetailsResponse res = sdk.rebalance.getRebalanceDetails(req, new GetRebalanceDetailsSecurity("quaerat") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getRebalanceDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
