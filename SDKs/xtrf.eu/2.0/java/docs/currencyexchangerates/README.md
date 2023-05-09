# currencyExchangeRates

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [createExchangeRate](#createexchangerate) - Adding currency exchange rates.
* [getByIsoCode](#getbyisocode) - Returns currency exchange rates.

## createExchangeRate

Adding currency exchange rates via API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExchangeRateRequest;
import org.openapis.openapi.models.operations.CreateExchangeRateResponse;
import org.openapis.openapi.models.shared.CurrencyHistoryDTO;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExchangeRateRequest req = new CreateExchangeRateRequest(                new CurrencyHistoryDTO() {{
                                dateFrom = new TimeDTO() {{
                                    value = 621693L;
                                }};;
                                exchangeRate = "blanditiis";
                                lastModification = new TimeDTO() {{
                                    value = 379356L;
                                }};;
                                originDetails = "repudiandae";
                                publicationDate = new TimeDTO() {{
                                    value = 542129L;
                                }};;
                            }};, "atque");            

            CreateExchangeRateResponse res = sdk.currencyExchangeRates.createExchangeRate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getByIsoCode

Returns currency exchange rates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByIsoCodeRequest;
import org.openapis.openapi.models.operations.GetByIsoCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByIsoCodeRequest req = new GetByIsoCodeRequest("sunt");            

            GetByIsoCodeResponse res = sdk.currencyExchangeRates.getByIsoCode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
