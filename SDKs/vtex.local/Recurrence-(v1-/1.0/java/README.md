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
import org.openapis.openapi.models.operations.AddrecurrenceitemRequest;
import org.openapis.openapi.models.operations.AddrecurrenceitemResponse;
import org.openapis.openapi.models.shared.AddrecurrenceitemRequest;
import org.openapis.openapi.models.shared.Frequency;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddrecurrenceitemRequest req = new AddrecurrenceitemRequest() {{
                accept = "application/json";
                contentType = "application/json";
                requestBody = new org.openapis.openapi.models.shared.AddrecurrenceitemRequest[]{{
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 592845;
                            periodicity = "distinctio";
                        }};
                        quantity = 844266;
                        seller = "unde";
                        shippingAddressId = "nulla";
                        sku = "corrupti";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 847252;
                            periodicity = "vel";
                        }};
                        quantity = 623564;
                        seller = "deserunt";
                        shippingAddressId = "suscipit";
                        sku = "iure";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 297534;
                            periodicity = "debitis";
                        }};
                        quantity = 56713;
                        seller = "delectus";
                        shippingAddressId = "tempora";
                        sku = "suscipit";
                    }}),
                }};
                recurrenceId = "molestiae";
            }}            

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
## Available Resources and Operations


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
