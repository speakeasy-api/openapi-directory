# rates

## Overview

Wealth Managers require various types of rates (e.g. spot fx rates, interest rates) for valuations, currency conversations etc. 

The Rates endpoint returns all the configured rate types along with the latest available rate. 

### Available Operations

* [getRates](#getrates) - Get Configured Rates

## getRates

Returns rate details of the requested rate type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRatesRateTypeEnum;
import org.openapis.openapi.models.operations.GetRatesRequest;
import org.openapis.openapi.models.operations.GetRatesResponse;
import org.openapis.openapi.models.operations.GetRatesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRatesRequest req = new GetRatesRequest(GetRatesRateTypeEnum.FX_SPOT, "ab");            

            GetRatesResponse res = sdk.rates.getRates(req, new GetRatesSecurity("cupiditate") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getRates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
