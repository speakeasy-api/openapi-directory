# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddrecurrenceitemPathParams;
import org.openapis.openapi.models.operations.AddrecurrenceitemHeaders;
import org.openapis.openapi.models.operations.AddrecurrenceitemRequest;
import org.openapis.openapi.models.operations.AddrecurrenceitemResponse;
import org.openapis.openapi.models.shared.AddrecurrenceitemRequest;
import org.openapis.openapi.models.shared.Frequency;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddrecurrenceitemRequest req = new AddrecurrenceitemRequest() {{
                pathParams = new AddrecurrenceitemPathParams() {{
                    recurrenceId = "corrupti";
                }};
                headers = new AddrecurrenceitemHeaders() {{
                    accept = "application/json";
                    contentType = "application/json";
                }};
                request = new org.openapis.openapi.models.shared.AddrecurrenceitemRequest[]{{
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 715190;
                            periodicity = "quibusdam";
                        }};
                        quantity = 602763;
                        seller = "nulla";
                        shippingAddressId = "corrupti";
                        sku = "illum";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 423655;
                            periodicity = "error";
                        }};
                        quantity = 645894;
                        seller = "suscipit";
                        shippingAddressId = "iure";
                        sku = "magnam";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 891773;
                            periodicity = "ipsa";
                        }};
                        quantity = 963663;
                        seller = "tempora";
                        shippingAddressId = "suscipit";
                        sku = "molestiae";
                    }}),
                }};
            }};            

            AddrecurrenceitemResponse res = sdk.miscellaneous.addrecurrenceitem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### miscellaneous

* `addrecurrenceitem` - Add Subscription item
* `getRecurrencebyemail` - Get Subscriptions
* `getRecurrencebyrecurrenceId` - Get Subscription by recurrenceId
* `getpaymentaccounts` - Get payment accounts
* `getrecurrenceaddresses` - Get Subscription addresses
* `getrecurrencesettings` - Get Subscription settings
* `getselfrecurrence` - Get self Subscription
* `reindexrecurrence` - Reindex Subscription
* `updatepartialrecurrence` - Update partial Subscription
* `updaterecurrence` - Update Subscription
* `updaterecurrencesettings` - Update Subscription settings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
