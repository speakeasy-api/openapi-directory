# investmentProductTransactions

## Overview

The Transactions endpoint allows you to buy or sell Investment Products. The endpoint supports single or bulk transactions. 

A transaction to buy or sell an investment product can be specified in units (i.e. buy/sell n number of units of the investment product) or as a value (i.e. buy/sell up to n value of the investment product).


### Available Operations

* [executeBuyTrasaction](#executebuytrasaction) - Execute Buy Transaction(s)
* [executeSellTrasaction](#executeselltrasaction) - Execute Sell Transaction(s)

## executeBuyTrasaction

Invoke execution of one or more buy transactions as defined in the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteBuyTrasactionBuyTransactionRequest;
import org.openapis.openapi.models.operations.ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell;
import org.openapis.openapi.models.operations.ExecuteBuyTrasactionRequest;
import org.openapis.openapi.models.operations.ExecuteBuyTrasactionResponse;
import org.openapis.openapi.models.operations.ExecuteBuyTrasactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExecuteBuyTrasactionRequest req = new ExecuteBuyTrasactionRequest("cum") {{
                requestBody = new ExecuteBuyTrasactionBuyTransactionRequest(                new org.openapis.openapi.models.operations.ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell[]{{
                                    add(new ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell("perferendis") {{
                                        clientOrderId = "cl-02456s42sd2";
                                        investmentProductId = "ipsum";
                                        quantity = "excepturi";
                                        value = "aspernatur";
                                    }}),
                                    add(new ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell("iste") {{
                                        clientOrderId = "cl-02456s42sd2";
                                        investmentProductId = "ad";
                                        quantity = "natus";
                                        value = "sed";
                                    }}),
                                }}, "dolor", "96fea759-6eb1-40fa-aa23-52c5955907af");;
            }};            

            ExecuteBuyTrasactionResponse res = sdk.investmentProductTransactions.executeBuyTrasaction(req, new ExecuteBuyTrasactionSecurity("sapiente") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.executeBuyTrasaction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeSellTrasaction

Invoke execution of one or more Sell transactions as defined in the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteSellTrasactionRequest;
import org.openapis.openapi.models.operations.ExecuteSellTrasactionResponse;
import org.openapis.openapi.models.operations.ExecuteSellTrasactionSecurity;
import org.openapis.openapi.models.operations.ExecuteSellTrasactionSellTransactionRequest;
import org.openapis.openapi.models.operations.ExecuteSellTrasactionSellTransactionRequestInstructionBuySell;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExecuteSellTrasactionRequest req = new ExecuteSellTrasactionRequest("architecto") {{
                requestBody = new ExecuteSellTrasactionSellTransactionRequest("mollitia", "3a2fa946-7739-4251-aa52-c3f5ad019da1",                 new org.openapis.openapi.models.operations.ExecuteSellTrasactionSellTransactionRequestInstructionBuySell[]{{
                                    add(new ExecuteSellTrasactionSellTransactionRequestInstructionBuySell("praesentium") {{
                                        clientOrderId = "cl-02456s42sd2";
                                        investmentProductId = "voluptatibus";
                                        quantity = "vero";
                                        value = "nihil";
                                    }}),
                                    add(new ExecuteSellTrasactionSellTransactionRequestInstructionBuySell("voluptate") {{
                                        clientOrderId = "cl-02456s42sd2";
                                        investmentProductId = "voluptatibus";
                                        quantity = "ipsa";
                                        value = "omnis";
                                    }}),
                                    add(new ExecuteSellTrasactionSellTransactionRequestInstructionBuySell("reprehenderit") {{
                                        clientOrderId = "cl-02456s42sd2";
                                        investmentProductId = "cum";
                                        quantity = "perferendis";
                                        value = "doloremque";
                                    }}),
                                    add(new ExecuteSellTrasactionSellTransactionRequestInstructionBuySell("corporis") {{
                                        clientOrderId = "cl-02456s42sd2";
                                        investmentProductId = "ut";
                                        quantity = "maiores";
                                        value = "dicta";
                                    }}),
                                }});;
            }};            

            ExecuteSellTrasactionResponse res = sdk.investmentProductTransactions.executeSellTrasaction(req, new ExecuteSellTrasactionSecurity("dolore") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.executeSellTrasaction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
