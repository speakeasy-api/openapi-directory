# transactionFlow

## Overview

After one transaction is authorized, there is remaining to do some calls in order to complete a transaction and its payments. We explain the settle process, cancel authorized payments process, and refund process by using examples.

### Available Operations

* [cancelthetransaction](#cancelthetransaction) - Cancel the transaction
* [refundthetransaction](#refundthetransaction) - Refund the transaction
* [settlethetransaction](#settlethetransaction) - Settle the transaction

## cancelthetransaction

Cancel's transaction that was previously approved, but not settled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelthetransactionRequest;
import org.openapis.openapi.models.operations.CancelthetransactionResponse;
import org.openapis.openapi.models.shared.CancelthetransactionRequest;
import org.openapis.openapi.models.shared.CancelthetransactionRequestMinicart;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "necessitatibus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelthetransactionRequest req = new CancelthetransactionRequest("application/json",                 new CancelthetransactionRequest(572252) {{
                                minicart = new CancelthetransactionRequestMinicart() {{
                                    freight = 638921;
                                    items = new Object[]{{
                                        add("debitis"),
                                    }};
                                    tax = 952749;
                                }};;
                            }};, "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "dolorum");            

            CancelthetransactionResponse res = sdk.transactionFlow.cancelthetransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refundthetransaction

Refunds transaction's value that was previously settled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefundthetransactionRequest;
import org.openapis.openapi.models.operations.RefundthetransactionResponse;
import org.openapis.openapi.models.shared.RefundthetransactionRequest;
import org.openapis.openapi.models.shared.RefundthetransactionRequestMinicart;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "in") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RefundthetransactionRequest req = new RefundthetransactionRequest("application/json", "application/json",                 new RefundthetransactionRequest(846409) {{
                                minicart = new RefundthetransactionRequestMinicart() {{
                                    freight = 978571;
                                    items = new Object[]{{
                                        add("dicta"),
                                        add("magnam"),
                                        add("cumque"),
                                    }};
                                    tax = 813798;
                                }};;
                            }};, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "ea");            

            RefundthetransactionResponse res = sdk.transactionFlow.refundthetransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## settlethetransaction

Settles transaction's value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SettlethetransactionRequest;
import org.openapis.openapi.models.operations.SettlethetransactionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettlethetransactionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "laborum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SettlethetransactionRequest req = new SettlethetransactionRequest("application/json", "application/json",                 new SettlethetransactionRequest(881104);, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "non");            

            SettlethetransactionResponse res = sdk.transactionFlow.settlethetransaction(req);

            if (res.settleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
