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
import org.openapis.openapi.models.operations.AddrecurrenceitemRequest;
import org.openapis.openapi.models.operations.AddrecurrenceitemResponse;
import org.openapis.openapi.models.shared.AddrecurrenceitemRequest;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddrecurrenceitemRequest req = new AddrecurrenceitemRequest("application/json", "application/json",                 new org.openapis.openapi.models.shared.AddrecurrenceitemRequest[]{{
                                add(new AddrecurrenceitemRequest(                new Frequency(384382, "iure");, 297534, "debitis", "ipsa", "delectus") {{
                                    frequency = new Frequency(857946, "corrupti") {{
                                        interval = 844266;
                                        periodicity = "unde";
                                    }};
                                    quantity = 847252;
                                    seller = "vel";
                                    shippingAddressId = "error";
                                    sku = "deserunt";
                                }}),
                                add(new AddrecurrenceitemRequest(                new Frequency(392785, "recusandae");, 836079, "ab", "quis", "veritatis") {{
                                    frequency = new Frequency(477665, "minus") {{
                                        interval = 272656;
                                        periodicity = "suscipit";
                                    }};
                                    quantity = 812169;
                                    seller = "voluptatum";
                                    shippingAddressId = "iusto";
                                    sku = "excepturi";
                                }}),
                                add(new AddrecurrenceitemRequest(                new Frequency(870088, "maiores");, 473608, "quod", "quod", "esse") {{
                                    frequency = new Frequency(368241, "repellendus") {{
                                        interval = 648172;
                                        periodicity = "perferendis";
                                    }};
                                    quantity = 957156;
                                    seller = "quo";
                                    shippingAddressId = "odit";
                                    sku = "at";
                                }}),
                            }}, "totam");            

            AddrecurrenceitemResponse res = sdk.miscellaneous.addrecurrenceitem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [miscellaneous](docs/miscellaneous/README.md)

* [addrecurrenceitem](docs/miscellaneous/README.md#addrecurrenceitem) - Add Subscription item
* [getRecurrencebyemail](docs/miscellaneous/README.md#getrecurrencebyemail) - Get Subscriptions
* [getRecurrencebyrecurrenceId](docs/miscellaneous/README.md#getrecurrencebyrecurrenceid) - Get Subscription by recurrenceId
* [getpaymentaccounts](docs/miscellaneous/README.md#getpaymentaccounts) - Get payment accounts
* [getrecurrenceaddresses](docs/miscellaneous/README.md#getrecurrenceaddresses) - Get Subscription addresses
* [getrecurrencesettings](docs/miscellaneous/README.md#getrecurrencesettings) - Get Subscription settings
* [getselfrecurrence](docs/miscellaneous/README.md#getselfrecurrence) - Get self Subscription
* [reindexrecurrence](docs/miscellaneous/README.md#reindexrecurrence) - Reindex Subscription
* [updatepartialrecurrence](docs/miscellaneous/README.md#updatepartialrecurrence) - Update partial Subscription
* [updaterecurrence](docs/miscellaneous/README.md#updaterecurrence) - Update Subscription
* [updaterecurrencesettings](docs/miscellaneous/README.md#updaterecurrencesettings) - Update Subscription settings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
