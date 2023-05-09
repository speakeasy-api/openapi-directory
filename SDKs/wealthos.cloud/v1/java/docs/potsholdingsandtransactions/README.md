# potsHoldingsAndTransactions

## Overview

Pots allows a wealth manager to compartmentalise investments made by (or on behalf of) an investor to represent different savings goals, risk appetite and investment instructions (e.g. model portfolios). 
An Investor can have multiple pots for a financial product (e.g within the General Investment Account, one pot could be to target a house purchase goal whereas another pot could target savings for school fees etc.). Each pot consists of cash,  investment product holdings, both cash and investments or nothing (empty pot - pending investments). 
<!--Creating or updating a pot with a linked portfolio template - `portfolio_template_id`  will allow WealthOS to carry out actions such as automated investing based on portfolio, portfolio rebalancing etc. for a pot. 
-->
This end point also returns key information related to the pot (e.g. value, total holdings etc.) as well as transaction history for the pot.

### Current Holdings and Transaction History
#### Current Holding
* Cash : `investment_product_id` will be specified as `cash`. For cash holdings, `free_quantity` and `free_value` will return the cash that is settled and available, while `locked_quantity` and `locked_value`  returns the value of cash which is locked (i.e unsettled, ringfenced for a fee deduction etc.) and cannot be used.`total_quantity` and `total_value` will be the total of free and locked. 

* Investment Products : For investment product holdings,  `total_quantity`  return the total number of units held of an investment product within the pot, `locked-quantity` returns the total number of unit which are locked (e.g. ringfenced to be sold) and `free-quantity` returns number of units available for trading. Value of the holdings are calculated using latest available price. So the formula to calculate the value of the investment products holdings will be `quantity`*`price`.

