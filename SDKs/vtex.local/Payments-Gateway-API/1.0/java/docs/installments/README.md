# installments

## Overview

We provided payment methods configuration that allow our sellers to configure installment options and from that configuration we generate an installment service.

### Available Operations

* [installmentsoptions](#installmentsoptions) - Installments options

## installmentsoptions

Returns the best installment options according to the informed params.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstallmentsoptionsRequest;
import org.openapis.openapi.models.operations.InstallmentsoptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "aliquid") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InstallmentsoptionsRequest req = new InstallmentsoptionsRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", 10) {{
                requestPaymentDetails0Bin = 411111;
                requestPaymentDetails0Id = 2;
                requestPaymentDetails0Value = 10;
                requestSalesChannel = 1;
            }};            

            InstallmentsoptionsResponse res = sdk.installments.installmentsoptions(req);

            if (res.validRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
