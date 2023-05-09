# switchInstruction

## Overview

The Switch Instruction endpoints allow you to switch existing holdings (cash and investment products) to a new set of investment products via a single instruction. You can specify the holdings you want to sell along with a `mode` and `value` (e.g. number of units to be sold, total value of holding to be sold or % of holding to be sold) and the investment products you want to buy (using the proceeds of the sales and and/or free cash available in the pot). The buy instructions can also be specified with a `mode` and `value` (e.g. number of units to buy, total value of holding to be bought or % of proceeds to be used to buy specific investment product). 

You can view the status of your switch instruction at any point through the API (both the overall 'parent' switch instruction as well as the individual 'child' buy/sell transactions).

### Available Operations

* [executeSwitchTrasaction](#executeswitchtrasaction) - Execute Switch Instruction
* [getSwitch](#getswitch) - Retrieve Switch instruction from Switch ID

## executeSwitchTrasaction

Send a switch instruction with details of the investment products to be sold, free cash to be used (if any) and investment products to be bought.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteSwitchTrasactionRequest;
import org.openapis.openapi.models.operations.ExecuteSwitchTrasactionResponse;
import org.openapis.openapi.models.operations.ExecuteSwitchTrasactionSecurity;
import org.openapis.openapi.models.operations.ExecuteSwitchTrasactionSwitchInstructionRequest;
import org.openapis.openapi.models.operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest;
import org.openapis.openapi.models.operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExecuteSwitchTrasactionRequest req = new ExecuteSwitchTrasactionRequest("sapiente") {{
                requestBody = new ExecuteSwitchTrasactionSwitchInstructionRequest(                new org.openapis.openapi.models.operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[]{{
                                    add(new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest("a", ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum.VALUE, "quas") {{
                                        investmentProductId = "esse";
                                        mode = ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum.UNIT;
                                        value = "provident";
                                    }}),
                                }}, "esse", "1f99dd2e-fd12-41aa-af1e-674bdb04f157",                 new org.openapis.openapi.models.operations.ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest[]{{
                                    add(new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest("qui", ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum.VALUE, "ex") {{
                                        investmentProductId = "nisi";
                                        mode = ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum.PERCENTAGE;
                                        value = "voluptatum";
                                    }}),
                                    add(new ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest("architecto", ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum.UNIT, "tenetur") {{
                                        investmentProductId = "deleniti";
                                        mode = ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum.VALUE;
                                        value = "dolorum";
                                    }}),
                                }});;
            }};            

            ExecuteSwitchTrasactionResponse res = sdk.switchInstruction.executeSwitchTrasaction(req, new ExecuteSwitchTrasactionSecurity("quasi") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.executeSwitchTrasaction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwitch

Retrieve the status of an existing switch instruction from the `switch_transaction_id`. If the status of the individual buy/sell transactions are required, you must send the request with include_details = `true`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSwitchRequest;
import org.openapis.openapi.models.operations.GetSwitchResponse;
import org.openapis.openapi.models.operations.GetSwitchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSwitchRequest req = new GetSwitchRequest("at", "et") {{
                includeDetails = false;
            }};            

            GetSwitchResponse res = sdk.switchInstruction.getSwitch(req, new GetSwitchSecurity("voluptate") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSwitch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