#### Pending Transactions
* Cash : `type : pending`,`direction : in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet).

* Investment products : `type : pending`,`direction : in`(buy instruction) or `out` (sell instruction).

#### Archived Transactions (historical)

* Cash : `type = archived`, `direction= in` (if cash is inbound) or `out` (if cash is withdrawn - functionality not available yet) and `sub-type : "rejected" or "cancelled"`for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction.  

* Investment Products : `type = archived`, `direction= in` (buy instruction) or `out` (sell instruction) and `sub-type = "rejected"or "cancelled"` for a failed transaction, and `sub-type = "confirmed"or "settled"` for a successful transaction. 


### Available Operations

* [updatePot](#updatepot) - Update existing Pot details
* [createPot](#createpot) - Create new pot
* [getPot](#getpot) - Retrive existing pot from pot id
* [getPotHoldings](#getpotholdings) - Get current holdings of a pot
* [getPotTransactions](#getpottransactions) - Get pending & past transactions of a pot
* [getPotValue](#getpotvalue) - Get current value of a pot
* [getPots](#getpots) - Get all pots for an investor
* [getTotalPotHoldings](#gettotalpotholdings) - Get total holdings of an Investor
* [getTotalPotValue](#gettotalpotvalue) - Get total value of all pots of an investor

## updatePot

Update an existing Pot. WealthOS will update only the fields sent in the payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePotRequest;
import org.openapis.openapi.models.operations.UpdatePotResponse;
import org.openapis.openapi.models.operations.UpdatePotSecurity;
import org.openapis.openapi.models.operations.UpdatePotUpdateRequestBodyForPot;
import org.openapis.openapi.models.operations.UpdatePotUpdateRequestBodyForPotStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePotRequest req = new UpdatePotRequest(                new UpdatePotUpdateRequestBodyForPot(1L) {{
                                custodianAccountReference = "nulla";
                                custodianClientRef = "excepturi";
                                custodianId = "voluptatibus";
                                portfolioTemplateId = "nostrum";
                                potName = "sapiente";
                                regulatorAdvisorId = "quisquam";
                                status = UpdatePotUpdateRequestBodyForPotStatusEnum.INACTIVE;
                            }};, "ea", "impedit");            

            UpdatePotResponse res = sdk.potsHoldingsAndTransactions.updatePot(req, new UpdatePotSecurity("corporis") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updatePot200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPot

Create new pot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePotRequest;
import org.openapis.openapi.models.operations.CreatePotRequestBodyInput;
import org.openapis.openapi.models.operations.CreatePotRequestBodyPotCurrencyEnum;
import org.openapis.openapi.models.operations.CreatePotRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreatePotResponse;
import org.openapis.openapi.models.operations.CreatePotSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePotRequest req = new CreatePotRequest("veniam") {{
                requestBody = new CreatePotRequestBodyInput("aliquid",                 new String[]{{
                                    add("string"),
                                }}, "magnam", "6c3e250f-b008-4c42-a141-aac366c8dd6b", CreatePotRequestBodyStatusEnum.ACTIVE) {{
                    custodianAccountReference = "tempora";
                    custodianClientRef = "numquam";
                    custodianId = "explicabo";
                    portfolioTemplateId = "provident";
                    potCurrency = CreatePotRequestBodyPotCurrencyEnum.GBP;
                    regulatorAdvisorId = "molestiae";
                }};;
            }};            

            CreatePotResponse res = sdk.potsHoldingsAndTransactions.createPot(req, new CreatePotSecurity("magnam") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createPot201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPot

Retrive existing pot from pot id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPotRequest;
import org.openapis.openapi.models.operations.GetPotResponse;
import org.openapis.openapi.models.operations.GetPotSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPotRequest req = new GetPotRequest("odio", "eius");            

            GetPotResponse res = sdk.potsHoldingsAndTransactions.getPot(req, new GetPotSecurity("esse") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPot200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPotHoldings

Get a breakdown of all the holdings of a pot (cash and investment product holdings)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPotHoldingsRequest;
import org.openapis.openapi.models.operations.GetPotHoldingsResponse;
import org.openapis.openapi.models.operations.GetPotHoldingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPotHoldingsRequest req = new GetPotHoldingsRequest("esse", "rem");            

            GetPotHoldingsResponse res = sdk.potsHoldingsAndTransactions.getPotHoldings(req, new GetPotHoldingsSecurity("fuga") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPotHoldings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPotTransactions

Get a list of pending and archived transactions of the pot by date range. Only last 1000 records will be recieved if the result contain more that 1000 transactions. In that case, the pagination should be used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPotTransactionsRequest;
import org.openapis.openapi.models.operations.GetPotTransactionsResponse;
import org.openapis.openapi.models.operations.GetPotTransactionsSecurity;
import org.openapis.openapi.models.operations.GetPotTransactionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPotTransactionsRequest req = new GetPotTransactionsRequest("reprehenderit", "quidem") {{
                from = "fugiat";
                pageNumber = "ut";
                pageSize = "eum";
                sort = GetPotTransactionsSortEnum.ASC;
                subTransactionType = "assumenda";
                to = "eos";
            }};            

            GetPotTransactionsResponse res = sdk.potsHoldingsAndTransactions.getPotTransactions(req, new GetPotTransactionsSecurity("praesentium") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPotTransactions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPotValue

Get the current value of the pot (including cash and investment product holdings)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPotValueRequest;
import org.openapis.openapi.models.operations.GetPotValueResponse;
import org.openapis.openapi.models.operations.GetPotValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPotValueRequest req = new GetPotValueRequest("quisquam", "veritatis");            

            GetPotValueResponse res = sdk.potsHoldingsAndTransactions.getPotValue(req, new GetPotValueSecurity("ipsa") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPotValue200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPots

Get all Investment Pots of the investor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPotsRequest;
import org.openapis.openapi.models.operations.GetPotsResponse;
import org.openapis.openapi.models.operations.GetPotsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPotsRequest req = new GetPotsRequest("id", "quidem") {{
                financialProductId = "neque";
            }};            

            GetPotsResponse res = sdk.potsHoldingsAndTransactions.getPots(req, new GetPotsSecurity("quo") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPots200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTotalPotHoldings

Get a breakdown of all the holdings(cash and investment product holdings) of an investor organised by the pot they belong to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTotalPotHoldingsRequest;
import org.openapis.openapi.models.operations.GetTotalPotHoldingsResponse;
import org.openapis.openapi.models.operations.GetTotalPotHoldingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTotalPotHoldingsRequest req = new GetTotalPotHoldingsRequest("illum", "quo");            

            GetTotalPotHoldingsResponse res = sdk.potsHoldingsAndTransactions.getTotalPotHoldings(req, new GetTotalPotHoldingsSecurity("fuga") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTotalPotHoldings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTotalPotValue

Get the current value of all the investor’s pots broken down by currency (including cash and investment product holdings)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTotalPotValueRequest;
import org.openapis.openapi.models.operations.GetTotalPotValueResponse;
import org.openapis.openapi.models.operations.GetTotalPotValueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTotalPotValueRequest req = new GetTotalPotValueRequest("eius", "eos");            

            GetTotalPotValueResponse res = sdk.potsHoldingsAndTransactions.getTotalPotValue(req, new GetTotalPotValueSecurity("voluptas") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTotalPotValue200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
